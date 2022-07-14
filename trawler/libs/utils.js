const cp = require("child_process");
const path = require("path");
const crypto = require("crypto");
const fs = require("fs");
const nanoId = require("nanoid");
const Qiniu = require("qiniu");
const {
    keys: { AK, SK },
} = require("../config/qiniu.config");

const { cryptoSecret } = require("../config/conf");

function startProcess(options) {
    const scriptUrl = path.resolve(__dirname, options.path);
    //开启子进程运行
    const child = cp.fork(scriptUrl, []);

    let invoked = false;

    child.on("message", (result) => {
        options.message(result);
    });

    child.on("exit", (code) => {
        if (invoked) return;
        invoked = true;
        options.exit(code);
    });

    child.on("error", (err) => {
        if (invoked) return;
        invoked = true;
        options.error(err);
    });
}

// 上传七牛云
function qiniuUpload(options) {
    const { url, bucket } = options;
    const mac = new Qiniu.auth.digest.Mac(AK, SK),
        conf = new Qiniu.conf.Config(),
        client = new Qiniu.rs.BucketManager(mac, conf),
        key = nanoId() + options.ext;

    return new Promise((resolve, reject) => {
        client.fetch(url, bucket, key, (error, result, info) => {
            // console.log(error, result, info);
            if (error) {
                reject(error);
            }
            // console.log(result);
            if (info.statusCode == 200) {
                resolve({ key });
            } else {
                resolve(info);
            }
        });
    });
}

function createCid(lengh) {
    return Number(
        Math.random()
        .toString()
        .substring(3, 3 + lengh)
    );
}

function qiuiuLocalUpload(options) {
    const { bucket, fileName, ext } = options;
    const mac = new Qiniu.auth.digest.Mac(AK, SK),
        conf = new Qiniu.conf.Config(),
        key = nanoId() + options.ext,
        putExtra = new Qiniu.form_up.PutExtra(),
        localFile = path.join(__dirname, "../upload", fileName);

    const formUploader = new Qiniu.form_up.FormUploader(conf);
    //上传凭据
    const putPolicy = new Qiniu.rs.PutPolicy({ scope: bucket });
    const uploadToken = putPolicy.uploadToken(mac);
    // 文件上传
    return new Promise((resolve, reject) => {
        formUploader.putFile(uploadToken, key, localFile, putExtra, function(error, result, info) {
            if (error) {
                reject(error);
                return;
            }
            if (info.statusCode == 200) {
                resolve({ key });
                //   var imageSrc = respBody.key; // 这里可以拼接你访问的域名
                //   res.end(JSON.stringify({status:'200',msg:'上传成功',imageUrl:imageSrc}));
            } else {
                resolve(info);
            }
            // 上传之后删除本地文件
        });
    });
}
//加密
function makeCrypto(str) {
    const _md5 = crypto.createHash("md5"),
        content = `str=${str}&&secret=${cryptoSecret}`;

    return _md5.update(content).digest("hex");
}

function trimSpace(str) {
    return str.replace(/\s/g, "");
}

module.exports = {
    startProcess,
    qiniuUpload,
    makeCrypto,
    trimSpace,
    qiuiuLocalUpload,
    createCid,
};