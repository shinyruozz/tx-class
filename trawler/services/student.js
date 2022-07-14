const studentModel = require("../db/model/student");
class StudentService {
    async createStudent(data) {
        const sid = data.sid;
        const res = await studentModel.findOne({
            where: { sid },
        });
        if (res) {
            return await studentModel.update(data, { where: { sid } });
        }

        return await studentModel.create(data);
    }

    async findIdStudent(id) {
        return await studentModel.findOne({ where: { id } });
    }

    async findStudents(pageNum = 1, pageSize = 10) {
        const limit = Number(pageSize);
        const offset = (pageNum - 1) * pageSize;
        const { count: total, rows } = await studentModel.findAndCountAll({
            offset,
            limit,
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
        });
        return {
            total,
            list: rows,
        };
    }

    async updateStudent(id, state) {
        return await studentModel.update({ state }, {
            where: { id },
        });
    }
}

module.exports = new StudentService();