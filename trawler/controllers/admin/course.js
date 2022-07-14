const { findPageCourse, updateCourse, createCourse, findCourse } = require("../../services/course");
const { COURSE } = require("../../config/error");
class Course {
    //获取课程数据
    async getCourseDatas(ctx) {
        const { pageSize, pageNum } = ctx.query;
        const res = await findPageCourse(pageNum, pageSize);
        ctx.body = {
            code: 0,
            ...res,
        };
    }

    async getCourseData(ctx) {
        const id = ctx.params.id;
        const res = await findCourse(id);

        ctx.body = {
            code: 0,
            msg: "获取课程数据成功",
            result: res,
        };
    }

    async editCourseData(ctx) {
        const id = ctx.params.id;
        const updateData = ctx.request.body;
        const res = await updateCourse(id, updateData);
        if (res[0] > 0) {
            ctx.body = {
                code: 0,
                msg: "修改课程成功",
                result: "",
            };
        } else {
            ctx.app.emit("error", COURSE.editCourseErr, ctx);
        }
    }

    async addCourseData(ctx) {
        const data = ctx.request.body;
        data.cid = data.cid || Number(Math.random().toString().substring(3, 10));
        data.field = Number(data.field);
        const res = await createCourse(data);
        ctx.body = {
            code: 0,
            msg: "创建课程成功",
            result: data,
        };
    }
}

module.exports = new Course();