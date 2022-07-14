<template>
  <div class="container">
    <h1>老师{{id ? '修改':'添加'}}</h1>
    <el-card style="width:1350px; margin-top:30px;padding-top:30px">
      <el-form :model="teacherData">
        <el-form-item label="老师名称" label-width="100px">
          <el-input v-model="teacherData.teacherName"></el-input>
        </el-form-item>
        <el-form-item label="老师描述" label-width="100px">
          <el-input v-model="teacherData.intro"></el-input>
        </el-form-item>
        <el-form-item label="老师图片" label-width="100px">
          <el-upload :action="uploadUrl" :on-success="teacherUploadSuccess" class="avatar-uploader">
            <img :src="teacherImgUrl" alt v-if="teacherData.imgKey" class="upload-img" />
            <i class="el-icon-plus avatar-uploader-icon" v-else></i>
          </el-upload>
          <!-- <el-input v-model="agencyData.name"></el-input> -->
        </el-form-item>

        <el-form-item label="链接" label-width="100px">
          <el-input v-model="teacherData.href"></el-input>
        </el-form-item>
        <el-form-item label-width="100px">
          <el-button type="primary" @click="submitForm">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import teacherService from "@/services/teacher";
import { UPLOAD_SAVE_BASE_URL, UPLOAD_URL } from "@/config/http.conf.js";
import { showMessage } from "@/libs/utils";
export default {
  name: "TeacherEditAndAdd",
  props: ["id"],
  data() {
    return {
      uploadUrl: UPLOAD_URL,

      imgBaseUrl: UPLOAD_SAVE_BASE_URL,

      teacherData: {},
    };
  },
  computed: {
    teacherImgUrl() {
      return UPLOAD_SAVE_BASE_URL + this.teacherData.imgKey;
    },
  },
  created() {
    this.id && this.getTeacherInfo();
  },
  methods: {
    async getTeacherInfo() {
      const { code, msg, result } = await teacherService.getTeacherInfo(
        this.id
      );
      if (code == 0) {
        console.log(result);
        this.teacherData = result;
        showMessage(code, msg);
      }
    },
    teacherUploadSuccess(res) {
      const { code, result } = res;
      if (code == 0) {
        this.teacherData.imgKey = result;
      }
    },

    submitForm() {
      const id = this.id;
      const text = id ? "修改" : "添加";
      this.$confirm("您确定要" + text + "吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      }).then(async (res) => {
        if (id) {
          const { code, msg } = await teacherService.editTeacherInfo(
            id,
            this.teacherData
          );
          showMessage(code, msg);
          this.$router.back();
        } else {
          const { code, msg } = await teacherService.addTeacher(
            this.teacherData
          );
          showMessage(code, msg);
        }
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