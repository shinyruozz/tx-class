const seq = require("../connection/mysql");
const { INT, STRING } = require("../types");

const RecomCourse = seq.define("RecomCourse", {
    cid: {
        type: INT,
        unique: true,
        allowNull: false,
        comment: "推荐课程唯一标识",
    },
    href: {
        type: STRING,
        comment: "推荐课程链接地址",
    },
    posterUrl: {
        type: STRING,
        comment: "课程海报url",
    },
    title: {
        type: STRING,
        comment: "标题",
    },
    description: {
        type: STRING,
        comment: "课程描述",
    },
    tearcherImg: {
        type: STRING,
        comment: "老师图片地址",
    },
    tearcherName: {
        type: STRING,
        comment: "老师名称",
    },
    studentCount: {
        type: INT,
        comment: "学生数量",
        defaultValue: 0,
    },
    price: {
        type: STRING,
        comment: "价格",
    },
    posterKey: {
        type: STRING,
        comment: "课程海报上传图片地址",
    },
    tearcherKey: {
        type: STRING,
        comment: "老师图片上传图片地址",
    },
    state: {
        type: INT,
        defaultValue: 1,
    },
});

// RecomCourse.sync({ force: true });

module.exports = RecomCourse;