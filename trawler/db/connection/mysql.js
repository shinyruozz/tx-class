const { Sequelize } = require("sequelize");

const { MYSQL_CONF } = require("../../config/db.config");

const seq = new Sequelize(...MYSQL_CONF.conf, MYSQL_CONF.base);

seq.authenticate()
    .then((res) => {
        console.log("mysql conection success");
    })
    .catch((e) => {
        console.log("err", e);
    });

module.exports = seq;