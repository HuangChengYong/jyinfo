<template>
  <div id="soft_root">
    <jy-header class="jyHeader" />
    <div class="soft">

      <div class="head_Top">

        <button class="scheme">马上获取项目报价及方案</button>
      </div>
      <div class="content_body">
        <!--您是否曾被这种问题困扰-->
        <div class="content_index04">
          <span class="content_index04_top">您是否曾被这种问题困扰</span>
          <div class="content_index04_bottomline"></div>
        </div>
        <div class="content_index02">
          <div class="content_index02_content">
            <div class="content_index03_content">
              <p class="link-left" /><p class="link-right">现用软件适用性差</p><br />
              <p class="link-left" /><p class="link-right">很难解决实际工作难题</p><br />
              <p class="link-left" /><p class="link-right">无法有效提高工作效率</p>
            </div>
            <div class="content_index03_content">
              <p class="link-left" /><p class="link-right">模板软件功能呆板</p><br />
              <p class="link-left" /><p class="link-right">多系统数据无法同步</p><br />
              <p class="link-left" /><p class="link-right">软件无法后续迭代升级</p>
            </div>
          </div>
          <button class="query">立即咨询</button>
        </div>

        <div class="erroricon"></div>

        <div class="content_index04">
          <span class="content_index05_top">纯定制化开发帮您解决所有开发难题</span>
          <div class="content_index04_bottomline"></div>
        </div>
        <div class="develop">
          <div class="develop_issue" v-for="(item, index) in softServiceContentOne" :key="index">
            <img :src="item.desopsImg" :alt="item.desopsName" />
            <span class="develop_issue_name">{{ item.desopsName }}</span><br />
            <span class="develop_issue_content">{{ item.desopsContent }}</span>
          </div>

        </div>
        <div class="content_index04">
          <span class="content_index06_top"> 优秀行业开发经验 50+成功案例</span>
          <div class="content_index04_bottomline"></div>
        </div>

        <div class="project_case">

          <div class="project_case_left">
            <div class="project_case_left_inner"></div>
            <button class="transfrom_left"></button>
          </div>
          <div class="project_case_middle">
            <div class="project_case_middle_inner"></div>
          </div>
          <div class="project_case_right">
            <div class="project_case_right_inner"></div>
            <button class="transfrom_right"></button>
          </div>
          <button class="cases">更多案例>></button>
        </div>

        <div class="content_index04">
          <span class="content_index07_top"> 为企业量身定制高效软件 满足企业不同阶段要求</span>
          <div class="content_index04_bottomline"></div>
        </div>
        <div class="soft_service">
          <div class="soft_design" v-for="(item, index) in softServiceContentTwo" :key="index">
            <img :src="item.desopsImg" :alt="item.desopsName" />
            <span class="soft_design_name">{{ item.desopsName }}</span>
            <span class="soft_design_content" v-for=" (item, index) in item.desopsContent" :key="index">{{ item }}</span>
            <!--<span class="soft_design_content">{{ item.desopsContent }}</span>-->
          </div>
        </div>

        <div class="content_index04">
          <span class="content_index08_top">严控流程 高质量服务</span>
          <div class="content_index04_bottomline"></div>
        </div>
        <div class="process_content">
          <div class="process_top_outline">
            <div class="process_top" v-for="(item, index) in softServiceContentThree" :key="index">

              <grapic class="grapic" :allRound="softServiceContentThree[index]" />

            </div>
          </div>
          <div class="process_below_outline">
            <div class="process_below" v-for="(item, index) in softServiceContentFour" :key="index">
              <grapic class="grapic" :allRound="softServiceContentFour[index]" />
            </div>
          </div>
        </div>
        <!--立即提交您的软件开发需求-->
        <div class="submit_report">
          <div class="form_title">
            <p class="submit_report_title_first">立即提交您的软件开发需求</p>
            <p class="submit_report_title_second">马上提交需求，我们会在24小时内联系您，并提供产品咨询和项目报价</p>
          </div>
          <div class="form_content">
            <form ref="form" :model="form" >

              <input class="form_name"  v-model="form.name" onBlur="if(value==='') {value='请填写您的姓名'}else{value=value.replace(/[ -~]/g,'')}" placeholder="姓名">

              <input class="form_name" onkeyup="value=value.replace(/[^\d]/g,'')"  v-model="form.mobile" onBlur="if(value==='') {value='请填写您的联系方式'}else{value=value.replace(/[ -~]/g,'')}" placeholder="手机号">


              <input class="form_uint" v-model="form.uint" placeholder="公司名称">


              <input class="form_uint" onkeyup="value=value.replace(/[^\d]/g,'')" v-model="form.budget" placeholder="开发预算" />


              <input class="form_description" v-model="form.description" placeholder="示例：我们是电商公司，想开发一款企业内部采购管理软件">


              <button class="submit_report_button" type="submit" @click.prevent="onSubmit">立即提交你的需求</button>

            </form>
          </div>
        </div>

      </div>
      <!-- 底部 -->
      <software-footer></software-footer>
    </div>

  </div>


