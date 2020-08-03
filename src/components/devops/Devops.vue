<template>
  <div class="devops">
    <div class="devops_one background_img_one">
      <div id="navigation" class="navigation_bar" >
        <div class="navigation_left">
          <img src="../../assets/images/jyinfo_logo.png" alt="甲悦信息" class="jylogo">
        </div>
        <div class="navigation_right">
          <button type="button" class="btn btn-default navbar-btn">首页</button>
          <button type="button" class="btn btn-default navbar-btn">产品</button>
          <button type="button" class="btn btn-default navbar-btn">核心业务</button>
          <button type="button" class="btn btn-default navbar-btn">成功案例</button>
          <button type="button" class="btn btn-default navbar-btn">关于我们</button>
          <button type="button" class="btn btn-default navbar-btn">企业招聘</button>
        </div>
      </div>
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
      <div class="lbx">
        <img src="../../assets/images/jyinfo_logo.png" alt="">
        <span>监控系统</span>
        <span>监控主机故障</span>
        <span>监控清洁保养</span>
        <span>监控数据整理</span>
      </div>
      <div class="lbx">
        <img src="../../assets/images/jyinfo_logo.png">
        <span>监控系统</span>
        <span>监控主机故障</span>
        <span>监控清洁保养</span>
        <span>监控数据整理</span>
      </div>
      <div class="lbx">
        <img src="../../assets/images/jyinfo_logo.png">
        <span>监控系统</span>
        <span>监控主机故障</span>
        <span>监控清洁保养</span>
        <span>监控数据整理</span>
      </div>
      <div class="lbx">
        <img src="../../assets/images/jyinfo_logo.png">
        <span>监控系统</span>
        <span>监控主机故障</span>
        <span>监控清洁保养</span>
        <span>监控数据整理</span>
      </div>
    </div>
    <!-- 底部 -->
    <div class="devops_bottom"></div>
    <!-- ICP -->
    <div class="devops_icp"></div>
  </div>
</template>

