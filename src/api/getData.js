import { fetch, post } from '../utils/http.js'

/**
 * 用户登录
 * @param data
 * @returns {Promise<any>}
 */
export const LoginInfo = (data) => post('/login/loginInfo',data)

/**
 * 职位申请
 * @param data
 * @returns {Promise<any>}
 */
export const PositionApply = (data) => post('/recruition/positionApply',data)

/**
 * 上传文件
 * @param data
 * @returns {Promise<any>}
 */
export const UploadFile = (data) => post('/recruition/uploadFile/',data)

/**
 * 开发需求咨询
 * @param data
 * @returns {Promise<any>}
 */
export const DevelopConsult = (data) => post('/consult/developConsult',data)
