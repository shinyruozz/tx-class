<template>
  <div class="footer">
    <p class="copyright">Copyright © 2022 Tencent. All Rights Reserved.</p>
    <p>深圳市腾讯计算机系统有限公司 版权所有 | 腾讯课堂服务协议 | 隐私政策 | 站点地图 | 侵权投诉 | 联系客服 | 帮助 | IT教程 | TAGS专题 | 系列视频</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang='scss' scoped>
.footer {
  margin-top: 1.5rem;
  line-height: 2rem;
  background-color: #444;
  color: #777;
  padding: 1.4rem;
  .copyright {
    text-align: center;
    padding-bottom: 1rem;
  }
}
</style>