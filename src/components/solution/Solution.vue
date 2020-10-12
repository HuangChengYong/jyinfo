<template>
  <div class="solution">
    <!-- 导航栏 -->
    <jy-header class="jy_header" />
    <!-- 内容 -->
    <div class="content">
      <!-- 面包屑导航 -->
      <div class="nav_content">
        <ol class="breadcrumb">
          <li><a href="#"><router-link to="/weak">弱电工程与系统集成</router-link></a></li>
          <li class="active">{{ solution.title }}</li>
        </ol>
      </div>
      <!-- 标题 -->
      <div class="title_content">
        <span class="title_font">{{ solution.title }}</span>
        <div class="title_div"></div>
      </div>
      <!-- 文字内容 -->
      <div class="text_content">

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
import solutionData from "../../assets/utils/solution-data";
import {isPicture} from "../../utils/validator";
export default {
  name: "Solution",
  components: {
    JyHeader,
    JyFooter
  },
  data () {
    return {
      solution: {}
    }
  },
  methods: {
    initContent() {
      let text_content = document.getElementsByClassName("text_content")[0];
      let data = this.solution;
      let contentStr = '';
      for(let i=0; i<data.content.length; i++) {
        if (isPicture(data.content[i])) {// 判断是否为图片
          contentStr += '<div class="solution_image"><img src=' + data.content[i] + ' alt=' + data.img_alt + '/></div>'
        } else {
          contentStr += '<p>' + data.content[i] + '</p>'
        }
      }
      text_content.innerHTML = contentStr;
    },
  },
  mounted() {
    switch ( this.$route.params.param ) {
      case 'building':
        this.solution = solutionData.building;
        break;
      case 'community':
        this.solution = solutionData.community;
        break;
      case 'hospital':
        this.solution = solutionData.hospital;
        break;
      case 'hotel':
        this.solution = solutionData.hotel;
        break;
      case 'park':
        this.solution = solutionData.park;
        break;
      default:
        this.solution = solutionData.building;
        break;
    }
    this.initContent()
  }
}
</script>

<style scoped>
.solution {
  padding: 0;
  width: 19.2rem;
  overflow: hidden;
}
.solution .jy_header {
  width: 100%;
  height: 0.7rem;
  background-color: #0D0F29 !important;
}

.solution .content {
  width: 14rem;
  margin: 0 auto;
}
/* 内容——面包屑导航 */
.solution .content .nav_content {
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
.solution .title_content .title_font {
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
.solution > .content > .text_content {
  width: 100%;
  font-size: 0.28rem;
  font-family: Microsoft YaHei,sans-serif;
  font-weight: 500;
  color: #595D66;
  margin-bottom:1.96rem;
}
.solution > .content >>> .text_content > p {
  line-height: 0.38rem;
  letter-spacing: 0.01rem;
  margin-bottom: 0.25rem;
  text-indent: 2em;
}
/* 智慧楼宇 */
.solution > .content >>> .text_content > div {
  width: 11.24rem;
  height: 6.7rem;
  margin: 0.13rem auto 0.5rem;
}
.solution > .content >>> .text_content > div > img {
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
  .solution {
    width: 100%;
  }

  .solution >>> .content {
    width: 80%;
  }

  .solution .content >>> .text_content p {
    line-height: 0.62rem;
  }

  .solution .content >>> .text_content div {
    width: 100%;
    height: 100%;
  }


}
</style>
