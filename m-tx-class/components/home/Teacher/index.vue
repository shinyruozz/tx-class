<template>
  <div class="teacher-wrap">
    <card-title :title="headTitle" v-if="headShow"></card-title>
    <div class="teacher-list">
      <teacher-item v-for="item of teacherDatas" :key="item.id" :item="item"></teacher-item>
    </div>
  </div>
</template>

<script>
import TeacherItem from "./item.vue";
import CardTitle from "@/components/common/CardTitle";
export default {
  name: "Teacher",
  props: {
    teacherDatas: {
      type: Array,
      required: true,
    },
    headShow: {
      type: Boolean,
      default: true,
    },
    headTitle: {
      type: String,
      default: "优秀老师",
    },
  },
  components: {
    TeacherItem,
    CardTitle,
  },
};
</script>

<style lang='scss' scoped>
.teacher-wrap {
  margin-top: 1rem;
  border-bottom: 1px solid #ccc;

  .teacher-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #fff;
  }
}
</style>