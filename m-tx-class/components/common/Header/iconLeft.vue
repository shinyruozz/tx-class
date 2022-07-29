<template>
  <div class="icon-back-wrap" @click="goBack">
    <i class="iconfont icon-back"></i>
  </div>
</template>

<script>
export default {
  name: "IconLeft",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang='scss' scoped>
.icon-back {
  font-size: 2.2rem;
}
</style>