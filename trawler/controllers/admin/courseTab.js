const {
    findCourseTabs,
    findIdCourseTab,
    updateCourseCate,
    delCourseCate,
    createCourseTab,
} = require("../../services/courseTab");
const { COURSE_TAB } = require("../../config/error");
const { createCid } = require("../../libs/utils");
class CourseTab {
    async getCourseTabs(ctx) {
        const res = await findCourseTabs();

        ctx.body = {
            code: 0,
            msg: "获取课程分类成功",
            result: res,
        };
    }

    async getCourseTab(ctx) {
        const id = ctx.params.id;
        const res = await findIdCourseTab(id);
        if (res) {
            ctx.body = {
                code: 0,
                msg: "获取课程分类成功",
                result: res,
            };
        } else {
            ctx.app.emit("error", COURSE_TAB.getCourseCateErr, ctx);
        }
    }

    async addCourseTab(ctx) {
        const data = ctx.request.body;
        data.cid = data.cid ? data.cid : createCid(5);
        const res = await createCourseTab(data);
        if (res) {
            ctx.body = {
                code: 0,
                msg: "添加课程分类成功",
                result: res,
            };
        }
    }

    async editCourseTab(ctx) {
        const id = ctx.params.id;
        const updateData = ctx.request.body;
        const res = await updateCourseCate(id, updateData);
        if (res) {
            ctx.body = {
                code: 0,
                msg: "修改课程分类成功",
                result: res,
            };
        } else {
            ctx.app.emit("error", COURSE_TAB.editCourseCateErr, ctx);
        }
    }

    async removeCourseTab(ctx) {
        const id = ctx.params.id;
        const res = await delCourseCate(id);
        if (res) {
            ctx.body = {
                code: 0,
                msg: "删除课程分类成功",
                result: res,
            };
        } else {
            ctx.app.emit("error", COURSE_TAB.delCourseCateErr, ctx);
        }
    }
}

module.exports = new CourseTab();