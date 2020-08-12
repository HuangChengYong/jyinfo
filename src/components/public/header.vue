<template>
  <div class="head">
    <div class="devops_one background_img_one">
      <div id="navigation" class="navigation_bar">
        <div class="navigation_left">
          <img src="//jy-info.qicp.vip/static/jyinfo_logo.png" alt="甲悦信息" class="jylogo">
        </div>
        <div class="navigation_right">
          <button type="button" class="btn btn-default navbar-btn">首页</button>
          <button type="button" class="btn btn-default navbar-btn">产品</button>
          <button type="button" class="btn btn-default navbar-btn">核心业务</button>
          <button type="button" class="btn btn-default navbar-btn">成功案例</button>
          <button type="button" class="btn btn-default navbar-btn">关于我们</button>
          <button type="button" class="btn btn-default navbar-btn">企业招聘</button>
        </div>
      </div>
      </div>
    </div>
</template>

<script>
  export default {

    name: 'SoftwareHeader'

  }
</script>
<style scoped>


    /* 导航栏 */
  .head .devops_one {
    display: flex;
  }

    .head .devops_one .navigation_bar {
      position: fixed;
      width: 100%;
      height: 0.70rem;
      top: 0;
      left: 0;
      border-bottom: 0.01rem solid #FFFFFF;
      z-index: 1;
    }

        /* 导航栏左 */
      .head .devops_one .navigation_bar .navigation_left {
        position: absolute;
        width: 6.66rem;
        height: 0.70rem;
      }

        /* 导航栏右 */
      .head .devops_one .navigation_bar .navigation_right {
        position: absolute;
        width: 12.54rem;
        height: 0.70rem;
        left: 6.66rem;
        padding-left: 0.64rem;
      }

   .devops_one .navigation_bar .navigation_right button {
    margin: 0.26rem 0.54rem;
    padding: 0;
    border: none;
    outline: none;
    background-color: transparent;
    font-weight: bold;
    color: #FFFFFF;
    opacity: 0.6;
  }


  /* logo图 */
  .head .devops_one .navigation_bar .jylogo {
    width: 1.46rem;
    height: 0.38rem;
    position: absolute;
    top: 0.16rem;
    left: 2.60rem;
    border-color: #F5F5F5;
  }
</style>
