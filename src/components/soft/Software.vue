<template>
  <div class="soft">
    <jy-header class="jyHeader" />
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
          <span class="soft_design_name">{{ item.desopsName }}</span><br />
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
          <form ref="form" :model="form" label-width="0.80rem" @submit.prevent="onSubmit">

            <input class="form_name" v-model="form.name" placeholder="姓名">

            <input class="form_name" v-model="form.mobile" placeholder="手机号">


            <input class="form_uint" v-model="form.uint" placeholder="公司名称">


            <input class="form_uint" v-model="form.budget" placeholder="开发预算" />


            <input class="form_description" v-model="form.description" placeholder="示例：我们是电商公司，想开发一款企业内部采购管理软件">


            <button class="submit_report_button" type="submit" @click="onSubmit">立即提交你的需求</button>

          </form>
        </div>
      </div>

    </div>
    <!-- 底部 -->
    <software-footer></software-footer>
  </div>
</template>

<script>
  import JyHeader from '../JyHeader';
  import SoftwareFooter from '../public/footer';
  import Grapic from '../public/grapic';
  import software from '../../assets/js/software.js';
 // import screen from '../../assets/js/screen.js'; //屏幕分辨率
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
      let data = {
        name: this.form.name,
        mobile: this.form.mobile,
        uint: this.form.uint,
        budget: this.form.budget,
        description: this.form.description
      }
      //表单提交
      axios.post(`/activity/CreateActivity`, data)
        .then(res => {
          if (res.status === '0') {
            this.$message({
              type: 'success',
              message: res.status === '0' ? '提交完成' : '提交失败'
            })
          } else {
            this.$message({
              type: 'error',
              message: res.info
            })
          }
        });

    }

      
    },
    watch: {
      screenWidth(val) {
        if (!this.timer) {
          location.reload()
          this.screenWidth = val
          this.timer = true
          let that = this
          setTimeout(function () {
            //that.screenWidth = that.$store.state.canvasWidth 
            console.log(that.screenWidth)
            that.timer = false
            
          }, 60)
        }
      } 
      
    },
    mounted() {
      const that = this
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          that.screenWidth = window.screenWidth
          console.log(that.screenWidth)
          if (that.screenWidth <1200) {
            window.screenWidth=1200
          } else {
            this.$forceUpdate()
          }
        })()
      }
    },

  created() {
    this.softServiceContentOne = software.softServiceContentOne;
    this.softServiceContentTwo = software.softServiceContentTwo;
    this.softServiceContentThree = software.softServiceContentThree;
    this.softServiceContentFour = software.softServiceContentFour;
    }


}
</script>

