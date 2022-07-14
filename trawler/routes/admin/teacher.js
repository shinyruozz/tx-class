const Router = require("koa-router");

const { getTeachers, getTeacher, addTeacher, editTeacher, removeTeacher } = require("../../controllers/admin/teacher");
const router = new Router({ prefix: "/teacher" });

router.get("/", getTeachers);
router.get("/:id", getTeacher);
router.put("/:id", editTeacher);
router.delete("/:id", removeTeacher);
router.post("/", addTeacher);

module.exports = router;