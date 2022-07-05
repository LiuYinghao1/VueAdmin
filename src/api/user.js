import request from './request'

const login = () => {
  return request({ url: '/login', method: 'POST' })
}

const captcha = (data) => {
  return request({ url: '/captcha', method: 'GET', data })
}

export default {
  captcha,
  login
}
