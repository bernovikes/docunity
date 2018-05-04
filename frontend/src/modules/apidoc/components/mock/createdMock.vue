<template>
<el-main class="pt0 pl0 pb0">
  <el-row>
    <el-col :span="14">
      <div ref="codeEditor" class="vh-100"></div>
    </el-col>
    <el-col :span="10" class="pt5">
      <el-form label-width="80px">
        <el-form-item>
          <h3>创建API</h3>
        </el-form-item>
        <el-form-item label="名称">
            <el-input></el-input>
        </el-form-item>
        <el-form-item label="请求">
            <el-col :span="5">
              <el-select>
                <el-option label="GET" value="get"></el-option>
                <el-option label="POST" value="post"></el-option>
                <el-option label="PUT" value="put"></el-option>
                <el-option label="DELETE" value="delete"></el-option>
                <el-option label="HEAD" value="head"></el-option>
                <el-option label="PATCH" value="patch"></el-option>
              </el-select>
            </el-col>
            <el-col :span="19">
              <el-input></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="版本">
            <el-input></el-input>
        </el-form-item>
        <el-form-item label="描述">
            <el-input type="textarea" resize="none" rows="3"></el-input>
        </el-form-item>
        <el-form-item label="开发者">
            <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="w-30" type="primary">保存</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</el-main>
</template>

<script>
let ace
import jsBeautify from 'js-beautify/js/lib/beautify'
let store = {}
store.codeEditor = null
if (typeof window !== 'undefined') {
  ace = require('brace')
  require('brace/mode/javascript')
  require('brace/theme/monokai')
  require('brace/ext/language_tools')
  require('brace/ext/searchbox')
  // require('./snippets')
}
export default {
  name: 'createdMock',
  data(){
    return store
  },
  mounted() {
    var editor = ace.edit(this.$refs.codeEditor)
    editor.getSession().setMode('ace/mode/javascript')
    editor.setTheme('ace/theme/monokai')
    editor.setOption('tabSize', 2)
    editor.setOption('fontSize', 15)
    editor.setOption('enableLiveAutocompletion', true)
    editor.setOption('enableSnippets', true)
    editor.clearSelection()
    editor.getSession().setUseWorker(false)
  }
}
</script>
