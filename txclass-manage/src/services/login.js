import http from "../libs/http";

class LoginService {
    loginAction(data) {
        return new Promise((resolve, reject) => {
            http.post("/login", data).then(
                (res) => {
                    resolve(res.data);
                },
                (err) => {
                    resolve(err.response.data);
                }
            );
        });
    }

    loginCheck() {
        return new Promise((resolve, reject) => {
            http.get("/login_check").then(
                (res) => {
                    resolve(res.data);
                },
                (err) => {
                    resolve(err.response.data);
                }
            );
        });
    }

    loginOutAction() {
        return new Promise((resolve, reject) => {
            http.get("/login_out").then(
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

export default new LoginService();