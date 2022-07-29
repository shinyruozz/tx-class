<template>
  <div class="student-wrap">
    <card-title title="优秀学生"></card-title>
    <div class="student-list">
      <student-item v-for="item of studentDatas" :key="item.id" :item="item"></student-item>
    </div>
  </div>
</template>

<script>
import StudentItem from "./item.vue";
import CardTitle from "@/components/common/CardTitle";
export default {
  name: "Student",
  props: {
    studentDatas: {
      type: Array,
      required: true,
    },
  },
  components: {
    StudentItem,
    CardTitle,
  },
};
</script>

<style lang='scss' scoped>
.student-wrap {
  margin-top: 1rem;
}
</style>