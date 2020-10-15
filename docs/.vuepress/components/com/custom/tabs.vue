// 横向tabs点击居中组件
<template>
  <div class="tabs-container" ref="tabsContainer">
    <div class="tabs-box">
      <div class="tabs-list" ref="tabs">
        <div
          v-for="(item, index) in data"
          :key="index"
          :class="['tab-item', active === index ? 'active' : '']"
        >
          <div
            class="tab-circle"
            @click.stop="handleClick($event, item, index)"
          ></div>
          <div class="tab-title">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  data() {
    return {
      active: 0,
      data: [
        { name: 'tab1' },
        { name: 'tab2' },
        { name: 'tab3' },
        { name: 'tab4' },
        { name: 'tab5' },
      ],
      containerWidthHalf: 0, // 最外成容器的width 的一半
    };
  },
  mounted() {
    this.containerWidthHalf = this.$refs.tabsContainer.offsetWidth / 2;
  },
  methods: {
    handleClick(e, item, index) {
      this.active = index;
      this.goCenter(e);
    },
    goCenter(e) {
      let tabsEl = this.$refs.tabs;
      let offsetLeft = e.target.parentNode.offsetLeft;
      let offset = 0;
      // console.log(e.target.parentNode,offsetLeft, offset, this.containerWidthHalf)
      if (offsetLeft > this.containerWidthHalf) {
        offset = offsetLeft - this.containerWidthHalf;
      }
      console.log(`translateX(${-offset}px)`)
      tabsEl.style.transform = `translateX(${-offset}px)`;
    },
  },
};
</script>

<style lang="scss">
.tabs-container {
  width: 600px;
  height: 66px;
  background: #2b2635;
  opacity: 1;
  border-radius: 2px;
  // 不设置position: relative;会导致第一个获取offset不准确
  position: relative;
  .tabs-box {
    height: 100%;
    width: 100%;
    padding: 0 20px;
    overflow: hidden;
    text-align: center;
    box-sizing: border-box;
    .tabs-list {
      display: inline-flex;
      justify-content: center;
      // overflow: hidden;
      width: auto;
      padding-top: 10px;
      height: 100%;
      transition: transform 0.5s;
      background: rgba(12, 12, 12, 0.1);
      .tab-item {
        min-width: 190px;
        position: relative;
        height: 20px;
        display: flex;
        align-items: center;
        // background: cornsilk;
        &.active {
          .tab-circle {
            width: 20px;
            height: 20px;
            background: #2cc0ff;
            border: 1px solid #2cc0ff;
          }
          .tab-title {
            left: -40px;
            color: #2cc0ff;
          }
        }
        .tab-circle {
          width: 16px;
          height: 16px;
          position: absolute;
          background: #fff;
          border: 1px solid #2cc0ff;
          border-radius: 50%;
          z-index: 5;
          cursor: pointer;
        }
        .tab-title {
          position: absolute;
          color: white;
          top: 24px;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 300;
          width: 100px;
          left: -42px;
          text-align: center;
          // background: violet;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        &::after {
          content: '';
          display: block;
          position: absolute;
          top: 9px;
          left: 16px;
          width: calc(100% - 16px);
          height: 0px;
          border: 1px solid #2cc0ff;
          z-index: 4;
        }
        &:last-child {
          min-width: 16px;
          &::after {
            display: none;
          }
        }
      }
    }
  }
}
</style>
