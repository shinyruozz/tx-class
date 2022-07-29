const Router = require("koa-router");

const { index, list, error } = require("../controllers/pc");
const router = new Router();

//pc端 接口

router.get("/", index);
router.get("/list/:kw?", list);

router.get("*", error);

module.exports = router;