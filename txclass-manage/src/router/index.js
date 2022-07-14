import Vue from "vue";
import VueRouter from "vue-router";
import loginService from "@/services/login";
import CourseEditAndAdd from "../views/Main/Course/CourseEditAndAdd";
import CourseList from "../views/Main/Course/CourseList";
import CourseTabList from "../views/Main/CourseTab/CourseTabList";
import CourseTabEditAndAdd from "../views/Main/CourseTab/CourseTabEditAndAdd.vue";
import AgencyEdit from "../views/Main/Agency/AgencyEdit";
import Agency from "../views/Main/Agency/Agency";
import RecomCourseEdit from "../views/Main/RecomCourse/RecomCourseEdit";
import RecomCourseList from "../views/Main/RecomCourse/RecomCourseList";
import CollectionEdit from "../views/Main/Collection/CollectionEdit";
import CollectionList from "../views/Main/Collection/CollectionList";
import TeacherList from "../views/Main/Teacher/TeacherList";
import TeacherEditAndAdd from "../views/Main/Teacher/TeacherEditAndAdd";
import Student from "../views/Main/Student/index";
import SliderEditAndAdd from "../views/Main/Slider/SliderEditAndAdd";
import SliderList from "../views/Main/Slider/SliderList";
import About from "../views/Main/About/index.vue";
import Crawler from "../views/Main/Crawler/index.vue";

import Login from "../views/Login.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "index",
        component: Home,
        // redirect: "/login",
        children: [
            //课程
            {
                path: "/course/edit/:id",
                name: "CourseEdit",
                component: CourseEditAndAdd,
                props: true,
            },
            {
                path: "/course/list",
                name: "CourseList",
                component: CourseList,
            },
            {
                path: "/course/add",
                name: "CourseAdd",
                component: CourseEditAndAdd,
            },
            //课程分类
            {
                path: "/course-tab",
                name: "CourseTab",
                redirect: "/course-tab/list",
            },
            {
                path: "/course-tab/list",
                name: "CourseTabList",
                component: CourseTabList,
            },
            {
                path: "/course-tab/add",
                name: "CourseTabAdd",
                component: CourseTabEditAndAdd,
            },
            {
                path: "/course-tab/edit/:id",
                name: "CourseTabEdit",
                component: CourseTabEditAndAdd,
                props: true,
            },
            //机构
            {
                path: "/agency/edit",
                name: "AgencyEdit",
                component: AgencyEdit,
            },
            {
                path: "/agency/",
                name: "Agency",
                component: Agency,
            },
            // 推荐课程
            {
                path: "/recom-course/edit/:id",
                name: "RecomCourseEdit",
                component: RecomCourseEdit,
                props: true,
            },

            {
                path: "/recom-course/list",
                name: "RecomCourseList",
                component: RecomCourseList,
            },
            //课程集合
            {
                path: "/collection/edit/:id",
                name: "CollectionEdit",
                component: CollectionEdit,
                props: true,
            },
            {
                path: "/collection/list",
                name: "CollectionList",
                component: CollectionList,
            },
            //老师
            {
                path: "/teacher/add",
                name: "TeacherAdd",
                component: TeacherEditAndAdd,
            },
            {
                path: "/teacher/list",
                name: "TeacherList",
                component: TeacherList,
            },
            {
                path: "/teacher/edit/:id",
                name: "TeacherEdit",
                component: TeacherEditAndAdd,
                props: true,
            },
            //学生
            {
                path: "/student",
                name: "Student",
                component: Student,
            },

            // 轮播图
            {
                path: "/slider/add",
                name: "SliderAdd",
                component: SliderEditAndAdd,
            },
            {
                path: "/slider/edit/:id",
                name: "SliderEdit",
                component: SliderEditAndAdd,
                props: true,
            },
            //关于
            {
                path: "/about",
                name: "About",
                component: About,
            },
            {
                path: "/slider/list",
                name: "SliderList",
                component: SliderList,
            },
            {
                path: "/crawler",
                name: "Crawler",
                component: Crawler,
            },
        ],
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach(async(to, from, next) => {
    if (to.path !== "/login") {
        const { code } = await loginService.loginCheck();
        if (code == 0) {
            next();
        } else {
            Vue.prototype.$message({
                message: "请先登录",
                type: "error",
            });
            next("login");
        }
    } else {
        next();
    }
});

export default router;