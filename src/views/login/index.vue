<template>
  <div class="contianer">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      class="demo-ruleForm"
      status-icon
      label-width="120px"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" type="password" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="ruleForm.code" />
        <el-image
          :src="captchaImg"
          @click="getCodeUrl"
          alt=""
          class="codeImg"
        ></el-image>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >登录</el-button
        >
        <el-button @click="getCode">获取密码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { login, captchaItem } from '@/api/user.js'
import { useRouter } from 'vue-router'
const ruleForm = reactive({
  username: 'test',
  password: '1234567',
  code: '',
  token: ''
})
const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 5, message: '长度为3-5位', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 3, max: 5, message: '长度为3-10位', trigger: 'blur' }
  ],
  code: ''
})
const router = useRouter()
const captchaImg = ref('')
const getCodeUrl = async () => {
  const res = await captchaItem()
  console.log(res)
  captchaImg.value = res.captchaImg
  ruleForm.token = res.token
}
getCodeUrl()

const getCode = async () => {
  const getcaptcha = await captchaItem.captchaItem()
  console.log(getcaptcha)
}

const submitForm = async () => {
  try {
    console.log(ruleForm)
    await login(ruleForm)
    await router.push('/')
  } catch (error) {}
}
</script>

<style lang="scss" scoped>
.contianer {
  border-radius: 10px;
  width: 500px;
  height: 300px;
  margin: auto;
  line-height: 300px;
  margin-top: 200px;
  background-color: #71d4db;
  display: flex;
  justify-content: center;
  flex: 1;
  .demo-ruleForm {
    align-items: center;
    margin-top: 80px;
  }
}
.codeImg {
  float: left;
}
</style>
