const crawler = require("../libs/crawler");
const { crawlerUrl } = require("../config/conf");

crawler({
    url: crawlerUrl.home,
    evaluate() {
        console.log(1);
        const $ = window.$,
            $item = $(".agency-recommend-course"),
            data = [];
        $item.each((index, ele) => {
            const $elem = $(ele);
            let dataItem = {
                cid: index + 1,
                title: $elem.find(".recommend-course-title span").get(0).firstChild.nodeValue,
                info: $elem.find(".rec-group-info").text(),
                qqQunLink: $elem.find(".rec-group-join").prop("href"),
                maskUrl: $elem
                    .find(".rec-group-mask")
                    .css("background-image")
                    .match(/\"(.+?)\"/)[1],
                courseIdList: "",
                maskKey: "",
            };
            const courseIdList = [];

            const courseItems = $elem.find(".course-card-item");
            courseItems.each((idx, item) => {
                const id = $(item).find(".item-img-link").attr("data-id");
                courseIdList.push(id);
            });
            dataItem.courseIdList = courseIdList.toString();

            data.push(dataItem);
        });

        return data;
    },
});