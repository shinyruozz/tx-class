import http from "../libs/http";

class CourseTabService {
    getCourseTabData() {
        return new Promise((resolve, reject) => {
            http.get("/course_tab/").then(
                (res) => {
                    resolve(res.data);
                },
                (err) => {
                    resolve(err.response.data);
                }
            );
        });
    }

    delCourseTabData(id) {
        return new Promise((resolve, reject) => {
            http.delete("/course_tab/" + id).then(
                (res) => {
                    resolve(res.data);
                },
                (err) => {
                    resolve(err.response.data);
                }
            );
        });
    }

    findCourseCate(id) {
        return new Promise((resolve, reject) => {
            http.get("/course_tab/" + id).then(
                (res) => {
                    resolve(res.data);
                },
                (err) => {
                    resolve(err.response.data);
                }
            );
        });
    }

    addCourseCate(data) {
        return new Promise((resolve, reject) => {
            http.post("/course_tab/", data).then(
                (res) => {
                    resolve(res.data);
                },
                (err) => {
                    resolve(err.response.data);
                }
            );
        });
    }

    editCourseCate(id, data) {
        return new Promise((resolve, reject) => {
            http.put("/course_tab/" + id, data).then(
                (res) => {
                    resolve(res.data);
                },
                (err) => {
                    resolve(err.response.data);
                }
            );
        });
    }
}

export default new CourseTabService();