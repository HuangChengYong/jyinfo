<template>
  <div class="weak">
    <jy-header/>
    <!-- 头部 -->
    <div class="background_images_one">
      <span class="headline">弱电与系统集成</span><br/>
      <span class="subhead">主动式、前瞻式、一站式综合服务</span>
    </div>
    <!-- 介绍和服务 -->
    <div class="introduction_service">
      <!-- 介绍 -->
      <div class="introduction">
        <div class="images_div">
          <img class="introduction_images" src="https://www.jy-info.com/img/weak/introduction_images.png" alt="介绍图片"/>
        </div>
        <div class="content_div">
          <div class="introduction_title">甲悦，专业的一站式弱电工程服务商</div>
          <div class="introduction_content">甲悦信息科技发展（上海）有限公司自创办以来，专业承包综合布线系统，安防监控系统，机房管理系统，楼宇对讲系统，智能家居系统，视频会议系统，公共广播系统，门禁考勤系统，门禁道闸系统，防盗报警系统，智能化停车场管理系统，一卡通巡更系统，楼宇自控系统等弱电系统集成工程。</div>
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
      <scroll-bar :caseList="industryCaseList"/>
      <div class="more_button">
        <button class="button" @click="getMoreCase" >更多案例>></button>
      </div>
    </div>
    <!-- 解决方案 -->
    <div class="solution">
      <span class="title_font">解决方案</span>
      <div class="title_div"></div>
      <div class="solution_content">
        <div class="building">
          <div class="div_solution">
            <img class="solution_image" src="https://www.jy-info.com/img/weak/building.png" alt="building">
          </div>
          <div class="solution_content_div">
            <img class="solution_icon" src="https://www.jy-info.com/img/weak/icon_building.png" alt="icon_building" />
            <div class="content_div">智慧楼宇解决方案</div>
            <router-link to="/solution/building" >
              <div class="more_details">
                <div>更多详情</div>
              </div>
            </router-link>
          </div>
          <div class="mask"></div>
        </div>
        <div class="hotel">
          <div class="div_solution">
            <img class="solution_image" src="https://www.jy-info.com/img/weak/hotel.png" alt="hotel">
          </div>
          <div class="solution_content_div">
            <img class="solution_icon" src="https://www.jy-info.com/img/weak/icon_hotel.png" alt="icon_hotel" />
            <div class="content_div">智慧酒店解决方案</div>
            <router-link to="/solution/hotel" >
              <div class="more_details">
                <div>更多详情</div>
              </div>
            </router-link>
          </div>
          <div class="mask"></div>
        </div>
        <div class="hospital">
          <div class="div_solution">
            <img class="solution_image" src="https://www.jy-info.com/img/weak/hospital.png" alt="hospital">
          </div>
          <div class="solution_content_div">
            <img class="solution_icon" src="https://www.jy-info.com/img/weak/icon_hospital.png" alt="icon_hospital" />
            <div class="content_div">智慧医院解决方案</div>
            <router-link to="/solution/hospital" >
              <div class="more_details">
                <div>更多详情</div>
              </div>
            </router-link>
          </div>
          <div class="mask"></div>
        </div>
        <div class="community">
          <div class="div_solution">
            <img class="solution_image" src="https://www.jy-info.com/img/weak/community.png" alt="community">
          </div>
          <div class="solution_content_div">
            <img class="solution_icon" src="https://www.jy-info.com/img/weak/icon_community.png" alt="icon_community" />
            <div class="content_div">智慧社区解决方案</div>
            <router-link to="/solution/community" >
              <div class="more_details">
                <div>更多详情</div>
              </div>
            </router-link>
          </div>
          <div class="mask"></div>
        </div>
        <div class="park">
          <div class="div_solution">
            <img class="solution_image" src="https://www.jy-info.com/img/weak/park.png" alt="park">
          </div>
          <div class="solution_content_div">
            <img class="solution_icon" src="https://www.jy-info.com/img/weak/icon_park.png" alt="icon_park" />
            <div class="content_div">智慧园区解决方案</div>
            <router-link to="/solution/park" >
              <div class="more_details">
                <div>更多详情</div>
              </div>
            </router-link>
          </div>
          <div class="mask"></div>
        </div>
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
import dataSource from '../../assets/utils/weak-data.js';
import JyHeader from "../JyHeader";
import JyFooter from "../JyFooter";
import ScrollBar from "../public/ScrollBar";
export default {
  name: "Weak",
  data() {
    return {
      serviceContentOne: [],
      serviceContentTwo: [],
      industryCaseList: []
    }
  },
  methods: {
    getMoreCase () {
      // alert("暂无更多案例！！！")
    },
    handleLeftButton() {

    },
    handleRightButton: function () {

    }
  },
  components: {
    JyHeader,
    JyFooter,
    ScrollBar
  },
  created() {
    this.serviceContentOne = dataSource.weakServiceContentOne;
    this.serviceContentTwo = dataSource.weakServiceContentTwo;
    this.industryCaseList = dataSource.industryCaseList;
  },
  mounted() {
  }
}
</script>

<style scoped>
@import "../../assets/css/weak/weak.css";
@import "../../assets/css/weak/weak-xs.css";
</style>
