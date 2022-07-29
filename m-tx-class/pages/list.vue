<template>
  <div class="container">
    <m-header :iconRightShow="false" :title="title"></m-header>
  </div>
</template>

<script>
import MHeader from "@/components/common/Header/index.vue";
export default {
  name: "ListPage",
  components: {
    MHeader,
  },
  data() {
    return {
      title: "JS++课程列表页",
    };
  },
};
</script>

<style>
</style>