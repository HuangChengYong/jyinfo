<template>
  <div class="weak">
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
          <img class="introduction_images" src="//jy-info.qicp.vip/static/weak/introduction_images.png" alt="介绍图片"/>
        </div>
        <div class="content_div">
          <div class="introduction_title">甲悦，专业的一站式弱电工程服务商</div>
          <div class="introduction_content">甲悦信息科技（上海）发展有限公司自创办以来，专业承包综合布线系统，安防监控系统，机房管理系统，楼宇对讲系统，智能家居系统，视频会议系统，公共广播系统，门禁考勤系统，门禁道闸系统，防盗报警系统，智能化停车场管理系统，一卡通巡更系统，楼宇自控系统等弱电系统集成工程。</div>
        </div>
      </div>
      <!-- 全方位的服务内容 -->
      <div class="service">
        <span class="title_font">全方位的服务内容</span>
        <div class="title_div"></div>
        <div class="row_one">
          <div class="content" v-for="(item, index) in serviceContentOne" :key="index">
            <img :src="item.weakImg" :alt="item.weakName">
            <span>{{ item.weakName }}</span>
          </div>
        </div>
        <div class="row_two">
          <div class="content" v-for="(item, index) in serviceContentTwo" :key="index">
            <img :src="item.weakImg" :alt="item.weakName">
            <span>{{ item.weakName }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 10+经验行业案例 -->
    <div class="industry_case">
      <span class="title_font">10+经验行业案例</span>
      <div class="title_div"></div>
      <div class="case_content">
        <div class="case_content_left">
          <img class="left_arrow" src="//jy-info.qicp.vip/static/weak/arrow.png" alt="left_arrow">
        </div>
        <div class="case_content_center"></div>
        <div class="case_content_right">
          <img class="right_arrow" src="//jy-info.qicp.vip/static/weak/arrow.png" alt="right_arrow">
        </div>
      </div>
      <div class="more_button">
        <button class="button">更多案例>></button>
      </div>
    </div>
  </div>
</template>

<script>
import dataSource from '../../assets/utils/weak-data.js';
import JyHeader from "../JyHeader";

export default {
  name: "Weak",
  data() {
    return {
      serviceContentOne: [],
      serviceContentTwo: []
    }
  },
  components: {
    JyHeader
  },
  created() {
    this.serviceContentOne = dataSource.weakServiceContentOne;
    this.serviceContentTwo = dataSource.weakServiceContentTwo;
  }
}
</script>

<style scoped>
.weak {
  margin: 0;
  padding: 0;
  background-color: #EDF5FD;
}
.background_images_one {
  width: 100%;
  height: 6.5rem;
  background: url("//jy-info.qicp.vip/static/weak/background_images_one.png");
  color: #FFFFFF;
}
.background_images_one .headline {
  width: 5.67rem;
  height: 0.76rem;
  font-size: 0.8rem;
  font-weight: bold;
  position: relative;
  top: 2.51rem;
  left: 2.64rem;
}
.background_images_one .subhead {
  width: 4.81rem;
  height: 0.29rem;
  font-size: 0.3rem;
  font-weight: 300;
  position: relative;
  top: 3.1rem;
  left: 2.62rem;
}

/* 弱电介绍和全方位的服务内容 */
.introduction_service {
  width: 100%;
  background-color: #EDF5FD;
  padding-top: 1.2rem;
}
/* 弱电介绍 */
.introduction_service .introduction {
  width: 14rem;
  height: 4.72rem;
  background-color: #ffffff;
  margin: 0 auto;
}
.introduction_service .introduction .images_div {
  width: 5.58rem;
  float: left;
}
.introduction_service .introduction .introduction_images {
  width: 4.98rem;
  height: 3.52rem;
  margin: 0.6rem 0 0.6rem 0.6rem;
}
.introduction_service .introduction .content_div {
  width: 8.42rem;
  float: left;
}
.introduction_service .introduction .introduction_title {
  width: 6.52rem;
  color: #2D2F33;
  font-size: 0.4rem;
  font-weight: 400;
  margin: 1.15rem auto 0;
}
.introduction_service .introduction .introduction_content {
  width: 7.19rem;
  font-size: 0.26rem;
  font-family: Microsoft YaHei,serif;
  font-weight: 300;
  color: #5A5E66;
  margin: 0.45rem;
}
/* 全方位的服务内容 */
.service {
  text-align: center;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
}
.service .title_font {
  width:1.63rem;
  height:0.4rem;
  font-size:0.4rem;
  font-family:Microsoft YaHei,serif;
  font-weight: 400;
  color:rgba(44,46,51,1);
  margin: 0 auto;
}
.service .title_div {
  width:1.4rem;
  height:0.04rem;
  background-color: #3D9CFD;
  margin: 0.26rem auto 0 auto;
}
.service .row_one div {
  position:relative;
  bottom:0;
  transition:bottom 0.6s;
  -moz-transition:bottom 0.6s; /* Firefox 4 */
  -webkit-transition:bottom 0.6s; /* Safari and Chrome */
  -o-transition:bottom 0.6s; /* Opera */
}
.service .row_one div:hover {
  position:relative;
  bottom: 0.3rem;
}
.service .row_one .content {
  margin-top: 0.6rem;
}
.service .row_two div {
  position:relative;
  bottom:0;
  transition:bottom 0.6s;
  -moz-transition:bottom 0.6s; /* Firefox 4 */
  -webkit-transition:bottom 0.6s; /* Safari and Chrome */
  -o-transition:bottom 0.6s; /* Opera */
}
.service .row_two div:hover {
  position: relative;
  bottom: 0.3rem;
}
.service .row_two .content {
  margin-top: 0.4rem;
}
.service .content {
  width: 3.2rem;
  height: 3.2rem;
  display: inline-block;
  margin: 0 0.2rem;
  background-color: #FFFFFF;
  box-shadow:0 0.1rem 0.24rem 0 rgba(29,36,85,0.1);
}
.service .content img {
  width: 1.2rem;
  height: 1.2rem;
  display: table;
  margin: 0.66rem auto 0.39rem;
}
.service .content span {
  font-size:0.26rem;
  font-family:Microsoft YaHei,serif;
  color: rgba(44,46,51,1);
  font-weight: 500;
}

/* 10+经验行业案例 */
.industry_case {
  text-align: center;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  background: url("//jy-info.qicp.vip/static/weak/background_images_two.png");
  width: 19.2rem;
  height: 10.8rem;
}
.industry_case .title_font {
  width:1.63rem;
  height:0.4rem;
  font-size:0.4rem;
  font-family:Microsoft YaHei,serif;
  font-weight: 400;
  color: #ffffff;
  margin: 0 auto;
}
.industry_case .title_div {
  width:1.4rem;
  height:0.04rem;
  background: #ffffff;
  margin: 0.26rem auto 0.5rem auto;
}
.industry_case .case_content {
  width: 100%;
  height: 6.8rem;
}
.industry_case .case_content .case_content_left {
  width: 3.3rem;
  height: 6.8rem;
  background: #EFF2F8;
  float: left;
  display: inline-block;
}
.industry_case .case_content .case_content_center {
  width: 11rem;
  height: 6.8rem;
  background: #EFF2F8;
  display: inline-block;
}
.industry_case .case_content .case_content_right {
  width: 3.3rem;
  height: 6.8rem;
  background: #EFF2F8;
  display: inline-block;
  float: right;
}
.industry_case .case_content .case_content_left .left_arrow {
  width: 0.8rem;
  height: 0.8rem;
  position: relative;
  top: 3rem;
  left: 0.8rem;
}
.industry_case .case_content .case_content_right .right_arrow {
  width: 0.8rem;
  height: 0.8rem;
  position: relative;
  top: 3rem;
  right: 0.8rem;
  transform: rotate(180deg);
  -ms-transform: rotate(180deg); /* IE 9 */
  -moz-transform: rotate(180deg); /* Firefox */
  -webkit-transform: rotate(180deg); /* Safari and Chrome */
  -o-transform: rotate(180deg); /* Opera */
}
.industry_case .more_button {
  width: 100%;
  margin: 0.56rem auto 0.55rem;
}
.industry_case .more_button .button {
  width: 3rem;
  height: 0.70rem;
  background:linear-gradient(45deg,rgba(253,175,143,1),rgba(253,125,130,1));
  border-radius: 0.35rem;

  font-size: 0.26rem;
  font-family: Microsoft YaHei,serif;
  font-weight: 400;
  color: rgba(255,255,255,1)

}
</style>
