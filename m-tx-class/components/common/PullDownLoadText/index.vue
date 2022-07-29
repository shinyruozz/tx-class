<template>
  <div class="pull-down-loading-wrap">
    <div class="loading-text">{{text}}</div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "正在刷新...",
    },
  },
};
</script>

<style lang='scss' scoped>
.pull-down-loading-wrap {
  position: absolute;
  top: 4.4rem;
  font-size: 1.6rem;
  width: 100%;
  text-align: center;
  padding-top: 2rem;
  color: #777;
}
</style>