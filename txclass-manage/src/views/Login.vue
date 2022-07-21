<template>
  <div class="container">
    <div class="login-warp" @keydown.enter="loginSubmit">
      <div class="logo">
        <img src="../assets/images/logo.webp" alt />
      </div>
      <div class="form-wrap">
        <h3 class="title">后台管理登录</h3>
        <el-form :model="loginInfo" :rules="rules" ref="ruleForm" label-width="100px">
          <el-form-item label="管理员账号" prop="username">
            <el-input v-model="loginInfo.username"></el-input>
          </el-form-item>
          <el-form-item label="管理员密码" prop="password">
            <el-input v-model="loginInfo.password " type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="loginSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import loginService from "../services/login";

export default {
  name: "Home",
  data() {
    return {
      loginInfo: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入管理员账号" },
          { min: 3, max: 5, message: "长度在 2 到 8 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码" },
          {
            min: 6,
            max: 18,
            message: "长度在 6 到 18 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    loginSubmit() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          const { code, data, msg } = await loginService.loginAction(
            this.loginInfo
          );
          console.log(code, data, msg);
          if (code == 0) {
            this.$router.push("/course/list");
            this.$message({
              message: "登录成功",
              type: "success",
            });
          } else {
            this.$message({
              message: msg,
              type: "error",
            });
          }
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  overflow: hidden;
  height: 100%;
  background-color: #f3f5f7;
}
.login-warp {
  position: relative;
  margin: 100px auto;
  padding: 35px;
  width: 600px;
  background-color: #fff;
  box-shadow: 2px 2px 2px #ccc;

  .logo {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    width: 150px;
    height: 150px;
  }
  .form-wrap {
    .title {
      text-align: center;
      padding-bottom: 20px;
      font-size: 30px;
    }
    height: 100%;
    width: 100%;
    padding-left: 180px;
  }
}
</style>
