<template>
  <div class="login-out">
    <el-button type="primary" @click="loginOutHandle">退出登录</el-button>
  </div>
</template>

<script>
import loginService from "@/services/login";

export default {
  name: "LoginOut",
  methods: {
    loginOutHandle() {
      const res = this.$confirm("您确定要退出登录吗？, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          const { code, msg } = await loginService.loginOutAction();
          if (code == 0) {
            this.$router.push("/login");
            this.$message({
              message: msg,
              type: "success",
            });
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消",
          });
        });
    },
  },
};
</script>

<style>
</style>