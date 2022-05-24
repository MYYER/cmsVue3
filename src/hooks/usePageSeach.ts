import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleResetClick = () => {
    console.log('点击了重置')
    pageContentRef.value?.getPageData()
  }
  const handleQueryClick = (queryInfo: any) => {
    //用ref拿到组件对象再调里面的方法
    console.log('点击了搜索', queryInfo)
    pageContentRef.value?.getPageData(queryInfo)
  }
  return [pageContentRef, handleResetClick, handleQueryClick]
}
