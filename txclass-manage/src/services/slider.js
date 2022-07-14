import http from "../libs/http";

class SliderService {
    getSliderData() {
        return new Promise((resolve, reject) => {
            http.get("/slider")
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    resolve(err.response.data);
                });
        });
    }
    getSliderInfo(id) {
        return new Promise((resolve, reject) => {
            http.get("/slider/" + id)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    resolve(err.response.data);
                });
        });
    }
    editSliderInfo(id, data) {
        return new Promise((resolve, reject) => {
            http.put("/slider/" + id, data)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    resolve(err.response.data);
                });
        });
    }

    addSlider(data) {
        return new Promise((resolve, reject) => {
            http.post("/slider", data)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    resolve(err.response.data);
                });
        });
    }

    delSlider(id) {
        return new Promise((resolve, reject) => {
            http.delete("/slider/" + id)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    resolve(err.response.data);
                });
        });
    }
}

export default new SliderService();