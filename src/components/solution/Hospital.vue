<template>
  <div class="hospital">
    <!-- 导航栏 -->
    <jy-header class="jy_header" />
    <!-- 内容 -->
    <div class="content">
      <!-- 面包屑导航 -->
      <div class="nav_content">
        <ol class="breadcrumb">
          <li><a href="#"><router-link to="/weak">弱电工程与系统集成</router-link></a></li>
          <li class="active">智慧医院解决方案</li>
        </ol>
      </div>
      <!-- 标题 -->
      <div class="title_content">
        <span class="title_font">智慧医院解决方案</span>
        <div class="title_div"></div>
      </div>
      <!-- 文字内容 -->
      <div class="text_content">
        <p>智慧医院作为一种全新的医院管理模式与理念，通过信息化与智能化技术的融合，以信息与通信集成为抓手，实现医院各级系统的高度感知、互联与智能、数据共享，进而改善医疗环境，提高医院服务水平和效率，促使医疗服务从形式到内容上发生结构性变化。</p>
        <p>医院智能化系统包括：信息设施系统、信息化应用系统、建筑设备管理系统、公共安全系统、机房系统。</p>
        <p>医院专用系统包括：医院信息化系统、病房呼叫系统、排队叫号系统、重症探视系统、婴儿防盗系统等，体现了将医院所有要素与信息技术一体化整合，实现医院内所有业务系统网络化、智能化和集成一体化，系统互联、互通、互操作。</p>
        <div class="hospital_image">
          <img src="https://www.jy-info.com/img/solution/hospital_solution.png" alt="智慧医院" />
        </div>
        <p>甲悦信息以数据为核心，自动化、信息化、智能化为表现，综合应用物联网、无线传感器、云计算等信息技术，构建高效化、规范化、科学化、专业化、便捷化的医疗服务体系，使整个医疗生态圈中的每一个群体均可从中受益。</p>
      </div>
    </div>
    <!-- 底部 -->
    <!-- ICP -->
    <jy-footer />
  </div>
</template>

<script>
import JyHeader from "../JyHeader";
import JyFooter from "../JyFooter";
export default {
  name: "Hospital",
  components: {
    JyHeader,
    JyFooter
  }
}
</script>

<style scoped>
.hospital {
  padding: 0;
  line-height: 1;
  width: 19.2rem;
  margin-top: -0.2rem;
}
.hospital .jy_header {
  width: 100%;
  height: 0.7rem;
  background-color: #0D0F29 !important;
}
.hospital .content {
  width: 14rem;
  margin: 0 auto;
}
/* 内容——面包屑导航 */
.hospital .content .nav_content {
  font-size: 0.22rem;
  font-family: Microsoft YaHei, sans-serif;
  font-weight: 500;
  margin-top: 0.93rem;
  color: #595D65;
}
.content .title_content {
  text-align: center;
}
/* 内容——标题 */
.hospital .title_content .title_font {
  width: 3.27rem;
  height: 0.4rem;
  font-size: 0.4rem;
  font-family: Microsoft YaHei,serif;
  font-weight: 500;
  color: rgba(44,46,51,1);
  display: inline-block;
  margin: 0.78rem auto 0;
}
.title_content .title_div {
  width:1.4rem;
  height:0.04rem;
  background-color: #3D9CFD;
  margin: 0.26rem auto 0.57rem;
}
/* 内容——文字内容 */
.hospital .content .text_content {
  width: 100%;
  font-size: 0.28rem;
  font-family: Microsoft YaHei,sans-serif;
  font-weight: 500;
  color: #595D66;
  margin-bottom: 1.96rem;
}
.content .text_content p {
  line-height: 0.34rem;
  letter-spacing: 0.01rem;
  margin-bottom: 0.25rem;
}
/* 智慧医院 */
.content .text_content .hospital_image {
  width: 11.26rem;
  height: 7.48rem;
  margin: 0.4rem auto 0.36rem;
}
.content .text_content .hospital_image img {
  width: 100%;
  height: 100%;
}

/* 面包屑导航 */
.breadcrumb {
  background:none;
}
.breadcrumb > .active {
  color: #3D9CFD;
}
.breadcrumb > li + li:before {
  color: #5A5E66;
  content: ">";
}
.breadcrumb a {
  text-decoration-line: none;
  color: #5A5E66;
}
.breadcrumb a:hover {
  text-decoration-line: none;
  color: #5A5E66;
}
</style>
