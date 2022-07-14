<template>
  <div class="container">
    <el-table :data="courseCateList" border stripe>
      <el-table-column label="分类id" align="center" prop="id"></el-table-column>
      <el-table-column label="分类标题" align="center" prop="title"></el-table-column>
      <el-table-column label="分类操作" align="center">
        <template v-slot="{row}">
          <el-button type="primary" @click="editHandle(row)">编辑</el-button>
          <el-button type="warning" @click="removeHandle(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import courseTabService from "@/services/courseTab";
import { showMessage } from "@/libs/utils";

export default {
  name: "CourseTabList",
  data() {
    return {
      courseCateList: [],
    };
  },
  created() {
    this.getCourseTabList();
  },
  methods: {
    async getCourseTabList() {
      const { code, msg, result } = await courseTabService.getCourseTabData();
      if (code == 0) {
        showMessage(code, msg);
        this.courseCateList = result;
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
        const { code, msg } = await courseTabService.delCourseTabData(id);
        if (code == 0) {
          const idx = this.courseCateList.findIndex((item) => {
            return item.id == id;
          });
          idx && this.courseCateList.splice(idx, 1);
          showMessage(code, msg);
        } else {
          showMessage(404, "删除课程失败", "warning");
        }
      });
    },

    editHandle(data) {
      this.$router.push("/course-tab/edit/" + data.id);
    },
  },
};
</script>

<style>
</style>