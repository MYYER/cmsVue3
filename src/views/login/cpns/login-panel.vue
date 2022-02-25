<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon>
              <svg
                class="icon"
                width="200"
                height="200"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                data-v-042ca774=""
              >
                <path
                  fill="currentColor"
                  d="M628.736 528.896A416 416 0 01928 928H96a415.872 415.872 0 01299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 11-416 0 208 208 0 01416 0z"
                ></path>
              </svg>
            </el-icon>
            <i>账号登录</i>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon>
              <svg
                class="icon"
                width="200"
                height="200"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                data-v-042ca774=""
              >
                <path
                  fill="currentColor"
                  d="M224 768v96.064a64 64 0 0064 64h448a64 64 0 0064-64V768H224zm0-64h576V160a64 64 0 00-64-64H288a64 64 0 00-64 64v544zm32 288a96 96 0 01-96-96V128a96 96 0 0196-96h512a96 96 0 0196 96v768a96 96 0 01-96 96H256zm304-144a48 48 0 11-96 0 48 48 0 0196 0z"
                ></path>
              </svg>
            </el-icon>
            <i>手机登录</i>
          </span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'
import LoginAccount from './login-account.vue'

export default defineComponent({
  components: {
    loginAccount,
    loginPhone,
    LoginAccount
  },
  setup() {
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()

    const handleLoginClick = () => {
      accountRef.value?.loginAction()
    }

    return {
      isKeepPassword,
      handleLoginClick,
      accountRef
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  margin-bottom: 150px;
  .title {
    text-align: center;
  }
}
.account-control {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.login-btn {
  margin-top: 10px;
  width: 100%;
}
</style>
