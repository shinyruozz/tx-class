<template>
  <div :class="['tab-item',{ current: isActive}]">
    <a :href="item.link">{{item.title}}</a>
  </div>
</template>

<script>
export default {
  name: "TabItem",
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
.tab-item {
  flex: 1;
  text-align: center;
  font-size: 1.5rem;
  color: #222;
  flex-shrink: 0;
  float: left;
  padding: 0 2rem;

  &.current {
    a {
      color: #1a73e8;
    }
  }
}
</style>