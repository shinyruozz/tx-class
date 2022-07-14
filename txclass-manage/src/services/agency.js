import http from "../libs/http";

class AgencyService {
    getAgencyInfo() {
        return new Promise((resolve, reject) => {
            http.get("/agency")
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    resolve(err.response.data);
                });
        });
    }
    editAgencyInfo(data) {
        return new Promise((resolve, reject) => {
            http.put("/agency", data)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    resolve(err.response.data);
                });
        });
    }
}

export default new AgencyService();