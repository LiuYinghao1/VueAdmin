import request from './request'

export const login = (model) => {
  return request.post(
    `/login?username=${model.username}&password=${model.password}&code=${model.code}&token=${model.token}`
  )
}

export const captchaItem = () => {
  return request.get('/captcha')
}

// export default {
//   captcha,
//   login
// }
