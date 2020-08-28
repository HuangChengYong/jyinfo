import { fetch, post } from '../utils/http.js'

/**
 * 登录
 * @param data
 * @returns {Promise<any>}
 */
export const userLogin = (data) => post('/user/loginByPwd', data)

/**
 * 首页统计用户数量
 * @param data
 * @returns {Promise<any>}
 */
export const IndexStatistic = () => fetch('/Index/IndexStatistic')
