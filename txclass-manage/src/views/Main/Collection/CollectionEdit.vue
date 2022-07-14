<template>
  <div class="container">
    <h1>课程集合修改</h1>
    <el-card style="width:1350px; margin-top:30px;padding-top:30px">
      <el-form :model="collectionData">
        <el-form-item label="课程集合信息" label-width="100px">
          <el-input v-model="collectionData.info"></el-input>
        </el-form-item>
        <el-form-item label="课程分类标题" label-width="100px">
          <el-input v-model="collectionData.title"></el-input>
        </el-form-item>
        <el-form-item label="背景图片" label-width="100px">
          <el-upload :action="uploadUrl" :on-success="uploadSuccess" class="avatar-uploader">
            <img :src="logoImgUrl" alt v-if="collectionData.maskKey" class="upload-img" />
            <i class="el-icon-plus avatar-uploader-icon" v-else></i>
          </el-upload>
          <!-- <el-input v-model="agencyData.name"></el-input> -->
        </el-form-item>
        <el-form-item label="QQ群" label-width="100px">
          <el-input v-model="collectionData.qqQunLink"></el-input>
        </el-form-item>
        <el-form-item label-width="100px">
          <el-button type="primary" @click="submitForm">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import collectionService from "@/services/collection";
import { UPLOAD_SAVE_BASE_URL, UPLOAD_URL } from "@/config/http.conf.js";
import { showMessage } from "@/libs/utils";
export default {
  name: "CollectionEdit",
  props: ["id"],
  data() {
    return {
      uploadUrl: UPLOAD_URL,

      imgBaseUrl: UPLOAD_SAVE_BASE_URL,

      collectionData: {},
    };
  },
  computed: {
    logoImgUrl() {
      return UPLOAD_SAVE_BASE_URL + this.collectionData.maskKey;
    },
  },
  created() {
    this.id && this.getCollectionInfo();
  },
  methods: {
    async getCollectionInfo() {
      const { code, msg, result } = await collectionService.getCollectionInfo(
        this.id
      );
      if (code == 0) {
        console.log(result);
        this.collectionData = result;
        showMessage(code, msg);
      }
    },
    uploadSuccess(res) {
      const { code, result } = res;
      if (code == 0) {
        this.collectionData.maskKey = result;
      }
    },
    submitForm() {
      this.$confirm("您确定要修改吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      }).then(async (res) => {
        const { code, msg } = await collectionService.editCollectionInfo(
          this.id,
          this.collectionData
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