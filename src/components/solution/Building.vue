<template>
  <div class="building">
    <!-- 导航栏 -->
    <jy-header class="jy_header" />
    <!-- 内容 -->
    <div class="content">
      <!-- 面包屑导航 -->
      <div class="nav_content">
        <ol class="breadcrumb">
          <li><a href="#"><router-link to="/weak">弱电工程与系统集成</router-link></a></li>
          <li class="active">智慧楼宇解决方案</li>
        </ol>
      </div>
      <!-- 标题 -->
      <div class="title_content">
        <span class="title_font">智慧楼宇解决方案</span>
        <div class="title_div"></div>
      </div>
      <!-- 文字内容 -->
      <div class="text_content">
        <p>智能楼宇在中国国家标准GB 50314-2015《智能建筑设计标准》 中对智能建筑的定义如下：“以建筑物为平台，基于对各类智能化信息的综合应用，集架构、系统、应用、管理及优化组合为一体，具有感知、传输、记忆、推理、判断和决策的综合智慧能力，形成以人、建筑、环境互为协调的整合体，为人们提供安全、高效、便利及可持续发展功能环境的建筑。”</p>
        <p>因此可以了解到建筑智能化的目的，是通过通信网络系统将楼宇智能化系统进行有机的综合，集结构、系统、服务、管理优化组合，使建筑物具有安全、便利、高效、节能的特点。提升楼宇价值，改善用户环境，增强客户体验。</p>
        <div class="building_image">
          <img src="https://www.jy-info.com/img/solution/building_solution.png" alt="智慧楼宇" />
        </div>
        <p>甲悦信息采用先进的信息化技术，结合大数据、云技术等系统，实现各分子系统互联、互通。建设成智慧、节能、高效的智能化系统，为用户营造舒适、创新的工作环境。</p>
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
  name: "Building",
  components: {
    JyHeader,
    JyFooter
  }
}
</script>

<style scoped>
.building {
  padding: 0;
  width: 19.2rem;
  overflow: hidden;
}
.building .jy_header {
  width: 100%;
  height: 0.7rem;
  background-color: #0D0F29 !important;
}

.building .content {
  width: 14rem;
  margin: 0 auto;
}
/* 内容——面包屑导航 */
.building .content .nav_content {
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
.building .title_content .title_font {
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
.building .content .text_content {
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
  text-indent: 2em;
}
/* 智慧楼宇 */
.content .text_content .building_image {
  width: 11.24rem;
  height: 6.7rem;
  margin: 0.13rem auto 0.5rem;
}
.content .text_content .building_image img {
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

@media screen and (max-width: 768px){
  .building {
    width: 100%;
  }

  .building .content {
    width: 80%;
  }

  .content .text_content .building_image {
    width: 100%;
    height: 100%;
  }

  .content .text_content p {
    line-height: 0.66rem;
  }
}
</style>
