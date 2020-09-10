<template>
  <div class="hotel">
    <!-- 导航栏 -->
    <div class="nav">
      <jy-header class="jy_header" />
    </div>
    <!-- 内容 -->
    <div class="content">
      <!-- 面包屑导航 -->
      <div class="nav_content">
        <ol class="breadcrumb">
          <li><a href="#"><router-link to="/weak">弱电工程与系统集成</router-link></a></li>
          <li class="active">智慧酒店解决方案</li>
        </ol>
      </div>
      <!-- 标题 -->
      <div class="title_content">
        <span class="title_font">智慧酒店解决方案</span>
        <div class="title_div"></div>
      </div>
      <!-- 文字内容 -->
      <div class="text_content">
        <p>智慧酒店通过采用数字化与网络化的技术，形成一套完善的智能化体系，实现酒店数字信息化服务。酒店智能化是一个不断丰富、发展的领域，酒店作为直接面对客人提供服务的场所，应充分的考虑个人隐私、个性化的需求，以及感受到高科技带来的舒适和便利。同时，酒店物耗、能耗、人员成本，也应考虑降到最低，创造效益。</p>
        <div class="hotel_image">
          <img src="//jy-info.qicp.vip/static/solution/hotel_solution.png" alt="智慧酒店" />
        </div>
        <p>甲悦信息运用先进的技术和产品，通过智能化系统展现功能，根据星级酒店的服务流程进行集成，实现星级酒店的标准化和个性化服务。</p>
        <p>在智慧酒店领域，甲悦信息积累了丰富的项目经验，通过不断运用先进技术，形成了可实现星级酒店标准化和个性化服务的高端酒店智能化解决方案，成功运用于多个高端星级酒店。</p>
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
  name: "Hotel",
  components: {JyHeader}
}
</script>

<style scoped>
.hotel {
  padding: 0;
  line-height: 1;
  width: 19.2rem;
  margin-top: -0.2rem;
}
.hotel .nav {
  width: 100%;
  height: 0.7rem;
  background-color: #0D0F29;
}
.hotel >>> .jy_header #jy_nav {
  background-color: #0D0F29;
}
.hotel >>> .jy_header #xbk {
  display: none;
}
.hotel .content {
  width: 14rem;
  margin: 0 auto;
}
/* 内容——面包屑导航 */
.hotel .content .nav_content {
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
.hotel .title_content .title_font {
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
.hotel .content .text_content {
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
/* 智慧酒店 */
.content .text_content .hotel_image {
  width: 11.24rem;
  height: 6.88rem;
  margin: 0.15rem auto 0.43rem;
}
.content .text_content .hotel_image img {
  width: 100%;
  height: 100%;
}

/* 底部 */
.hotel .solution_bottom {
  width: 100%;
  height: 4rem;
  background-color: #111F35;
}
/* 底部ICP */
.hotel .solution_icp {
  width: 100%;
  height: 1.2rem;
  background-color: #020202;
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
