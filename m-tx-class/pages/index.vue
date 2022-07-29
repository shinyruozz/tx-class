<template>
  <div class="container">
    <m-header :iconLeftShow="false" :title="pageTitle" :iconRightShow="false"></m-header>
    <pull-down-load-text :text="loadText"></pull-down-load-text>
    <scroll-wrap ref="scrollWrap" @pullingDown="pullingDown">
      <!-- 轮播图 -->
      <index-swiper :sliderDatas="sliderDatas"></index-swiper>
      <!-- 导航 -->
      <nav-tab :navDatas="navDatas"></nav-tab>

      <!-- 合作机构 -->
      <cooperation :data="linkDatas"></cooperation>
      <nav-tab
        :navDatas="navListDatas"
        :borderBtmShow="false"
        @itemClick="itemClick"
        :curIdx="curIdx"
      ></nav-tab>

      <swiper ref="swiper" :options="swiperOptions">
        <!-- 推荐 -->
        <swiper-slide v-if="curIdx == 0">
          <!-- 推荐课程 -->
          <recom-course :data="recomCourseDatas"></recom-course>
          <!-- 课程集合 -->
          <collection :collectionDatas="collectionDatas"></collection>
          <!-- 教师 -->
          <teacher :teacherDatas="starTeacherDatas"></teacher>
          <!-- 学生 -->
          <student :studentDatas="studentDatas"></student>

          <m-footer></m-footer>
        </swiper-slide>
        <!-- 可报名课程 -->
        <swiper-slide v-if="curIdx == 1">
          <course-tab-bar
            :courseTabDatas="courseTabDatas"
            class="stop-swiping"
            @tabItemClick="tabItemClick"
            :curIdx="curCourseTabIdx"
          ></course-tab-bar>
          <course-list class="course-list" :courseDatas="curCourseDatas"></course-list>
        </swiper-slide>
        <!-- 老师 -->
        <swiper-slide v-if="curIdx == 2">
          <teacher :teacherDatas="teacherDatas" :headShow="false"></teacher>
        </swiper-slide>
      </swiper>
    </scroll-wrap>
  </div>
</template>

<script>
import MHeader from "@/components/common/Header/index.vue";
import ScrollWrap from "@/components/common/ScrollWrap/index.vue";
import NavTab from "@/components/home/NavTab";
import IndexSwiper from "@/components/common/Swiper";
import RecomCourse from "@/components/home/RecomCourse";
import Collection from "@/components/home/Collection";
import Cooperation from "@/components/home/Cooperation";
import Teacher from "@/components/home/Teacher";
import Student from "@/components/home/Student";
import MFooter from "@/components/common/Footer";
import CourseTabBar from "@/components/home/CourseTabBar";
import PullDownLoadText from "../components/common/PullDownLoadText";

import navListDatas from "@/assets/data/nav.js";

import CourseList from "../components/common/CourseList";

import { filterCourseData } from "../utils/tools";

export default {
  name: "IndexPage",
  components: {
    MHeader,
    ScrollWrap,
    IndexSwiper,
    NavTab,
    RecomCourse,
    Collection,
    Cooperation,
    Teacher,
    Student,
    MFooter,
    CourseTabBar,
    CourseList,
    PullDownLoadText,
  },
  data() {
    return {
      navListDatas,
      swiperOptions: {
        noSwiping: true,
        noSwipingClass: "stop-swiping",
      },
      loadText: "正在刷新...",
      pageTitle: "JS++移动端",
      curIdx: 1,
      curCourseTabIdx: 0,
      curCourseDatas: [], // 选项课程数据
    };
  },
  async asyncData({ app }) {
    // const homeDatas = await
    const { data } = await app.$axios.get("m/api/home");
    data.curCourseDatas = data.courseDatas;
    return data;
  },
  methods: {
    async getHomeDatas() {
      const { data, code } = await this.$axios.get("m/api/home");
      if (code == 0) {
        // this.collectionDatas = data.data
        // data.curCourseDatas = data.courseDatas;collectionDatas
        this.collectionDatas = data.collectionDatas;
        this.courseDatas = data.courseDatas;
        this.courseTabDatas = data.courseTabDatas;
        this.linkDatas = data.linkDatas;
        this.navDatas = data.navDatas;
        this.recomCourseDatas = data.recomCourseDatas;
        this.sliderDatas = data.sliderDatas;
        this.starTeacherDatas = data.starTeacherDatas;
        this.studentDatas = data.studentDatas;
        this.teacherDatas = data.teacherDatas;
      }
      this.setCurDCourseatas();
    },

    // 分类点击
    itemClick(index) {
      this.curIdx = index;
      this.$refs.swiper.swiper.slideTo(index);
      this.refreshBs();
    },

    //课程分类点击
    tabItemClick(index) {
      this.curCourseTabIdx = index;
      this.setCurDCourseatas();
    },
    setCurDCourseatas() {
      const field = this.courseTabDatas[this.curCourseTabIdx].id;

      this.curCourseDatas = filterCourseData(this.courseDatas, field);
    },
    // // slide 滑动于 tab index 关联
    // slideChange() {
    //   this.curIdx = this.$refs.swiper.swiper.realIndex;
    // },
    //重新计算better-scroll
    refreshBs(cb) {
      this.$nextTick(() => {
        this.$refs.scrollWrap.refresh(cb);
      });
    },
    //下拉刷新
    async pullingDown(scrollWrap) {
      await this.getHomeDatas();

      setTimeout(() => {
        this.loadText = "刷新成功";
        scrollWrap.finishPullDown();
        setTimeout(() => {
          this.loadText = "正在刷新...";
        }, 1000);
      }, 1000);
    },
  },
};
</script>

<style scoped lang='scss'>
.swiper-container::v-deep .swiper-slide {
  min-height: 38vh;
  background-color: #fff;
}
</style>
