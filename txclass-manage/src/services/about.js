import http from "@/libs/http.js";

class AboutService {
    getAboutData() {
        return new Promise((resolve, reject) => {
            http.get("/about")
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    resolve(err.response.data);
                });
        });
    }
    editAboutData(data) {
        return new Promise((resolve, reject) => {
            http.put("/about", data)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    resolve(err.response.data);
                });
        });
    }
}

export default new AboutService();