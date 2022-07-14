import http from "../libs/http";

class CourseService {
    getCourseData(params) {
        return new Promise((resolve, reject) => {
            http.get("/course/", { params }).then(
                (res) => {
                    resolve(res.data);
                },
                (err) => {
                    resolve(err.response.data);
                }
            );
        });
    }
    editCourseData(data) {
        return new Promise((resolve, reject) => {
            http.put("/course/" + data.id, data).then(
                (res) => {
                    resolve(res.data);
                },
                (err) => {
                    resolve(err.response.data);
                }
            );
        });
    }

    getEditCourse(id) {
        return new Promise((resolve, reject) => {
            http.get("/course/" + id).then(
                (res) => {
                    resolve(res.data);
                },
                (err) => {
                    resolve(err.response.data);
                }
            );
        });
    }

    editCourse(id, data) {
        return new Promise((resolve, reject) => {
            http.put("/course/" + id, data).then(
                (res) => {
                    resolve(res.data);
                },
                (err) => {
                    resolve(err.response.data);
                }
            );
        });
    }

    addCourse(data) {
        return new Promise((resolve, reject) => {
            http.post("/course", data).then(
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

export default new CourseService();