<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['0']" :default-active="$router.path" router :unique-opened="true">
      <template v-for="menu of menusData">
        <el-submenu v-if="menu.children" :key="menu.field" :index="menu.field">
          <template slot="title">{{menu.title}}</template>
          <el-menu-item
            v-for="menuChild of menu.children"
            :key="menuChild.field"
            :index="menuChild.path"
          >{{menuChild.title}}</el-menu-item>
        </el-submenu>
        <el-menu-item v-else :key="menu.field" :index="menu.path">{{menu.title}}</el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
import { menusData } from "../../config/data.config";
export default {
  data() {
    return {
      menusData,
    };
  },
};
</script>

<style lang="scss" >
.el-aside {
  overflow: hidden;
}
</style>