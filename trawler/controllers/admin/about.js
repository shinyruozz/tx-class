const { findAboutInfo, editAbout } = require("../../services/about");

class About {
    async getAboutData(ctx) {
        const res = await findAboutInfo();
        console.log(res);
        if (res) {
            ctx.body = {
                code: 0,
                msg: "获取关于数据成功",
                result: res,
            };
        } else {
            ctx.body = {
                code: 90001,
                msg: "获取关于数据失败",
                result: "",
            };
        }
    }

    async editAboutData(ctx) {
        const updateData = ctx.request.body;
        const res = await editAbout(updateData);
        ctx.body = {
            code: 0,
            msg: "修改关于我们数据成功",
            result: res,
        };
    }
}

module.exports = new About();