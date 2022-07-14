const courseModel = require("../db/model/course");
class CourseService {
    async createCourse(data) {
        const cid = data.cid;
        const res = await courseModel.findOne({
            where: { cid: cid },
        });
        if (res) {
            return await courseModel.update(data, { where: { cid } });
        }

        return await courseModel.create(data);
    }

    async findPageCourse(pageNum = 1, pageSize = 10) {
        const limit = Number(pageSize);
        const offset = (pageNum - 1) * pageSize;
        const { count: total, rows } = await courseModel.findAndCountAll({
            offset,
            limit,
            attributes: {
                exclude: ["posterImg", "createdAt", "updatedAt"],
            },
        });

        return {
            total,
            list: rows,
        };
    }

    async findCourse(id) {
        return await courseModel.findOne({
            where: { id },
            attributes: ["field", "posterKey", "price", "title", "posterKey"],
        });
    }

    async updateCourse(id, data) {
        const res = await courseModel.update(data, {
            where: {
                id,
            },
        });
        console.log(res);
        return res;
    }
}

module.exports = new CourseService();