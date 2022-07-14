const redis = require("redis");
const { REDIS_CONF } = require("../../config/db.config");

const red = redis.createClient(REDIS_CONF);

red.on("error", (err) => {
    console.error("Redis error:", err);
});

module.exports = red;