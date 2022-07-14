const { findStudents, updateStudent, createStudent, findIdStudent } = require("../../services/Student");
const { STUDENT } = require("../../config/error");
const { createCid } = require("../../libs/utils");
class Student {
    async getStudents(ctx) {
        const res = await findStudents();
        ctx.body = {
            code: 0,
            msg: "获取学生列表成功",
            result: res,
        };
    }

    async editStudentState(ctx) {
        const id = ctx.params.id;
        const state = ctx.request.body.state;

        const res = await updateStudent(id, state);
        if (res) {
            ctx.body = {
                code: 0,
                msg: "修改学生状态成功",
                result: res,
            };
        } else {
            ctx.app.emit("error", STUDENT.editStudentStateErr, ctx);
        }
    }
}

module.exports = new Student();