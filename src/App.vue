<template>
  <div class="app">
    <!-- <h2>{{ $store.state.name }}</h2> -->
    <!--
      <router-link to="login">登录</router-link>
      <router-link to="main">首页</router-link>
      <router-view></router-view>
      <el-button>按钮1</el-button>
      <el-button type="primary">按钮2</el-button>
      <el-button type="danger">按钮3</el-button>
    -->
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
//按需引入
// import { ElButton } from 'element-plus'
// import 'element-plus/theme-chalk/el-button.css'
// import 'element-plus/theme-chalk/base.css'

import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

export default defineComponent({
  name: 'App',
  components: {
    ElConfigProvider
  },
  setup() {
    return {
      zhCn
    }
  }
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
