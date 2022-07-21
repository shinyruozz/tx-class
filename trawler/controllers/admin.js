const path = require("path");
const fs = require("fs");
const { makeCrypto, trimSpace, qiuiuLocalUpload } = require("../libs/utils");
const { addAdmin, findAdmin, login } = require("../services/admin");
const { LOGIN, OTHER } = require("../config/error");
const { buckets } = require("../config/qiniu.config");

class AdminController {
    async createAdmin(ctx) {
        const adminInfo = ctx.request.body;

        const findRes = await findAdmin(adminInfo.username);

        if (findRes) {
            return ctx.app.emit("error", LOGIN.adminExistErr, ctx);
        }

        adminInfo.password = makeCrypto(adminInfo.password);

        const res = await addAdmin(adminInfo);

        ctx.body = res;
    }

    async loginAction(ctx, next) {
            console.log(454678797);
            let { username, password } = ctx.request.body;

            username = trimSpace(username);
            //数据校验
            if (!username || !password) {
                ctx.app.emit("error", LOGIN.verifyLackErr, ctx);
                return;
            } else {
                if (!(username.length >= 2 && username.length <= 8) || !(password.length >= 6 && password.length <= 18)) {
                    console.log(username.length, password.length);
                    ctx.app.emit("error", LOGIN.paramsFormatErr, ctx);
                    return;
                }
            }

            const res = await login(username, makeCrypto(password));
            //错误校验
            if (res.code == 10005) {
                ctx.app.emit("error", LOGIN.adminNotExistErr, ctx);
                return;
            } else if (res.code == 10003) {
                ctx.app.emit("error", LOGIN.verifyAdminInfoErr, ctx);
                return;
            }

            //登录成功
            ctx.session.userInfo = res.data;
            console.log(ctx.session);
            ctx.body = {
                code: 0,
                msg: "登录成功",
                result: res.data,
            };
        }
        //登录cookies校验
    async loginCheck(ctx) {
        if (ctx.session && ctx.session.userInfo) {
            ctx.body = {
                code: 0,
                msg: "登录校验成功",
                result: "",
            };
            return;
        }

        ctx.app.emit("error", LOGIN.loginCheckErr, ctx);
    }

    async loginOut(ctx) {
        ctx.session.userInfo = "";
        ctx.body = {
            code: 0,
            msg: "退出登录成功",
            result: "",
        };
    }

    async upload(ctx) {
        try {
            const { newFilename, filepath } = ctx.request.files.file;
            const result = await qiuiuLocalUpload({
                fileName: newFilename,
                bucket: buckets.tx_class_imgs.bucket,
                ext: ".jpg",
            });
            console.log(result.key);
            if (newFilename) {
                ctx.body = {
                    code: 0,
                    msg: "上传图片成功",
                    result: result.key,
                };
                //删除图片
                fs.unlink(filepath, (res, err) => {
                    console.log(res, err);
                });
            } else {
                ctx.app.emit("error", OTHER.uploadImgErr, ctx);
            }
        } catch (e) {
            console.log(e);
            ctx.app.emit("error", OTHER.uploadImgErr, ctx);
        }
    }
}

module.exports = new AdminController();