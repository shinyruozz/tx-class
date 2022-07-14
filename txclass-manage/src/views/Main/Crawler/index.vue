<template>
  <div class="container">
    <el-card style="width:1300px" v-if="crawlerList.length >0">
      <el-table :data="crawlerList" border stripe>
        <el-table-column label="爬虫说明" prop="desciption" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template v-slot="{$index}">
            <el-button
              type="primary"
              @click="crawlerAction($index)"
              :loading="crawlerList[$index].isLoading"
            >爬取数据</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import crawlerService from "@/services/crawler";
import { showMessage } from "@/libs/utils";
export default {
  name: "Crawler",
  data() {
    return {
      crawlerList: [],
    };
  },
  created() {
    this.getCrawlerData();
  },
  methods: {
    async getCrawlerData() {
      let { code, msg, result } = await crawlerService.getCrawlerListData();
      if (code == 0) {
        result = result.map((item) => {
          item.isLoading = false;
          return item;
        });
        console.log(result);
        this.crawlerList = result;
        showMessage(code, msg);
      }
    },
    // 爬取数据
    async crawlerAction(index) {
      this.crawlerList[index].isLoading = true;
      const url = this.crawlerList[index].crawlerUrl;
      const res = await crawlerService.crawlerAction(url);
      setTimeout(() => {
        this.crawlerList[index].isLoading = false;
      }, 2000);
    },
  },
};
</script>

<style>
</style>