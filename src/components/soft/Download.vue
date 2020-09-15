<template>
  <div id="download">
    <!-- 软件下载页 横幅图 -->
    <div class="download_banner"></div>
    <!-- 软件下载区域 -->
    <div class="download_area">
      <div class="content_title">企业内容人员软件下载</div>
      <div class="content_div"></div>
      <div class="area_content">
        <div class="content" v-for="(item, index) in softWareList" :key="index">
          <div class="soft_icon">
            <img :src="item.soft_icon" :alt="item.soft_name">
          </div>
          <div class="soft_download_button"><span>下载使用</span></div>
          <div class="soft_name">{{ item.soft_name }}</div>
          <div class="soft_description">{{ item.soft_desc }}</div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <!-- ICP -->
    <jy-footer />
  </div>
</template>

<script>
import dataSource from '../../assets/utils/download-data.js'
import JyFooter from "../JyFooter";
export default {
  name: "Download",
  components: {
    JyFooter
  },
  data () {
    return {
      softWareList: []
    }
  },
  created() {
    this.softWareList = dataSource.softWareList;
  }
}
</script>

<style scoped>
#download {
  margin: -0.2rem 0 0;
  padding: 0;
  width: 19.2rem;
}

/* 下载页横幅 */
#download > .download_banner {
  width: 100%;
  height: 6.5rem;
  background-color: #0F65F3;
}

/* 下载区域 */
#download > .download_area {
  width: 100%;
  height: 13.48rem;
  margin-top: 1.2rem;
}
/* 下载区域 title */
#download > .download_area > .content_title {
  font-size: 0.4rem;
  font-family: Microsoft YaHei, sans-serif;
  font-weight: 400;
  color: #2D2F33;
  display: flex;
  justify-content: center;
  margin-bottom: 0.24rem;
}
#download > .download_area > .content_div {
  width: 1.4rem;
  height: 0.04rem;
  background: #3D9CFD;
  margin: 0 auto;
}
/* 下载区域内容 */
#download > .download_area > .area_content {
  width: 14.4rem;
  margin: 0.93rem auto 0;
}

#download > .download_area > .area_content > .content {
  width: 4.4rem;
  height: 2.4rem;
  border: 0.01rem solid #B3B3B3;
  float: left;
  margin: 0 0.2rem 1.15rem;
  text-align: center;
}

#download > .download_area > .area_content > .content > .soft_icon {
  width: 0.68rem;
  height: 0.68rem;
  margin: -0.34rem auto 0;
}
#download > .download_area > .area_content > .content > .soft_icon > img{
  width: 100%;
  height: 100%;
}
#download > .download_area > .area_content > .content > .soft_name{
  font-size: 0.36rem;
  font-family: Microsoft YaHei,sans-serif;
  font-weight: 400;
  color: #2D2F33;
  line-height: 1;
  margin-top: -0.15rem;
}
#download > .download_area > .area_content > .content > .soft_description{
  font-size: 0.18rem;
  font-family: Microsoft YaHei,sans-serif;
  font-weight: 400;
  color: #5A5E66;
  margin-top: 0.19rem;
  white-space: pre-line;
}
#download > .download_area > .area_content > .content > .soft_download_button{
  width: 1.34rem;
  height: 0.46rem;
  background: #3D9CFD;
  border-radius: 0.23rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 1.82rem;
  cursor: pointer;
}

#download > .download_area > .area_content > .content > .soft_download_button > span {
  font-size: 0.2rem;
  font-family: Microsoft YaHei,sans-serif;
  font-weight: 300;
  color: #FFFFFF;
}
</style>
