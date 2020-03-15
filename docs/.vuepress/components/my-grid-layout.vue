<template>
  <div class="my-layout-box">
    <grid-layout :layout.sync="layout"
               :col-num="parseInt(colNum)"
               :row-height="rowHeight"
               :is-draggable="draggable"
               :is-resizable="resizable"
               :is-mirrored="mirrored"
               :prevent-collision="preventCollision"
               :vertical-compact="true"
               :use-css-transforms="true"
               :responsive="responsive"
               @layout-created="layoutCreatedEvent"
               @layout-before-mount="layoutBeforeMountEvent"
               @layout-mounted="layoutMountedEvent"
               @layout-ready="layoutReadyEvent"
               @layout-updated="layoutUpdatedEvent">
    <grid-item v-for="item in layout"
               :key="item.i"
               :static="item.static"
               :x="item.x"
               :y="item.y"
               :w="item.w"
               :h="item.h"
               :i="item.i"
               @resize="resize"
               @move="move"
               @resized="resized"
               @container-resized="containerResized"
               @moved="moved">
      <div style="width: 100%;height: 100%;background: pink">{{item.i}}</div>
    </grid-item>
  </grid-layout>
  <button @click="addItem" style="margin-top: 10px">新增</button>
  </div>
</template>

<script>
import VueGridLayout from 'vue-grid-layout'
export default {
  name: 'app',
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
  },
  data () {
    return {
      layout: [
        { "x": 0, "y": 0, "w": 2, "h": 2, "i": "0", resizable: true, draggable: true, static: false },
        { "x": 2, "y": 0, "w": 2, "h": 2, "i": "1", resizable: true, draggable: true, static: false },
        { "x": 4, "y": 0, "w": 2, "h": 2, "i": "2", resizable: true, draggable: true, static: false },
        { "x": 0, "y": 1, "w": 2, "h": 2, "i": "3", resizable: true, draggable: true, static: false },
        { "x": 2, "y": 1, "w": 2, "h": 2, "i": "4", resizable: true, draggable: true, static: false },
        { "x": 4, "y": 1, "w": 2, "h": 2, "i": "5", resizable: true, draggable: true, static: false }
      ],
      draggable: true, // 是否可拖拽
      resizable: true, // 是否可改变大小
      mirrored: false, // 倒置
      
      responsive: false, // 是否响应式
      preventCollision: false, // 防止碰撞
      rowHeight: 30, // 单个容器的高度
      colNum: 12, // 横向摆放相对个数
      index: 0
    }
  },
  mounted: function () {
    this.index = this.layout.length;
  },
  methods: {
    addItem () {
      let item  =  { "x": 0, "y": 0, "w": 2, "h": 2, "i": new Date().getTime(), resizable: true, draggable: true, static: false }
      this.layout.push(item)
    },
    clicked: function () {
      window.alert("CLICK!");
    },
    move: function (i, newX, newY) {
      console.log("MOVE i=" + i + ", X=" + newX + ", Y=" + newY);
    },
    resize: function (i, newH, newW, newHPx, newWPx) {
      console.log("RESIZE i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
    },
    moved: function (i, newX, newY) {
      console.log("### MOVED i=" + i + ", X=" + newX + ", Y=" + newY);
    },
    resized: function (i, newH, newW, newHPx, newWPx) {
      console.log("### RESIZED i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
    },
    containerResized: function (i, newH, newW, newHPx, newWPx) {
      console.log("### CONTAINER RESIZED i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
    },
    /**
     * Add change direction button
     */

    layoutCreatedEvent: function (newLayout) {
      console.log("Created layout: ", newLayout)
    },
    layoutBeforeMountEvent: function (newLayout) {
      console.log("beforeMount layout: ", newLayout)
    },
    layoutMountedEvent: function (newLayout) {
      console.log("Mounted layout: ", newLayout)
    },
    layoutReadyEvent: function (newLayout) {
      console.log("Ready layout: ", newLayout)
    },
    layoutUpdatedEvent: function (newLayout) {
      console.log("Updated layout: ", newLayout)
    },

  },
}
</script>

<style>
.my-layout-box{
  width: auto;
  height: auto;
}
.vue-grid-layout{
  background: whitesmoke;
}
</style>
