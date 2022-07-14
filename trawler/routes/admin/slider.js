const Router = require("koa-router");

const router = new Router();
router.prefix("/slider");

const { getSliderDatas, getSlider, addSlider, editSlider, removeSlider } = require("../../controllers/admin/slider");

router.get("/", getSliderDatas);
router.get("/:id", getSlider);
router.put("/:id", editSlider);
router.post("/", addSlider);
router.delete("/:id", removeSlider);

module.exports = router;