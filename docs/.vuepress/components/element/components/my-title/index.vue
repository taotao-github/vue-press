<template>
  <div class="my-title-box">
    <div class="my-title-body">
      <div class="my-title-text">{{ title }}</div>
      <div class="my-title-btn">
        <el-button
          size="mini"
          v-for="(item, index) in btns"
          :key="index"
          :icon="item.icon"
          :type="item.type"
          @click="action(item.action, item.query)"
        >
          {{ item.name }}</el-button>
      </div>
    </div>
    <!--查询条件折叠-->
    <collapse-transition>
      <div
        class="collapse-wrap"
        v-show="isActive"
      >
        <slot></slot>
      </div>
    </collapse-transition>
  </div>
</template>

<script>
import collapseTransition from './collapse'
export default {
  name: 'myTitle',
  components: {
    'collapse-transition': collapseTransition
  },
  props: {
    title: {
      type: String,
      default: '这是标题！'
    },
    btns: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isActive: true
    }
  },
  methods: {
    action(action, query) {
      if (query) {
        this.isActive = !this.isActive
        return action(this.isActive)
      }
      action() // 执行父类中的方法
    }
  }
}
</script>

<style lang="scss">
.my-title-box {
  background-color: white;
  .my-title-body {
    display: flex;
    border-bottom: 1px solid #ccc;
    justify-content: space-between;
    .my-title-text {
      font-size: 18px;
      font-weight: bold;
      padding: 10px 20px;
      color: #1c8df6;
    }
    .my-title-btn {
      text-align: right;
      line-height: 40px;
      padding-right: 20px;
    }
  }
}
</style>