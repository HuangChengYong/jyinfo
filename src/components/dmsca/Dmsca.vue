<template>
  <div id="dmsca">
    <!-- 横幅图 -->
    <div class="dmsca_banner"></div>
    <!-- 内容区域 -->
    <div class="content_area">
      <!-- 内容 -->
      <div class="content">
        <!-- 企业级源代码安全扫描分析服务平台-DMSCA -->
        <div class="content_01">
          <div content="div_title">
            <p class="content_title">企业级源代码安全扫描分析服务平台-DMSCA</p>
            <p class="title_xhx"></p>
          </div>
          <div class="div_content">
            <p>端玛企业级静态源代码扫描分析服务平台（英文简称：DMSCA）是一个独特的源代码安全漏洞、质量缺陷和逻辑缺陷扫描分析服务平台。该平台可用于识别、跟踪和修复在源代码中的技术和逻辑上的缺陷，让软件开发团队及测试团队快速、准确定位源代码中的安全漏洞、质量和业务逻辑缺陷等问题，并依据提供的专业中肯的修复建议，快速修复。提高软件产品的可靠性、安全性。同时兼容并达到国际、国内相关行业的合规要求。</p>
            <p>DMSCA是端玛科技在多年静态分析技术的积累及研发努力的基础上，联合多所国内及国际知名大学、专家共同分析全球静态分析技术的优缺点后、结合当前开发语言的技术现状、源代码缺陷的发展势态和市场后，研发出的新一代源代码企业级分析方案,旨在从根源上识别、跟踪和修复源代码技术和逻辑上的缺陷。该方案克服了传统静态分析工具误报率（False Positive）高和漏报（False Negative）的缺陷。打断了国外产品在高端静态分析产品方面的垄断，形成中国自主可控的高端源代码安全和质量扫描产品，并支持中国自己的源代码检测方面的国家标准（GB/T34944-2017 Java、GB/T34943-2017 C/C++、GB/T34946-2017 C#），致力于为在中国的企业提供更直接，更个性化的平台定制和本地化服务。</p>
            <p>DMSCA支持主流编程语言安全漏洞及质量缺陷扫描和分析，支持客户化平台界面、报告、规则自定义，以满足客户特定安全策略、安全标准和研发运营环境集成的需要。产品从面世，就获得了中国国内众多客户的青睐，这些客户包括但不限于银行、在线支付、保险、电力、能源、电信、汽车、媒体娱乐、软件、服务和军事等行业的财富1000企业。</p>
          </div>
        </div>
        <!-- 主要功能及特性 -->
        <div class="content_02">
          <div class="div_title">
            <p class="content_title">主要功能及特性</p>
            <p class="title_xhx"></p>
          </div>
          <div class="features">
            <div class="feature_div" v-for="(item, index) in dmscaFeatureList" :key="index">
              <img class="feature_icon" :src="item.featureIcon" :alt="item.featureName" />
              <span class="feature_name">{{ item.featureName }}</span><br/>
              <span class="feature_detail">{{ item.featureDetail }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 产品展示界面 -->
    <div class="products_show">
      <div class="div_title">
        <p class="content_title">产品展示界面</p>
        <p class="title_xhx"></p>
      </div>
      <scroll-bar :caseList="productShowList"/>
    </div>
    <!-- 系统架构 system_structure -->
    <div class="system_structure">
      <div class="div_title">
        <p class="content_title">系统架构</p>
        <p class="title_xhx"></p>
      </div>
      <div class="system_structure_content">
        <img src="//jy-info.qicp.vip/static/dmsca/system_structure.png" alt="system_structure"/>
      </div>
    </div>
    <!-- 集成 SDLC Integrated SDLC -->
    <div class="integrated_SDLC">
      <div class="div_title">
        <p class="content_title">集成SDLC</p>
        <p class="title_xhx"></p>
      </div>
      <div class="integrated_SDLC_content">
        <img src="//jy-info.qicp.vip/static/dmsca/integrated_SDLC.png" alt="integrated_SDLC"/>
      </div>
    </div>
    <!-- 底部 -->
    <div class="dmsca_bottom"></div>
    <!-- ICP -->
    <div class="dmsca_icp"></div>
  </div>
</template>

<script>
import dataSource from '../../assets/utils/dmsca-data.js';
import ScrollBar from "../public/ScrollBar";
export default {

  name: "Dmsca",
  data () {
    return {
      dmscaFeatureList: [],
      productShowList: []
    }
  },
  created() {
    this.dmscaFeatureList = dataSource.dmscaFeatureList
    this.productShowList = dataSource.productShowList
  },
  components: {
    ScrollBar
  }
}
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
  line-height: 1;
}
span {
  margin: 0;
  padding: 0;
}
img {
  width: 100%;
  height: 100%;
}

