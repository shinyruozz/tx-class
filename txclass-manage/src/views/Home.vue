<template>
  <div class="container">
    <el-container style="height:100vh;flex-direction:column">
      <home-header></home-header>
      <!-- <el-main>Main</el-main> -->
      <el-container style="overflow:hidden">
        <home-aside></home-aside>
        <el-main>
          <router-view :key="this.$route.path"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HomeHeader from "../components/Header";
import HomeAside from "../components/Aside";
export default {
  components: {
    HomeHeader,
    HomeAside,
  },
};
</script>

<style scoped>
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
</style>