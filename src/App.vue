<template>
  <div class="app">
    <!-- <h2>{{ $store.state.name }}</h2> -->
    <router-link to="login">登录</router-link>
    <router-link to="main">首页</router-link>
    <router-view></router-view>
    <el-button>按钮1</el-button>
    <el-button type="primary">按钮2</el-button>
    <el-button type="danger">按钮3</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { ElButton } from 'element-plus'
// import 'element-plus/theme-chalk/el-button.css'
// import 'element-plus/theme-chalk/base.css'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
