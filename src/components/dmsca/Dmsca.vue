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
          <div content="div_title">
            <p class="content_title">主要功能及特性</p>
            <p class="title_xhx"></p>
          </div>
          <div class="div_content">
            <div class="feature_div">
              <div class="feature_icon">
                <img src="" alt=""/>
              </div>
              <div class="feature_title"></div>
              <div class="feature_content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Dmsca"
}
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
  line-height: 1;
}
img {
  width: 100%;
  height: 100%;
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
.content_area > .content .content_title {
  font-size: 0.4rem;
  font-weight: 400;
  color: #2D2F33;
  margin-top: 1.2rem;
  text-align: center;
  line-height: 1.1;
}
.content_area > .content .title_xhx {
  width: 1.4rem;
  height: 0.04rem;
  background: #3E9CFD;
  margin: 0.25rem auto 0 ;
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
  height: 27.5rem;
  background-color: #FFFFFF;
  box-shadow: 0.01rem 0.1rem 0.24rem 0 rgba(29, 36, 85, 0.1);
  margin-top: 0.6rem;
}
</style>
