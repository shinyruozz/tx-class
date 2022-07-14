const BASE_URL = process.env.NODE_ENV == "development" ? "http://localhost:3000/admin" : "xxx";
const UPLOAD_URL = BASE_URL + "/upload";
const UPLOAD_SAVE_BASE_URL = "http://rek0f3hjt.hn-bkt.clouddn.com/";
export { BASE_URL, UPLOAD_URL, UPLOAD_SAVE_BASE_URL };