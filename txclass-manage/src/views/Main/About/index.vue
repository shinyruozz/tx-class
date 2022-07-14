<template>
  <div class="container">
    <el-table
      :data="aboutData"
      border
      @row-dblclick="dbclick"
      :cell-class-name="tableCellClassName"
    >
      <!-- <el-table-column prop="name" label="名称"></el-table-column> -->
      <el-table-column label="标题" align="center">
        <template v-slot="{row,column}">
          <!--v-if去判断双击的是不是当前单元格-->
          <el-input
            @blur="hideInput"
            size="mini"
            :ref="row.index + ',' + column.index"
            v-model="row.title"
            @change="modelChange"
            v-if="row.index + ',' + column.index == currentCell"
          ></el-input>
          <span v-else>{{row.title}}</span>
        </template>
      </el-table-column>
      <el-table-column label="名称" align="center">
        <template v-slot="{row,column}">
          <el-input
            @blur="hideInput"
            size="mini"
            :ref="row.index + ',' + column.index"
            v-model="row.name"
            @change="modelChange"
            v-if="row.index + ',' + column.index == currentCell"
          ></el-input>
          <span v-else>{{row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column label="介绍" align="center">
        <template v-slot="{row,column}">
          <el-input
            @blur="hideInput"
            size="mini"
            type="textarea"
            :rows="5"
            :ref="row.index + ',' + column.index"
            v-model="row.intro"
            @change="modelChange"
            v-if="row.index + ',' + column.index == currentCell"
          ></el-input>
          <span v-else @click="uploadClick($index)">{{row.intro}}</span>
        </template>
      </el-table-column>
      <el-table-column label="海报图片" align="center">
        <template v-slot="{row,$index}">
          <el-upload :action="uploadUrl" :on-success="uploadSuccess" class="avatar-uploader">
            <img
              :src="imgBaseUrl+row.posterKey"
              alt
              v-if="row.posterKey"
              class="upload-img"
              @click="uploadClick($index)"
            />
            <i class="el-icon-plus avatar-uploader-icon" v-else></i>
          </el-upload>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" v-show="editBtnShow" style="margin-top:20px" @click="saveEdit">修改</el-button>
  </div>
</template>
 
<script>
import aboutService from "@/services/about";
import { showMessage } from "@/libs/utils";
import { UPLOAD_SAVE_BASE_URL, UPLOAD_URL } from "@/config/http.conf.js";

export default {
  data() {
    return {
      uploadUrl: UPLOAD_URL,
      imgBaseUrl: UPLOAD_SAVE_BASE_URL,
      aboutData: [],
      // 用一个字符串来保存当前双击的是哪一个单元格
      currentCell: null,
      editBtnShow: false,
    };
  },
  created() {
    this.getAboutData();
  },
  methods: {
    // 给单元格绑定横向和竖向的index，这样就能确定是哪一个单元格
    tableCellClassName({ row, column, rowIndex, columnIndex }) {
      row.index = rowIndex;
      column.index = columnIndex;
    },
    // 获得当前双击的单元格的横竖index，然后拼接成一个唯一字符串用于判断，并赋给currentCell
    // 拼接后类似这样："1,0","1,1",
    dbclick(row, column) {
      this.currentCell = row.index + "," + column.index;
      this.rowIndex = row.index;
      // 这里必须要nextTick，因为在点击的时候，input才刚被v-if显示出来，不然拿不到dom
      //     // 双击后自动获得焦点
      this.$nextTick(() => {
        this.$refs[row.index + "," + column.index].focus();
      });
    },
    // 当input失去焦点的时候，隐藏input
    hideInput() {
      this.currentCell = null;
    },

    async getAboutData() {
      const { code, msg, result } = await aboutService.getAboutData();
      if (code == 0) {
        this.aboutData = [result];
        showMessage(code, msg);
      }
    },

    uploadSuccess(res) {
      const { code, result } = res;
      if (code == 0) {
        this.showEditButton();
        this.aboutData[this.index].posterKey = result;
      }
    },
    modelChange() {
      this.showEditButton();
    },
    showEditButton() {
      const editBtnShow = this.editBtnShow;
      if (!editBtnShow) {
        this.editBtnShow = true;
      }
    },
    saveEdit() {
      this.$confirm("您确定要保存修改吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async (res) => {
        const { code, msg } = await aboutService.editAboutData(
          this.aboutData[0]
        );
        showMessage(code, msg);
      });
    },
    uploadClick(index) {
      this.index = index;
      console.log(this.index);
    },
  },
};
</script>

<style scoped>
.upload-img {
  width: 370px;
}
</style>