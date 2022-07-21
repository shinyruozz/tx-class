const SliderModel = require("../db/model/slider");
class SliderService {
    async createSlider(data) {
        const cid = data.cid;
        const res = await SliderModel.findOne({ where: { cid } });
        if (res) {
            return await SliderModel.update(data, { where: { cid } });
        } else {
            return await SliderModel.create(data);
        }
    }

    async findSliders() {
        return await SliderModel.findAll({
            attributes: {
                exclude: ["createdAt", "deletedAt", "updatedAt"],
            },
        });
    }

    async getSliderDatas() {
        return await SliderModel.findAll({
            raw: true,

            where: {
                state: 1,
            },
        });
    }

    async findIdSlider(id) {
        return await SliderModel.findByPk(id, {
            attributes: {
                exclude: ["createdAt", "deletedAt", "updatedAt"],
            },
        });
    }

    async updateSlider(id, data) {
        // data.state
        const res = await SliderModel.update(data, {
            where: {
                id,
            },
        });
        console.log(12132132145465465465465465);
        return res;
    }

    async delSlider(id) {
        return await SliderModel.destroy({ where: { id }, force: true });
    }
}

module.exports = new SliderService();