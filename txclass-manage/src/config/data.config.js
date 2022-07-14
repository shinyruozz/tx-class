const menusData = [{
        field: "0",
        title: "课程管理",
        path: "/course",
        children: [{
                field: "0-1",
                title: "课程列表",
                path: "/course/list",
            },

            {
                field: "0-2",
                title: "课程添加",
                path: "/course/add",
            },
        ],
    },
    {
        field: "1",
        title: "课程分类管理",
        path: "/course-tab",
        children: [{
                field: "1-1",
                title: "分类列表",
                path: "/course-tab/list",
            },
            {
                field: "1-2",
                title: "添加分类",
                path: "/course-tab/add",
            },
        ],
    },

    {
        field: "2",
        title: "机构管理",
        path: "/agency",
        children: [{
                field: "2-1",
                title: "编辑机构",
                path: "/agency/edit",
            },
            {
                field: "2-2",
                title: "机构信息",
                path: "/agency/",
            },
        ],
    },
    {
        field: "3",
        title: "推荐课程",
        path: "/recom-course",
        children: [{
            field: "3-1",
            title: "推荐列表",
            path: "/recom-course/list",
        }, ],
    },
    {
        field: "4",
        title: "课程集合管理",
        path: "/collection",
        children: [{
            field: "4-1",
            title: "集合列表",
            path: "/collection/list",
        }, ],
    },
    {
        field: "5",
        title: "老师管理",
        path: "/teacher",
        children: [{
                field: "5-1",
                title: "老师添加",
                path: "/teacher/add",
            },
            {
                field: "5-2",
                title: "老师列表",
                path: "/teacher/list",
            },
        ],
    },
    {
        field: "6",
        title: "优秀学生管理",
        path: "/student",
    },
    {
        field: "7",
        title: "轮播图管理",
        path: "/slider",
        children: [{
                field: "7-1",
                title: "添加轮播图",
                path: "/slider/add",
            },

            {
                field: "7-2",
                title: "轮播图列表",
                path: "/slider/list",
            },
        ],
    },

    {
        field: "9",
        title: "关于我们管理",
        path: "/about",
    },
    {
        field: "8",
        title: "爬虫管理",
        path: "/crawler",
    },
];
export { menusData };