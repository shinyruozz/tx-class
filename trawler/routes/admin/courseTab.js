const Router = require("koa-router");

const {
    getCourseTabs,
    getCourseTab,
    addCourseTab,
    editCourseTab,
    removeCourseTab,
} = require("../../controllers/admin/courseTab");
const router = new Router({ prefix: "/course_tab" });

router.get("/", getCourseTabs);
router.get("/:id", getCourseTab);
router.put("/:id", editCourseTab);
router.delete("/:id", removeCourseTab);
router.post("/", addCourseTab);

module.exports = router;