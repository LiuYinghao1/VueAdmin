import axios from 'axios'

const service = axios.create({
  baseURL: 'https://www.markerhub.com/vueadmin-java',
  timeout: 5000
})

service.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // 把token加入请求头中, 不需要可以删除下面4句代码

    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  function (response) {
    // 把response的data返回给客户端, 不需要可以删除下面1句代码
    return response.data
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

// 统一了传参处理
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return service(options)
}

export default request
