const {
    findCollections,
    findIdCollection,
    updateCollection,
    delCollection,
    createCollection,
} = require("../../services/collection");
const { COLLECTION } = require("../../config/error");
const { createCid } = require("../../libs/utils");
class Collection {
    async getCollections(ctx) {
        const res = await findCollections();

        ctx.body = {
            code: 0,
            msg: "获取课程集合成功",
            result: res,
        };
    }

    async getCollection(ctx) {
        const id = ctx.params.id;
        const res = await findIdCollection(id);
        if (res) {
            ctx.body = {
                code: 0,
                msg: "获取课程集合成功",
                result: res,
            };
        } else {
            ctx.app.emit("error", COLLECTION.getCollectionsErr, ctx);
        }
    }

    async addCollection(ctx) {
        const data = ctx.request.body;
        data.cid = data.cid ? data.cid : createCid(5);
        const res = await createCollection(data);
        if (res) {
            ctx.body = {
                code: 0,
                msg: "添加课程集合成功",
                result: res,
            };
        }
    }

    async editCollection(ctx) {
        const id = ctx.params.id;
        const updateData = ctx.request.body;
        const res = await updateCollection(id, updateData);
        if (res) {
            ctx.body = {
                code: 0,
                msg: "修改课程集合成功",
                result: res,
            };
        } else {
            ctx.app.emit("error", COLLECTION.editCollectionErr, ctx);
        }
    }

    async removeCollection(ctx) {
        const id = ctx.params.id;
        const res = await delCollection(id);
        if (res) {
            ctx.body = {
                code: 0,
                msg: "删除课程集合成功",
                result: res,
            };
        } else {
            ctx.app.emit("error", COLLECTION.delCollectionErr, ctx);
        }
    }
}

module.exports = new Collection();