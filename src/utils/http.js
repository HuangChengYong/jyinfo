import axios from 'axios'
import router from '../router'
// axios 设置
axios.defaults.timeout = 50000 // 设置超时时间
 axios.defaults.baseURL = 'http://www.jy-info.com:8080'  //正式服务器
//axios.defaults.baseURL = 'http://localhost:8080'

// // 拦截接口返回异常跳转至登录页
// axios.interceptors.response.use(
//   response => {
//     if (response.status === 403) {
//       router.push({
//         path: '/login'
//       })
//     } else if (response.data.status === '300') {
//       this.$message({
//         message: '身份认证已过期,请重新登录',
//         type: 'error',
//         showClose: true
//       })
//       localStorage.removeItem('userState')
//       setTimeout(() => {
//         router.push('/login')
//       }, 1000)
//     }
//     return response
//   },
//   error => Promise.reject(error.response.data)
// )
//
// axios.interceptors.request.use(
//   config => {
//     config.data = JSON.stringify(config.data)
//     config.headers = {
//       'Content-Type': 'application/json;charset=UTF-8'
//     }
//
//     if (localStorage.getItem('Authorization')) {
//       config.headers.Authorization = localStorage.getItem('Authorization')
//     }
//
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )
export default axios

/**
 * fetch get
 * @param url
 * @param params
 * @returns {Promise<any>}
 */
export async function fetch (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      }, error => reject(error))
  })
}

/**
 * Post
 * @param url
 * @param data
 * @returns {Promise<any>}
 */
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => resolve(response.data))
      .catch(error => reject(error))
  })
}

/**
 * put
 * @param url
 * @param data
 * @returns {Promise<any>}
 */
export function put (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => resolve(response.data))
      .catch(error => reject(error))
  })
}

export function deletes (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.delete(url, data)
      .then(response => resolve(response.data))
      .catch(error => reject(error))
  })
}
