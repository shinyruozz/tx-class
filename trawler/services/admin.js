const adminModel = require("../db/model/admin");

class AdminService {
    async addAdmin(adminInfo) {
        // const { username } = adminInfo;
        return await adminModel.create(adminInfo);
        // const res = await adminModel.findOne({ where: { username } });
        // if (res) {
        //     return await adminModel.update(adminInfo, { where: { username } });
        // } else {
        //     return await adminModel.create(adminInfo);
        // }
    }

    async findAdmin(username) {
        return await adminModel.findOne({ where: { username } });
    }

    async login(username, password) {
        const res = await adminModel.findOne({ where: { username } });
        if (!res) {
            return {
                code: 10005,
            };
        }

        const dbPassword = res.get("password");

        if (password == dbPassword) {
            return {
                code: 0,
                data: res,
            };
        } else {
            return {
                code: 10003,
                data: {
                    id: res.id,
                    username: res.username,
                },
            };
        }
    }
}

module.exports = new AdminService();