<template>
  <div class="weak_current">
    <div class="background_images_one">
      <jy-header/>
      <span class="headline">弱电与系统集成</span><br/>
      <span class="subhead">主动式、前瞻式、一站式综合服务</span>
    </div>
    <!-- 介绍和服务 -->
    <div class="introduction_service">
      <!-- 介绍 -->
      <div class="introduction">
        <div class="images_div">
          <img class="introduction_images" src="//jy-info.qicp.vip/static/weakcurrent/introduction_images.png" alt="介绍图片"/>
        </div>
        <div class="content_div">
          <span class="introduction_title">甲悦，专业的一站式弱电工程服务商</span><br/>
          <span class="introduction_content">甲悦信息科技（上海）发展有限公司自创办以来，专业承包综合布线系统，安防监控系统，机房管理系统，楼宇对讲系统，智能家居系统，视频会议系统，公共广播系统，门禁考勤系统，门禁道闸系统，防盗报警系统，智能化停车场管理系统，一卡通巡更系统，楼宇自控系统等弱电系统集成工程。</span>
        </div>
      </div>
      <!-- 服务 -->
      <div class="service">

      </div>
    </div>
  </div>
</template>

<script>
import JyHeader from "../JyHeader";

export default {
  name: "WeakCurrent",
  components: {
    JyHeader
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
  color: #FFFFFF;
}
.background_images_one .headline {
  width: 567px;
  height: 76px;
  font-size: 80px;
  font-weight: bold;
  position: relative;
  top: 251px;
  left: 264px;
}
.background_images_one .subhead {
  width: 481px;
  height: 29px;
  font-size: 30px;
  font-weight: 300;
  position: relative;
  top: 310px;
  left: 262px;
}

/* 弱电介绍和全方位的服务内容 */
.introduction_service {
  width: 100%;
  height: 1643px;
  background-color: #EDF5FD;
  padding-top: 120px;
}
/* 弱电介绍 */
.introduction_service .introduction {
  width: 1400px;
  height: 472px;
  background-color: #ffffff;
  margin: 0 auto;
}
.introduction_service .introduction .images_div {
  width: 558px;
  float: left;
}
.introduction_service .introduction .introduction_images {
  width: 498px;
  height: 352px;
  margin: 60px 0 60px 60px;
}
.introduction_service .introduction .content_div {
  width: 842px;
  float: left;
  border: 1px solid red;
}
.introduction_service .introduction .introduction_title {
  width: 652px;
  height: 40px;
  color: #2D2F33;
  font-size: 40px;
  font-weight: 400;
  margin: 0 auto;
}
.introduction_service .introduction .introduction_content {
  width:719px;
  height:151px;
  font-size:26px;
  font-family:Microsoft YaHei,serif;
  font-weight:300;
  color: #5A5E66;
}
</style>
