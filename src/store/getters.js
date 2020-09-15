export default {
  isAuthenticated: state => state.isAuthenticated,
  user: state => state.user,
  //获取token方法
//判断是否有token,如果没有重新赋值，返回给state的token
  getToken(state) {
    if (!state.myToken) {
      state.token = localStorage.getItem('myToken')
    }
    return state.myToken
  }
}
