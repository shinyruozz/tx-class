<template>
  <div class="recom-course-wrap">
    <card-title title="推荐课程"></card-title>
    <div class="recom-list">
      <recom-item v-for="item of data" :key="item.id" :item="item"></recom-item>
    </div>
  </div>
</template>

<script>
import RecomItem from "./RecomItem.vue";
import CardTitle from "@/components/common/CardTitle/index.vue";
export default {
  name: "RecomCourse",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },

  components: {
    RecomItem,
    CardTitle,
  },
};
</script>

<style lang='scss' scoped>
.recom-course-wrap {
  .recom-list {
    background-color: #fff;
  }
}
</style>