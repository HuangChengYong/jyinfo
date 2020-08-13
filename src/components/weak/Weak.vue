<template>
  <div class="weak">
    <!-- 头部 -->
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
    <!-- 解决方案 -->
    <div class="solution">
      <span class="title_font">解决方案</span>
      <div class="title_div"></div>
      <div class="solution_content">
        <div class="building">
          <div class="solution_content_div">
            <img src="//jy-info.qicp.vip/static/weak/icon_building.png" alt="icon_building" />
            <div class="content_div">智慧楼宇解决方案</div>
            <div class="more_details">
              <div>更多详情</div>
            </div>
          </div>
        </div>
        <div class="hotel">
          <div class="solution_content_div">
            <img src="//jy-info.qicp.vip/static/weak/icon_hotel.png" alt="icon_hotel" />
            <div class="content_div">智慧酒店解决方案</div>
            <div class="more_details">
              <div>更多详情</div>
            </div>
          </div>
        </div>
        <div class="hospital">
          <div class="solution_content_div">
            <img src="//jy-info.qicp.vip/static/weak/icon_hospital.png" alt="icon_hospital" />
            <div class="content_div">智慧医院解决方案</div>
            <div class="more_details">
              <div>更多详情</div>
            </div>
          </div>
        </div>
        <div class="community">
          <div class="solution_content_div">
            <img src="//jy-info.qicp.vip/static/weak/icon_community.png" alt="icon_community" />
            <div class="content_div">智慧社区解决方案</div>
            <div class="more_details">
              <div>更多详情</div>
            </div>
          </div>
        </div>
        <div class="park">
          <div class="solution_content_div">
            <img src="//jy-info.qicp.vip/static/weak/icon_park.png" alt="icon_park" />
            <div class="content_div">智慧园区解决方案</div>
            <div class="more_details">
              <div>更多详情</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 这些企业选择了甲悦 -->
    <div class="choose_jy">
      <div class="title_font">这些企业选择了甲悦</div>
      <div class="title_div"></div>
      <div class="row enterprise_icon">
        <div class="col-xs-6 icon_border">
          <img src="//jy-info.qicp.vip/static/devops/generic-cabling.png" alt="多媒体">
        </div>
        <div class="col-xs-6 icon_border">
          <img src="//jy-info.qicp.vip/static/devops/multi-media-conference.png" alt="多媒体">
        </div>
        <div class="col-xs-6 icon_border">
          <img src="//jy-info.qicp.vip/static/devops/multi-media-conference.png" alt="多媒体">
        </div>
        <div class="col-xs-6 icon_border">
          <img src="//jy-info.qicp.vip/static/devops/multi-media-conference.png" alt="多媒体">
        </div>
      </div>
      <div class="row enterprise_icon">
        <div class="col-xs-6 icon_border">
          <img src="//jy-info.qicp.vip/static/devops/multi-media-conference.png" alt="多媒体">
        </div>
        <div class="col-xs-6 icon_border">
          <img src="//jy-info.qicp.vip/static/devops/multi-media-conference.png" alt="多媒体">
        </div>
        <div class="col-xs-6 icon_border">
          <img src="//jy-info.qicp.vip/static/devops/multi-media-conference.png" alt="多媒体">
        </div>
        <div class="col-xs-6 icon_border">
          <img src="//jy-info.qicp.vip/static/devops/multi-media-conference.png" alt="多媒体">
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="weak_bottom"></div>
    <!-- ICP -->
    <div class="weak_icp"></div>
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
@import "../../assets/css/weak/weak.css";
</style>
