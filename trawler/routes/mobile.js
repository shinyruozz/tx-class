const Router = require("koa-router");

const { getHomeDatas, getListDatas } = require("../controllers/mobile");

const router = new Router({
    prefix: "/m/api",
});

router.get("/home", getHomeDatas);
router.get("/list", getListDatas);

module.exports = router;