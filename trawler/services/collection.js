const collectionModel = require("../db/model/collection");
class CollectionService {
    async createCollection(data) {
        const cid = data.cid;

        const res = await collectionModel.findOne({
            where: { cid },
        });
        if (res) {
            return await collectionModel.update(data, { where: { cid } });
        }

        return await collectionModel.create(data);
    }

    async findCollections() {
        return await collectionModel.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
        });
    }

    async findIdCollection(id) {
        return await collectionModel.findOne({
            where: { id },
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
        });
    }

    async updateCollection(id, data) {
        const res = await collectionModel.update(data, {
            where: {
                id,
            },
        });
        return res;
    }

    async delCollection(id) {
        return await collectionModel.destroy({ where: { id } });
    }
}

module.exports = new CollectionService();