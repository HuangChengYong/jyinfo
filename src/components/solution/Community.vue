<template>
  <div class="community">
    <!-- 导航栏 -->
    <jy-header class="jy_header" />
    <!-- 内容 -->
    <div class="content">
      <!-- 面包屑导航 -->
      <div class="nav_content">
        <ol class="breadcrumb">
          <li><a href="#"><router-link to="/weak">弱电工程与系统集成</router-link></a></li>
          <li class="active">智慧社区解决方案</li>
        </ol>
      </div>
      <!-- 标题 -->
      <div class="title_content">
        <span class="title_font">智慧社区解决方案</span>
        <div class="title_div"></div>
      </div>
      <!-- 文字内容 -->
      <div class="text_content">
        <p>智慧社区是指充分利用物联网、云计算、移动互联网等信息技术，为社区居民提供一个安全、舒适、便利的生活环境，从而形成基于信息化、智能化社会管理与服务的新型管理模式的社区。</p>
        <p>智慧社区包含以下几个方面的内容：</p>
        <p>智慧物业管理——主要指小区智能化的系统集成，例如：停车场系统、闭路电视监控系统、门禁系统、智能消费系统、电梯管理系统、保安巡逻系统、远程抄表系统等相关社区物业的智能化管理，实现社区各独立应用子系统的融合，进行集中运营管理。</p>
        <p>电子商务服务——社区电子商务服务是指在社区内的商业贸易活动中，实现消费者的网上购物、商户之间的网上交易和在线电子支付以及各种商务活动、交易活动、金融活动和相关的综合服务，区居民无需出门即可无阻碍的完成生活必需品的采购。</p>
        <p>智慧养老服务——家庭“智慧养老”实际上就是利用物联网技术，通过各类传感器，使老人的日常生活处于远程监控状态，以便于及时为他们服务，使得老人拥有安全保障，子女可以放心工作。</p>
        <p>智慧家居——是以住宅为平台，兼备建筑、网络通信、信息家电、设备自动化，集系统、结构、服务、管理为一体的高效、舒适、安全、便利、环保的居住环境。</p>
        <p>智慧社区是以智能家居作为基本单元，基于互联网实现社区全面管理与服务，使智慧社区拥有智慧生活和智慧服务的功能，成为创新型智慧城市的重要组成部分。</p>
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
  name: "Community",
  components: {
    JyHeader,
    JyFooter
  },
}
</script>

<style scoped>
.community {
  padding: 0;
  line-height: 1;
  width: 19.2rem;
  margin-top: -0.2rem;
}
.community .jy_header {
  width: 100%;
  height: 0.7rem;
  background-color: #0D0F29 !important;
}
.community .content {
  width: 14rem;
  margin: 0 auto;
}
/* 内容——面包屑导航 */
.community .content .nav_content {
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
.community .title_content .title_font {
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
.community .content .text_content {
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
