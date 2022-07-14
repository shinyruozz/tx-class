<template>
  <div class="container">
    <el-table :data="collectionsData" border stripe>
      <el-table-column label="集合id" prop="id" align="center" width="80px"></el-table-column>
      <el-table-column label="标题" prop="title" align="center" width="300px"></el-table-column>
      <el-table-column label="信息" prop="info" align="center" width="300px"></el-table-column>
      <el-table-column label="信息背景图" width="250px" align="center">
        <template v-slot="{row}">
          <div class="img-wrap">
            <img :src="imgBaseUrl+row.maskKey" alt />
          </div>
        </template>
      </el-table-column>
      <el-table-column label="QQ群" prop="qqQunLink" align="center"></el-table-column>
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
import collectionService from "@/services/collection";
import { UPLOAD_SAVE_BASE_URL } from "@/config/http.conf.js";
import { showMessage } from "@/libs/utils";
export default {
  name: "CollectionList",
  data() {
    return {
      imgBaseUrl: UPLOAD_SAVE_BASE_URL,
      collectionsData: [],
    };
  },
  created() {
    this.getCollectionData();
  },
  methods: {
    async getCollectionData() {
      const { code, msg, result } = await collectionService.getCollectionData();
      if (code == 0) {
        console.log(result);
        this.collectionsData = result;
        showMessage(code, msg);
      }
    },
    editHandle(id) {
      this.$router.push("/collection/edit/" + id);
    },
    // 下架
    async tackDownHandle(item) {
      item.state = item.state == 1 ? 0 : 1;
      const id = item.id;
      const { code, msg } = await collectionService.editCollectionInfo(id, {
        state: item.state,
      });
      showMessage(code, msg);
      // this.$confirm('')
    },
    // 删除
    delHandle(id) {
      this.$confirm("您确定要删除该课程集合吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async (res) => {
        const { code, msg } = await collectionService.delCollection(id);
        if (code == 0) {
          const idx = this.collectionsData.findIndex((item) => item.id == id);
          this.collectionsData.splice(idx, 1);
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
  width: 100px;
}
</style>