const {
    findIdRecomCourse,
    findRecomCourses,
    updateRecomCourse,
    delRecomCourse,
    createRecomCourse,
} = require("../../services/recomCourse");
const { RECOM_COURSE } = require("../../config/error");
const { createCid } = require("../../libs/utils");
class RecomCourse {
    async getRecomCourseData(ctx) {
        console.log(123456);
        const res = await findRecomCourses();

        ctx.body = {
            code: 0,
            msg: "获取推荐课程成功",
            result: res,
        };
    }

    async getRecomCourse(ctx) {
        const id = ctx.params.id;
        const res = await findIdRecomCourse(id);
        if (res) {
            ctx.body = {
                code: 0,
                msg: "获取推荐课程成功",
                result: res,
            };
        } else {
            ctx.app.emit("error", RECOM_COURSE.getRecomCourseErr, ctx);
        }
    }

    async addRecomCourse(ctx) {
        const data = ctx.request.body;
        data.cid = data.cid ? data.cid : createCid(5);
        const res = await createRecomCourse(data);
        if (res) {
            ctx.body = {
                code: 0,
                msg: "添加推荐课程成功",
                result: res,
            };
        }
    }

    async editRecomCourse(ctx) {
        const id = ctx.params.id;
        const updateData = ctx.request.body;
        const res = await updateRecomCourse(id, updateData);
        if (res) {
            ctx.body = {
                code: 0,
                msg: "修改推荐课程成功",
                result: res,
            };
        } else {
            ctx.app.emit("error", RECOM_COURSE.editRecomCourseErr, ctx);
        }
    }

    async removeRecomCourse(ctx) {
        const id = ctx.params.id;
        const res = await delRecomCourse(id);
        if (res) {
            ctx.body = {
                code: 0,
                msg: "删除推荐课程成功",
                result: res,
            };
        } else {
            ctx.app.emit("error", RECOM_COURSE.delRecomCourseErr, ctx);
        }
    }
}

module.exports = new RecomCourse();