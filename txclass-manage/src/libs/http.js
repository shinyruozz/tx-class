import axios from "axios";
import qs from "qs";

import { BASE_URL } from "../config/http.conf";

const http = axios.create({
    baseURL: BASE_URL,
    //允许跨域设置cookie
    withCredentials: true,
});
http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

http.interceptors.request.use((config) => {
    config.data = qs.stringify(config.data);

    return config;
});
export default http;