</template>

<script>
  import JyHeader from '../JyHeader';
  import SoftwareFooter from '../public/footer';
  import Grapic from '../public/grapic';
  import software from '../../assets/js/software.js';
  import store from '../../store/index.js';
  import { DevelopConsult,LoginInfo } from '../../api/getData.js'

export default {
    name: "Soft",
    components: {
      SoftwareFooter,
      JyHeader,
      Grapic
    },
  data() {
    return {
      form: {
        name: '',
        mobile: '',
        uint: '',
        budget:'',
        description: ''
      },
      timer: false,
      screenWidth: document.body.clientWidth,
      screenHeight: '',
      softServiceContentOne: [],
      softServiceContentTwo: [],
      softServiceContentThree: [],
      softServiceContentFour: []
    }
  },
  methods: {
    onSubmit() {
      let developNeeds={
        fName: this.form.name,
        fMobile: this.form.mobile,
        fUnit: this.form.uint,
        fBudget: this.form.budget,
        fDescription: this.form.description,
        fCreateTime:new Date()
      }

      //表单提交
      DevelopConsult({

          developNeeds
      }
      ).then(res => {
          if (res.code === 0) {
            this.$message({
              type: 'success',
              message: res.code === 0 ? '提交完成' : '提交失败'
            })
          } else {
            this.$message({
              type: 'error',
              message: res.message
            })

          }
        this.form={}
        });

    }

  },

  created() {
    this.softServiceContentOne = software.softServiceContentOne;
    this.softServiceContentTwo = software.softServiceContentTwo;
    this.softServiceContentThree = software.softServiceContentThree;
    this.softServiceContentFour = software.softServiceContentFour;

 //登录接口
    /*let userLoginInfo={
      loginName:'leo',
      loginPassword:'123456',
    }
    LoginInfo( {

      userLoginInfo

    }).then(res => {
      if(res.code==200){
console.log(res.data)
          //token的值储存到localsortage
          store.commit('setToken',res.data)

          console.log(res.data+"================================"+store.state.myToken)
        }
    })*/
    }

}
</script>