<style scoped>
        .soft {
          padding: 0;
          margin: auto auto;
          width:100%;
          background-color: #EDF5FD;
        }
  .head_Top {
    width: 100%;
    height: 6.50rem;
    background-image: url("//jy-info.qicp.vip/static/software/soft_Top.png");
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
          background-image: url("//jy-info.qicp.vip/static/software/depthBackground.png") ;
          background-size: cover;
          background-repeat:no-repeat;
          padding-bottom:9.7rem;
          }

  .content_index01 {
    height: 2.50rem;
    font-size: 0.40rem;
    left: 50%;
    transform: translateX(-50%);
    top: 7.70rem;
    position: absolute;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(44,46,51,1);
  }

  .content_index01_baseline {
    width: 1.40rem;
    height: 0.04rem;
    background: rgba(61,156,253,1);
    margin: 1.86rem auto 0.26rem;
  }

  .content_index02 {
    width: 100%;
    height: 4.00rem;
    margin-top:0.60rem;
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
    margin-bottom: 0rem;
    padding-top: 0rem;
    vertical-align:middle;
    border: none;
    display: inline-block;
    background: rgba(255,255,255,1);
  }

  .content_index03_content .link-right {
    width: 3.00rem;
    height: 0.30rem;
    font-size: 0.30rem;
    margin-left: 0.12rem;
    border: none;
    margin-top: 0.34rem;
    margin-bottom: 0rem;
    padding: 0rem;
    font-family: Microsoft YaHei;
    vertical-align: middle;
    font-weight: 200;
    display: inline-block;
    color: rgba(255,255,255,1);
    margin-left: 0.20rem
  }

  .content_index03_content {
    width: 5.12rem;
    font-family: Microsoft YaHei;
    margin-top:0.36rem;
    padding-bottom:0rem;
    margin-bottom:0.56rem;
    padding-top:0rem;
    float:left;

  }

  /* @media (min-width: 1200px) and (max-width: 979px)*/
  @media (min-width: 1200px) {
    .query {
      width: 2.40rem;
      height: 0.60rem;
      margin-top: 2.84rem;
      margin-left: 0.80rem;
      font-size: 0.26rem;
      font-family: Microsoft YaHei;
      font-weight: 500;
      color: rgba(255,255,255,1);
      background: linear-gradient(45deg,rgba(253,175,143,1),rgba(253,125,130,1));
      border-radius: 0.30rem;
      border: none;
    }
  }

  @media (max-width: 1200px) {
    .query {
      width: 2.40rem;
      height: 0.60rem;
      margin-top: 2.84rem;
      margin-left: 0.80rem;
      font-size: 0.26rem;
      font-family: Microsoft YaHei;
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
    background-image: url("//jy-info.qicp.vip/static/software/soft_Second.png");
    background-size: cover;
  }

  .content_index04 {
    width: 8.73rem;
    height: 0.70rem;
    margin: 1.20rem auto 0rem;
    padding:0rem 0rem;
  }

  .content_index04_top {
    height: 0.40rem;
    margin-left:2.11rem;
    font-size: 0.40rem;
    font-family: Microsoft YaHei;
    padding: 0rem 0rem;
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
    font-family: Microsoft YaHei;
    padding: 0rem 0rem;
    font-weight: 400;
    text-align: center;
    color: rgba(44,46,51,1);
  }

  .content_index06_top {
    height: 0.40rem;
    margin-left: 1.45rem;
    font-size: 0.40rem;
    font-family: Microsoft YaHei;
    padding: 0rem 0rem;
    font-weight: 400;
    text-align: center;
    color: rgba(44,46,51,1);
  }

  .content_index07_top {
    height: 0.40rem;
    margin:auto auto ;
    font-size: 0.40rem;
    font-family: Microsoft YaHei;
    padding: 0rem 0rem;
    font-weight: 400;
    text-align: center;
    color: rgba(44,46,51,1);
  }

  .content_index08_top {
    height: 0.40rem;
    margin-left: 2.45rem;
    font-size: 0.40rem;
    font-family: Microsoft YaHei;
    padding: 0rem 0rem;
    font-weight: 400;
    text-align: center;
    color: rgba(44,46,51,1);
  }

  .content_index04_bottomline {
    width: 1.40rem;
    height: 0.04rem;
    margin: 0.26rem auto 0rem;
    background: rgba(61,156,253,1);
  }

  .develop {
    width: 14.00rem;
    height: 7.20rem;
    background: rgba(255,255,255,1);
    margin: 0.90rem auto 0 auto;
    box-shadow: 0rem 0.10rem 0.24rem 0rem rgba(29,36,85,0.1);
    padding: 0.40rem 0rem 0rem 0.40rem;
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
    font-family: Microsoft YaHei;
    padding:0rem 0rem;
    vertical-align:middle;
    font-weight: 400;
    color: rgba(44,46,51,1);

  }

  .develop_issue_content {
    width: 8.51rem;
    height: 0.26rem;
    font-size: 0.26rem;
    font-family: Microsoft YaHei;
    font-weight: 300;
    padding: 0rem 0rem;
    margin: 0.21rem auto 0rem 1.01rem;
    color: rgba(90,94,102,1);
  }

  .content_index08 {
    width: 8.73rem;

    margin: 0rem auto 0.5rem;
    padding: 0rem 0rem;
  }

  .content_index08_top {
    height: 0.40rem;
    margin-left: 2.11rem;
    font-size: 0.40rem;
    font-family: Microsoft YaHei;
    padding: 0rem 0rem;
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
    margin: 0.25rem auto 0rem;
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
    padding: 0rem 0rem;
  }

  .project_case_left_inner {
    width: 100%;
    height: 6.80rem;
    overflow: hidden;
    background-image: url("//jy-info.qicp.vip/static/software/soft_Top.png");
    background-size: cover;
  }

  .project_case_middle {
    width: 57.3%;
    margin-left: 3.65%;
    background: rgba(255,255,255,1);
    box-shadow: 0rem 0.10rem 0.24rem 0rem rgba(29,36,85,0.1);
    float: left;
  }

  .project_case_middle_inner {
    width: 100%;
    height: 6.80rem;
    background-image: url("//jy-info.qicp.vip/static/software/soft_Top_copy1.png");
    background-size: cover;
  }

  .project_case_right {
    width: 16.6%;
    background: rgba(255,255,255,1);
    box-shadow: 0rem 0.10rem 0.24rem 0rem rgba(29,36,85,0.1);
    margin-left: 3.60%;
    float: right;
  }

  .project_case_right_inner {
    width: 100%;
    height: 6.80rem;
    overflow: hidden;
    background-image: url("//jy-info.qicp.vip/static/software/soft_Top_copy2.png");
    background-size: cover;
  }

  .transfrom_left {
    width: 0.80rem;
    height: 0.80rem;
    border-radius: 50%;
    background-image: url("//jy-info.qicp.vip/static/software/arrow-left.png");
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
    background-image: url("//jy-info.qicp.vip/static/software/arrow-left.png");
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
    margin: 0.6rem 42% 0rem;
    border: none;
  }

  .soft_service {
     width:100%;
     height:3.80rem;
     margin-left:2.60rem;
     margin-top:0.60rem;
  }

  .soft_design {
    width: 16.667%;
    height: 3.80rem;
    background: rgba(255,255,255,1);
    box-shadow: 0rem 0.10rem 0.24rem 0rem rgba(29,36,85,0.1);
    float: left;
    margin-right: 0.41rem;
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
    font-family: Microsoft YaHei;
    font-weight: 400;
    text-align: center;
    display: inline-block;
    padding: 0rem 0rem ;
    margin-bottom:0.17rem;
    vertical-align: bottom;
    color: rgba(44,46,51,1);

  }

  .soft_design_content {
    width: 100%;
    height: 0.22rem;
    font-size: 0.20rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(90,94,102,1);
    padding: 0rem 0rem;
    text-align: center;
    display: inline-block;
    padding-left: 0.20rem;
    padding-right: 0.20rem;
  }

  /*严控流程 高质量服务*/
  .process_content {
    width: 100%;
    margin: auto auto;
    padding-bottom: 0.60rem;
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


  }

  .process_below_outline {
    background-color: transparent;
    margin-left: 4.39rem;
  }

  .process_below {
    width: 3.20rem;
    height: 2.92rem;
    margin-top: 0.60rem;
    margin-right: 0.40rem;
    float: left;
  }

  .submit_report {
    width: 72.92%;
    height: 7.70rem;
    padding: 0rem 0.6rem;
    top: 7.65rem;
    left: 13.5%;
    background: rgba(255,255,255,1);
    box-shadow: 0rem 0.10rem 0.24rem 0rem rgba(29,36,85,0.1);
    position: relative;
  }

  .form_title {
    top: 0.42rem;
    vertical-align: central;
    width: 100%;

    position: absolute;
    font-size: 0.26rem;
    font-family: Microsoft YaHei;
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
    position: absolute;
  }

  .form_name {
    position: relative;
    width: 6.10rem;
    height: 0.52rem;
    margin-left: 0.60rem;
    margin-bottom: 0.30rem;
    border: 0.01rem solid rgba(171,174,179,1);
    font-size: 0.22rem;
    display: block;
    float: left;
    font-family: Microsoft YaHei;
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
    font-family: Microsoft YaHei;
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
    font-family: Microsoft YaHei;
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
    font-family: Microsoft YaHei;
    font-weight: 500;
    color: rgba(255,255,255,1);
    border: none;
  }

  .grapic  /deep/ .hexagon_despo_content {
    line-height:0.23rem;
  }

</style>
