import http from "../libs/http";

class CollectionService {
    getCollectionData() {
        return new Promise((resolve, reject) => {
            http.get("/collection")
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    resolve(err.response.data);
                });
        });
    }
    getCollectionInfo(id) {
        return new Promise((resolve, reject) => {
            http.get("/collection/" + id)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    resolve(err.response.data);
                });
        });
    }
    editCollectionInfo(id, data) {
        return new Promise((resolve, reject) => {
            http.put("/collection/" + id, data)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    resolve(err.response.data);
                });
        });
    }

    delCollection(id) {
        return new Promise((resolve, reject) => {
            http.delete("/collection/" + id)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    resolve(err.response.data);
                });
        });
    }
}

export default new CollectionService();