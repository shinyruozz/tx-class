<template>
  <div class="course-tab-bar">
    <div class="course-tab-list">
      <course-tab-item
        v-for="(item,index) of courseTabDatas"
        :key="item.id"
        :item="item"
        @click.native="tabItemClick(index)"
        :isActive="index == curIdx"
      ></course-tab-item>
    </div>
  </div>
</template>

<script>
import CourseTabItem from "./item.vue";
export default {
  name: "CourseTabBar",
  props: {
    courseTabDatas: {
      type: Array,
      default() {
        return [];
      },
    },
    curIdx: {
      type: Number,
      default: 0,
    },
  },
  components: {
    CourseTabItem,
  },
  methods: {
    tabItemClick(index) {
      this.$emit("tabItemClick", index);
    },
  },
};
</script>

<style lang='scss' scoped>
.course-tab-bar {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  background-color: #fff;
  overflow: hidden;
  .course-tab-list {
    height: 3.8rem;
    display: flex;
    align-items: center;
    overflow-x: scroll;
  }
}
</style>