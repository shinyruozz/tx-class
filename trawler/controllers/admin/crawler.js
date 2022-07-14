const { crawlerList } = require("../../config/crawler");
class Crawler {
    async getCrawlerList(ctx) {
        ctx.body = {
            code: 0,
            msg: "获取爬虫列表信息成功",
            result: crawlerList,
        };
    }
}
module.exports = new Crawler();