<style scoped>
  #soft_root {
    padding: 0;
    margin: auto auto;
    width:100%;
    background-color:blue;
  }
  .soft {
    padding: 0;
    margin: auto auto;
    width: 100%;
    background-color: #EDF5FD;
  }
  .head_Top {
    width: 100%;
    height: 6.50rem;
    background-image: url("https://www.jy-info.com/img/software/soft_Top.png");
    background-size: cover;
  }

      /* 第一张背景图上的按钮 */
          .soft > .head_Top > .scheme {
            width: 19.8%;
            height: 0.80rem;
            position: absolute;
            top: 5.0rem;
            left: 6.8%;
            border-radius: 0.40rem;
            font-size: 0.26rem;
            color: #FFFFFF;
            background: linear-gradient(45deg,rgba(253,175,143,1),rgba(253,125,130,1));
            border: none;
          }

        .content_body {
          width: 100%;
          background-image: url("https://www.jy-info.com/img/software/depthBackground.png") ;
          background-size: cover;
          background-repeat:no-repeat;
          padding-bottom:9.7rem;
          }



  .content_index02 {
    width: 100%;
    margin-top:0.60rem;
    padding-bottom: 0.4rem;
    background: rgba(20,71,192,1);
  }

  .content_index02_content {
    width: auto;
    height: auto;
    position: relative;
    left: 7.96rem;

  }

  .content_index03_content .link-left {
    width: 0.26rem;
    height: 0.06rem;
    margin-top: 0.46rem;
    margin-bottom: 0;
    padding-top: 0;
    vertical-align:middle;
    border: none;
    display: inline-block;
    background: rgba(255,255,255,1);
  }

  .content_index03_content .link-right {
    width: 3.00rem;
    height: 0.30rem;
    font-size: 0.30rem;
    border: none;
    margin-top: 0.34rem;
    margin-bottom: 0;
    padding: 0;
    font-family: Microsoft YaHei,sans-serif;
    vertical-align: middle;
    font-weight: 200;
    display: inline-block;
    color: rgba(255,255,255,1);
    margin-left: 0.20rem
  }

  .content_index03_content {
    width: 5.12rem;
    font-family: Microsoft YaHei,sans-serif;
    margin-top:0.36rem;
    padding-bottom: 0;
    margin-bottom:0.56rem;
    padding-top: 0;
    float:left;

  }


  @media (min-width: 1200px) {
    .query {
      width: 2.40rem;
      height: 0.60rem;
      margin-top: 2.84rem;
      margin-left: 0.80rem;
      font-size: 0.26rem;
      font-family: Microsoft YaHei,sans-serif;
      font-weight: 500;
      color: rgba(255,255,255,1);
      background: linear-gradient(45deg,rgba(253,175,143,1),rgba(253,125,130,1));
      border-radius: 0.30rem;
      border: none;
    }
  }
  .erroricon {
    width: 4.04rem;
    height: 3.92rem;
    left: 2.55rem;
    top: 8.29rem;
    position: absolute;
    background-image: url("https://www.jy-info.com/img/software/soft_Second.png");
    background-size: cover;
  }

  .content_index04 {
    width: 8.73rem;
    height: 0.70rem;
    margin: 1.20rem auto 0;
    padding: 0 0;
  }

  .content_index04_top {
    height: 0.40rem;
    margin-left:2.11rem;
    font-size: 0.40rem;
    font-family: Microsoft YaHei,sans-serif;
    padding: 0 0;
    font-weight: 400;
    text-align:center;
    color: rgba(44,46,51,1);
    border:none;
    outline:none;
    position:relative;
  }

  .content_index05_top {
    height: 0.40rem;
    margin-left: 1.08rem;
    font-size: 0.40rem;
    font-family: Microsoft YaHei,sans-serif;
    padding: 0 0;
    font-weight: 400;
    text-align: center;
    color: rgba(44,46,51,1);
  }

  .content_index06_top {
    height: 0.40rem;
    margin-left: 1.45rem;
    font-size: 0.40rem;
    font-family: Microsoft YaHei,sans-serif;
    padding: 0 0;
    font-weight: 400;
    text-align: center;
    color: rgba(44,46,51,1);
  }

  .content_index07_top {
    height: 0.40rem;
    margin:auto auto ;
    font-size: 0.40rem;
    font-family: Microsoft YaHei,sans-serif;
    padding: 0 0;
    font-weight: 400;
    text-align: center;
    color: rgba(44,46,51,1);
  }

  .content_index08_top {
    height: 0.40rem;
    margin-left: 2.45rem;
    font-size: 0.40rem;
    font-family: Microsoft YaHei;
    padding: 0 0;
    font-weight: 400;
    text-align: center;
    color: rgba(44,46,51,1);
  }

  .content_index04_bottomline {
    width: 1.40rem;
    height: 0.04rem;
    margin: 0.26rem auto 0;
    background: rgba(61,156,253,1);
  }

  .develop {
    width: 72.92%;
    height: 7.20rem;
    background: rgba(255,255,255,1);
    margin: 0.90rem auto 0 auto;
    box-shadow: 0 0.10rem 0.24rem 0 rgba(29,36,85,0.1);
    padding: 0.40rem 0 0 0.40rem;
  }

  .develop_issue {
    width: 100%;
    height: 1.32rem;
  }

    .develop_issue > img {
      width: 0.60rem;
      height: 0.60rem;
      margin-right:0.40rem;
      display: inline-block;
    }

  .develop_issue_name {
    width: 1.29rem;
    height: 0.31rem;
    font-size: 0.32rem;
    font-family: Microsoft YaHei,sans-serif;
    padding: 0 0;
    vertical-align:middle;
    font-weight: 400;
    color: rgba(44,46,51,1);

  }

  .develop_issue_content {
    width: 60.79%;
    height: 0.26rem;
    font-size: 0.26rem;
    font-family: Microsoft YaHei,sans-serif;
    font-weight: 300;
    padding: 0 0;
    margin: 0.21rem auto 0 1.01rem;
    color: rgba(90,94,102,1);
  }

  .content_index08_top {
    height: 0.40rem;
    margin-left: 2.11rem;
    font-size: 0.40rem;
    font-family: Microsoft YaHei,sans-serif;
    padding: 0 0;
    font-weight: 400;
    text-align: center;
    color: rgba(44,46,51,1);
    border: none;
    outline: none;
    position: relative;
  }

  .content_index08_bottomline {
    width: 1.40rem;
    height: 0.04rem;
    margin: 0.25rem auto 0;
    background: rgba(61,156,253,1);
  }
  .project_case {
    width: 100%;
    margin-top: 0.6rem;
    height: 8.10rem;
    flex-wrap: nowrap;
    justify-content:space-between;
  }

  .project_case_left {
    width: 16.6%;
    background: rgba(255,255,255,1);
    float: left;
    padding: 0 0;
  }

  .project_case_left_inner {
    width: 100%;
    height: 6.80rem;
    overflow: hidden;
    background-image: url("https://www.jy-info.com/img/software/soft_Top.png");
    background-size: cover;
  }

  .project_case_middle {
    width: 57.3%;
    margin-left: 3.65%;
    background: rgba(255,255,255,1);
    box-shadow: 0 0.10rem 0.24rem 0 rgba(29,36,85,0.1);
    float: left;
  }

  .project_case_middle_inner {
    width: 100%;
    height: 6.80rem;
    background-image: url("https://www.jy-info.com/img/software/soft_Top_copy1.png");
    background-size: cover;
  }

  .project_case_right {
    width: 16.6%;
    background: rgba(255,255,255,1);
    box-shadow: 0 0.10rem 0.24rem 0 rgba(29,36,85,0.1);
    margin-left: 3.60%;
    float: right;
  }

  .project_case_right_inner {
    width: 100%;
    height: 6.80rem;
    overflow: hidden;
    background-image: url("https://www.jy-info.com/img/software/soft_Top_copy2.png");
    background-size: cover;
  }

  .transfrom_left {
    width: 0.80rem;
    height: 0.80rem;
    border-radius: 50%;
    background-image: url("https://www.jy-info.com/img/software/arrow-left.png");
    background-size: cover;
    top: 28.55rem;
    left: 12.5%;
    border: none;
    position: absolute;
  }

  .transfrom_right {
    width: 0.80rem;
    height: 0.80rem;
    border-radius: 50%;
    background-image: url("https://www.jy-info.com/img/software/arrow-left.png");
    background-size: cover;
    transform: rotateY(180deg); /* 垂直镜像翻转 */
    top: 28.55rem;
    left: 83.4%;
    position: absolute;
    border: none;
  }

  /* 查看更多案例按钮 */
  .cases {
    width: 3.00rem;
    height: 0.70rem;
    background: linear-gradient(45deg,rgba(253,175,143,1),rgba(253,125,130,1));
    border-radius: 0.35rem;
    font-size: 0.26rem;
    font-family: Microsoft YaHei,serif;
    font-weight: 500;
    color: rgba(255,255,255,1);
    position: relative;
    margin: 0.6rem 42% 0;
    border: none;
  }

  .soft_service {
    width: 72.92%;
    height: 3.80rem;
    margin-left: 2.60rem;
    margin-top: 0.60rem;
  }

  .soft_design {
    width: 22.86%;
    height: 3.80rem;
    background: rgba(255,255,255,1);
    box-shadow: 0 0.10rem 0.24rem 0 rgba(29,36,85,0.1);
    float: left;
    margin-right: 0.29rem;
  }

  .soft_design > img {
    width: 2.44rem;
    height: 1.98rem;
    margin:0.30rem 0.45rem 0.39rem;
  }

  .soft_design_name {
    width: 100%;
    height: 0.27rem;
    font-size: 0.26rem;
    font-family: Microsoft YaHei,sans-serif;
    font-weight: 400;
    text-align: center;
    display: inline-block;
    padding: 0 0 ;
    margin-bottom:0.17rem;
    vertical-align: bottom;
    color: rgba(44,46,51,1);

  }

  .soft_design_content {
    width: 100%;
    height: 0.22rem;
    font-size: 0.20rem;
    font-family: Microsoft YaHei,sans-serif;
    font-weight: 400;
    color: rgba(90,94,102,1);
    padding: 0 0;
    text-align: center;
    display: inline-block;
    padding-left: 0.1rem;
    padding-right: 0.20rem;
  }

  /*严控流程 高质量服务*/
  .process_content {
    width: 100%;
    margin: auto auto;
    padding-bottom: 2.80rem;
  }
  .process_top_outline {
    margin-top: 0.60rem;
    margin-left: 2.60rem;

  }
  .process_top {

    width: 3.20rem;
    height: 2.92rem;
    margin-right: 0.40rem;
    float: left;
    padding-bottom: 4rem;
  }

  .process_below_outline {
    background-color: transparent;
    margin-left: 4.39rem;

  }

  .process_below {
    width: 3.20rem;
    height: 2.92rem;
    margin-top: 0.10rem;
    margin-right: 0.40rem;
    float: left;
    padding-bottom: 4.3rem;
  }

  .submit_report {
    width: 72.91%;
    height: 7.70rem;
    padding: 0 0.6rem;
    top: 7.65rem;
    left: 13.5%;
    background: rgba(255,255,255,1);
    box-shadow: 0 0.10rem 0.24rem 0 rgba(29,36,85,0.1);
    position: relative;
  }

  .form_title {
    top: 0.42rem;
    vertical-align: central;
    width: 95%;

    position: absolute;
    font-size: 0.26rem;
    font-family: Microsoft YaHei,sans-serif;
    font-weight: 300;
    color: rgba(44,46,51,1);
  }

  .submit_report_title_first {
    position: relative;

    margin-left: 35%;
    margin-bottom:0.22rem;
  }

  .submit_report_title_second {
    position: relative;

    margin-left: 19%;
  }

  .form_content {
    top: 1.72rem;
    left: 0.20rem;
    padding-right: 0.8rem;
    position: absolute;
  }

  .form_name {
    position: relative;
    width: 44.18%;
    height: 0.52rem;
    margin-left: 0.60rem;
    margin-bottom: 0.30rem;
    border: 0.01rem solid rgba(171,174,179,1);
    font-size: 0.22rem;
    display: block;
    float: left;
    font-family: Microsoft YaHei,sans-serif;
    font-weight: 300;
    color: rgba(133,138,153,1);
  }

  .form_uint {
    position: relative;
    height: 0.52rem;
    width: 93%;
    margin-left: 0.60rem;
    margin-bottom: 0.30rem;
    border: 0.01rem solid rgba(171,174,179,1);
    font-size: 0.22rem;
    font-family: Microsoft YaHei,sans-serif;
    font-weight: 300;
    color: rgba(133,138,153,1);
  }



  .form_description {
    position: relative;
    width: 93%;
    height: 1.93rem;
    margin-left: 0.60rem;
    border: 0.01rem solid rgba(171,174,179,1);
    font-size: 0.22rem;
    font-family: Microsoft YaHei,sans-serif;
    font-weight: 300;
    color: rgba(133,138,153,1);
  }

  .submit_report_button {
    position: relative;
    margin: 0.49rem auto 0.19rem;
    width: 3.90rem;
    height: 0.60rem;
    margin-left: 34%;
    background: linear-gradient(45deg,rgba(253,175,143,1),rgba(253,125,130,1));
    border-radius: 0.30rem;
    font-size: 0.26rem;
    font-family: Microsoft YaHei,sans-serif;
    font-weight: 500;
    color: rgba(255,255,255,1);
    border: none;
  }

  .grapic  /deep/ .hexagon_despo_content {
    line-height:0.23rem;
  }

  @media screen and (max-width: 768px){

    .head_Top {
      width: 100%;
      height: 6.50rem;
      background-image: url("https://www.jy-info.com/img/software/soft_Top.png");
      background-size: 100% 100%;
    }



    .soft > .head_Top > .scheme {
      width: 31.0%;
      height: 0.80rem;
      position: absolute;
      top: 5.0rem;
      left: 7.2%;
      border-radius: 0.40rem;
      font-size: 0.3rem;
      color: #FFFFFF;
      background: linear-gradient(45deg,rgba(253,175,143,1),rgba(253,125,130,1));
      border: none;
    }

    .erroricon {
      width:43.3%;
      height: 4.82rem;
      left: 5.6%;
      top: 8.29rem;
      position: absolute;
      background-image: url("https://www.jy-info.com/img/software/soft_Second.png");
      background-size: cover;
    }

    .content_index02 {
      width: 100%;
      margin-top:0.60rem;
      padding-bottom: 0.4rem;
      background: rgba(20,71,192,1);
    }


    .content_index02_content {
      width: auto;
      position: relative;
      padding-bottom: 2.26rem;
      left: 60%;

    }

    .content_index03_content {
      width: 50.2%;
      font-family: Microsoft YaHei,sans-serif;
      margin-bottom: 0.1rem;
      display: block;

    }

    .content_index03_content .link-right {
      width: 4.00rem;
      height: 0.30rem;
      font-size: 0.26rem;
      border: none;
      margin-top: 0.34rem;
      margin-bottom: 0;
      padding: 0;
      font-family: Microsoft YaHei,sans-serif;
      vertical-align: middle;
      font-weight: 200;
      display: inline-block;
      color: rgba(255,255,255,1);
      margin-left: 0.20rem
    }

    .query{
      width: 2.40rem;
      height: 0.70rem;
      margin-top: 3.04rem;
      margin-left: 1.5rem;
      font-size: 0.26rem;
      font-family: Microsoft YaHei,sans-serif;
      font-weight: 500;
      color: rgba(255,255,255,1);
      background: linear-gradient(45deg,rgba(253,175,143,1),rgba(253,125,130,1));
      border-radius: 0.30rem;
      border: none;
    }

    .develop{
      width: 81.92%;
      height: 10.20rem;
      background: rgba(255,255,255,1);
      margin: 0.90rem auto 0 auto;
      box-shadow: 0 0.10rem 0.24rem 0 rgba(29,36,85,0.1);
      padding: 0.40rem 0 0 0.40rem;
    }

  .develop_issue{
    width: 100%;
    height: 1.32rem;
    margin-bottom: 0.6rem;
    padding-right: 0.1rem;
  }

  .transfrom_left{
    width: 0.80rem;
    height: 0.80rem;
    border-radius: 50%;
    background-image: url("https://www.jy-info.com/img/software/arrow-left.png");
    background-size: cover;
    top: 34.15rem;
    left: 10.1%;
    border: none;
    position: absolute;
  }

    .transfrom_right {
      width: 0.80rem;
      height: 0.80rem;
      border-radius: 50%;
      background-image: url("https://www.jy-info.com/img/software/arrow-left.png");
      background-size: cover;
      transform: rotateY(180deg); /* 垂直镜像翻转 */
      top: 34.15rem;
      left: 83.4%;
      position: absolute;
      border: none;
    }

    .soft_service{
      width: 76.92%;

      margin-left: 1.6rem;
      margin-top: 0.60rem;
      margin-bottom: 5.8rem;

    }

    .soft_design {
      width: 46.86%;
      height: 4.30rem;
      background: rgba(255,255,255,1);
      box-shadow: 0 0.10rem 0.24rem 0 rgba(29,36,85,0.1);
      float: left;
      margin-right: 0.29rem;
      margin-bottom: 0.39rem;
    }

    .soft_design > img {
      width: 2.44rem;
      height: 1.98rem;
      margin:0.30rem 0.94rem 0.12rem;
    }

    .soft_design_name {
      width: 100%;
      height: 0.27rem;
      font-size: 0.26rem;
      font-family: Microsoft YaHei,sans-serif;
      font-weight: 400;
      text-align: center;
      display: inline-block;
      padding: 0 0 ;
      margin-bottom:0.02rem;
      vertical-align: bottom;
      color: rgba(44,46,51,1);

    }

    .soft_design_content {
      width: 100%;
      font-size: 0.22rem !important;
      font-family: Microsoft YaHei,sans-serif;
      font-weight: 400;
      color: rgba(90,94,102,1);
      text-align: center;
      display: inline-block;
    }

    .content_index04 {
      width: 8.73rem;
      height: 0.70rem;
      margin: 1.20rem auto 0rem;
    }

    /*严控流程 高质量服务*/
    .process_content {
      width: 100%;
      margin: 0 auto 1.8rem;
      padding-bottom: 8.0rem;
    }
    .process_top_outline {
      margin-top: 0.80rem;
      margin-left: 2.00rem;

    }
    .process_top {
      width: 4.0rem;
      height: 3.5rem;
      margin-right: 0.40rem;
      margin-bottom: 0.4rem;
      float: left;
    }

    .process_below_outline {
      background-color: transparent;
      margin-left: 2.00rem;
    }

    .process_below {
      width: 4.0rem;
      height: 3.5rem;
      margin-right: 0.40rem !important;
      margin-bottom: 0.1rem;
      float: left;
    }


    .hexagon /deep/ .hexagon_despo_content{
      font-size: 0.21rem !important;
      line-height: 0.36rem;

    }


    .form_title{
      top: 0.42rem;
      vertical-align: central;
      width: 100%;

      position: absolute;
      font-size: 0.26rem;
      font-family: Microsoft YaHei,sans-serif;
      font-weight: 300;
      color: rgba(44,46,51,1);
      margin-bottom: 0.5rem;
    }

    .submit_report_title_second{
      position: relative;
      margin-left: 4.8%;
      text-indent: 0.7rem;
    }

    .form_content{
      width: 98.6%;
      top: 1.72rem;
      position: absolute;
      margin-top: 1.2rem;
      padding-left: unset !important;
    }

    .submit_report{
      width: 90.91%;
      height: 9.70rem;
      top: 7.65rem;
      padding-left: unset;
      left: 4.5%;
      background: rgba(255,255,255,1);
      box-shadow: 0 0.10rem 0.24rem 0 rgba(29,36,85,0.1);
      position: relative;
    }

  }

</style>
