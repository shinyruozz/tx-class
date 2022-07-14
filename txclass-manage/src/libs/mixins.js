import loginService from "../services/login";

const loginCheckMinxin = {
    async created() {
        const res = await loginService.loginCheck();
        if (res.code == 10006) {
            this.$router.push("/login");
            this.$message({
                message: "请先登录",
                type: "error",
            });
        }
    },
};

export { loginCheckMinxin };