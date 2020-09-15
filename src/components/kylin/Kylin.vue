<template>
  <div id="kylin">
    <!-- 横幅图 -->
    <div class="kylin_banner"></div>
    <!-- 内容区域 -->
    <div class="content_area">
      <!-- 内容部分 -->
      <div class="content">
        <!-- 为业务打造 -->
        <div class="content_01">
          <div class="content_left">
            <p class="div_title">为业务打造</p>
            <p class="div_title">Single source of truth</p>
            <p class="div_content">Kyligence 提供统一融合的大数据平台。通过对接数据库、数据仓库、云端存储、大数据及流式数据源，并提供标准的 MDX 接口，IT 可以消除传统技术之上的数据孤岛，为业务提供统一的 Single source of truth，助力业务基于所有数据进行精准的业务决策。</p>
          </div>
          <div class="content_right">
            <img src="//jy-info.qicp.vip/static/kylin/kylin_index_01.png" alt="kylin_index_01"/>
          </div>
        </div>
        <!-- 构建统一共享的业务逻辑统一定义，重复利用 -->
        <div class="content_02">
          <div class="content_left">
            <img src="//jy-info.qicp.vip/static/kylin/kylin_index_02.png" alt="kylin_index_02"/>
          </div>
          <div class="content_right">
            <p class="div_title">构建统一共享的业务逻辑统一定义，重复利用</p>
            <p class="div_content">Kyligence 帮助 IT 将业务熟知的维度、度量、层级结构等定义通过统一的语义层同步到主流 BI 工具中，实现业务语义的统一和复用。</p>
            <p class="div_content">Kyligence业务语义层支持 Tableau, Excel 及 Power BI。</p>
          </div>
        </div>
        <!-- 统一的时间智能指标助力业务轻松洞察业绩 -->
        <div class="content_03">
          <div class="content_left">
            <p class="div_title">统一的时间智能指标助力业务轻松洞察业绩</p>
            <p class="div_content">IT 或数据分析可以轻松的定义同比，环比，今年至今等时间智能指标，帮助业务进行直观的业绩洞察。</p>
            <p class="div_content">业务用户可以直接通过 BI工具使用 Kyligence语义层上统一定义的指标，而无需关心底层复杂的计算逻辑。</p>
          </div>
          <div class="content_right">
            <img src="//jy-info.qicp.vip/static/kylin/kylin_index_03.gif" alt="kylin_index_03"/>
          </div>
        </div>
        <!-- 从任意数据源获取最有价值数据 -->
        <div class="content_04">
          <div class="content_left">
            <video-player class="video-player vjs-custom-skin"
                          ref="videoPlayer"
                          :playsinline="true"
                          :options="playerOptions[0]">
            </video-player>
          </div>
          <div class="content_right">
            <p class="div_title">从任意数据源获取最有价值数据</p>
            <p class="div_content">Kyligence &nbsp;可以对接丰富的数据源，支持从多种数据存储系统加载数据，并进行统一管理和加速，如关系型数据库、MPP 数据库、数据湖、云等。Kyligence 还提供智能的查询路由能力，根据查询场景选择最合适的索引和执行引擎。</p>
          </div>
        </div>
        <!-- AI 增强引擎全程助力分析 -->
        <div class="content_05">
          <div class="content_left">
            <p class="div_title">AI 增强引擎全程助力分析</p>
            <p class="div_content">有了 AI 增强引擎的加持，无论您的业务场景多复杂，数据模型都可以轻松响应灵活的业务需求变化。在您最有价值的数据上实现分析的智能加速，不仅大大提升分析效率，还能够显著降低运维成本。</p>
          </div>
          <div class="content_right">
            <video-player class="video-player vjs-custom-skin"
                          ref="videoPlayer"
                          :playsinline="true"
                          :options="playerOptions[1]">
            </video-player>
          </div>
        </div>
        <!-- 为数据管理和分析构建一套可信的单一信源平台 -->
        <div class="content_06">
          <div class="content_left">
            <img src="//jy-info.qicp.vip/static/kylin/kylin_index_06.png" alt="kylin_index_06"/>
          </div>
          <div class="content_right">
            <p class="div_title">为数据管理和分析构建一套可信的单一信源平台</p>
            <p class="div_content">Kyligence 的 AI 增强的数据平台为分析师和业务用户提供统一的、经过整合及优化的全局数据视图。</p>
            <p class="div_content">通过 SQL、MDX 及 Rest API 等多种接口，无缝对接各类主流 BI 产品，业务用户可以继续使用自己习惯的 BI 产品。</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <!-- ICP -->
    <jy-footer />
  </div>
</template>

<script>
import JyFooter from "../JyFooter";
  import store from '../../store/index.js';
export default {
  name: "Kylin",
  components: {
    JyFooter
  },
  data () {
    return {
      playerOptions: [
        {
          // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
          autoplay: false, //如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '832:662', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: "",
            src: "//jy-info.qicp.vip/static/kylin/kylin_index_04.mp4" //url地址
          }],
          poster: "//jy-info.qicp.vip/static/kylin/kylin_index_04.png", //你的封面地址
          notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            fullscreenToggle: false  //全屏按钮
          }
        },
        {
          // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
          autoplay: false, //如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '810:456', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: "",
            src: "//jy-info.qicp.vip/static/kylin/kylin_index_05.mp4" //url地址
          }],
          poster: "//jy-info.qicp.vip/static/kylin/kylin_index_05.png", //你的封面地址
          notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            fullscreenToggle: false  //全屏按钮
          }
        }
      ]
    }
  },

  created() {
    //测试页面调用localstroage and xueX
    console.log(store.state.myToken+"666666666666666666666666666666666666666666666666666666"+localStorage.myToken)
  }
}
</script>

<style scoped>
@import "../../assets/css/kylin/kylin.css";
</style>
