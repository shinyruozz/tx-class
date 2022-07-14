<template>
  <div class="container">
    <el-descriptions title="机构信息" direction="vertical" :column="5" border>
      <el-descriptions-item label="机构名称" :span="1">{{agencyData.name}}</el-descriptions-item>
      <el-descriptions-item label="机构描述" :span="1">{{agencyData.description}}</el-descriptions-item>
      <el-descriptions-item label="学生数量" :span="1">{{agencyData.studentCount}}</el-descriptions-item>
      <el-descriptions-item label="机构logo" :span="2">
        <div class="logo-wrap">
          <img :src="logoImgUrl" alt srcset />
        </div>
      </el-descriptions-item>
      <el-descriptions-item label="好评度">{{agencyData.feedbackRate}}</el-descriptions-item>
      <el-descriptions-item label="logo链接地址" :span="3">{{agencyData.logoUrl}}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
import agencyService from "@/services/agency";
import { showMessage } from "@/libs/utils";
import { UPLOAD_SAVE_BASE_URL } from "@/config/http.conf.js";
export default {
  name: "Agency",
  data() {
    return {
      agencyData: {},
    };
  },
  created() {
    this.getAgencyInfo();
  },
  computed: {
    logoImgUrl() {
      return UPLOAD_SAVE_BASE_URL + this.agencyData.logoKey;
    },
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
  },
};
</script>

<style lang='scss' scoped>
.logo-wrap {
  width: 100px;
  height: 100px;
}
.el-descriptions::v-deep
  .el-descriptions__table
  .el-descriptions-item__content {
  vertical-align: middle;
}
</style>