import http from "../libs/http";

class CrawlerService {
    getCrawlerListData() {
        return new Promise((resolve, reject) => {
            http.get("/crawler")
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    resolve(err.response.data);
                });
        });
    }

    crawlerAction(url) {
        console.log(1231321456);
        return new Promise((resolve, reject) => {
            http.get(url)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    resolve(err.response.data);
                });
        });
    }
}

export default new CrawlerService();