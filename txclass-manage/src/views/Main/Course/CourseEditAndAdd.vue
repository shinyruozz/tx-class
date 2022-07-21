<template>
  <div class="container">
    <h1 class="title">课程{{id ? '编辑' :'添加'}}</h1>
    <el-card style="width:1350px">
      <el-form :model="courseData" label-width="100px">
        <el-form-item label="课程标题">
          <el-input v-model="courseData.title"></el-input>
        </el-form-item>
        <el-form-item label="课程链接">
          <el-input v-model="courseData.href"></el-input>
        </el-form-item>
        <el-form-item label="课程分类">
          <el-select v-model="courseData.field" placeholder="请选择活动区域">
            <el-option
              :label="field.title"
              :value="field.id"
              v-for="field of courseFields"
              :key="field.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="课程图片:">
          <el-upload class="avatar-uploader" :action="UPLOAD_URL" :on-success="uploadSuccess">
            <img
              :src="imgBaseUrl+courseData.posterKey"
              alt
              v-if="courseData.posterKey"
              class="upload-img"
            />
            <i class="el-icon-plus avatar-uploader-icon" v-else></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="课程价格">
          <el-input v-model="courseData.price"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="formSubmit" type="primary">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import courseTabService from "@/services/courseTab";
import courseService from "@/services/course";

import { showMessage } from "@/libs/utils";

import { UPLOAD_URL, UPLOAD_SAVE_BASE_URL } from "@/config/http.conf.js";

export default {
  name: "CourseEditAndAdd",
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      UPLOAD_URL: UPLOAD_URL,
      //课程分类
      courseFields: [],
      //课程信息
      courseData: {
        posterKey: "",
      },
      imgBaseUrl: UPLOAD_SAVE_BASE_URL,
    };
  },
  created() {
    // 获取编辑信息
    this.id && this.getEditCourseData();
    // 获取分类集合
    this.getCourseTabData();
  },

  methods: {
    //上传图片
    uploadSuccess(response, file, fileList) {
      const { code, result } = response;
      if (code == 0) {
        this.courseData.posterKey = result;
        console.log(this.courseData);
      } else {
        showMessage(code, "上传图片失败", "warning");
      }
    },
    //表单提交
    formSubmit() {
      const text = this.id ? "修改" : "添加";
      this.$confirm(`您确定要${text}课程吗？`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then((res) => {
          this.id ? this.editCourse() : this.addCourse();
        })
        .catch((err) => {});

      console.log(this.courseData);
    },
    //提交修改课程信息
    async editCourse() {
      const { code, msg } = await courseService.editCourse(
        this.id,
        this.courseData
      );
      showMessage(code, msg);
      this.$router.back();
    },
    async getEditCourseData() {
      const res = await courseService.getEditCourse(this.id);
      if (res.code == 0) {
        this.courseData = res.result;
      } else [this.$router.back()];
    },

    async getCourseTabData() {
      const { code, msg, result } = await courseTabService.getCourseTabData();
      if (code == 0) {
        this.courseFields = [{ id: -1, title: "无分类" }].concat(result);
      } else {
        showMessage(code, msg);
      }
    },

    async addCourse() {
      console.log(this.courseData);
      const { code, msg } = await courseService.addCourse(this.courseData);
      showMessage(code, msg);
    },
  },
};
</script>

<style lang='scss' scoped>
.title {
  margin-bottom: 30px;
}

.upload-img {
  width: 300px;
  // height: auto;
  height: 160px;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>