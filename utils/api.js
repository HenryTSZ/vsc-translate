const axios = require('axios')

/**
 * 公用请求方法
 * @param  { String } url api
 * @param  { Object } data 请求参数
 */
const REQ = ({ method = 'POST', url, data }) => {
  return new Promise((resolve, reject) => {
    axios({
      method,
      url,
      [method.toLowerCase() === 'get' ? 'params' : 'data']: data
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 百度翻译接口
 * https://fanyi-api.baidu.com/api/trans/vip/translate
 * @param { object } data 请求参数对象
 */
const reqBaiDuTranslate = data =>
  REQ({
    method: 'GET',
    url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
    data
  })

module.exports = { reqBaiDuTranslate }
