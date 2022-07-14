const { findTeachers, findIdTeacher, updateTeacher, delTeacher, createTeacher } = require("../../services/Teacher");
const { TEACHER } = require("../../config/error");
const { createCid } = require("../../libs/utils");
class Teacher {
    async getTeachers(ctx) {
        const res = await findTeachers();

        ctx.body = {
            code: 0,
            msg: "获取老师信息集合成功",
            result: res,
        };
    }

    async getTeacher(ctx) {
        const id = ctx.params.id;
        const res = await findIdTeacher(id);
        if (res) {
            ctx.body = {
                code: 0,
                msg: "获取老师信息成功",
                result: res,
            };
        } else {
            ctx.app.emit("error", TEACHER.getTeachersErr, ctx);
        }
    }

    async addTeacher(ctx) {
        const data = ctx.request.body;
        data.tid = data.tid ? data.tid : createCid(5);
        const res = await createTeacher(data);
        if (res) {
            ctx.body = {
                code: 0,
                msg: "添加老师信息成功",
                result: res,
            };
        }
    }

    async editTeacher(ctx) {
        const id = ctx.params.id;
        const updateData = ctx.request.body;
        const res = await updateTeacher(id, updateData);
        if (res) {
            ctx.body = {
                code: 0,
                msg: "修改老师信息成功",
                result: res,
            };
        } else {
            ctx.app.emit("error", TEACHER.editTeacherErr, ctx);
        }
    }

    async removeTeacher(ctx) {
        const id = ctx.params.id;
        const res = await delTeacher(id);
        if (res) {
            ctx.body = {
                code: 0,
                msg: "删除老师信息成功",
                result: res,
            };
        } else {
            ctx.app.emit("error", TEACHER.delTeacherErr, ctx);
        }
    }
}

module.exports = new Teacher();