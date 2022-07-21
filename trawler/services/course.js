const courseModel = require("../db/model/course");
const { Op } = require("sequelize");
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

    // cid 查找课程
    async getByCidFindCourse(idList) {
        return await courseModel.findAll({
            raw: true,
            where: { cid: idList },
            attributes: { exclude: ["createdAt", "updatedAt"] },
        });
    }

    // 获取上线课程
    async getStateOnlineCourse() {
        return await courseModel.findAll({
            raw: true,
            where: {
                state: 1,
            },
            attributes: { exclude: ["createdAt", "updatedAt", "state"] },
        });
    }

    async getFuzzySearch(query) {
        return await courseModel.findAll({
            raw: true,
            where: {
                title: {
                    [Op.like]: "%" + query + "%",
                },
            },
        });
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