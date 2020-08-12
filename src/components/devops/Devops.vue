<template>
  <div class="devops">
    <div class="devops_one">
      <jy-header/>
      <img src="//jy-info.qicp.vip/static/devops/devops_background_one.png" alt="background_img_one" />
      <button>马上获取项目报价及方案</button>
    </div>
    <!-- 服务内容 -->
    <div class="service_content">
      <span class="title_font">服务内容</span>
      <div class="title_div"></div>
      <div class="row_one">
        <div class="content" v-for="(item, index) in serviceContentOne" :key="index">
          <img :src="item.devopsImg" :alt="item.devopsName">
          <span>{{ item.devopsName }}</span>
        </div>
      </div>
      <div class="row_two">
        <div class="content" v-for="(item, index) in serviceContentTwo" :key="index">
          <img :src="item.devopsImg" :alt="item.devopsName">
          <span>{{ item.devopsName }}</span>
        </div>
      </div>
    </div>
    <!-- 10+经验行业案例 -->
    <div class="industry background_images_two">
      <span class="title_font">10+经验行业案例</span>
      <div class="title_div"></div>
      <div class="row industry_content">
        <div class="hidden-xs industry_left"></div>
        <div class="col-xs-12 industry_center"></div>
        <div class="hidden-xs industry_right"></div>
      </div>
      <button class="more_cases">更多案例>></button>
    </div>
    <!-- 全方位运维方案 -->
    <div class="all_round">
      <div class="title_font">全方位运维方案</div>
      <div class="title_div"></div>
      <div class="all_round_content">
        <!-- 监控系统 -->
        <hexagon class="hexagon" :allRound="allRoundList[0]"/>
        <!-- 空调系统 -->
        <hexagon :allRound="allRoundList[1]"/>
        <!-- 大屏显示系统 -->
        <hexagon :allRound="allRoundList[2]"/>
        <!-- UPS系统 -->
        <hexagon :allRound="allRoundList[3]"/>
      </div>
      <div class="all_round_content">
        <!-- 综合布线系统 -->
        <hexagon :allRound="allRoundList[4]"/>
        <!-- 门禁考勤系统 -->
        <hexagon :allRound="allRoundList[5]"/>
        <!-- 会议系统 -->
        <hexagon :allRound="allRoundList[6]"/>
        <!-- 会议保障 -->
        <hexagon :allRound="allRoundList[7]"/>
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
    <div class="devops_bottom"></div>
    <!-- ICP -->
    <div class="devops_icp"></div>
  </div>
</template>

<script>
import dataSource from '../../assets/utils/devops-data.js';
import JyHeader from "../JyHeader";
import Hexagon from "../Hexagon";
export default {
  name: "Devops",
  components: {
    JyHeader,
    Hexagon
  },
  data() {
    return {
      serviceContentOne: [],
      serviceContentTwo: [],
      allRoundList: [],
    }
  },
  created() {
    this.serviceContentOne = dataSource.serviceContentOne;
    this.serviceContentTwo = dataSource.serviceContentTwo;
    this.allRoundList = dataSource.allRoundList;
  }
}
</script>

<style scoped>
@import "../../assets/css/devops/devops.css";
</style>
