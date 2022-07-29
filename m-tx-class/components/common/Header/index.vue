<template>
  <header class="header">
    <icon-left v-show="iconLeftShow"></icon-left>
    <h1 class="head-tt">{{title}}</h1>
    <icon-right v-show="iconRightShow"></icon-right>
  </header>
</template>

<script>
import IconLeft from "./iconLeft.vue";
import iconRight from "./iconRight.vue";
export default {
  name: "MHeader",
  components: {
    IconLeft,
    iconRight,
  },
  props: {
    iconLeftShow: {
      type: Boolean,
      default: true,
    },
    iconRightShow: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: "JS++移动端首页",
    },
  },
};
</script>

<style lang='scss' scoped>
.header {
  display: flex;
  width: 100%;
  height: 4.4rem;
  align-items: center;
  box-sizing: border-box;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  padding: 0 1.5rem;
  box-shadow: 1px 2px 2px #ccc;
  z-index: 3;
  .head-tt {
    flex: 1;
    font-size: 1.8rem;
    color: #333;
    text-align: center;
  }
}
</style>