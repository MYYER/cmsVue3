<template>
  <div>
    <hy-form v-bind="searchFormConfig" v-model="formData">
      <!-- <template #header>
        <h1 class="header"></h1>
      </template> -->
      <template #footer>
        <div class="handle-btn">
          <el-button type="primary">重置</el-button>
          <el-button type="primary">搜索</el-button>
        </div>
      </template>
    </hy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HyForm from '@/base-ui/form'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    HyForm
  },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      formData
    }
  }
})
</script>

<style scoped lang="less">
.header {
  color: red;
}
.handle-btn {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
