<template>
  <div class="container">
    <h1>推荐课程修改</h1>
    <el-card style="width:1350px; margin-top:30px;padding-top:30px">
      <el-form :model="recomCourseData">
        <el-form-item label="推荐标题" label-width="100px">
          <el-input v-model="recomCourseData.title"></el-input>
        </el-form-item>
        <el-form-item label="推荐描述" label-width="100px">
          <el-input v-model="recomCourseData.description"></el-input>
        </el-form-item>
        <el-form-item label="老师图片" label-width="100px">
          <el-upload :action="uploadUrl" :on-success="teacherUploadSuccess" class="avatar-uploader">
            <img :src="teacherImgUrl" alt v-if="recomCourseData.tearcherKey" class="upload-img" />
            <i class="el-icon-plus avatar-uploader-icon" v-else></i>
          </el-upload>
          <!-- <el-input v-model="agencyData.name"></el-input> -->
        </el-form-item>
        <el-form-item label="课程图片" label-width="100px">
          <el-upload :action="uploadUrl" :on-success="posterUploadSuccess" class="avatar-uploader">
            <img :src="posterImgUrl" alt v-if="recomCourseData.posterKey" class="upload-img" />
            <i class="el-icon-plus avatar-uploader-icon" v-else></i>
          </el-upload>
          <!-- <el-input v-model="agencyData.name"></el-input> -->
        </el-form-item>
        <el-form-item label="课程链接" label-width="100px">
          <el-input v-model="recomCourseData.href"></el-input>
        </el-form-item>
        <el-form-item label-width="100px">
          <el-button type="primary" @click="submitForm">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import recomCourseService from "@/services/recomCourse";
import { UPLOAD_SAVE_BASE_URL, UPLOAD_URL } from "@/config/http.conf.js";
import { showMessage } from "@/libs/utils";
export default {
  name: "RecomCourseEdit",
  props: ["id"],
  data() {
    return {
      uploadUrl: UPLOAD_URL,

      imgBaseUrl: UPLOAD_SAVE_BASE_URL,

      recomCourseData: {},
    };
  },
  computed: {
    teacherImgUrl() {
      return UPLOAD_SAVE_BASE_URL + this.recomCourseData.tearcherKey;
    },
    posterImgUrl() {
      return UPLOAD_SAVE_BASE_URL + this.recomCourseData.posterKey;
    },
  },
  created() {
    this.id && this.getRecomCourseInfo();
  },
  methods: {
    async getRecomCourseInfo() {
      const { code, msg, result } = await recomCourseService.getRecomCourseInfo(
        this.id
      );
      if (code == 0) {
        console.log(result);
        this.recomCourseData = result;
        showMessage(code, msg);
      }
    },
    teacherUploadSuccess(res) {
      const { code, result } = res;
      if (code == 0) {
        this.recomCourseData.tearcherKey = result;
      }
    },
    posterUploadSuccess(res) {
      const { code, result } = res;
      if (code == 0) {
        this.recomCourseData.posterKey = result;
      }
    },
    submitForm() {
      this.$confirm("您确定要修改吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      }).then(async (res) => {
        const { code, msg } = await recomCourseService.editRecomCourseInfo(
          this.id,
          this.recomCourseData
        );
        showMessage(code, msg);
        this.$router.back();
      });
    },
  },
};
</script>

<style scoped>
.upload-img {
  width: 150px;
  /* height: 100px; */
}
</style>