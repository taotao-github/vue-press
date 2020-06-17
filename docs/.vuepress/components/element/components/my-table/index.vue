<template>
  <div class="my-table-box">
    <el-table :data="list.data" v-loading="loading" size="small" border style="width: 100%;">
      <el-table-column v-for="(item, index) in columns" :key="index" :type="item.type" :prop="item.prop" :align="item.align" :label="item.label" :width="item.width" :fixed="item.fixed" :sortable="item.sortable">
      </el-table-column>
      <el-table-column v-if="actions.func.length" :fixed="actions.layout.fixed" :label="actions.layout.label" :align="actions.layout.align" :width="actions.layout.width">
        <template slot-scope="scope">
          <template v-for="(item, index) in actions.func">
            <el-button v-if="!item.hide || !item.hide(scope.row)" :key="index" :icon="item.icon" :type="item.type" @click="handleAction(item.action, scope.row, scope.$index)">
              {{ item.name }}</el-button>
          </template>
        </template>
      </el-table-column>
    </el-table>
    <div class="my-page">
      <el-pagination background @size-change="pageSizeChange" @current-change="pageChange" v-show="!singlePage" :page-sizes="page.pageSizes" :layout="page.layout" :total="list.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myTable',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    columns: {
      type: Array,
      default() {
        return []
      }
    },
    page: {
      type: Object,
      default() {
        return {
          pageSizes: [10, 20, 30, 50, 100],
          layout: 'total, sizes, prev, pager, next, jumper'
        }
      }
    },
    'page-change': {
      type: Function
    },
    actions: {
      type: Object,
      default() {
        return {
          layout: { width: '', fixed: '', label: '操作' },
          func: []
        }
      }
    },
    list: {
      type: Object,
      default() {
        return {
          data: [],
          total: 0
        }
      }
    }
  },
  computed: {
    singlePage() {
      return this.list.total < 1
    }
  },
  methods: {
    handleAction(action, row, index) {
      if (action) {
        action(row, index)
      }
    },
    pageSizeChange(val) {
      console.log(val)
    },
    pageChange(val) {
      console.log(val)
    }
  },

  data() {
    return {}
  }
}
</script>

<style lang="scss">
.my-table-box {
  padding: 0 10px;
  .el-table .el-button--text {
    font-size: 16px;
  }
  .my-page {
    width: 100%;
    text-align: right;
    padding: 10px 20px;
  }
}
</style>