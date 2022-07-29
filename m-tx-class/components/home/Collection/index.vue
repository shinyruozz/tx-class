<template>
  <div class="collection-wrap">
    <collection-item v-for="item of collectionDatas" :key="item.id" :item="item"></collection-item>
  </div>
</template>

<script>
import CollectionItem from "./CollectionItem.vue";
export default {
  name: "Collection",
  props: {
    collectionDatas: {
      type: Array,
    },
  },
  components: { CollectionItem },
};
</script>

<style lang='scss' scoped>
.collection-wrap {
  margin-top: 1rem;
}
</style>