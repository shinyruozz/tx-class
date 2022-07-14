import http from "../libs/http";

class StundentService {
    getStudentData() {
        return new Promise((resolve, reject) => {
            http.get("/student")
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    resolve(err.response.data);
                });
        });
    }

    editStudentState(id, state) {
        return new Promise((resolve, reject) => {
            http.put("/student/" + id, {
                    state,
                })
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    resolve(err.response.data);
                });
        });
    }
}

export default new StundentService();