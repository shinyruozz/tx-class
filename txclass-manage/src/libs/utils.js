import Vue from "vue";

function showMessage(code, msg, type) {
    if (type) {
        Vue.prototype.$message({
            message: msg,
            type,
        });

        return;
    }
    if (code == 0) {
        Vue.prototype.$message({
            message: msg,
            type: "success",
        });
    } else {
        Vue.prototype.$message({
            message: msg,
            type: "error",
        });
    }
}

export { showMessage };