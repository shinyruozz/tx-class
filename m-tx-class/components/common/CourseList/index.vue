<template>
  <div class="course-list-wrap">
    <div class="course-list" v-if="courseDatas && courseDatas.length > 0">
      <course-item v-for="item of courseDatas" :key="item.id" :item="item"></course-item>
    </div>
    <no-data-tip v-else></no-data-tip>
  </div>
</template>

<script>
import CourseItem from "./item.vue";
import NoDataTip from "../NoDatatTip";
export default {
  name: "CourseList",
  props: {
    courseDatas: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    CourseItem,
    NoDataTip,
  },
};
</script>

<style lang='scss' scoped>
.course-list {
  background-color: #fff;
}
</style>