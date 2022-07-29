<template>
  <div class="nav-tab-wrap" :style="{height:height}">
    <div :class="['tab-list',{ 'border-bottom': borderBtmShow}]">
      <tab-item
        v-for="(item,index) of navDatas"
        :key="index"
        :item="item"
        @click.native="tabItemClick(index)"
        :isActive="curIdx==index"
      ></tab-item>
    </div>
  </div>
</template>

<script>
import TabItem from "./tabItem.vue";
export default {
  name: "NavTab",
  props: {
    navDatas: {
      type: Array,
      required: true,
    },
    borderBtmShow: {
      type: Boolean,
      default: true,
    },
    curIdx: {
      type: Number,
      default: -1,
    },
    height: {
      type: String,
      default: "5rem",
    },
  },
  components: {
    TabItem,
  },
  methods: {
    tabItemClick(index) {
      this.$emit("itemClick", index);
    },
  },
};
</script>

<style scoped lang='scss'>
.nav-tab-wrap {
  margin-top: 1rem;
  height: 5rem;
  line-height: 5rem;
  background-color: #fff;
  overflow: hidden;

  .tab-list {
    display: flex;
    height: 115%;
    overflow-x: scroll;
    &.border-bottom {
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>


