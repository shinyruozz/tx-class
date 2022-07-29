<template>
  <div class="swiper-wrap">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(slide,index) of sliderDatas" :key="index">
        <swiper-item :item="slide"></swiper-item>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import SwiperItem from "./swiperItem.vue";
export default {
  name: "SwiperWrap",
  props: {
    sliderDatas: {
      type: Array,
      required: true,
    },
  },
  components: {
    SwiperItem,
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        delay: 2000,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
};
</script>

<style lang='scss' scoped>
/deep/ .swiper-pagination .swiper-pagination-bullet {
  background-color: #06c1ae !important;
}
</style>