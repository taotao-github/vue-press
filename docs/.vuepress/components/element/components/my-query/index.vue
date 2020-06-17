<template>
  <div class="my-query-box" :style="{ background: background }">
    <!-- 使用el-form inline布局，使得各个el组件布局一致， myQueryForm作为替代对象，将传递的key作为其属性，完成相应表单的处理。 -->
    <el-form :inline="true" :model="myQueryForm" class="my-flex-form">
      <!-- 通过传递的type，选用对应的组件。*当type为button时 el-form-item的label显示为空字符 -->
      <el-form-item
        v-for="(item, index) in query"
        :key="index"
        :style="{marginRight: item.align}"
        :label="item.type === 'button' ? '' : item.label"
      >
        <!-- 输入框 监听输入事件，并作延迟处理，防止每次输入都执行传递的action-->
        <template v-if="item.type ==='input'">
          <el-input
            v-model="myQueryForm[item.key]"
            :size="item.size"
            :placeholder="item.placeholder"
            @input="handleDelayInput(item.action, myQueryForm[item.key])"
          ></el-input>
        </template>

        <!-- 搜索框 -->
        <template v-if="item.type ==='search'">
          <el-input
            v-model="myQueryForm[item.key]"
            :placeholder="item.placeholder"
            :size="item.size"
            @input="handleDelayInput(item.action, myQueryForm[item.key])"
          >
            <!-- 添加搜索图标，并绑定点击搜索事件 -->
            <template slot="append">
              <el-button
                type="primary"
                icon="el-icon-search"
                :size="item.size"
                @click="handleInput(item.action, myQueryForm[item.key])"
              ></el-button>
            </template>
          </el-input>
        </template>

        <!-- 按钮 -->
        <template v-if="item.type === 'button'">
          <el-button
            type="primary"
            v-show="!item.hide"
            :icon="item.icon"
            :size="item.size"
            @click="handleInput(item.action, myQueryForm[item.key])"
          >{{ item.label }}</el-button>
        </template>

        <!-- 下拉框，不仅要传递key，还将传递options，循环出下拉列表 -->
        <template v-if="item.type === 'select'">
          <el-select
            v-model="myQueryForm[item.key]"
            :clearable="item.clearable"
            :multiple="item.multiple"
            :size="item.size"
            @change="handleInput(item.action, myQueryForm[item.key])"
            @clear="handleInput(item.action, myQueryForm[item.key])"
            :placeholder="item.placeholder"
          >
            <el-option
              v-for="(item, index) in item.options"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </template>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "myQuery",
  props: {
    background: {
      type: String,
      default: '#ddd'
    },
    query: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  watch: {
    query(val) {
      val.forEach(element => {
        this.myQueryForm[item.key] = item.value;
      });
    }
  },
  data() {
    return {
      myQueryForm: {},
      timer: null // 延时执行action
    };
  },
  methods: {
    // 输入框，输入改变触发
    handleDelayInput(action, value) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        if (action) {
          action(value);
        }
      }, 500);
    },

    // 不延迟执行
    handleInput(action, value) {
      if (action) {
        action(value);
      }
    }
  }
};
</script>

<style lang="scss">
.my-query-box {
  width: 100%;
  padding: 15px 10px 10px 10px;
  box-sizing: border-box;
  .my-flex-form {
    display: flex;
    flex-wrap: wrap;
  }
  // .el-input {
  //   width: 300px;
  // }
  .el-form-item__content .el-input-group {
    vertical-align: middle;
  }
  // .el-input-group__append > button.el-button {
  //   background: #1e5ecc;
  //   color: white;
  //   border: 1px solid #1e5ecc;
  //   border-bottom-left-radius: 0;
  //   border-top-left-radius: 0;
  // }
  // .el-input-group__append > button.el-button:active {
  //   background: #4b7ed6;
  //   border-color: #4b7ed6;
  //   color: #fff;
  // }
  // 搜索form下，无需校验，设置el-form-item的margin-bottom为0
  .el-form-item {
    margin-bottom: 0;
    padding: 4px;
  }
}
</style>