<template>
  <div class="container">
    <el-table :data="studentListData" border stripe>
      <el-table-column prop="id" label="id" align="center" width="100px"></el-table-column>
      <el-table-column prop="studentName" label="学生名称" align="center" width="150px"></el-table-column>
      <el-table-column prop="intro" label="介绍" align="center"></el-table-column>
      <el-table-column prop="imgKey" label="学生图片" align="center">
        <template v-slot="{row}">
          <div class="img-wrap">
            <img :src="imgBaseUrl + row.imgKey" alt srcset />
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template v-slot="{row}">
          <el-button type="warning" @click="changeState(row)">{{row.state == 1 ? '设置为':'取消'}}优秀学生</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import studentService from "@/services/student.js";
import { showMessage } from "@/libs/utils.js";
import { UPLOAD_SAVE_BASE_URL } from "@/config/http.conf.js";
export default {
  name: "StudentList",
  data() {
    return {
      imgBaseUrl: UPLOAD_SAVE_BASE_URL,
      studentListData: [],
    };
  },
  created() {
    this.getStudentList();
  },
  methods: {
    async getStudentList() {
      const { code, msg, result } = await studentService.getStudentData();
      console.log(result);
      if (code == 0) {
        this.studentListData = result.list;
        showMessage(code, msg);
      }
    },
    async changeState(item) {
      item.state = item.state == 1 ? 0 : 1;
      const { code, msg } = await studentService.editStudentState(
        item.id,
        item.state
      );
      showMessage(code, msg);
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