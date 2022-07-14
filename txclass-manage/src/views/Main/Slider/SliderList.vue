<template>
  <div class="container">
    <el-table :data="slidersData" border stripe>
      <el-table-column label="id" prop="id" align="center" width="80px"></el-table-column>
      <el-table-column label="标题" prop="title" align="center" width="350px"></el-table-column>
      <el-table-column label="链接地址" prop="href" align="center" width="300px"></el-table-column>
      <el-table-column label="轮播图片" align="center">
        <template v-slot="{row}">
          <div class="img-wrap">
            <img :src="imgBaseUrl+row.imgKey" alt />
          </div>
        </template>
      </el-table-column>

      <el-table-column label="操作" align="center" width="250px">
        <template v-slot="{row}">
          <el-button type="primary" size="mini" @click="editHandle(row.id)">编辑</el-button>
          <el-button
            type="warning"
            size="mini"
            @click="tackDownHandle(row)"
          >{{row.state==1 ? '下架':'上架'}}</el-button>
          <el-button type="danger" size="mini" @click="delHandle(row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import sliderService from "@/services/slider";
import { UPLOAD_SAVE_BASE_URL } from "@/config/http.conf.js";
import { showMessage } from "@/libs/utils";
export default {
  name: "SliderList",
  data() {
    return {
      imgBaseUrl: UPLOAD_SAVE_BASE_URL,
      slidersData: [],
    };
  },
  created() {
    this.getSliderData();
  },
  methods: {
    async getSliderData() {
      const { code, msg, result } = await sliderService.getSliderData();
      if (code == 0) {
        console.log(result);
        this.slidersData = result;
        showMessage(code, msg);
      }
    },
    editHandle(id) {
      this.$router.push("/slider/edit/" + id);
    },
    // 下架
    async tackDownHandle(item) {
      item.state = item.state == 1 ? 0 : 1;
      const id = item.id;
      const { code, msg } = await sliderService.editSliderInfo(id, {
        state: item.state,
      });
      showMessage(code, msg);
      // this.$confirm('')
    },
    // 删除
    delHandle(id) {
      this.$confirm("您确定要删除该轮播图吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async (res) => {
        const { code, msg } = await sliderService.delSlider(id);
        if (code == 0) {
          const idx = this.slidersData.findIndex((item) => item.id == id);
          this.slidersData.splice(idx, 1);
          showMessage(code, msg);
        }
      });
    },
  },
};
</script>

<style scoped>
.img-wrap {
  display: inline-block;
  width: 350px;
  height: 100px;
}
</style>