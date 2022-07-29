<template>
  <div class="slide-wrap">
    <a :href="item.href">
      <img :src="IMG_BASE_URL + item.imgKey" alt />
    </a>
  </div>
</template>

<script>
import { IMG_BASE_URL } from "@/config/index.js";
export default {
  name: "SwiperSlide",
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      IMG_BASE_URL,
    };
  },
};
</script>

<style lang='scss' scoped>
.slide-wrap {
  height: 150px;
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>