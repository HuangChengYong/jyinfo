<template>
  <div class="devops">
    <div class="devops_one">
      <jy-header/>
      <img src="https://www.jy-info.com/img/devops/devops_background_one.png" alt="background_img_one" />
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
    <div class="industry_case">
      <span class="title_font">10+经验行业案例</span>
      <div class="title_div"></div>
      <scroll-bar :caseList="industryCaseList"/>
      <div class="more_button">
        <button class="button">更多案例>></button>
      </div>
    </div>
    <!-- 全方位运维方案 -->
    <div class="all_round">
      <div class="title_font">全方位运维方案</div>
      <div class="title_div"></div>
      <div class="all_round_content">
        <!-- 监控系统 -->
        <hexagon class="hexagon" :allRound="allRoundList[0]"/>
        <!-- 空调系统 -->
        <hexagon class="hexagon" :allRound="allRoundList[1]"/>
        <!-- 大屏显示系统 -->
        <hexagon class="hexagon" :allRound="allRoundList[2]"/>
        <!-- UPS系统 -->
        <hexagon class="hexagon" :allRound="allRoundList[3]"/>
      </div>
      <div class="all_round_content">
        <!-- 综合布线系统 -->
        <hexagon class="hexagon hexagon_one" :allRound="allRoundList[4]"/>
        <!-- 门禁考勤系统 -->
        <hexagon class="hexagon hexagon_one" :allRound="allRoundList[5]"/>
        <!-- 会议系统 -->
        <hexagon class="hexagon hexagon_two" :allRound="allRoundList[6]"/>
        <!-- 会议保障 -->
        <hexagon class="hexagon" :allRound="allRoundList[7]"/>
      </div>
    </div>
    <!-- 这些企业选择了甲悦 -->
    <div class="choose_jy">
      <div class="title_font">这些企业选择了甲悦</div>
      <div class="title_div"></div>
      <div class="enterprise_icon">
        <div class="icon_border">
          <img src="https://www.jy-info.com/img/weak/choose1.png" alt="国泰君安证券">
        </div>
        <div class="icon_border">
          <img src="https://www.jy-info.com/img/weak/choose2.png" alt="水利部太湖流域管理局">
        </div>
        <div class="icon_border">
          <img src="https://www.jy-info.com/img/weak/choose3.png" alt="Techcode太库">
        </div>
        <div class="icon_border">
          <img src="https://www.jy-info.com/img/weak/choose4.png" alt="农业部东海区渔政局">
        </div>
      </div>
      <div class="enterprise_icon">
        <div class="icon_border">
          <img src="https://www.jy-info.com/img/weak/choose5.png" alt="十月妈咪">
        </div>
        <div class="icon_border">
          <img src="https://www.jy-info.com/img/weak/choose6.png" alt="上海检察">
        </div>
        <div class="icon_border">
          <img src="https://www.jy-info.com/img/weak/choose7.png" alt="武警第八支队">
        </div>
        <div class="icon_border">
          <img src="https://www.jy-info.com/img/weak/choose8.png" alt="上海临港软件园">
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <!-- ICP -->
    <jy-footer />
  </div>
</template>

<script>
import dataSource from '../../assets/utils/devops-data.js';
import JyHeader from "../JyHeader";
import JyFooter from "../JyFooter";
import Hexagon from "../public/Hexagon";
import ScrollBar from "../public/ScrollBar";
export default {
  name: "Devops",
  components: {
    JyHeader,
    JyFooter,
    Hexagon,
    ScrollBar
  },
  data() {
    return {
      serviceContentOne: [],
      serviceContentTwo: [],
      allRoundList: [],
      industryCaseList: []
    }
  },
  created() {
    this.serviceContentOne = dataSource.serviceContentOne;
    this.serviceContentTwo = dataSource.serviceContentTwo;
    this.allRoundList = dataSource.allRoundList;
    this.industryCaseList = dataSource.industryCaseList;
  }

}
</script>

<style scoped>
@import "../../assets/css/devops/devops.css";
@import "../../assets/css/devops/devops-xs.css";
</style>
