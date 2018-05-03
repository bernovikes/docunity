<template>
  <el-main>
      <el-form label-width="80px" class="w-50">
        <el-form-item label="头像">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary">保存</el-button>
        </el-form-item>
      </el-form>
  </el-main>
</template>

<script>
export default {
  name: 'setting'
}
</script>
<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
