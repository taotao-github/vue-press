<template>
  <div>
    <tree-select-com v-model="value" :options="options"/>
    <div>选择数据：{{ value }}</div>
  </div>
</template>

<script>
import treeSelectCom from './com'
import data from './data'
export default {
  name: 'treeSelectIndex',
  data() {
    return {
      value: null, // 这里定义为null，避免初始化出现unknown的bug
      options: data
    }
  }
}
</script>

<style>

</style>