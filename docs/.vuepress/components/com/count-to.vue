<template>
  <!-- vue-count-to使用 -->
  <div>
    <div class="count-to-box">
      <count-to v-if="reRender" :startVal="start" :endVal="end" :duration="duration" :prefix="prefix" :suffix="suffix" :separator="separator" />
      <count-to v-else :startVal="start" :endVal="end" :duration="duration" :prefix="prefix" :suffix="suffix" :separator="separator" :easingFn="easingFun"/>
    </div>
    <br>
    <el-button type="primary" size="mini" @click="addPrefix">添加前缀</el-button>
    <el-button type="primary" size="mini" @click="addSuffix">添加后缀</el-button>
    <el-button type="primary" size="mini" @click="addSeparator">添加分割符</el-button>
    <el-button type="primary" size="mini" @click="constantSpeed">{{ reRender?'匀速': '非匀速' }}</el-button>
  </div>
</template>

<script>
import CountTo from 'vue-count-to'
export default {
  name: 'countTo',
  components: {
    'count-to': CountTo
  },
  data() {
    return{
      start: 0,
      end: 100,
      duration: 1000*20,
      prefix: '',
      suffix: '',
      separator: '',
      reRender: true
    }
  },
  methods: {
    easingFun(t, b, c, d){
      return c * (t / d) * 1024 / 1023 + b;
    },
    addPrefix() {
      this.prefix = "￥"
    },
    addSuffix() {
      this.suffix = 'RMB'
    },
    addSeparator() {
      this.end = 10000
      this.separator = ','
    },
    constantSpeed() {
      this.end = 200
      this.reRender = !this.reRender
    }
  }
}
</script>

<style lang="scss">
.count-to-box{
  width: 120px;
  height: 60px;
  background: #458EFF;
  color: white;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 2px 2px #ccc;
}
</style>