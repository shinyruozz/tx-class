const AgencyModel = require("../db/model/agency");
class AgencyService {
    async createAgency(data) {
        const id = 1;

        const res = await AgencyModel.findOne({
            where: { id },
        });
        if (res) {
            return await AgencyModel.update(data, { where: { id } });
        }

        return await AgencyModel.create(data);
    }

    async findAgencyInfo() {
        return await AgencyModel.findByPk(1);
    }

    async updateAgencyInfo(data) {
        return await AgencyModel.update(data, {
            where: {
                id: 1,
            },
        });
    }
}

module.exports = new AgencyService();