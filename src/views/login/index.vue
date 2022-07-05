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
      </el-form-item>
      <!-- <img :src="captchaImg" alt=""> -->
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
import { reactive } from 'vue'
import user from '@/api/user'

const ruleForm = reactive({
  username: 'text',
  password: '1234567',
  code: ''
})
const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 5, message: '长度为3-5位', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 3, max: 5, message: '长度为3-10位', trigger: 'blur' }
  ]
})
const submitForm = async () => {
  const loginList = await user.login(ruleForm)
  console.log(loginList)
}

const getCode = async () => {
  const getcaptcha = await user.captcha()
  console.log(getcaptcha)
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
</style>
