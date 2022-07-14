const { isENV } = require("../config/env.config");

module.exports = {
    MYSQL_CONF: {
        conf: ["txclass", "root", "admin"],
        base: {
            host: isENV ? "localhost" : "xxx",
            dialect: "mysql",
        },
    },
    REDIS_CONF: ["6379", isENV ? "localhost" : "xxx"],
};