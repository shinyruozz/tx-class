const collectionModel = require("../db/model/collection");
const { getByCidFindCourse } = require("./course");
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
        //获取status 为1 上线的集合
    async findStatusOnlineCollec() {
        let result = await collectionModel.findAll({
            raw: true,
            attributes: {
                exclude: ["createdAt", "updatedAt", "cid"],
                where: {
                    status: 1,
                },
            },
        });
        return result.map(async(item) => {
            item.courseIdList = item.courseIdList.split(",");

            item.courseDatas = await getByCidFindCourse(item.courseIdList);

            return item;
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