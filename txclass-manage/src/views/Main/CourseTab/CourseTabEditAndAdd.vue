<template>
  <div class="container">
    <h1 class="title">课程分类{{id?'编辑':'添加'}}</h1>
    <el-card style="width:1350px;padding-top:30px">
      <el-form :model="courseCateData" @keyup="submitSave">
        <el-form-item label="课程分类标题" label-width="100px">
          <el-input v-model="courseCateData.title"></el-input>
        </el-form-item>
        <el-form-item label-width="100px">
          <el-button type="primary" @click="submitSave">保存</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import courseTabService from "@/services/courseTab";
import { showMessage } from "@/libs/utils";
export default {
  name: "CourseTabEditAndAdd",
  props: {
    id: true,
  },
  data() {
    return {
      courseCateData: {},
    };
  },
  created() {
    this.id && this.getCourseCateData();
  },
  methods: {
    async getCourseCateData() {
      const { code, msg, result } = await courseTabService.findCourseCate(
        this.id
      );

      this.courseCateData = result;
      showMessage(code, msg);
    },
    submitSave() {
      const text = this.id ? "编辑" : "添加";
      this.$confirm(`您确定要${text}课程分类吗？`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      }).then((res) => {
        this.id ? this.editCourseCate() : this.addCourseCate();
      });
    },
    async editCourseCate() {
      const { code, msg } = await courseTabService.editCourseCate(
        this.id,
        this.courseCateData
      );
      showMessage(code, msg);
      this.$router.push("/course-tab/list");
    },
    async addCourseCate() {
      const { code, msg } = await courseTabService.addCourseCate(
        this.courseCateData
      );
      showMessage(code, msg);
    },
  },
};
</script>

<style lang='scss' scoped>
.title {
  margin-bottom: 30px;
}
</style>