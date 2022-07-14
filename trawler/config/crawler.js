const { local } = require("./conf");

const crawlerList = [{
        id: 1,
        desciption: "爬取轮播图数据",
        crawlerUrl: local + "crawler/slider",
    },
    {
        id: 2,
        desciption: "爬取机构信息数据",
        crawlerUrl: local + "crawler/agency",
    },
    {
        id: 3,
        desciption: "爬取推荐课程信息数据",
        crawlerUrl: local + "crawler/recom-course",
    },
    {
        id: 4,
        desciption: "爬取课程集合数据",
        crawlerUrl: local + "crawler/collection",
    },
    {
        id: 5,
        desciption: "爬取老师集合数据",
        crawlerUrl: local + "crawler/teacher",
    },
    {
        id: 6,
        desciption: "爬取优秀学生数据",
        crawlerUrl: local + "crawler/student",
    },
    {
        id: 7,
        desciption: "爬取课程分类数据",
        crawlerUrl: local + "crawler/course-tab",
    },
    {
        id: 8,
        desciption: "爬取课程数据",
        crawlerUrl: local + "crawler/course",
    },
    {
        id: 9,
        desciption: "爬取课程关于数据",
        crawlerUrl: local + "crawler/about",
    },
];

module.exports = {
    crawlerList,
};