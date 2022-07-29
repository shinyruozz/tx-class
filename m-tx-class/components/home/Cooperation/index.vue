<template>
  <div class="cooperation-wrap">
    <div class="cooperation-list">
      <cooperation-item v-for="(item,index) of data" :key="index" :item="item"></cooperation-item>
    </div>
  </div>
</template>

<script>
import CooperationItem from "./item.vue";
export default {
  name: "Cooperation",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  components: {
    CooperationItem,
  },
};
</script>

<style lang='scss' scoped>
.cooperation-wrap {
  background-color: #fff;
  .cooperation-list {
    display: flex;
  }
}
</style>