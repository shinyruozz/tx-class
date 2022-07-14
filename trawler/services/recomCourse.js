const RecomCourseModel = require("../db/model/recomCourse");
class RecomCourseService {
    async createRecomCourse(data) {
        const cid = data.cid;

        const res = await RecomCourseModel.findOne({
            where: { cid },
        });
        if (res) {
            return await RecomCourseModel.update(data, { where: { cid } });
        }

        return await RecomCourseModel.create(data);
    }

    async findRecomCourses() {
        return await RecomCourseModel.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
        });
    }

    async findIdRecomCourse(id) {
        return await RecomCourseModel.findOne({
            where: { id },
            // attributes: ["id", "cid", "title"],
        });
    }

    async updateRecomCourse(id, data) {
        const res = await RecomCourseModel.update(data, {
            where: {
                id,
            },
        });
        return res;
    }

    async delRecomCourse(id) {
        return await RecomCourseModel.destroy({ where: { id } });
    }
}

module.exports = new RecomCourseService();