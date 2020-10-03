<template>
  <div class="success_case">
        <div class="head_banner">成功案例</div>
        <div class="toggle_title">
          <div class="category" @click="toggle_panel()">运维服务</div>
          <div class="category" @click="toggle_panel()">软件开发</div>
          <div class="category" @click="toggle_panel()">弱电集成</div>
          <div class="category" @click="toggle_panel()">端玛代码检测</div>
          <div class="category" @click="toggle_panel()">麒麟大数据</div>
        </div>
        <div class="cases">
           <div class="case" v-for="(item, index) in caseOps" :key="index">
             <img v-bind:src="item.caseImg" alt="图片不存在">
             <div class="case_name" >{{item.caseName}}</div>
             <div class="case_details_introduce">{{item.caseContent}}</div>
             <div class="detail_button">了解详情</div>
           </div>
        </div>
    <!-- 底部 -->
    <software-footer></software-footer>
  </div>

</template>

<script>
import SoftwareFooter from "../public/footer";
import cases from "../../assets/js/cases";
export default {
  name: "Cases",
  components: {
    SoftwareFooter
  },
  data() {
    return {
      cases:[],
      caseOps:[]
    }
  },
  methods: {

    // 点击菜单添加 .active 样式
    toggle_panel () {
      console.log(this.cases[2])
      let categoryList = document.getElementsByClassName("category");
      let that = this;
      for (let i = 0; i < categoryList.length; i++) {
        categoryList[i].id= "category_noactive";
        categoryList[i].onclick= function() {
          categoryList[i].index=i
          categoryList[this.index].id= "category_active";

        }
      }
    }

  },



  created() {

    this.cases[0]=cases.caseList,
      this.cases[1]=cases.softcaseList,
      this.cases[2]=cases.hardwarecaseList,
      this.cases[3]=cases.descacaseList,
    this.cases[4]=cases.kylicaseList,
    this.caseOps=this.cases[0]

  }

}
</script>
<style scoped>
  @media screen and ( min-width: 1200px) {
    .success_case {
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

    .toggle_title{
      width: 19.2rem;
      height: 0.9rem;
      background: #DDEDFD;
      padding: 0 1.40rem;
      align-items: center;
    }

    .category{
      height: 0.9rem;
      font-size:0.2rem;
      line-height: 0.9rem;
      text-align: center;
      font-family: Microsoft YaHei sans-serif;
      justify-content: space-evenly;
      font-weight: 400;
      color: #8C8F93;
      float: left;
      margin:0 1.18rem;
    }

    #category_active {
      color: #3D9CFD!important;
      border-bottom: 0.02rem solid #3D9CFD!important;
      opacity: 1!important;
    }

    #category_active:hover {
      color: #3D9CFD!important;
      border-bottom: 0.02rem solid #3D9CFD!important;
      opacity: 1!important;
      cursor: pointer;
    }

    .cases{
      width:100%;
      height: 10.2rem;
      background: #DDEDFD;
      padding: 0.7rem 2.25rem 0;
      margin-bottom: 1.18rem;
    }

    .case{
      width: 4.2rem;
      height: 4.34rem;
      background: #DDEDFD;
      margin:0 0.35rem 0.82rem;
      float: left;
      background: #FFFFFF;
    }

    .case img{
      width: 3.96rem;
      height: 2.40rem;
      margin: 0.12rem 0.12rem 0.2rem;
    }

    .case_name{
      height: 0.26rem;
      font-size: 0.26rem;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #2D2F33;
      margin-bottom: 0.17rem;
    }

    .case_details_introduce{
      height: 0.44rem;
      font-size: 0.2rem;

      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #5A5E66;
      margin-bottom: 0.21rem;

    }

    .detail_button{
      width: 1.16rem;
      height: 0.36rem;
      line-height: 0.36rem;
      background: #3D9CFD;
      border-radius: 0.18rem;
      font-size: 0.18rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      text-align: center;
      margin-left: 69.5%;
    }
  }

</style>
