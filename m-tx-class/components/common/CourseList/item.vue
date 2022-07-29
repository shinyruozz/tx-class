<template>
  <div class="course-item">
    <a :href="item.href" class="course-lk">
      <div class="poster-cover">
        <img :src="IMG_BASE_URL + item.posterKey" alt />
      </div>
      <div class="info">
        <h3 class="course-tt">{{item.title}}</h3>
        <div class="other">
          <span class="price">{{item.price == 0 ? '免费' : "￥"+item.price}}</span>
          <span class="buy-count">{{item.studentCount}}人购买</span>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import { IMG_BASE_URL } from "@/config/index.js";
export default {
  name: "CourseItem",
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
.course-item {
  padding: 1rem 0;
  margin: 0 1.5rem;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
  .course-lk {
    display: flex;
  }

  .poster-cover {
    width: 12.4rem;
    height: 7rem;
  }
  .info {
    min-width: 0;
    flex: 1;
    padding-left: 1.5rem;
    .course-tt {
      display: -webkit-box;

      height: 4rem;
      line-height: 2rem;
      font-size: 1.4rem;
      color: #333;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      margin-bottom: 1rem;
    }
    .other {
      .price {
        color: #ff7a38;
        font-size: 1.6rem;
      }
      .buy-count {
        padding-left: 1.5rem;
        font-size: 1.2rem;
        color: #777;
      }
    }
  }
}
</style>