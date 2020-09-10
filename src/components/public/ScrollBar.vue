<template>
  <div id="jy_scroll_bar">
    <ul id="case_content">
      <li class="case_content_div" v-for="(item, index) in caseList" :key="index">
        <div>
          <div class="case_image">
            <img :src="item.industry_case_image" :alt="item.industry_case_name" />
          </div>
          <div class="case_title">
            <div class="case_title_content">{{ item.industry_case_name }}</div>
          </div>
        </div>
      </li>
    </ul>
    <img id="left_arrow" src="//jy-info.qicp.vip/static/left_arrow.png" alt="left_arrow">
    <img id="right_arrow" src="//jy-info.qicp.vip/static/right_arrow.png" alt="right_arrow">
  </div>
</template>

<script>

export default {
  name: "ScrollBar",
  props: {
    caseList: Array
  },
  data () {
    return {
    }
  },
  methods: {
    scrollBar() {
      /* 获取滚动区域 */
      let scroll_area = document.getElementById('jy_scroll_bar');
      let scroll_ul = scroll_area.getElementsByTagName('ul')[0];
      let scroll_li = scroll_ul.getElementsByTagName('li');
      const spa = 1;
      scroll_ul.innerHTML =  scroll_ul.innerHTML + scroll_ul.innerHTML;
      let li_width = (scroll_li[0].offsetWidth + 80);
      scroll_ul.style.width = li_width * scroll_li.length + 'px';
      function scroll() {
        if (scroll_ul.offsetLeft < -scroll_ul.offsetWidth/2) {
          scroll_ul.style.left = '0'
        }
        if (scroll_ul.offsetLeft > 0) {
          scroll_ul.style.left = -scroll_ul.offsetWidth/2 + 'px';
        }
        scroll_ul.style.left = scroll_ul.offsetLeft -spa + 'px';
      }
      let myTimer = setInterval( scroll,30 )

      scroll_area.onmousemove = () => {
        scroll_ul.className = 'jy_transition';
        myTimer = window.clearInterval(myTimer);
      }
      scroll_area.onmouseout = () => {
        scroll_ul.className = '';
        myTimer = window.clearInterval(myTimer);
        myTimer = setInterval( scroll,30 )
      };

      document.getElementById('left_arrow').onclick = () => {
        if ( scroll_ul.offsetLeft <  -(scroll_li.length/2 - 1) * li_width) {
          scroll_ul.style.left = '-7.7rem';
        } else {
          scroll_ul.style.left = CalculateLeft( parseInt(-(scroll_ul.offsetLeft - 770) / li_width + 1) );
        }
      }
      document.getElementById('right_arrow').onclick = () => {
        // 最后一个li居中展示
        if ( scroll_ul.offsetLeft < -li_width) {
          if ( scroll_ul.offsetLeft > -li_width*2 ) {
            scroll_ul.style.left = '-7.7rem'
          } else {
            scroll_ul.style.left = CalculateLeft( parseInt(-(scroll_ul.offsetLeft) / li_width));
          }
        } else {
          scroll_ul.style.left = CalculateLeft(scroll_li.length/2);
        }
      }
      function CalculateLeft(index) {
        return -((index - 1) * 1180 + 770) / 100 + 'rem';
      }
    }
  },
  created() {
  },
  mounted() {
    this.scrollBar()
  }
}
</script>

<style scoped>

.jy_transition {
  transition:all 1s linear 0.3s;
}

#jy_scroll_bar {
  width: 19.2rem;
  height: 6.8rem;
  position: relative;
  overflow: hidden;
}

#jy_scroll_bar ul {
  width: 19.2rem;
  height: 6.8rem;
  position: relative;
  left: -7.7rem;
}

#jy_scroll_bar ul li {
  height: 6.8rem;
  float: left;
  margin-right: 0.8rem;
  background-color: #ffffff;
  text-align: center;
}

#jy_scroll_bar ul li div {
  width: 11rem;
  height: 6.8rem;
  display: inline-block;
}
#jy_scroll_bar #case_content {
  width: 59rem;
  height: 6.8rem;
}

#jy_scroll_bar #case_content .case_image {
  width: 9.44rem;
  height: 5.02rem;
  background-color: gray;
  margin: 0.6rem auto 0;
}
#jy_scroll_bar #case_content .case_title {
  width: 100%;
  height: 1.18rem;
  display: table;
  color: #2C2E33;
  font-size: 0.32rem;
  margin-top: 0.4rem;
  font-weight: 400;
}
#jy_scroll_bar #left_arrow {
  width: 0.8rem;
  height: 0.8rem;
  cursor: pointer;
  position: relative;
  top: -3.9rem;
  left: -7.08rem;
}
#jy_scroll_bar #right_arrow {
  width: 0.8rem;
  height: 0.8rem;
  cursor: pointer;
  position: relative;
  top: -3.9rem;
  left: 7.08rem;
}
</style>
