import { SET_AUTHENTICATED, SET_USER } from "./mutation-type";

export default {
  //是否授权
  [SET_AUTHENTICATED](state, { isAuthenticated }) {
    if (isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    } else {
      state.isAuthenticated = false;
    }
  },
  [SET_USER](state, { user }) {
    if (user) {
      state.user = user;
    } else {
      state.user = {};
    }
  },
  [SET_AUTHENTICATED](state) {
    state.isAuthenticated = false; //退出登录
  },

  //存储token方法
//设置token等于外部传递进来的值
  setToken(state, myToken) {

    state.myToken = myToken

    localStorage.myToken = myToken //同步存储token至localStorage

  },
};
