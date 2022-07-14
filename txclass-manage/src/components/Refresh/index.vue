<template>
  <div class="refresh-wrap">
    <i class="el-icon-refresh" @click="refreshHandle"></i>
    <span class="text">{{text}}</span>
  </div>
</template>

<script>
export default {
  name: "refresh",
  props: {
    text: {
      type: String,
      default: "刷新数据",
    },
  },
  methods: {
    refreshHandle() {
      this.$emit("refreshClick");
    },
  },
};
</script>

<style lang='scss' scoped>
.refresh-wrap {
  margin-bottom: 10px;
}
.el-icon-refresh {
  color: #409eff;
  font-size: 30px;
  cursor: pointer;
  vertical-align: middle;
  padding-right: 10px;
}
.text {
}
</style>