<template>
  <div class="hexagon">
    <div class="hexagon_left"></div>
    <div class="hexagon_center"></div>
    <div class="hexagon_right"></div>
    <div class="hexagon_content">
      <img src="//jy-info.qicp.vip/static/devops/monitoring_system.png" alt="监控系统">
      <span class="hexagon_title">监控系统</span>
      <span>监控主机检测</span>
      <span>监控清洁保养</span>
      <span>监控数据整理</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hexagon",
  data() {
    return {
      allRoundData: [],
    }
  }
}
</script>

<style scoped>
template {
  margin: 0;
  padding: 0;
  background-color: #8c8c8c;
}
.hexagon {
  position: relative;
  width: 320px;
  height: 292px;
  text-align: center;
  float: left;
  margin: 0 20px;
  filter: drop-shadow(0px 10px 24px rgba(29,36,85,0.1));
}
.hexagon .hexagon_left {
  float: left;
  width: 80px;
  height: 292px;
  border-top: 146px solid transparent;
  border-right: 80px solid #42b983;
  border-bottom: 146px solid transparent;
}
.hexagon .hexagon_center {
  float: left;
  width: 160px;
  height: 292px;
  background-color: #42b983;
}
.hexagon .hexagon_right {
  float: left;
  width: 80px;
  height: 292px;
  border-top: 146px solid transparent;
  border-left: 80px solid #42b983;
  border-bottom: 146px solid transparent;
}
.hexagon .hexagon_content {
  position: relative;
  width: 322px;
  height: 294px;
  text-align: center;
  top: -272px;
  font-family:Microsoft YaHei,serif;
}
.hexagon .hexagon_content img {
  position: relative;
  width: 80px;
  height: 80px;
  margin: auto;

}
.hexagon .hexagon_content .hexagon_title {
  font-size: 22px;
  font-weight: 400;
  color: #2C2E33;
  margin-top: 12px;
}
.hexagon .hexagon_content span {
  position: relative;
  display: block;
  color: #5A5E66;
  font-size: 20px;
  font-weight: 300;
  margin: 0 auto 11px;
}
</style>
