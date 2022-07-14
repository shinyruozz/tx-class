const { findSliders, findIdSlider, updateSlider, delSlider, createSlider } = require("../../services/slider");
const { SLIDER } = require("../../config/error");
const { createCid } = require("../../libs/utils");
class Slider {
    async getSliderDatas(ctx) {
        const res = await findSliders();

        ctx.body = {
            code: 0,
            msg: "获取课程分类成功",
            result: res,
        };
    }

    async getSlider(ctx) {
        const id = ctx.params.id;
        const res = await findIdSlider(id);
        if (res) {
            ctx.body = {
                code: 0,
                msg: "获取轮播图成功",
                result: res,
            };
        } else {
            ctx.app.emit("error", SLIDER.getSliderErr, ctx);
        }
    }

    async addSlider(ctx) {
        const data = ctx.request.body;
        data.cid = data.cid ? data.cid : createCid(5);
        console.log(data);
        const res = await createSlider(data);
        if (res) {
            ctx.body = {
                code: 0,
                msg: "添加轮播图成功",
                result: res,
            };
        }
    }

    async editSlider(ctx) {
        const id = ctx.params.id;
        const updateData = ctx.request.body;

        const res = await updateSlider(id, updateData);
        console.log(res);
        if (res) {
            ctx.body = {
                code: 0,
                msg: "修改轮播图成功",
                result: res,
            };
        } else {
            ctx.app.emit("error", SLIDER.editSliderErr, ctx);
        }
    }

    async removeSlider(ctx) {
        const id = ctx.params.id;
        const res = await delSlider(id);
        if (res) {
            ctx.body = {
                code: 0,
                msg: "删除轮播图成功",
                result: res,
            };
        } else {
            ctx.app.emit("error", SLIDER.delSliderErr, ctx);
        }
    }
}

module.exports = new Slider();