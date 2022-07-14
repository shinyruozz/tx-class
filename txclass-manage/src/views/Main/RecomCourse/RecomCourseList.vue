<template>
  <div class="container">
    1
    <el-table :data="recomCourseData" border stripe>
      <el-table-column label="id" prop="id" align="center" width="80px"></el-table-column>
      <el-table-column label="标题" prop="title" align="center" width="100px"></el-table-column>
      <el-table-column label="描述" prop="description" align="center" width="300px"></el-table-column>
      <el-table-column label="课程链接" prop="href" align="center" width="200px"></el-table-column>
      <el-table-column label="老师名称" prop="tearcherName" align="center" width="100px"></el-table-column>
      <el-table-column label="学生数量" prop="studentCount" align="center"></el-table-column>
      <!-- <el-table-column label="老师图片" prop="tearcherName" align="center" width="300px"></el-table-column> -->

      <el-table-column label="老师图片" width="150px" align="center">
        <template v-slot="{row}">
          <div class="img-wrap">
            <img :src="imgBaseUrl+row.tearcherKey" alt />
          </div>
        </template>
      </el-table-column>
      <el-table-column label="课程图片" width="300px" align="center">
        <template v-slot="{row}">
          <div class="img-wrap">
            <img :src="imgBaseUrl+row.posterKey" alt />
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
import recomCourseService from "@/services/recomCourse";
import { UPLOAD_SAVE_BASE_URL } from "@/config/http.conf.js";
import { showMessage } from "@/libs/utils";
export default {
  name: "RecomCourseList",
  data() {
    return {
      imgBaseUrl: UPLOAD_SAVE_BASE_URL,
      recomCourseData: [],
    };
  },
  created() {
    this.getRecomCourseData();
  },
  methods: {
    async getRecomCourseData() {
      const { code, msg, result } =
        await recomCourseService.getRecomCourseData();
      if (code == 0) {
        console.log(result);
        this.recomCourseData = result;
        showMessage(code, msg);
      }
    },
    editHandle(id) {
      this.$router.push("/recom-course/edit/" + id);
    },
    // 下架
    async tackDownHandle(item) {
      item.state = item.state == 1 ? 0 : 1;
      const id = item.id;
      const { code, msg } = await recomCourseService.editRecomCourseInfo(id, {
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
        const { code, msg } = await recomCourseService.delRecomCourse(id);
        if (code == 0) {
          const idx = this.recomCourseData.findIndex((item) => item.id == id);
          this.recomCourseData.splice(idx, 1);
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