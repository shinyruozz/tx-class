// const { pages, agencyTabs, IMG_BASE_URL } = require("../config/page");

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

class Mobile {
    async getHomeDatas(ctx) {
        const sliderDatas = await getSliderDatas();
        const recomCourseDatas = await findRecomCourses();
        const collectionDatas = await Promise.all((await findStatusOnlineCollec()).map(async(item) => item));
        const starTeacherDatas = await getByStarTeacher();
        const teacherDatas = await findTeachers();
        const studentDatas = await getByStateStudent();
        const courseTabDatas = await getStateOnlineCourseTab();
        const courseDatas = await getStateOnlineCourse();
        ctx.body = {
            code: 0,
            data: {
                sliderDatas,
                navDatas,
                recomCourseDatas,
                collectionDatas,
                teacherDatas,
                linkDatas,
                studentDatas,
                courseTabDatas,
                courseDatas,
                starTeacherDatas,
            },
        };
    }

    async getListDatas() {
        ctx.body = {
            code: 0,
            data: {
                getStateOnlineCourseTab,
                getStateOnlineCourse,
                // findRecomCourses,
                // findStatusOnlineCollec,
                // getByStarTeacher,
            },
        };
    }
}

module.exports = new Mobile();