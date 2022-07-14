const Router = require("koa-router");

const { getCourseDatas, getCourseData, editCourseData, addCourseData } = require("../../controllers/admin/course");
const router = new Router({ prefix: "/course" });
//获取分类课程
router.get("/", getCourseDatas);
//获取id课程
router.get("/:id", getCourseData);
router.put("/:id", editCourseData);
// 删除课程
router.delete("/:id", editCourseData);
//添加课程
router.post("/", addCourseData);

module.exports = router;