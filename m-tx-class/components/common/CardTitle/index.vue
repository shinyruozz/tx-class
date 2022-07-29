<template>
  <h2 class="card-tt">{{title}}</h2>
</template>

<script>
export default {
  name: "CardTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang='scss'>
.card-tt {
  height: 4.4rem;
  line-height: 4.4rem;
  padding: 0 10px;
  background-color: #fff;
  font-size: 1.6rem;
  border-bottom: 1px solid #ccc;
}
</style>
