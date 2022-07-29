<template>
  <div class="student-item">
    <div class="stu-avatar-cover">
      <img :src="IMG_BASE_URL + item.imgKey" alt />
    </div>
    <div class="info">
      <h3 class="stu-name">{{item.studentName}}</h3>

      <p class="intro">{{item.intro}}</p>
      <div class="study-course">
        <a class="course-lk" :href="item.courseLink">
          学过
          <span>{{item.course}}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { IMG_BASE_URL } from "@/config/index.js";
export default {
  name: "StudentItem",
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
.student-item {
  display: flex;
  padding: 1rem 1rem 0;
  background-color: #fff;
  &:last-child {
    .info {
      border-bottom: none;
    }
  }
  .stu-avatar-cover {
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    overflow: hidden;
  }
  .info {
    flex: 1;
    min-width: 0px;
    margin-left: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #ccc;

    .stu-name {
      font-size: 1.4rem;
      color: #222;
    }
    .intro {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      //   height: 6rem;
      line-height: 2rem;
      margin: 1.2rem 0;
      font-size: 1.4rem;
      color: #666;
    }
    .study-course {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 1.4rem;
      span {
        color: #2080f7;
      }
    }
  }
}
</style>