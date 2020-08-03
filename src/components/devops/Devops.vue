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
      <div class="all_round_title"></div>

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

/* 全方位运维方案 */
.all_round {
  position: relative;
  text-align: center;
  top: 250px;
}
.all_round .title_font {
  width:286px;
  height:40px;
  font-size:40px;
  font-family:Microsoft YaHei,serif;
  font-weight: 500;
  color:rgba(44,46,51,1);
  margin: 20px auto;
}
.all_round .title_div {
  width:140px;
  height:4px;
  background:rgba(61,156,253,1);
  margin: 20px auto 0;
}

.all_round .hexagon {
  position: relative;
  width: 322px;
  height: 294px;
  text-align: center;
  border: 1px solid royalblue;
}
.all_round .hexagon .hexagon_left {
  float: left;
  width: 80px;
  height: 292px;
  border-top: 146px solid transparent;
  border-right: 80px solid #FFFFFF;
  border-bottom: 146px solid transparent;
}
.all_round .hexagon .hexagon_center {
  float: left;
  width: 160px;
  height: 292px;
  background-color: #FFFFFF;
}
.all_round .hexagon .hexagon_right {
  float: left;
  width: 80px;
  height: 292px;
  border-top: 146px solid transparent;
  border-left: 80px solid #FFFFFF;
  border-bottom: 146px solid transparent;
}
.all_round .hexagon .hexagon_content {
  position: relative;
  width: 322px;
  height: 294px;
  text-align: center;
  top: -272px;
  font-family:Microsoft YaHei,serif;
}
.all_round .hexagon .hexagon_content img {
  position: relative;
  width: 80px;
  height: 80px;
  margin: auto;
}
.all_round .hexagon .hexagon_content .hexagon_title {
  font-size: 22px;
  font-weight: initial;
  color: #2C2E33;
  margin-top: 12px;
}
.all_round .hexagon .hexagon_content span {
  position: relative;
  display: block;
  color: #5A5E66;
  font-size: 20px;
  font-weight: lighter;
  margin: 0 auto 11px;
}
</style>
