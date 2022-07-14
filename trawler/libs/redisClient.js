const red = require("../db/connection/redis");

function redisSet(key, value, timeout = 60 * 60) {
    if (typeof value == "object") {
        value = JSON.stringify(value);
    }
    red.set(key, value);
    red.expire(key, timeout);
}

function redisGet(key) {
    return new Promise((resolve, reject) => {
        red.get(key, (err, value) => {
            if (err) {
                reject(err);
                return;
            }

            if (value == null) {
                resolve(null);
                return;
            }

            try {
                resolve(JSON.parse(value));
            } catch (e) {
                resolve(value);
            }
        });
    });
}
module.exports = {
    redisGet,
    redisSet,
};