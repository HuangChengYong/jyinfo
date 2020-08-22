<template>
  <div class="recruitment">
    <div class="recruitment_head_backBoard">
      <div class="recruitment_search">
        <div class="recruitment_search_column">
          <input class="recruitment_search_box" name="search_content" maxlength="10" placeholder="输入职位关键词、背景专业名称" />
          <button class="recruitment_search_button">搜索</button>
        </div>
      </div>
    </div>
    <div class="recruitment_position">
      <div class="recruitment_groups" v-for=" (item, index_first) in recruitment_groups_Desc" :key="index_first">
        <div class="recruitment_groups_position">{{ item.position }}</div>
        <div class="recruitment_groups_condition">{{ item.condition }}</div>
        <div class="recruitment_groups_view" @click="recruitment_details(index_first)"></div>
        <div class="recruitment_groups_details_bar">
          <div class="details_bar_content"  v-for=" (item, index_second) in item.workplcae" :key="index_second">{{ item }}</div>
        </div>
        <div class="recruitment_groups_details" v-show="direction_tag[index_first]">
          <p class="recruitment_groups_details_cutline"></p>
          <!--岗位职责-->
          <div class="recruitment_groups_details_content" data-bind="recruitment_groups_responsibilities" >

            <span class="recruitment_groups_details_title">{{ recruitment_groups_responsibilities.title}}</span>
            
            <div class="recruitment_groups_details_desc" v-for=" (item, index_three) in recruitment_groups_responsibilities.desc" :key="index_three">
              <div class="recruitment_groups_details_symble" /><div class="recruitment_groups_details_des_content">{{item }}</div>
            </div>
            <!--任职要求-->

          </div>
          <div class="recruitment_groups_details_content" data-bind="recruitment_groups_capability">

            <span class="recruitment_groups_details_title">{{ recruitment_groups_capability.title }}</span>
            
            <div class="recruitment_groups_details_desc" v-for=" (item, index_four) in recruitment_groups_capability.desc" :key="index_four">

              <div class="recruitment_groups_details_symble" /><div class="recruitment_groups_details_des_content">{{item }}</div>
            </div>
          </div>
          <button class="position_apply" @click="employee()">立即申请</button>
        </div>
      </div>
    </div>

  </div>


</template>

<script>
  import software from '../../assets/js/software.js';
  export default {
    name: "Recruitment",
    data() {
      return {
        direction_tag: [],
        recruitment_groups_Desc: [],
        recruitment_groups_responsibilities: [],
        recruitment_groups_capability: []
      }
    },
    methods: {
      recruitment_details(index_first) {
        for (var i = 0; i < software.recruitment_groups_Desc.length; i++) {
          if (i != index_first) {
            this.direction_tag[i] = false
          }
          
        }
        if (!this.direction_tag[index_first]) {
          this.direction_tag[index_first] = true
            this.recruitment_groups_responsibilities = software.recruitment_groups_responsibilities[index_first],
              this.recruitment_groups_capability = software.recruitment_groups_capability[index_first];
          document.getElementsByClassName("recruitment_groups_view")[index_first].setAttribute('style', 'transform: rotateX(180deg);');
        } else {
          
          this.direction_tag[index_first] = false
          document.getElementsByClassName("recruitment_groups_view")[index_first].setAttribute('style', 'transform: rotateX(360deg);');
        }
      },
      employee() {
        alert("该职位暂未开放，请耐心等待")
      }
    },
    created() {
      for (var i = 0; i < software.recruitment_groups_Desc.length; i++) {
        this.direction_tag[i] = false
      }
      this.recruitment_groups_Desc = software.recruitment_groups_Desc;

    }
  }
</script>

