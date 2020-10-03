<template>
  <div class="time_line">
    <div class="time_line_outbox" style="display:flex;">
      <div style="flex:1;display:flex">

        <div class="item item_first"></div>
        <div class="dot"> <div class="dot_inner"></div></div>
        <div class="item"></div>
      </div>

      <div style="flex:1;display:flex">
        <div class="item"></div>
        <div class="dot"> <div class="dot_inner"></div></div>
        <div class="item"></div>
      </div>
      <div style="flex:1;display:flex">
        <div class="item"></div>
        <div class="dot"> <div class="dot_inner"></div></div>
        <div class="item"></div>
      </div>
      <div style="flex:1;display:flex">
        <div class="item"></div>
        <div class="dot"> <div class="dot_inner"></div></div>
        <div class="item"></div>
      </div>
      <div style="flex:1;display:flex">
        <div class="item"></div>
        <div class="dot"> <div class="dot_inner"></div></div>
        <div class="item"></div>
      </div>
      <div style="flex:1;display:flex">
        <div class="item"></div>
        <div class="dot"> <div class="dot_inner"></div></div>
        <div class="item"></div>
      </div>
      <div style="flex:1;display:flex">
        <div class="item"></div>
        <div class="dot"> <div class="dot_inner"></div></div>
        <div class="item"></div>
      </div>

    </div>
    <div class="relate_year_box" style="flex:1;display:flex">
      <div class="relate_year" style="flex:1;display:flex">2020</div>
      <div class="relate_year" style="flex:1;display:flex">2019</div>
      <div class="clock_pointer"></div>
      <div class="relate_year" style="flex:1;display:flex">2017</div>
      <div class="relate_year" style="flex:1;display:flex" >2015</div>
      <div class="relate_year" style="flex:1;display:flex">2013</div>
      <div class="relate_year" style="flex:1;display:flex">2012</div>
      <div class="relate_year" style="flex:1;display:flex">2011</div>


    </div>
  </div>
</template>

<script>

</script>

<style scoped>

  .time_line{
    width: 100%;
  }

  .time_line_outbox{
    width: 72.9%;
    height: 0.04rem;
    margin: 7.46rem 2.6rem 0;

  }

  .dot{

    width: 0.24rem;
    height: 0.24rem;
    border-radius: 50%;
    background: #939CD6;
    margin:0 auto;

  }

  .dot_inner{
    width: 0.1rem;
    height:0.1rem;
    border-radius: 50%;
    background: #2E56C8;
    margin:29.17% 29.17%;
  }

  .relate_year_box{
    width: 72.9%;
    height: 0.26rem;

    margin-top: 0.26rem;
    margin-left: 3.3rem;

  }

  .relate_year{

    width: 0.52rem;
    height: 0.26rem;
    line-height:0.26rem;
    font-size: 0.26rem;
    text-align: center;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #727EBF;
  }

  .clock_pointer{
    width: 0.01rem;
    height: 0.89rem;
    border: 0.01rem solid #6FCBFD;
    border-radius: 50%;

    position: absolute;
    top:23.65rem;
    left: 5.59rem;
  }

  .item{
    flex:1;
    margin-top: 0.1rem;
    background: linear-gradient(90deg, #122BB9, #69C2F9);
    border-bottom: 0.04rem solid  #274CB2;;
;
  }



</style>
