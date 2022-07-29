<template>
  <div class="teacher-item">
    <a :href="item.href" class="item-lk">
      <div class="tea-avatar-cover">
        <img :src=" IMG_BASE_URL + item.imgKey" alt />
      </div>
      <div class="info">
        <h3 class="tea-name">{{item.teacherName}}</h3>
        <div class="count">
          <span class="course-count">课程数:{{item.courseCount || 0}}</span>
          <span class="student-count">学生数:{{item.studentCount || 0}}</span>
        </div>
        <p class="intro">{{item.intro}}</p>
      </div>
    </a>
  </div>
</template>

<script>
import { IMG_BASE_URL } from "@/config/index.js";
export default {
  name: "TeacherItem",
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
.teacher-item {
  width: 50%;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;

  .tea-avatar-cover {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
  }

  .tea-name {
    font-size: 1.6rem;
    color: #222;
    text-align: center;
    padding-top: 1rem;
  }
  .intro {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;

    height: 6rem;
    line-height: 2rem;
    font-size: 1.2rem;
    color: #777;
    overflow: hidden;
  }
  .count {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.4rem;
    margin: 1rem 0;
  }
}
</style>