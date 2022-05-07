<template>
  <div class="nav-header">
    <el-icon :size="30" style="margin-top: 8px" @click="handleFoldClick">
      <fold v-if="isFold === false" />
      <expand v-else />
    </el-icon>
    <div class="content">
      <div>面包屑</div>
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'
import UserInfo from './user-info.vue'

export default defineComponent({
  components: {
    Fold,
    Expand,
    UserInfo
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .el-icon {
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