<style scoped>
  .recruitment {
    margin: 0;
    padding: 0;
    border: none;
  }

  .recruitment_head_backBoard {
    width: 19.2rem;
    height: 6.5rem;
    background: rgba(25,73,157,1);
  }

  .recruitment_search {
    width: 72.92%;
    height: 1.20rem;
    background: rgba(255,255,255,1);
    box-shadow: 0px 10px 24px 0px rgba(29,36,85,0.1);
    top: 5.9rem;
    position: absolute;
    padding: 0.3rem 0 0.3rem 0.5rem ;
    left:13.5%;
  }

  .recruitment_search_column {
    width: 92.80%;
    height: 0.6rem;
    padding: 0 0;
    border: none;
  }

  .recruitment_search_box, .recruitment_search_button {
    font-size: 0.26rem;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(135,141,153,1);
  }

  .recruitment_search_box {
    width: 86%;
    height: 0.6rem;
    border: none;
    padding: 0;
    outline: none;
    text-align: left;
    margin: 0;
    display: inline;
  }


  .recruitment_search_button {
    width: 12.70%;
    height: 0.6rem;
    background: linear-gradient(45deg,rgba(253,175,143,1),rgba(253,125,130,1));
    border-radius: 0.3rem;
    border: none;
    color: rgba(255,255,255,1);
    text-align: center;
    outline: none;
    margin: 0;
    padding: 0;
  }


    .recruitment_position {
    width: 100%;
    background: rgba(255,255,255,1);
    padding-left: 13.5%;
    padding-top: 1.8rem;
  }

  .recruitment_groups {
    width: 84.34%;
    background: rgba(244,245,248,1);
    padding-top: 4.2%;
    padding-left: 5%;
    padding-bottom: 0.61rem;
    margin-bottom: 0.40rem;
  }

  .recruitment_groups_position {
    height: 0.36rem;
    font-size: 0.36rem;
    font-family: Microsoft YaHei Arial, Helvetica, sans-serif;
    text-align: left;
    font-weight: 400;
    padding: 0;
    margin-right: 0.21rem;
    margin-bottom: 0.49rem;
    display: inline;
    color: rgba(45,47,51,1);
  }

  .recruitment_groups_condition {
    height: 0.29rem;
    font-size: 0.30rem;
    font-family: Microsoft YaHei Arial, Helvetica, sans-serif;
    font-weight: 400;
    text-align: left;
    line-height: 0.30rem;
    padding: 0;
    margin: 0;
    display: inline;
    color: rgba(90,94,102,1);
  }

  .recruitment_groups_view {
    width: 2.9%;
    height: 0.2rem;
    position: relative;

    left: 87.1%;
    bottom: 0.19rem;
    background-image: url("//jy-info.qicp.vip/static/software/recruitment_groups_view.png");
    background-size:cover;
  }

  .recruitment_groups_details_bar {
    height: 0.26rem;
    padding-left: 0;
    color: rgba(90,94,102,1);
  }

  .details_bar_content {
    height: 0.26rem;
    font-size: 0.26rem;
    line-height: 0.26rem;
    font-family: Microsoft YaHei Arial, Helvetica, sans-serif;
    font-weight: 400;
    margin-right: 0.81rem;
    padding: 0;
    border: none;
    display: inline;
  }

  .recruitment_groups_details {
    padding-top: 0.61rem;
    background: rgba(244,245,248,1);
  }

  .recruitment_groups_details_cutline {
    width: 90%;
    height: 0.01rem;
    background: rgba(175,176,179,1);
    margin-top: auto auto;
  }

  .recruitment_groups_details_content {
    padding-top: 0.59rem;
  }

  .recruitment_groups_details_title {
    height: 0.28rem;
    font-size: 0.28rem;
    margin-bottom: 0.29rem;
    display: inline-block;
    font-family: Microsoft YaHei Arial, Helvetica, sans-serif;
    font-weight: 400;
    padding: 0;
    text-align: left;
    color: rgba(45,47,51,1);
  }

  .recruitment_groups_details_desc {
    height: 0.26rem;
    margin-bottom: 0.17rem;
  }

  .recruitment_groups_details_symble {
    width: 0.18rem;
    height: 0.02rem;
    background: rgba(90,94,102,1);
    margin-right: 0.18rem;
    margin-bottom: 0.09rem;
    padding-top: 0rem;
    display: inline-block;
  }

  .recruitment_groups_details_des_content {
    height: 0.25rem;
    font-size: 0.26rem;
    font-family: Microsoft YaHei Arial, Helvetica, sans-serif;
    font-weight: 400;
    display: inline;
    color: rgba(90,94,102,1);
  }

  .position_apply {
    width: 2.40rem;
    height: 0.70rem;
    border: 0.02rem solid rgba(227,90,104,1);
    border-radius: 0.35rem;
    font-size: 0.26rem;
    font-family: Microsoft YaHei Arial, Helvetica, sans-serif;
    font-weight: 400;
    color: rgba(90,94,102,1);
    margin: 0.68rem 5.1rem 0.70rem;
    background: linear-gradient(-45deg,rgba(253,125,130,1),rgba(253,175,143,1));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent
  }

    .position_apply:hover {
      width: 2.40rem;
      height: 0.70rem;
      border: 0.02rem solid rgba(227,90,104,1);
      border-radius: 0.35rem;
      font-size: 0.26rem;
      font-family: Microsoft YaHei Arial, Helvetica, sans-serif;
      font-weight: 400;
      border:none;
      font: rgba(255,255,255,1);
      margin: 0.68rem 5.1rem 0.70rem;
      background: linear-gradient(-45deg,rgba(253,125,130,1),rgba(253,175,143,1));
      -webkit-text-fill-color: white
    }
</style>
