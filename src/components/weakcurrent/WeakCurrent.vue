<template>
  <div class="weak_current">
    <div class="background_images_one">
      <my-header/>
    </div>

  </div>
</template>

<script>
import MyHeader from "../MyHeader";

export default {
  name: "WeakCurrent",
  components: {
    MyHeader
  }
}
</script>

<style scoped>
.weak_current {
  margin: 0;
  padding: 0;
  height: 3000px;
  background-color: #EDF5FD;
}
.background_images_one {
  width: 100%;
  height: 650px;
  background: url("//jy-info.qicp.vip/static/weakcurrent/background_images_one.png");
}
</style>
