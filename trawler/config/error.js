module.exports = {
    //用户存在
    LOGIN: {
        adminExistErr: {
            code: 10001,
            msg: "管理员账号已存在",
            result: "",
        },
        verifyLackErr: {
            code: 10002,
            msg: "信息填写不完整",
            result: "",
        },
        verifyAdminInfoErr: {
            code: 10003,
            msg: "用户名或密码有误",
            result: "",
        },
        paramsFormatErr: {
            code: 10004,
            msg: "格式错误",
            result: "",
        },
        adminNotExistErr: {
            code: 10005,
            msg: "管理员账号不存在",
            result: "",
        },
        loginCheckErr: {
            code: 10006,
            msg: "登录验证失败",
            result: "",
        },
    },

    //课程
    COURSE: {
        editCourseErr: {
            code: 20001,
            msg: "修改失败",
            result: "",
        },
    },
    COURSE_TAB: {
        getCourseTabsErr: {
            code: 30001,
            msg: "获取课程分类集合失败",
            result: "",
        },
        getCourseCateErr: {
            code: 30002,
            msg: "获取课程分类失败",
            result: "",
        },
        editCourseCateErr: {
            code: 30003,
            msg: "修改课程分类失败",
            result: "",
        },
        delCourseCateErr: {
            code: 30004,
            msg: "删除课程分类失败",
            result: "",
        },
    },
    //课程集合
    COLLECTION: {
        getCollectionsErr: {
            code: 40001,
            msg: "获取课程集合列表失败",
            result: "",
        },
        getCollectionErr: {
            code: 40002,
            msg: "获取课程集合失败",
            result: "",
        },
        editCollectionErr: {
            code: 40003,
            msg: "修改课程集合失败",
            result: "",
        },
        delCollectionErr: {
            code: 40004,
            msg: "删除课程集合失败",
            result: "",
        },
    },
    //推荐课程
    RECOM_COURSE: {
        getRecomCoursesErr: {
            code: 50001,
            msg: "获取推荐课程列表失败",
            result: "",
        },
        getRecomCourseErr: {
            code: 50002,
            msg: "获取推荐课程失败",
            result: "",
        },
        editRecomCourseErr: {
            code: 50003,
            msg: "修改推荐课程失败",
            result: "",
        },
        delRecomCourseErr: {
            code: 50004,
            msg: "删除推荐课程失败",
            result: "",
        },
    },
    //老师
    TEACHER: {
        getTeachersErr: {
            code: 60001,
            msg: "获取老师列表失败",
            result: "",
        },
        getTeacherErr: {
            code: 60002,
            msg: "获取老师信息失败",
            result: "",
        },
        editTeacherErr: {
            code: 60003,
            msg: "修改老师信息失败",
            result: "",
        },
        delTeacherErr: {
            code: 60004,
            msg: "删除老师信息失败",
            result: "",
        },
    },
    //学生
    STUDENT: {
        editStudentStateErr: {
            code: 70001,
            msg: "修改学生状态失败",
            result: "",
        },
        getStudentErr: {
            code: 70001,
            msg: "获取学生信息失败",
            result: "",
        },
    },

    //轮播图
    SLIDER: {
        getSlidersErr: {
            code: 80001,
            msg: "获取轮播图列表失败",
            result: "",
        },
        getSliderErr: {
            code: 80002,
            msg: "获取轮播图信息失败",
            result: "",
        },
        editSliderErr: {
            code: 80003,
            msg: "修改轮播图信息失败",
            result: "",
        },
        delSliderErr: {
            code: 80004,
            msg: "删除轮播图信息失败",
            result: "",
        },
    },
    //其他
    OTHER: {
        uploadImgErr: {
            code: 10101,
            msg: "上传图片失败",
            result: "",
        },
    },
};