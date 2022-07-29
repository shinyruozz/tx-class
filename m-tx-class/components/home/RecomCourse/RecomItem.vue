<template>
  <div class="recom-item">
    <div class="img-cover">
      <img :src="IMG_BASE_URL + item.posterKey" alt />
    </div>
    <div class="info">
      <a :href="item.href">
        <h3 class="course-tt">{{item.title}}</h3>
      </a>
      <div class="course-face">
        <div class="tea-img-wrap">
          <img :src="IMG_BASE_URL+ item.tearcherKey" alt />
        </div>
        <span class="tea-name">{{item.tearcherName}}</span>
        <i class="icon-split"></i>
        <div class="buy-count">{{item.studentCount}}人购买</div>
      </div>
      <div class="other">
        <button class="buy-btn">立即购买</button>
        <span class="price">￥{{item.price}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { IMG_BASE_URL } from "@/config/index.js";

export default {
  name: "RecomItem",
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
@import "@/assets/styles/_variables.scss";

.recom-item {
  display: flex;
  padding: 1rem;
  border-bottom: 1px solid #ccc;

  .img-cover {
    margin-top: 0.5rem;
    width: 10rem;
    height: 10rem;
  }
  .info {
    flex: 1;
    min-width: 0;
    padding-left: 10px;

    .course-tt {
      display: -webkit-box;
      height: 4rem;
      line-height: 2rem;
      font-size: 1.4rem;
      color: #222;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    .course-face {
      display: flex;
      align-items: center;
      margin: 1rem 0;
      .tea-img-wrap {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        overflow: hidden;
      }
      .tea-name {
        font-size: 1.4rem;
        padding-left: 1rem;
      }
      .icon-split {
        width: 0.1rem;
        height: 1.4rem;
        background-color: #777;
        margin: 0 1rem;
      }
      .buy-count {
        font-size: 1.4rem;
        color: #222;
      }
    }

    .other {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .buy-btn {
        width: 8rem;
        height: 3rem;
        background-color: $defaultColor;
        color: #fff;
      }
      .price {
        color: #fe9455;
        font-size: 1.6rem;
      }
    }
  }
}
</style>