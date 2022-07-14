const Router = require("koa-router");
const { createAdmin, loginAction, loginCheck, loginOut, upload } = require("../controllers/admin");

const adminCourse = require("./admin/course");
const adminCourseTab = require("./admin/courseTab");
const adminCollection = require("./admin/collection");
const adminAgency = require("./admin/agency");
const adminRecomCourse = require("./admin/recomCourse");
const adminTeacher = require("./admin/teacher");
const adminStudent = require("./admin/student");
const adminSlider = require("./admin/slider");
const adminCrawler = require("./admin/crawler");
const adminAbout = require("./admin/about");
const router = new Router({ prefix: "/admin" });

//创建用户路由
router.post("/create_admin", createAdmin);

//管理员登录
router.post("/login", loginAction);
//登录校验
router.get("/login_check", loginCheck);
//推出登录
router.get("/login_out", loginOut);

router.post("/upload", upload);

router.use(adminCourse.routes(), adminCourse.allowedMethods());
router.use(adminCourseTab.routes(), adminCourseTab.allowedMethods());
router.use(adminCollection.routes(), adminCollection.allowedMethods());
router.use(adminAgency.routes(), adminAgency.allowedMethods());
router.use(adminRecomCourse.routes(), adminRecomCourse.allowedMethods());
router.use(adminTeacher.routes(), adminTeacher.allowedMethods());
router.use(adminStudent.routes(), adminStudent.allowedMethods());
router.use(adminSlider.routes(), adminSlider.allowedMethods());
router.use(adminCrawler.routes(), adminCrawler.allowedMethods());
router.use(adminAbout.routes(), adminAbout.allowedMethods());

module.exports = router;