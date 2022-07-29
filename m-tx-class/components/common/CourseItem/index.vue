<template>
  <div class="course-item">
    <a :href="courseData.href" class="course-lk">
      <div class="cover">
        <img :src="IMG_BASE_URL + courseData.posterKey" alt />
      </div>
      <div class="info">
        <h3 class="course-tt">{{ courseData.title }}</h3>
        <div class="other">
          <span class="price">{{courseData.price==0 ? '免费' : "￥" + courseData.price}}</span>
          <span class="count">{{courseData.studentCount}}人报名</span>
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
    courseData: {
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
  width: 50%;
  padding: 1rem;
  .course-lk {
    display: block;
    // width: ;
  }
  .cover {
    width: 100%;
    height: 9rem;
  }
  .info {
    padding-top: 1rem;
    .course-tt {
      display: -webkit-box;
      height: 4rem;
      line-height: 2rem;
      font-size: 1.4rem;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      font-size: #222;
    }
    .other {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 10px;
      .price {
        color: #fe9455;
        font-size: 1.6rem;
      }
      .count {
        font-size: 1.4rem;
        color: #777;
      }
    }
  }
}
</style>