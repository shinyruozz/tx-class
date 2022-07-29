const { isENV } = require("./env.config");

const URL = {
    //  webpack-dev-server 用 3300
    SOURCE: isENV ? "http://localhost:3000/" : "xxx",
};

const pages = {
    INDEX: {
        HEAD: {
            title: "妙思维JS++前端开发官方网站 - WEB|JavaScript|Vue|React|Node",
            keyword: "前端开发,WEB开发,在线课程,编程,项目实战,项目架构,JavaScript,Vue,React,Node",
            description: "JS++前端开发工程师精英就业班与提升班课程是针对前端开发零基础、爱好者、职业技术提升、互联网创业相关人员的一套完整的WEB前端开发学习体系，该体系通过深度基础课程对学员进行培养，使学员掌握最完整最有深度的技术理论知识和实战的基础技能。",
            favicon: URL.SOURCE + "img/logo108.png",
        },
        SCRIPTS: [URL.SOURCE + "js/index.js"],
        STYLESHEET: [URL.SOURCE + "css/index.css"],
    },

    LIST: {
        HEAD: {
            title: "妙思维JS++前端开发官方网站 - WEB|JavaScript|Vue|React|Node",
            keyword: "前端开发,WEB开发,在线课程,编程,项目实战,项目架构,JavaScript,Vue,React,Node",
            description: "JS++前端开发工程师精英就业班与提升班课程是针对前端开发零基础、爱好者、职业技术提升、互联网创业相关人员的一套完整的WEB前端开发学习体系，该体系通过深度基础课程对学员进行培养，使学员掌握最完整最有深度的技术理论知识和实战的基础技能。",
            favicon: "/img/logo108.png",
        },
        SCRIPTS: [URL.SOURCE + "js/list.js"],
        STYLESHEET: [URL.SOURCE + "css/list.css"],
    },
    ERROR: {
        HEAD: {
            title: "妙思维JS++前端开发官方网站 - WEB|JavaScript|Vue|React|Node",
            keyword: "前端开发,WEB开发,在线课程,编程,项目实战,项目架构,JavaScript,Vue,React,Node",
            description: "JS++前端开发工程师精英就业班与提升班课程是针对前端开发零基础、爱好者、职业技术提升、互联网创业相关人员的一套完整的WEB前端开发学习体系，该体系通过深度基础课程对学员进行培养，使学员掌握最完整最有深度的技术理论知识和实战的基础技能。",
            favicon: "/img/logo108.png",
        },
        SCRIPTS: [URL.SOURCE + "js/error.js"],
        STYLESHEET: [URL.SOURCE + "css/error.css"],
    },
};

const agencyTabs = [{
        field: 0,
        title: "主页",
    },
    {
        field: 1,
        title: "课程",
    },
    {
        field: 2,
        title: "老师",
    },
    {
        field: 3,
        title: "关于我们",
    },
];

module.exports = {
    pages,
    IMG_BASE_URL: "http://rek0f3hjt.hn-bkt.clouddn.com/",
    agencyTabs,
};