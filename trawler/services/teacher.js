const teacherModel = require("../db/model/teacher");
class TeacherService {
    async createTeacher(data) {
        const tid = data.tid;
        const res = await teacherModel.findOne({
            where: { tid },
        });
        if (res) {
            return await teacherModel.update(data, { where: { tid } });
        }

        return await teacherModel.create(data);
    }

    async findTeachers() {
        return await teacherModel.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
        });
    }

    async findIdTeacher(id) {
        return await teacherModel.findOne({
            where: { id },
            // attributes: ["id", "cid", "title"],
        });
    }

    async updateTeacher(id, data) {
        const res = await teacherModel.update(data, {
            where: {
                id,
            },
        });
        return res;
    }

    async delTeacher(id) {
        return await teacherModel.destroy({ where: { id } });
    }
}

module.exports = new TeacherService();