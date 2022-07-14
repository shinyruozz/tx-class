const Router = require("koa-router");

const router = new Router({ prefix: "/about" });

const { getAboutData, editAboutData } = require("../../controllers/admin/about");

router.get("/", getAboutData);
router.put("/", editAboutData);

module.exports = router;