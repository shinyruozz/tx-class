const Router = require("koa-router");

const { getStudents, editStudentState } = require("../../controllers/admin/student");
const router = new Router({ prefix: "/student" });

router.get("/", getStudents);
router.put("/:id", editStudentState);
// router.delete("/:id", removeStudent);

module.exports = router;