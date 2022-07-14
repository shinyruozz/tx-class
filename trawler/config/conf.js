const { REDIS_CONF } = require("./db.config");
const { isENV } = require("./env.config");
module.exports = {
    crawlerUrl: {
        home: "https://msiwei.ke.qq.com/",
        course: "https://msiwei.ke.qq.com/#category=-1&tab=1",
        teacher: "https://msiwei.ke.qq.com/#category=-1&tab=2",
        about: "https://msiwei.ke.qq.com/#category=-1&tab=3",
    },
    sessionInfo: {
        key: "1#F%^GG.66NNB_+~?46", //加密cookies key
        name: "tx_class.sid", //cookies name
        prefix: "tx_class.sess",
    },
    cookiesInfo: {
        path: "/", // 作用域
        httpOnly: true, // 不可修改
        maxAge: 24 * 60 * 60 * 1000, // 过期时间
    },
    redisInfo: {
        all: REDIS_CONF[1] + ":" + REDIS_CONF[0],
    },
    cryptoSecret: "1%njih/*-1`dsalv47niQQSD.6A5",
    local: isENV ? "http://localhost:3000/" : "xxx",
};