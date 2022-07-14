const ENV = process.env.NODE_ENV;

module.exports = {
    isENV: ENV == "development",
    isPRD: ENV == "production",
};