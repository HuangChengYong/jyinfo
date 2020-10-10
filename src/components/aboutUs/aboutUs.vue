<template>
  <div class="about_us">
    <div class="head_banner">关于我们</div>
    <div class="jy_intro">
      <div class="jy_intro_content">
        <div class="title">关于甲悦</div>
        <div class="jy_intro_details intro_first">
          甲悦信息科技发展（上海）有限公司成立于2011年，是一家专业从事多媒体会议系统、计算机系统集成、应用软件定制开发、产品销售以及IT运维、咨询的专业化企业，公司2015年通过ISO9001质量管理体系认证， 2017年通过高新技术企业认证。
        </div>
        <div class="jy_intro_details">
          作为专业从事弱电智能化系统设计及施工的企业。在公司内部培养了一批从设计、规划、管理、施工、验收、维护的一整套人员，有设计经验丰富的高级经理，负责工程规划的项目总监，安排实施的项目经理，技术娴熟的施工人员和完善的现场维护工程师。用最好的系统集成，为用户提供完善的解决方案。在音视频会议、智能安防、计算机网络等系统有着丰富的设计施工经验,为党政机关、金融业及企事业军工单位提供了优质的服务，赢得了客户的良好评价。
        </div>
      </div>
    </div>
    <div class="develop_routine">
      <div class="develop_routine_title">我们的历程</div>
      <div class="develop_routine_title_bottom_line"></div>
      <div class="markable_year">
          <div class="routine_year">2019</div>
          <div class="milestone_event">
            <div class="milestone_event_single">公司参加上海市科技委员会举办的创新创业大赛，并取得了良好的成绩。</div>
            <div class="milestone_event_single">公司参与了新闸路国泰博华大厦的会议系统建设。</div>
          </div>
      </div>
      <time-line></time-line>
  </div>
    <div class="certificate_proof">
      <div class="certificate_proof_up">
        <div class="certificate_proof_title">荣誉资质证书</div>
        <div class="certificate_proof_title_bottom_line"></div>
      </div>

      <div class="certificate_proof_list" >
          <div class="certificate_proof_single" v-for="(item, index) in certificate " :key="index">
            <img class="certificate_proof_pic" v-bind:src="item.certificate_img"/>
            <div class="certificate_proof_name">{{item.certificate_name}}</div>
          </div>
      </div>
    </div>

    <div class="map">
      <div class="map_up">
        <div class="certificate_proof_title">联系我们</div>
        <div class="map_up_bottom_line"></div>
      </div>
      <div class="map_view">
        <div style="width:700px;height:550px;border:#ccc solid 1px;font-size:12px" id="map"></div>
      </div>
    </div>

    <!-- 底部 -->
    <software-footer></software-footer>
  </div>

</template>
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=Z0kW0tHGg3DQDLZRlWUlidEODGBcmYHu"></script>
<script>
  import SoftwareFooter from "../public/footer";
  import TimeLine from "../aboutUs/timeline";
  import certificate from "../../assets/js/aboutUs";
  export default {
    name: "Cases",
    components: {
      SoftwareFooter,
      TimeLine
    },
    data() {
      return {
        certificate:[]
      }
    },
    methods: {


    },
    created() {
      this.certificate=certificate.certificateList
    }

    }
</script>
<style scoped>
  @media screen and ( min-width: 1200px) {
    .about_us {
      padding: 0;
      width: 19.20rem;
      background-color: #EDF5FD;
      overflow: hidden;
    }

    /* 横幅图 */
    .head_banner {
      width: 100%;
      height: 6.5rem;
      font-size: 0.8rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #EDF5FD;
      line-height: 6.5rem;
      text-align: center;
      background-color: #0F65F3;
      background-image: url("https://www.jy-info.com/img/software/");
      background-size: cover;
    }

    .jy_intro{
      width: 100%;
      height: 8.79rem;
      background-color: #ffffff;
      padding: 1.2rem 2.6rem;
    }

    .jy_intro_content{
      width: 100%;
      height: 6.39rem;
      background-image:url("https://www.jy-info.com/img/aboutUs/jy_intro.png");
      background-size: cover;
      padding-top: 0.69rem;
    }

    .title{
      width: 1.62rem;
      height: 0.39rem;
      font-size: 0.4rem;
      line-height: 0.39rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #FFFFFF;
      text-align: center;
      margin: 0 auto;

    }

    .jy_intro_details{
      width: 7.73rem;
      line-height: 0.27rem;
      font-size: 0.22rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #FFFFFF;
      opacity: 0.7;
      margin: 0 auto ;
      text-indent: 0.43rem;
    }

    .intro_first{
      margin-top: 1.07rem;
    }

    .develop_routine{
      width: 100%;
      height: 10.80rem;
      padding-top: 1rem;
      background-image: url("https://www.jy-info.com/img/aboutUs/develop_routine.png");
      background-size: cover;
    }

    .develop_routine_title{
      width: 2.04rem;
      height: 0.40rem;
      font-size: 0.4rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #FFFFFF;
      margin:0 auto;


    }

    .develop_routine_title_bottom_line{
      width: 1.40rem;
      height: 0.04rem;
      background: #FFFFFF;
      margin:0.25rem auto 0;

    }

    .markable_year{
      width: 100%;
      margin-top: 3.04rem;
      padding-left: 4.33rem;
    }

    .routine_year{
      width: 1.66rem;
      font-size: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #FFFFFF;
      float: left;
      margin-top:2.5% ;
    }

    .milestone_event{
      width: 7.76rem;
      margin-left: 1.14rem;
      float: left;
    }

    .milestone_event_single{
      width: 7.76rem;
      height:0.6rem;
      font-size: 0.28rem;
      line-height: 0.28rem;
      text-align: left;
      font-family: Microsoft YaHei;
      font-weight: normal;
      color: #B5B7CA;
      margin-bottom: 0.39rem;
    }



    .certificate_proof{
      width: 100%;
      height: 18.33rem;
    }

    .certificate_proof_up{
      width: 100%;
      height: 2.5rem;
      padding-top: 1.2rem;
    }

    .certificate_proof_title{
      width: 2.43rem;
      height: 0.4rem;
      font-size: 0.4rem;
      line-height: 0.4rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #2D2F33;
      margin: 0 auto;
    }

    .certificate_proof_title_bottom_line{
      width: 1.40rem;
      height: 0.04rem;
      background: #3D9CFD;
      margin:0.25rem auto 0;

    }

    .certificate_proof_list{
      margin:0 2.4rem;

    }

    .certificate_proof_single{
      height: 4.89rem;
      float: left;
      margin-bottom: 0.39rem;
    }

    .certificate_proof_pic{
      height: 4.4rem;
      margin: 0 0.2rem 0.23rem;
    }

    .certificate_proof_name{
      width: 100%;
      height: 0.26rem;
      font-size: 0.26rem;
      line-height: 0.26rem;
      text-align: center;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #2D2F33;
    }

    .map{
      width: 100%;

    }

    .map_up{
      width: 100%;
      padding-top: 1.2rem;
      height: 2.5rem;
    }

    .map_up_bottom_line{
      width: 1.40rem;
      height: 0.04rem;
      background: #3D9CFD;
      margin-top: 0.12rem;
      margin-left:44.3%;

    }

    .map_view{
      width: 100%;
      height:10.80rem ;
      background-color: red;
      background-image:  url("https://www.jy-info.com/img/aboutUs/map.png");
      background-size: cover;
    }
  }

</style>
