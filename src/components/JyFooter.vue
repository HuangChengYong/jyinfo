<template>
  <div>
    <!-- 底部 -->
    <div class="jy_bottom"></div>
    <!-- ICP -->
    <div class="jy_icp">
      <div>ICP</div>
    </div>
  </div>
</template>

<script>
export default {
name: "JyFooter"
}
</script>

<style scoped>
.jy_bottom {
  width: 19.2rem;
  height: 4rem;
  background-color: #111F35;
}
/* 底部ICP */
.jy_icp {
  width: 19.2rem;
  height: 1.2rem;
  background-color: #020202;
  display: flex;
  justify-content: center;
  align-items: center;
}
.jy_icp > div {
  font-size: 0.26rem;
  font-family: PingFang SC, sans-serif;
  font-weight: bold;
  color: #FFFFFF;
}


@media screen and (max-width: 768px) {
  .jy_bottom {
    width: 100%;
  }

  /* 底部ICP */
  .jy_icp {
    width: 100%;
  }
}
</style>
