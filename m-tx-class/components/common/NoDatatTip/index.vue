<template>
  <div class="no-data-tip">{{text}}</div>
</template>

<script>
export default {
  name: "NoDataTip",
  props: {
    text: {
      type: String,
      default: "没有更多数据了",
    },
  },
};
</script>

<style lang='scss' scoped>
.no-data-tip {
  padding-top: 1rem;
  text-align: center;
  font-size: 1.4rem;
  color: #ccc;
}
</style>