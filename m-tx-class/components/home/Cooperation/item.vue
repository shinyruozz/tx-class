<template>
  <div class="cooperation-item">
    <a :href="item.link" class="item-lk">
      <div class="logo-img-wrap">
        <img :src="item.logoUrl" alt />
      </div>
      <h3 class="agency-tt">{{item.title}}</h3>
    </a>
  </div>
</template>

<script>
export default {
  name: "Cooperation",
  props: {
    item: {
      type: Object,
    },
  },
};
</script>

<style lang='scss'>
.cooperation-item {
  flex: 1;
  padding: 1rem;
  .item-lk {
    .logo-img-wrap {
      width: 4rem;
      height: 4rem;
      margin: 1rem auto 1.5rem;
    }
    .agency-tt {
      text-align: center;
      font-size: 1.4rem;
      color: #777;
    }
  }
}
</style>