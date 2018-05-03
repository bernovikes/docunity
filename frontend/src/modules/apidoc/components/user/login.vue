<template>
  <el-main class="flex items-center justify-center">
    <el-form class="w-25">
      <el-form-item>
        <el-input placeholder="输输入用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" placeholder="输输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="w-100" type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </el-main>
</template>

<script>
export default {
  name: 'login'
}
</script>
