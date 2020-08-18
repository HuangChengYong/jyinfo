<template>
  <div class="park">
    <!-- 导航栏 -->
    <div class="nav">
      <jy-header class="jy_header" />
    </div>
    <!-- 内容 -->
    <div class="content">
      <!-- 面包屑导航 -->
      <div class="nav_content">
        弱电工程与系统集成 > 智慧园区解决方案
      </div>
      <!-- 标题 -->
      <div class="title_content">
        <span class="title_font">智慧园区解决方案</span>
        <div class="title_div"></div>
      </div>
      <!-- 文字内容 -->
      <div class="text_content">
        <p>智慧园区核心是为园区客户提供及时、多样、个性化的办公、租售、缴费、投诉、维修、安保、消防、预定等服务，方便客户找到园区及周边的银行、医院、超市、洗车、修车、保险等服务信息；还能提供为企业办照注册、缴税、政策咨询等服务；为客户服务流程可追踪、可回溯、可记忆，保证客户再次使用该服务时，达到更个性化和便利的智慧化服务。</p>
        <div class="park_image">
          <img src="//jy-info.qicp.vip/static/solution/park_solution.png" alt="智慧园区" />
        </div>
        <p>对于一个现代化园区来说，智慧园区管理及服务平台，就是园区现代化管理的灵魂，平台整合园区所有的智能软硬件系统、建立统一的数据库，搭建统一强大的管理网络覆盖和服务器群组组成的平台，对提高管理效率、丰富决策依据、提高对园区企业的服务水平、加强园区企业和园区管理方的互动、促进园区更通畅的和周边社会、社区联接，展示、塑造、突出高科技园区形象提供强有力的支持。</p>
        <p>智慧园区管理及服务平台作为纽带，将入驻园区的企业及来访的访客、园区、政府联系在一起，可以通过平台将政府和企业等关注相关政策、资讯、资源、数据报表等进行统一整合，方便、快捷、灵活、有效。</p>
        <p>甲悦信息运用云计算、物联网、自动化控制、现代通讯、音视频、软硬件集成等技术，整合园区安防、消防、通讯网络、一卡通、信息发布、管网设备能源监控、停车管理、自动化办公等10多个系统到一个统一的平台，实现各个系统的信息交互、信息共享、参数关联、联动互动，独立共生。每个系统既可以独立运行、又保证数据和信息的互联互通；同时根据运营实际情况进行参数积累、习惯性分析报表等，达到本平台技术结构的智慧化。</p>
      </div>
    </div>
    <!-- 底部 -->
    <div class="solution_bottom"></div>
    <!-- ICP -->
    <div class="solution_icp"></div>
  </div>
</template>

<script>
import JyHeader from "../JyHeader";
export default {
  name: "Park",
  components: {JyHeader}
}
</script>

<style scoped>
.park {
  margin: 0;
  padding: 0;
  line-height: 1;
  width: 19.2rem;
}
.park .nav {
  width: 100%;
  height: 0.7rem;
  background-color: #0D0F29;
}
.park >>> .jy_header #jy_nav {
  background-color: #0D0F29;
}
.park >>> .jy_header #xbk {
  display: none;
}
.park .content {
  width: 14rem;
  margin: 0 auto;
}
/* 内容——面包屑导航 */
.park .content .nav_content {
  font-size: 0.22rem;
  font-family: Microsoft YaHei, sans-serif;
  font-weight: 500;
  margin-top: 0.22rem;
  color: #595D65;
}
.content .title_content {
  text-align: center;
}
/* 内容——标题 */
.park .title_content .title_font {
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
.park .content .text_content {
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
/* 智慧园区 */
.content .text_content .park_image {
  width: 11.24rem;
  height: 6.78rem;
  margin: 0.4rem auto 0.5rem;
}
.content .text_content .park_image img {
  width: 100%;
  height: 100%;
}

/* 底部 */
.park .solution_bottom {
  width: 100%;
  height: 4rem;
  background-color: #111F35;
}
/* 底部ICP */
.park .solution_icp {
  width: 100%;
  height: 1.2rem;
  background-color: #020202;
}
</style>
