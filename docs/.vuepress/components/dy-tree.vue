<template>
  <div class="dy-tree">
      <item-parent :model="list"></item-parent>
  </div>
</template>

<script>
// 使用毗邻组件实现无限级tree（两子组件相互调用）
import list from "./data/treeData"; // 数据格式（可见html实现中的数据）
export default {
  data() {
    return {
      list: list
    };
  },
  mounted() {
    this.tree = list;
  },
  methods: {
  }
};
</script>

<style>
</style>