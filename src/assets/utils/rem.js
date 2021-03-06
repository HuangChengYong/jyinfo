// 设置 rem 函数
function setRem() {
  let pageWidth = window.innerWidth;
  //为了ie也能拿到可视窗口宽度
  if (typeof pageWidth != "number") {
    //标准模式
    if (document.compatMode === "CSS1Compat") {
      pageWidth = document.documentElement.clientWidth;
      //怪异模式
    } else {
      pageWidth = document.body.clientWidth;
    }
  }
  if (pageWidth <= 750) {
    const baseSize = 30
    // 当前页面宽度小于等于750px的缩放比例，可根据自己需要修改。
    const scale = document.documentElement.clientWidth / pageWidth
    // 设置页面根节点字体大小
    document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
  } else if (pageWidth > 750 && pageWidth <= 1200) {
    const baseSize = 62
    // 当前页面宽度大于750px小于等于1200px的缩放比例，可根据自己需要修改。
    const scale = document.documentElement.clientWidth / pageWidth
    // 设置页面根节点字体大小
    document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
  } else {
    const baseSize = 100
    // 当前页面宽度大于1200px的缩放比例，可根据自己需要修改。
    const scale = document.documentElement.clientWidth / 1920
    // 设置页面根节点字体大小
    document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
  }
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}
