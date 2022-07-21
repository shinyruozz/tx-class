const { pages, agencyTabs, IMG_BASE_URL } = require("../config/page");

const navDatas = require("../config/nav.js");
const manualDatas = require("../config/manual.js");
const linkDatas = require("../config/link");

const qrImgUrl = require("../config/qr");

const { getSliderDatas } = require("../services/slider");
const { findAgencyInfo } = require("../services/agency");
const { findRecomCourses } = require("../services/recomCourse");
const { findStatusOnlineCollec } = require("../services/collection");
const { getByStarTeacher, findTeachers } = require("../services/teacher");
const { getByStateStudent } = require("../services/student");
const { getStateOnlineCourse, getFuzzySearch } = require("../services/course");
const { getStateOnlineCourseTab } = require("../services/courseTab");
const { findAboutInfo } = require("../services/about");

class Pc {
    async index(ctx) {
        const carousels = await getSliderDatas(); //轮播数据
        const agencyInfo = await findAgencyInfo(); // 机构信息数据
        const recomCourses = await findRecomCourses(); //推荐课程数据

        const collections = await Promise.all((await findStatusOnlineCollec()).map(async(item) => item)); //课程集合数据
        const starTeachers = await getByStarTeacher(); //明星老师
        const teachers = await findTeachers(); //全部老师
        const students = await getByStateStudent(); //优秀学生数据
        const courseDatas = await getStateOnlineCourse(); //课程数据
        const tabDatas = await getStateOnlineCourseTab(); //课程分类数据
        const aboutData = await findAboutInfo(); // 关于我们数据

        await ctx.render("index", {
            PAGE_CONF: pages.INDEX,
            IMG_BASE_URL,
            navDatas,
            manualDatas,
            linkDatas,
            qrImgUrl,
            carousels,
            agencyInfo,
            agencyTabs,
            recomCourses,
            collections,
            teachers,
            students,
            courseDatas,
            courseDataStr: JSON.stringify(courseDatas),
            tabDatas,
            starTeachers,
            aboutData,
        });
    }

    async list(ctx) {
        const kw = Buffer.from(ctx.params.kw).toString();
        const courseDatas = await getFuzzySearch(kw);
        const carousels = await getSliderDatas(); //轮播数据
        await ctx.render("list", {
            PAGE_CONF: pages.LIST,
            IMG_BASE_URL,
            navDatas,
            manualDatas,
            linkDatas,
            courseDatas,
            carousels,
            manualDatas,
            linkDatas,
        });
    }

    async error(ctx) {
        await ctx.render("error", {
            PAGE_CONF: pages.ERROR,
            IMG_BASE_URL,
            manualDatas,
            linkDatas,
        });
    }
}

module.exports = new Pc();