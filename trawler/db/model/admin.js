const admin = require("../../controllers/admin");
const seq = require("../connection/mysql"),
    { INT, STRING } = require("../types");

const Admin = seq.define(
    "Admin", {
        username: {
            type: STRING,
            unique: true,
            allowNull: false,
            comment: "管理员 用户名",
        },
        password: {
            type: STRING,
            allowNull: false,
            comment: "管理员 密码",
        },
    }, {
        timestamps: true,
        paranoid: true,
    }
);

Admin.sync();
module.exports = Admin;