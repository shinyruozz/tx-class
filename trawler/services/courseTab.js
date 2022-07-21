const courseTabModel = require("../db/model/courseTab");
const { Op } = require("sequelize");
class CourseTabService {
    async createCourseTab(data) {
            const cid = data.cid;
            const res = await courseTabModel.findOne({
                where: { cid },
            });
            if (res) {
                return await courseTabModel.update(data, { where: { cid } });
            }

            return await courseTabModel.create(data);
        }
        //获取所有课程分类
    async findCourseTabs() {
        return await courseTabModel.findAll({
            where: {
                id: {
                    [Op.not]: 1,
                },
            },
            attributes: ["id", "cid", "title"],
        });
    }

    //获取上线课程分类
    async getStateOnlineCourseTab() {
        return await courseTabModel.findAll({
            raw: true,
            where: {
                state: 1,
            },
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
        });
    }

    async findIdCourseTab(id) {
        return await courseTabModel.findOne({
            where: { id },
            attributes: ["id", "cid", "title"],
        });
    }

    async updateCourseCate(id, data) {
        const res = await courseTabModel.update(data, {
            where: {
                id,
            },
        });
        return res;
    }

    async delCourseCate(id) {
        return await courseTabModel.destroy({ where: { id } });
    }
}

module.exports = new CourseTabService();