<script>
import dataSource from '../../assets/js/data.js';
export default {
  name: "Devops",
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
        navigation.setAttribute('style','background-color:transparent');
        navigation.setAttribute('style','border-bottom:1px solid #FFFFFF');
      } else {
        navigation.setAttribute('style','border-bottom:0px solid transparent');
        navigation.setAttribute('style','background-color:#111F35');
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
.devops {
  padding: 0;
  margin: 0;
  width: 1920px;
  height: 4500px;
  background-color: #EDF5FD;
  z-index: -2;
}
/* 背景图一 */
.devops .background_img_one {
  width: 1920px;
  height: 650px;
  z-index: -1;
  background-image: url("../../assets/images/devops/devops_background_one.png");
}

/* 背景图二 */
.devops .background_img_two {
  position: relative;
  top: 1700px;
  width: 1920px;
  height: 1080px;
  z-index: 0;
  background-image: url("../../assets/images/devops/devops_background_two.png");
}

/* 导航栏 */
.devops .devops_one {
  display: flex;
}
.devops .devops_one .navigation_bar {
  position: fixed;
  width: 1920px;
  height: 70px;
  top: 0;
  left: 0;
  border-bottom: 1px solid #FFFFFF;
  z-index: 1;
}

/* 导航栏左 */
.devops .devops_one .navigation_bar .navigation_left {
  position: absolute;
  width: 666px;
  height: 70px;
}

/* 导航栏右 */
.devops .devops_one .navigation_bar .navigation_right {
  position: absolute;
  width: 1254px;
  height: 70px;
  left: 666px;
  padding-left: 64px;
}
.devops_one .navigation_bar .navigation_right button {
  margin: 26px 54px;
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
  font-weight: bold;
  color: #FFFFFF;
  opacity: 0.6;
}

/* logo图 */
.devops .devops_one .navigation_bar .jylogo {
  width: 146px;
  height: 38px;
  position: absolute;
  top: 16px;
  left: 260px;
  border-color: #F5F5F5;
}

/* 第一张背景图上的按钮 */
.devops .devops_one .scheme {
  width: 381px;
  height: 80px;
  position: absolute;
  top: 444px;
  left: 260px;
  border-radius: 40px;
  font-size: 26px;
  color: #FFFFFF;
  background: linear-gradient(left, #FDAF8F, #FD7D82);
  outline: none;
}

/* 服务内容 */
.service_content {
  position: relative;
  text-align: center;
  top: 121px;
}
.service_content .title_font {
  width:163px;
  height:40px;
  font-size:40px;
  font-family:Microsoft YaHei,serif;
  font-weight: 500;
  color:rgba(44,46,51,1);
  margin: 0 auto;
}
.service_content .title_div {
  width:140px;
  height:4px;
  background-color: #3D9CFD;
  margin: 0 auto;
}
.service_content {
  width: auto;
  height: auto;
}
.service_content .row_one {
  width: 1480px;
  margin: 0 auto;
}
.service_content .row_one div:hover {
  position: relative;
  bottom: 30px;
}
.service_content .row_two {
  width: 1100px;
  margin: 0 auto;
}
.service_content .row_two div:hover {
  position: relative;
  bottom: 30px;
}
.service_content .content {
  width: 320px;
  height: 320px;
  display: inline-block;
  margin: 40px 20px;
  text-align: center;
  background-color: #FFFFFF;
  box-shadow:0 10px 24px 0 rgba(29,36,85,0.1);
}
.service_content .content img {
  width: 120px;
  height: 120px;
  display: table;
  margin: 66px auto;
}
.service_content .content span {
  font-size:26px;
  font-family:Microsoft YaHei,serif;
  color: rgba(44,46,51,1);
}

/* 10+经验行业案例 */
.devops .industry {
  position: relative;
  text-align: center;
  top: 126px;
}
.industry .title_font {
  width:163px;
  height:40px;
  font-size:40px;
  font-family:Microsoft YaHei,serif;
  font-weight: 500;
  color:#FFFFFF;
  margin: 0 auto;
  position: relative;
  top: 100px;
}
.industry .title_div {
  width:140px;
  height:4px;
  background-color: #FFFFFF;
  margin: 0 auto;
  z-index: 1;
  position: relative;
  top: 124px;
}
/* 案例 */
.industry .industry_content {
  display: inline-block;
  float: left;
  margin-top: 159px;
}
/* 案例左 */
.industry .industry_content .industry_left {
  float: left;
  width:329px;
  height:680px;
  background:rgba(239,242,248,1);
}
/* 案例中 */
.industry .industry_content .industry_center {
  float: left;
  width:1100px;
  height:680px;
  margin-left: 80px;
  background:rgba(239,242,248,1);
}
/* 案例右 */
.industry .industry_content .industry_right {
  float: left;
  width:331px;
  height:680px;
  margin-left: 80px;
  background:rgba(239,242,248,1);
}
/* 查看更多案例按钮 */
.industry .more_cases {
  width:300px;
  height:70px;
  background:linear-gradient(-45deg,rgba(253,175,143,1),rgba(253,125,130,1));
  border-radius:35px;
  font-size:26px;
  font-family:Microsoft YaHei,serif;
  font-weight:500;
  color:rgba(255,255,255,1);
  position: relative;
  top: 56px;
  outline: none;
}

/* 全方位运维方案 */
.all_round {
  position: relative;
  top: 376px;
  display: flex;
}
.all_round .lbx {
  width:320px;
  height:292px;
  background:rgba(255,255,255,1);
  box-shadow:0px 10px 24px 0px rgba(29,36,85,0.1);
  text-align: center;
  margin: 0 auto;
}
.all_round .lbx img {
  width: 80px;
  height: 80px;
}


/* 底部 */
.devops .devops_bottom {
  position: absolute;
  top: 4410px;
  width:1920px;
  height:400px;
  background-color: #111F35;
}
/* 底部ICP */
.devops .devops_icp {
  position: absolute;
  top: 4810px;
  width:1920px;
  height:120px;
  background-color: #020202;
}
</style>
