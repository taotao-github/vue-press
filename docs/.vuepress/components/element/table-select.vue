<template>
  <div class="table-select-box">
    <el-table
      ref="multipleTable"
      :data="list"
      style="width: 100%"
      @select="handleSelection"
      @select-all="handleSelectionAll"
      @selection-change="handleSelectionChange">
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

    <div class="select-items">{{ `当前选择的数据：${JSON.stringify(selectedItems)}` }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      currentPage: 1, // 当前页
      selectedData: [], // 选择的数据id集合，可根据实际情况，定义唯一标识字段集合
      selectedItems: [], // 选择的数据项集合，根据selectedData数据变化
      selectedAll: {} // 记录每一页的全选情况，可能因为数据项增加或者减少导致真实的情况与selectedAll不同

    }
  },
  created() {
    this.pageChange(1) // 初始化
  },
  methods: {
    // 当行数据项处理
    handleSelection(rows, row){ // 用户手动勾选数据行，根据勾选结果判断是否勾选
      const selected = rows.length && rows.indexOf(row) !== -1
      // 结合selected: false，删除selectedData中被取消的选项
      if(!selected) {
        const index = this.selectedData.findIndex(item => item === row.id)
        if (index !== -1) {
          this.selectedData.splice(index, 1) // ids中删除指定项
          this.selectedItems.splice(index, 1) // // 数据项中删除指定项
        }
      }
    },

    // 点击每页全选时，做出相应处理
    handleSelectionAll(val) {
      if (val.length) {
        this.selectedAll[this.currentPage] = val.map(item => item.id)
      } else {
        // 处理当前页的所有选中数据
        this.selectedAll[this.currentPage].forEach(item => {
          const index = this.selectedData.findIndex(i => i === item)
          if (index !== -1) {
            this.selectedData.splice(index, 1)
            this.selectedItems.splice(index, 1)
          }
        })
        this.selectedAll[this.currentPage] = []
      }
    },


    // 选择处理，返回当前页所有选择的数据
    handleSelectionChange(val) {
      // 根据id，将选中的数据放入
      const ids = val.map(item => item.id) // 当前选中的id集合
      ids.forEach(id => {
        if(this.selectedData.indexOf(id) === -1) { // 当前选择存在id没有在selectedData中的，插入selectedData
          this.selectedData.push(id)
          this.selectedItems.push(val.find(i => i.id === id)) // id所在的数据项，插入selectedItems中
        }
      })
    },
    pageChange(val) {
      this.currentPage = val
      let arr = []
      for (let i = 1; i <= 10; i++) {
        arr.push({ id: `${10*(val - 1) + i}`, name: `王小虎${10*(val - 1) + i}` , address: `金沙江${10*(val - 1) + i}路` })
      }
      this.list = arr
      this.$nextTick(() => {
        this.list.forEach(el => {
          if (this.selectedData.includes(el.id)) {
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