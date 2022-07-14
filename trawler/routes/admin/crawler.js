const Router = require("koa-router");

const { getCrawlerList } = require("../../controllers/admin/crawler");
const router = new Router({ prefix: "/crawler" });

router.get("/", getCrawlerList);

module.exports = router;