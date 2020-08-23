<template>
  <tree-select
    :value="value"
    :placeholder="placeholder"
    :options="options"
    :alwaysOpen="alwaysOpen"
    :defaultExpandLevel="openLevel"
    :branchNodesFirst="true"
    :noOptionsText="noOptionsText"
    :noChildrenText="noChildrenText"
    :noResultsText="noResultsText"
    :normalizer="normalizer"
    class="my-tree-slecte"
    @select="select"
    @input="$emit('input', $event)"
  >
    <!-- <span
      slot="value-label"
      slot-scope="{ node, labelClassName }"
      :class="[labelClassName, node.isBranch?'':'tree-select-leaf']"
    >
      <i :class="node.isExpanded ? 'el-icon-folder-opened' : (node.isBranch ? 'el-icon-folder': 'el-icon-document')"></i>
      <span style="padding-left: 5px">{{findIndexArray(options, node.id, []) }}</span>
    </span> -->
    <span
      slot="value-label"
      slot-scope="{ node }"
    >
      <span style="padding-left: 5px">{{findIndexArray(options, node.id, []).join(' > ') }}</span>
    </span>
  </tree-select>
</template>

<script>
import treeSelect from '@riophae/vue-treeselect'
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
export default {
  name: 'MyTreeSelect',
  components: {
    treeSelect
  },
  props: {
    value: {},
    disabled: {
      type: Array,
      default() {
        return []
      }
    },
    'open-level': {
      type: Number,
      default: 1
    },
    options: {
      type: Array,
      required: true,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      noOptionsText: '',
      placeholder: '请选择部门',
      alwaysOpen: false,
      noChildrenText: '',
      noResultsText: '没有匹配的数据'
    }
  },
  created() {
    // console.log(this.options)
  },
  methods: {
    findIndexArray(data, id, indexArray) {
      // 根据自身节点寻找父级
      let arr = Array.from(indexArray);
      for (let i = 0, len = data.length; i < len; i++) {
        arr.push(data[i].name);
        if (data[i].id === id) {
          return arr;
        }
        let children = data[i].children;
        if (children && children.length) {
          let result = this.findIndexArray(children, id, arr);
          if (result) return result;
        }
        arr.pop();
      }
      return false;
    },
    normalizer(node) {
      // console.log(node)
      if (node.children && !node.children.length) {
        delete node.children
      }
      if (this.disabled.includes(node.level)) {
        this.$set(node, 'isDisabled', true)
      }
      return {
        id: node.id,
        label: node.alias,
        cloneName: node.cloneName,
        children: node.children
      }
    },
    select(node, index) {
      // console.log(node)
      this.$emit('select', node)
    }
  }
}
</script>

<style lang="scss">
.my-tree-slecte{
  /* ----给element-ui添加连接线 --- */
  .vue-treeselect__menu > .vue-treeselect__list > .vue-treeselect__list-item {
    position: relative;
    padding-left: 0;
  }
  .vue-treeselect__list-item {
    position: relative;
    padding-left: 36px;
    .vue-treeselect__option {
      padding-left: 5px !important;
    }
  }

  .el-tree-node__expand-icon.is-leaf {
    display: none;
  }

  .vue-treeselect__list-item:last-child:before {
    height: 12px;
  }

  .vue-treeselect__menu > .vue-treeselect__list > .vue-treeselect__list-item:before {
    border-left: none;
  }

  .vue-treeselect__menu > .vue-treeselect__list > .vue-treeselect__list-item:after {
    border-top: none;
  }

  .vue-treeselect__list-item:before {
    content: '';
    left: 16px;
    position: absolute;
    right: auto;
    border-width: 1px;
  }

  .vue-treeselect__list-item:after {
    content: '';
    left: 20px;
    position: absolute;
    right: auto;
    border-width: 1px;
  }

  .vue-treeselect__list-item:before {
    border-left: 1px dashed #4386c6;
    bottom: 0px;
    height: 100%;
    top: 0;
    width: 1px;
  }

  .vue-treeselect__list-item:after {
    border-top: 1px dashed #4386c6;
    height: 20px;
    top: 12px;
    width: 24px;
  }
}

</style>