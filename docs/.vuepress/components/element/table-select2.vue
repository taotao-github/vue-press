<template>
  <div class="table-select-box">
    <el-table
      ref="multipleTable"
      :data="list"
      style="width: 100%"
      @select="handleSelectionAll"
      @select-all="handleSelectionAll">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="id"
        label="id"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <div class="pagination-box">
      <el-pagination
        :total="100"
        background
        layout="prev, pager, next"
        @current-change="pageChange"
        >
      </el-pagination>
    </div>

    <div class="select-items">{{ `当前选择的数据：${JSON.stringify(selectData)}` }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      currentPage: 1, // 当前页
      selectData: {}, // 表格选中的数据
    }
  },
  created() {
    this.pageChange(1) // 初始化
  },
  methods: {
    // 点击每页全选时，做出相应处理
    handleSelectionAll(list) {
      this.selectData[this.currentPage] = list;
    },

    pageChange(val) {
      this.currentPage = val
      let arr = []
      for (let i = 1; i <= 10; i++) {
        arr.push({ id: `${10*(val - 1) + i}`, name: `王小虎${10*(val - 1) + i}` , address: `金沙江${10*(val - 1) + i}路` })
      }
      this.list = arr
      this.onUpdateTable(this.selectData[this.currentPage]);
    },
    onUpdateTable(rows = []) {
      this.$nextTick(() => {
        this.list.forEach(el => {
          if (rows.some(selectedRow => el.id === selectedRow.id)) {
            this.$refs.multipleTable.toggleRowSelection(el);
          }
        })
      })
    }
  }
}
</script>

<style lang="scss">
.table-select-box{
  .pagination-box{
    text-align: right;
    margin-top: 20px;
  }
  .select-items{

  }
}
</style>