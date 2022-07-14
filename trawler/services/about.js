const aboutModel = require("../db/model/about");
class AboutService {
    async createAbout(data) {
        const id = 0;
        const res = await aboutModel.findOne({
            where: { id },
        });
        if (res) {
            return await aboutModel.update(data, { where: { id } });
        }

        return await aboutModel.create(data);
    }

    async findAboutInfo() {
        return await aboutModel.findByPk(1);
    }
    async editAbout(data) {
        const id = 1;
        return aboutModel.update(data, {
            where: { id },
        });
    }
}

module.exports = new AboutService();