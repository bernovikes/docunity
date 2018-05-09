<template>
  <el-aside width="200px" class="h-100">
    <el-row class="h-100">
      <el-col class="h-100">
        <el-menu class="h-100">
          <el-menu-item index="2">
            <span slot="title">数据字典</span>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">Api测试</span>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">我的项目</span>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">Api模拟</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </el-aside>
</template>

<script>
export default {
  name: 'bar',
  mounted () {
  }
}
</script>
