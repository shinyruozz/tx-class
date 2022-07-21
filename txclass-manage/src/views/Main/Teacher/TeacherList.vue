<template>
  <div class="container">
    <el-table :data="teacherList" border stripe>
      <el-table-column label="分类id" align="center" prop="id" width="100px"></el-table-column>
      <el-table-column label="学生数量" align="center" prop="studentCount" width="100px"></el-table-column>
      <el-table-column label="课程数量" align="center" prop="courseCount" width="100px"></el-table-column>
      <el-table-column label="链接" align="center" prop="href" width="200px"></el-table-column>
      <el-table-column label="老师介绍" align="center" prop="intro" width="500px"></el-table-column>
      <el-table-column label="老师图片" align="center" prop="href" width="150px">
        <template v-slot="{row}">
          <div class="img-wrap">
            <img :src="imgBaseUrl+row.imgKey" alt />
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template v-slot="{row}">
          <el-button type="warning" @click="setHotTeacher(row)">{{row.isStar == 1? '下线' : '上线'}}明星老师</el-button>
          <el-button type="primary" @click="editHandle(row.id)">编辑</el-button>
          <el-button type="danger" @click="removeHandle(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import teacherService from "@/services/teacher";
import { showMessage } from "@/libs/utils";
import { UPLOAD_SAVE_BASE_URL } from "@/config/http.conf.js";
export default {
  name: "TeacherList",
  data() {
    return {
      imgBaseUrl: UPLOAD_SAVE_BASE_URL,
      teacherList: [],
    };
  },
  created() {
    this.getTeacherList();
  },
  methods: {
    async getTeacherList() {
      const { code, msg, result } = await teacherService.getTeacherData();
      if (code == 0) {
        showMessage(code, msg);
        this.teacherList = result;
        console.log(result);
      }
    },
    removeHandle(data) {
      this.$confirm("请问你确定要删除吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async (res) => {
        const id = data.id;
        const { code, msg } = await teacherService.delTeacher(id);
        if (code == 0) {
          const idx = this.teacherList.findIndex((item) => {
            return item.id == id;
          });
          idx && this.teacherList.splice(idx, 1);
          showMessage(code, msg);
        } else {
          showMessage(404, "删除老师失败", "warning");
        }
      });
    },

    editHandle(data) {
      this.$router.push("/teacher/edit/" + data.id);
    },
    async setHotTeacher(item) {
      item.isStar = item.isStar == 1 ? 0 : 1;
      const { code } = await teacherService.editTeacherInfo(item.id, {
        isStar: item.isStar,
      });
      showMessage(code, "设置成功");
    },
    editHandle(id) {
      this.$router.push("/teacher/edit/" + id);
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