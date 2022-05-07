<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          style="margin: 5px 10px"
          :size="40"
          src="https://tvax1.sinaimg.cn/crop.0.0.1080.1080.180/006wCOkRly8h0f0c5ouyoj30u00u0tbj.jpg?KID=imgbed,tva&Expires=1651902187&ssig=b1HEqDI0hP"
        />
        <span>{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name)
    return {
      name
    }
  }
})
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>
