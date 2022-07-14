<template>
  <el-header>
    <div class="logo-wrap">
      <img src="../../assets/images/logo.png" alt />
    </div>
    <h1 class="title">{{title}}</h1>
    <login-out></login-out>
  </el-header>
</template>

<script>
import LoginOut from "./LoginOut";
export default {
  props: {
    title: {
      type: String,
      default: "腾讯课程后台管理",
    },
  },
  components: {
    LoginOut,
  },
};
</script>

<style lang="scss" scoped>
.el-header {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #b3c0d1;
  .logo-wrap {
    position: absolute;
    top: 5px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .title {
    text-align: center;
    font-size: 24px;
    flex: 1;
  }
}
</style>>
