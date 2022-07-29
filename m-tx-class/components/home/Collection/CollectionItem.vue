<template>
  <div class="collection-item">
    <card-title :title="item.title"></card-title>
    <div class="course-list">
      <course-item
        v-for="courseItem of item.courseDatas"
        :key="courseItem.id"
        :courseData="courseItem"
      ></course-item>
    </div>
  </div>
</template>

<script>
import CardTitle from "@/components/common/CardTitle/index.vue";
import CourseItem from "@/components/common/CourseItem/index.vue";
export default {
  name: "CollectionItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  components: {
    CardTitle,
    CourseItem,
  },
};
</script>

<style lang='scss' scoped>
.collection-item {
  margin-top: 1rem;
  .course-list {
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
  }
}
</style>