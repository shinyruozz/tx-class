<template>
  <div :class="['course-tab-item', {current:isActive}]">{{item.title}}</div>
</template>

<script>
export default {
  name: "CourseTabItem",
  props: {
    item: {
      type: Object,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang='scss' scoped>
.course-tab-item {
  padding: 0 1rem;
  flex-shrink: 0;
  &.current {
    color: #1a73e8;
  }
}
</style>