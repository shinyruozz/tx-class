import http from "../libs/http";

class RecomCourseService {
    getRecomCourseData() {
        return new Promise((resolve, reject) => {
            http.get("/recom_course")
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    resolve(err.response.data);
                });
        });
    }

    getRecomCourseInfo(id) {
        return new Promise((resolve, reject) => {
            http.get("/recom_course/" + id)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    resolve(err.response.data);
                });
        });
    }
    editRecomCourseInfo(id, data) {
        return new Promise((resolve, reject) => {
            http.put("/recom_course/" + id, data)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    resolve(err.response.data);
                });
        });
    }

    delRecomCourse(id) {
        return new Promise((resolve, reject) => {
            http.delete("/recom_course/" + id)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    resolve(err.response.data);
                });
        });
    }
}

export default new RecomCourseService();