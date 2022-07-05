<template>
  <div class="contianer">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
    >
      <el-form-item label="username" prop="username">
        <el-input v-model="ruleForm.username" />
      </el-form-item>
      <el-form-item label="password" prop="password">
        <el-input v-model="ruleForm.password" />
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
const ruleForm = reactive({
  username: '',
  password: ''
})
const rules = reactive({
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 5, message: '长度为3-5位', trigger: 'blur' }
  ]
})
</script>
<style lang="scss" scoped></style>
