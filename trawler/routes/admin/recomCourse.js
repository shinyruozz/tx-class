const Router = require("koa-router");

const {
    getRecomCourseData,
    getRecomCourse,
    editRecomCourse,
    removeRecomCourse,
    addRecomCourse,
} = require("../../controllers/admin/recomCourse");
const router = new Router({ prefix: "/recom_course" });

router.get("/", getRecomCourseData);
router.get("/:id", getRecomCourse);
router.put("/:id", editRecomCourse);
router.delete("/:id", removeRecomCourse);
router.post("/", addRecomCourse);

module.exports = router;