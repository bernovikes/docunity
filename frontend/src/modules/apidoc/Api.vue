<template>
  <div id="api">
    <el-container class="h-100">
        <!--<bar></bar>-->
        <router-view/>
    </el-container>
  </div>
</template>

<script>
import bar from '../../components/common/aside'
export default {
  name: 'Api',
  components: {
    bar
  }
}
</script>
<style lang="scss">
  @import "../../assets/scss/style.scss";
</style>
