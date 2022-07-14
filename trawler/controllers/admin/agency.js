const { findAgencyInfo, updateAgencyInfo } = require("../../services/agency");

class Agency {
    async getAgency(ctx) {
        console.log(1);
        const result = await findAgencyInfo();
        ctx.body = {
            code: 0,
            msg: "获取机构展示信息成功",
            result,
        };
    }

    async editAgency(ctx) {
        const data = ctx.request.body;
        const result = await updateAgencyInfo(data);

        ctx.body = {
            code: 0,
            msg: "修改机构信息成功",
            result,
        };
    }
}

module.exports = new Agency();