.content_title {
  font-size: 0.4rem;
  font-weight: 400;
  font-family: Microsoft YaHei, sans-serif;
  color: #2D2F33;
  margin-top: 1.2rem;
  text-align: center;
  line-height: 1.1;
}
.title_xhx {
  width: 1.4rem;
  height: 0.04rem;
  background: #3E9CFD;
  margin: 0.25rem auto 0 ;
}

#dmsca {
  margin: 0;
  padding: 0;
  width: 19.2rem;
  background-color: #EDF5FD;
}
/* 横幅图 */
#dmsca .dmsca_banner {
  width: 100%;
  height: 6.5rem;
  background-color: #0F65F3;
}

/* 内容区域 */
.content_area {
  width: 100%;
}
.content_area > .content {
  width: 14rem;
  margin: 0 auto;
}

/* 企业级源代码安全扫描分析服务平台-DMSCA */
.content_01 {
  width: 100%;
}
.content_01 > .div_content {
  width: 14rem;
  height: 6.3rem;
  background-color: #FFFFFF;
  box-shadow: 0.01rem 0.1rem 0.24rem 0 rgba(29, 36, 85, 0.1);
  margin-top: 0.6rem;
}
.content_01 > .div_content > p {
  width: 13.32rem;
  font-size: 0.26rem;
  font-weight: 300;
  font-family: Microsoft YaHei, sans-serif;
  color: #5A5E66;
  line-height: 1.18;
  letter-spacing: 0.0088rem;
  margin: 0 auto;
  padding-top: 0.4rem;
}
.content_01 > .div_content > p:first-child {
  padding-top: 0.5rem;
}
.content_01 > .div_content > p:last-child {
  padding-bottom: 0.55rem;
}

/* 主要功能及特性 */
.content_02 {
  width: 100%;
}
.content_02 > .div_content {
  width: 100%;
  background-color: #FFFFFF;
  box-shadow: 0.01rem 0.1rem 0.24rem 0 rgba(29, 36, 85, 0.1);
  margin-top: 0.6rem;
}
.content_02 > .div_title {
  margin-bottom: 0.6rem;
}
.content_02 > .features {
  width: 100%;
  background-color: #Ffffff;
  box-shadow: 0 0.1rem 0.24rem 0 rgba(29, 36, 85, 0.1);
  padding: 0.2rem 0;
}
.content_02 > .features .feature_div {
  padding: 0.2rem 0.4rem;
}
.content_02 > .features .feature_icon {
  width: 0.6rem;
  height: 0.6rem;
}
.content_02 > .features .feature_name {
  height: 0.33rem;
  font-size: 0.32rem;
  font-weight: 600;
  font-family: Microsoft YaHei, sans-serif;
  color: #2C2E33;
  display: inline;
  margin-left: 0.4rem;
  position: relative;
  top: 0.08rem;
}
.content_02 > .features .feature_detail {
  font-size: 0.26rem;
  font-weight: 600;
  font-family: Microsoft YaHei, sans-serif;
  color: #5A5E66;
  line-height: 1.18;
  margin-left: 1rem;
  display: block;
}

/* 产品展示界面 */
.products_show {
  line-height: 1;
  text-align: center;
  padding-top: 1rem;
  background: linear-gradient(-57deg, #3B2866, #0E519E);
  background-size: cover;
  width: 19.2rem;
  height: 10.04rem;
  margin-top: 1.2rem;
}
.products_show .content_title {
  margin: 0;
  padding: 0;
  color: #ffffff;
}
.products_show .title_xhx {
  background: #ffffff;
  margin-bottom: 0.5rem;
}

/* 系统架构 */
.system_structure .title_xhx {
  margin-bottom: 0.4rem;
}
.system_structure .system_structure_content {
  width: 14rem;
  height: 6.7rem;
  background: #FFFFFF;
  box-shadow: 0 0.1rem 0.24rem 0 rgba(29, 36, 85, 0.1);
  margin: 0 auto;
}
.system_structure .system_structure_content img {
  width: 13.09rem;
  height: 5.71rem;
  margin-top: 0.51rem;
  margin-left: 0.59rem;
}

/* 集成 SDLC */
.integrated_SDLC .title_xhx{
  margin-bottom: 0.4rem;
}
.integrated_SDLC .integrated_SDLC_content {
  width: 14rem;
  height: 5.24rem;
  background: #FFFFFF;
  box-shadow: 0 0.1rem 0.24rem 0 rgba(29, 36, 85, 0.1);
  margin: 0 auto;
}
.integrated_SDLC .integrated_SDLC_content img {
  width: 12.65rem;
  height: 4.05rem;
  margin-top: 0.6rem;
  margin-left: 1.06rem;
}

/* 底部 */
#dmsca .dmsca_bottom {
  width: 19.2rem;
  height: 4rem;
  background-color: #111F35;
  margin-top: 2rem;
}
/* 底部ICP */
#dmsca .dmsca_icp {
  width: 19.2rem;
  height: 1.2rem;
  background-color: #020202;
}
</style>
