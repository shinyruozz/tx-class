<template>
  <div class="container">
    <h1>轮播图片{{id ? '编辑':'添加'}}</h1>
    <el-card style="width:1350px; margin-top:30px;padding-top:30px">
      <el-form :model="sliderData">
        <el-form-item label="标题" label-width="100px">
          <el-input v-model="sliderData.title"></el-input>
        </el-form-item>
        <el-form-item label="图片链接地址" label-width="100px">
          <el-input v-model="sliderData.href"></el-input>
        </el-form-item>
        <el-form-item label="背景图片" label-width="100px">
          <el-upload :action="uploadUrl" :on-success="uploadSuccess" class="avatar-uploader">
            <img :src="slideImgUrl" alt v-if="sliderData.imgKey" class="upload-img" />
            <i class="el-icon-plus avatar-uploader-icon" v-else></i>
          </el-upload>
          <!-- <el-input v-model="agencyData.name"></el-input> -->
        </el-form-item>

        <el-form-item label-width="100px">
          <el-button type="primary" @click="submitForm">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import sliderService from "@/services/slider";
import { UPLOAD_SAVE_BASE_URL, UPLOAD_URL } from "@/config/http.conf.js";
import { showMessage } from "@/libs/utils";
export default {
  name: "SliderEditAndAdd",
  props: ["id"],
  data() {
    return {
      uploadUrl: UPLOAD_URL,

      imgBaseUrl: UPLOAD_SAVE_BASE_URL,

      sliderData: {
        imgKey: "",
      },
    };
  },
  computed: {
    slideImgUrl() {
      return UPLOAD_SAVE_BASE_URL + this.sliderData.imgKey;
    },
  },
  created() {
    this.id && this.getSliderInfo();
  },
  methods: {
    async getSliderInfo() {
      const { code, msg, result } = await sliderService.getSliderInfo(this.id);
      if (code == 0) {
        console.log(result);
        this.sliderData = result;
        showMessage(code, msg);
      }
    },
    uploadSuccess(res) {
      console.log(res);
      const { code, result } = res;
      if (code == 0) {
        this.sliderData.imgKey = result;
        console.log(this.sliderData.imgKey);
      }
    },
    submitForm() {
      const text = this.id ? "修改" : "添加";
      this.$confirm("您确定要" + text + "吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      }).then(async (res) => {
        this.id ? this.editSlider() : this.addSlider();
      });
    },
    async addSlider() {
      const { code, msg } = await sliderService.addSlider(this.sliderData);
      showMessage(code, msg);
    },
    async editSlider() {
      const { code, msg } = await sliderService.editSliderInfo(
        this.id,
        this.sliderData
      );
      showMessage(code, msg);
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.upload-img {
  width: 550px;
  /* height: 100px; */
}
</style>