<template>
  <div class="devops">
    <div class="devops_one background_img_one">
      <my-header/>
      <button class="scheme">马上获取项目报价及方案</button>
    </div>
    <!-- 服务内容 -->
    <div class="service_content">
      <span class="title_font">服务内容</span>
      <div class="title_div"></div>
      <div class="row_one">
        <div class="content" v-for="(item, index) in serviceContentOne" :key="index">
          <img :src="item.desopsImg" :alt="item.desopsName">
          <span>{{ item.desopsName }}</span>
        </div>
      </div>
      <div class="row_two">
        <div class="content" v-for="(item, index) in serviceContentTwo" :key="index">
          <img :src="item.desopsImg" :alt="item.desopsName">
          <span>{{ item.desopsName }}</span>
        </div>
      </div>
    </div>
    <!-- 10+经验行业案例 -->
    <div class="industry background_img_two">
      <span class="title_font">10+经验行业案例</span>
      <div class="title_div"></div>
      <div class="industry_content">
        <div class="industry_left"></div>
        <div class="industry_center"></div>
        <div class="industry_right"></div>
      </div>
      <button class="more_cases">更多案例>></button>
    </div>
    <!-- 全方位运维方案 -->
    <div class="all_round">
      <div class="title_font">全方位运维方案</div>
      <div class="title_div"></div>
      <div class="all_round_content">
        <!-- 监控系统 -->
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
        <!-- 空调系统 -->
        <div class="hexagon">
          <div class="hexagon_left"></div>
          <div class="hexagon_center"></div>
          <div class="hexagon_right"></div>
          <div class="hexagon_content">
            <img src="//jy-info.qicp.vip/static/devops/monitoring_system.png" alt="空调系统">
            <span class="hexagon_title">空调系统</span>
            <span>监控主机检测</span>
            <span>监控清洁保养</span>
            <span>监控数据整理</span>
          </div>
        </div>
        <!-- 六边形 -->
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
        <!-- 六边形 -->
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
      </div>
      <div class="all_round_content">
        <!-- 六边形 -->
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
        <!-- 六边形 -->
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
        <!-- 六边形 -->
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
        <!-- 六边形 -->
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
      </div>
    </div>
    <!-- 这些企业选择了甲悦 -->
    <div class="choose_jy">
      <div class="title_font">这些企业选择了甲悦</div>
      <div class="title_div"></div>
      <div class="enterprise_icon">
        <div class="icon_border">
          <img src="//jy-info.qicp.vip/static/devops/multi-media-conference.png" alt="多媒体">
        </div>
        <div class="icon_border">
          <img src="//jy-info.qicp.vip/static/devops/multi-media-conference.png" alt="多媒体">
        </div>
        <div class="icon_border">
          <img src="//jy-info.qicp.vip/static/devops/multi-media-conference.png" alt="多媒体">
        </div>
        <div class="icon_border">
          <img src="//jy-info.qicp.vip/static/devops/multi-media-conference.png" alt="多媒体">
        </div>
      </div>
      <div class="enterprise_icon">
        <div class="icon_border">
          <img src="//jy-info.qicp.vip/static/devops/multi-media-conference.png" alt="多媒体">
        </div>
        <div class="icon_border">
          <img src="//jy-info.qicp.vip/static/devops/multi-media-conference.png" alt="多媒体">
        </div>
        <div class="icon_border">
          <img src="//jy-info.qicp.vip/static/devops/multi-media-conference.png" alt="多媒体">
        </div>
        <div class="icon_border">
          <img src="//jy-info.qicp.vip/static/devops/multi-media-conference.png" alt="多媒体">
        </div>
      </div>
      <div></div>
    </div>
    <!-- 底部 -->
    <div class="devops_bottom"></div>
    <!-- ICP -->
    <div class="devops_icp"></div>
  </div>
</template>

<script>
import dataSource from '../../assets/utils/data.js';
import MyHeader from "../MyHeader";
export default {
  name: "Devops",
  components: {
    MyHeader
  },
  data() {
    return {
      serviceContentOne: [],
      serviceContentTwo: []
    }
  },
  methods: {
    // 保存滚动值，这是兼容的写法
    handleScroll: function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let navigation = document.getElementById('navigation');
      // 判断背景色
      if (scrollTop === 0) {
        navigation.setAttribute('style','background-color:transparent;border-bottom:1px solid #FFFFFF');
      } else {
        navigation.setAttribute('style','background-color:#111F35;border-bottom:0px solid transparent');
      }
    }
  },
  created() {
    this.serviceContentOne = dataSource.serviceContentOne;
    this.serviceContentTwo = dataSource.serviceContentTwo;
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  destroyed() {
    // 离开该页面需要移除这个监听的事件，不然会报错
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
@import "../../assets/css/devops/devops.css";
</style>
