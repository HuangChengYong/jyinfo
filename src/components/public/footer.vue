<template>
  <div >
    <!-- 底部 -->
    <div class="devops_bottom"></div>
    <!-- ICP -->
    <div class="devops_icp">ICP</div>

  </div>
</template>
<script>
  export default {

    name: 'SoftwareFooter'

  }
</script>
<style scoped>
  /* 底部 */
  .devops_bottom {
    position: relative;

    width: 100%;
    height: 4.00rem;
    background-color: #111F35;
  }
  /* 底部ICP */
  .devops_icp {
    position: relative;
    width: 100%;
    height: 1.20rem;
    background-color: #020202;
    font-size: 0.26rem;
    font-family: PingFang SC;
    font-weight: 300;
    color: rgba(255,255,255,1);
    text-align: center;
    line-height: 1.20rem;
  }
</style>
