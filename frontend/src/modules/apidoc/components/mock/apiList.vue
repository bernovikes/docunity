<template>
<el-main>
  <el-row>
    <el-col>
      <el-button type="primary">新建API</el-button>
    </el-col>
  </el-row>
  <el-row>
    <el-col>
      <el-table :data="list" ref="multipleTable">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="id"
          label="id"
          width="120">
        </el-table-column>
        <el-table-column
          prop="url"
          label="url"
          width="210">
        </el-table-column>
        <el-table-column
          prop="method"
          label="请求方式"
          width="120">
        </el-table-column>
        <el-table-column
          prop="version"
          label="版本"
          width="120">
        </el-table-column>
        <el-table-column
          prop="desc"
          label="描述"
          width="120">
        </el-table-column>
        <el-table-column
          prop="created"
          label="创建人"
          width="100">
        </el-table-column>
        <el-table-column
          prop="option"
          label="操作"
          width="190">
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</el-main>
</template>

<script>
let list = [
  {
    id: 1,
    url: '/v1/users/login',
    desc: '用户登录',
    version: 'v1',
    method: 'post',
    option: 'delete',
    project: 'CDN',
    created: 'berno'
  }
]
for (let i = 0; i < 8; i++) {
  list.push(list[0])
}
export default {
  name: 'apiList',
  data() {
    return {
      list:list
    }
  }
}
</script>
