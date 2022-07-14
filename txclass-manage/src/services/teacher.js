import http from "../libs/http";

class TeacherService {
    getTeacherData() {
        return new Promise((resolve, reject) => {
            http.get("/teacher")
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    resolve(err.response.data);
                });
        });
    }
    getTeacherInfo(id) {
        return new Promise((resolve, reject) => {
            http.get("/teacher/" + id)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    resolve(err.response.data);
                });
        });
    }
    editTeacherInfo(id, data) {
        return new Promise((resolve, reject) => {
            http.put("/teacher/" + id, data)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    resolve(err.response.data);
                });
        });
    }

    addTeacher(data) {
        return new Promise((resolve, reject) => {
            http.post("/teacher/", data).then(
                (res) => {
                    resolve(res.data);
                },
                (err) => {
                    resolve(err.response.data);
                }
            );
        });
    }
    delTeacher(id) {
        return new Promise((resolve, reject) => {
            http.delete("/teacher/" + id)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    resolve(err.response.data);
                });
        });
    }
}

export default new TeacherService();