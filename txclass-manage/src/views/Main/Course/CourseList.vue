<template>
  <div class="table-container">
    <refresh @refreshClick="refreshHandle"></refresh>
    <el-table :data="currentData" border stripe height="90%">
      <el-table-column prop="cid" label="课程ID" align="center" width="150px"></el-table-column>
      <el-table-column prop="title" label="课程标题" align="center" width="450px"></el-table-column>

      <el-table-column label="课程图片" align="center">
        <template v-slot="{row}">
          <div class="course-poster-warp">
            <img :src="'http://rek0f3hjt.hn-bkt.clouddn.com/'+row.posterKey" alt srcset />
          </div>
        </template>
      </el-table-column>
      <el-table-column label="课程价格" align="center" width="100px">
        <template v-slot="{row}">
          <div class="course-price">{{row.price==0 ? '免费':row.price }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="studentCount" label="学生数量" align="center"></el-table-column>
      <el-table-column label="课程分类" align="center">
        <template v-slot="{row}">
          <div class="course-field">{{matchField(row.field)}}</div>
        </template>
      </el-table-column>
      <el-table-column label="课程操作" align="center">
        <template v-slot="{row}">
          <div class="course-operate">
            <el-button
              :type="row.state == 1 ? 'danger' : 'warning'"
              size="mini"
              @click="toggleState(row)"
            >{{row.state == 1 ? '下架' : '上架'}}</el-button>

            <el-button type="primary" size="mini" @click="editHandle(row)">编辑</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <el-card>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="queryInfo.pageSize"
        :current-page="queryInfo.pageNum"
        @current-change="currentPageChange"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
import Refresh from "@/components/Refresh";
import courseService from "@/services/course";
import courseTabService from "@/services/courseTab";

import { showMessage } from "@/libs/utils";
export default {
  name: "CourseList",
  components: {
    Refresh,
  },
  data() {
    return {
      queryInfo: {
        pageNum: 1,
        pageSize: 10,
      },
      courseTabData: [],
      courseData: {},
      total: -1,
    };
  },
  computed: {
    currentData() {
      return this.courseData[this.queryInfo.pageNum];
    },
  },
  async created() {
    this.getCourseData();
    this.getCourseTabData();
  },
  methods: {
    //获取课程数据
    async getCourseData(isRefresh = false) {
      const { pageNum } = this.queryInfo;
      if (!this.courseData[pageNum] && !isRefresh) {
        console.log();
        const { code, list, total } = await courseService.getCourseData(
          this.queryInfo
        );
        if (code == 0) {
          this.$set(this.courseData, pageNum, list);
          //  = list;
          this.total = total;
          showMessage(code, "获取课程数据成功");
        } else {
          showMessage(code, "获取课程数据失败");
        }
      } else if (isRefresh) {
        //刷新列表
        this.courseData[pageNum] = [];
        const { code, list, total } = await courseService.getCourseData(
          this.queryInfo
        );
        if (code == 0) {
          this.$set(this.courseData, pageNum, list);
          //  = list;
          this.total = total;
          showMessage(code, "刷新数据成功");
        } else {
          showMessage(code, "获取课程数据失败");
        }
      }
    },

    // 获取课程分类
    async getCourseTabData() {
      const { code, msg, result } = await courseTabService.getCourseTabData();

      this.courseTabData = result;
    },
    //改变当前页码
    currentPageChange(page) {
      this.queryInfo.pageNum = page;
      this.getCourseData();
    },
    // 切换课程状态
    async toggleState(info) {
      const text = info.state == 0 ? "上架" : "下架";
      this.$confirm(`您确定要${text}次课程吗？`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async (res) => {
          info.state = info.state == 0 ? 1 : 0;
          const { code, msg } = await courseService.editCourseData(info);
          showMessage(code, msg);
        })
        .catch((err) => {});
    },
    matchField(field) {
      const res = this.courseTabData.find((item) => {
        return item.id == field;
      });
      return res ? res.title : "无分类";
    },
    editHandle(data) {
      this.$router.push("/course/edit/" + data.id);
    },
    refreshHandle() {
      this.getCourseData(true);
    },
  },
};
</script>

<style lang='scss' scoped>
.course-poster-warp {
  display: inline-block;
  width: 100px;
}

.table-container {
  height: 100%;
}

// .el-card {
//   position: absolute;
//   top: 15px;
//   left: 0;
//   right: 15;
//   bottom: 50px;
//   overflow: auto;
// }

.el-pagination {
  text-align: center;
}
</style>