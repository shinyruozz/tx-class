<template>
  <div class="container">
    <h1>机构编辑</h1>
    <el-card style="width:1350px;margin-top:30px;padding-top:30px">
      <el-form :model="agencyData">
        <el-form-item label="机构名称" label-width="100px">
          <el-input v-model="agencyData.name"></el-input>
        </el-form-item>
        <el-form-item label="机构描述" label-width="100px">
          <el-input v-model="agencyData.description"></el-input>
        </el-form-item>
        <el-form-item label="机构logo" label-width="100px">
          <el-upload :action="uploadUrl" :on-success="uploadSuccess" class="avatar-uploader">
            <img :src="logoImgUrl" alt v-if="agencyData.logoKey" class="upload-img" />
            <i class="el-icon-plus avatar-uploader-icon" v-else></i>
          </el-upload>
          <!-- <el-input v-model="agencyData.name"></el-input> -->
        </el-form-item>
        <el-form-item label="logo链接地址" label-width="100px">
          <el-input v-model="agencyData.logoUrl"></el-input>
        </el-form-item>
        <el-form-item label-width="100px">
          <el-button type="primary" @click="submitForm">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import agencyService from "@/services/agency";
import { showMessage } from "@/libs/utils";
import { UPLOAD_SAVE_BASE_URL, UPLOAD_URL } from "@/config/http.conf.js";
console.log(UPLOAD_URL);
export default {
  name: "AgencyEdit",
  data() {
    return {
      uploadUrl: UPLOAD_URL,
      agencyData: {},
    };
  },
  computed: {
    logoImgUrl() {
      return UPLOAD_SAVE_BASE_URL + this.agencyData.logoKey;
    },
  },
  created() {
    this.getAgencyInfo();
  },
  methods: {
    async getAgencyInfo() {
      const { code, msg, result } = await agencyService.getAgencyInfo();
      if (code == 0) {
        this.agencyData = result;
        showMessage(code, msg);
        console.log(result);
      } else {
        showMessage(code, "获取机构信息失败", "warning");
      }
    },
    uploadSuccess(res) {
      const { code, result } = res;
      if (code == 0) {
        this.agencyData.logoKey = result;
      }
    },
    async editAgencyInfo() {
      const { code, msg } = await agencyService.editAgencyInfo(this.agencyData);
      showMessage(code, msg);
    },

    submitForm() {
      this.$confirm("您确定要修改吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      }).then((res) => {
        this.editAgencyInfo();
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