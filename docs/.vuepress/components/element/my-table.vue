<template>
  <my-table
    :columns="columns"
    :list="list"
    :actions="actions"
  ></my-table>
</template>

<script>
import myTable from './components/my-table'
export default {
  components: {
    'my-table': myTable 
  },
  data() {
    return{
      loading: false,
      columns: [
        { type: 'index', width: 80, align: 'center', label: '序号'},
        { prop: 'column1', label: '列1', align: 'center', sortable: '' },
        { prop: 'column2', label: '列2', align: 'center', sortable: '' },
        { prop: 'column3', label: '列3', align: 'center', sortable: '' },
        { prop: 'column4', label: '列4', align: 'center', sortable: '' },
      ],
      list:{
        data: [
          { column1: '数据列01', column2: '数据列02', column3: '数据列03', column4: '数据列04' },
          { column1: '数据列11', column2: '数据列12', column3: '数据列13', column4: '数据列14' },
          { column1: '数据列21', column2: '数据列22', column3: '数据列23', column4: '数据列24' },
          { column1: '数据列31', column2: '数据列32', column3: '数据列33', column4: '数据列34' },
          { column1: '数据列41', column2: '数据列42', column3: '数据列43', column4: '数据列44' },
          { column1: '数据列51', column2: '数据列52', column3: '数据列53', column4: '数据列54' },
          { column1: '数据列61', column2: '数据列62', column3: '数据列63', column4: '数据列64' },
          { column1: '数据列71', column2: '数据列72', column3: '数据列73', column4: '数据列74' },
          { column1: '数据列81', column2: '数据列82', column3: '数据列83', column4: '数据列84' },
          { column1: '数据列91', column2: '数据列92', column3: '数据列93', column4: '数据列94' }
        ],
        total: 10
      },
      actions: {
        layout: { width: '210', align: 'center', label: '操作' },
        func: [
          {
            type: 'text',
            name: '查看',
            action: this.tableView
          },
          {
            type: 'text',
            name: '编辑',
            action: this.tableEdit
          },
          {
            type: 'text',
            name: '删除',
            hide: function(row) { // column1 = '数据列51' 的行不显示删除
              return row.column1 === '数据列51'
            },
            action: this.tableDelete
          }
        ]
      }
    }
  },
  methods: {
    // 请求数据列表
    getListData() {

    },
    /* -----表格事件----- */
    tableView(row, index){
      console.log(row)
    },
    tableEdit(row, index){
      console.log(row)
    },
    tableDelete(row, index){
      console.log(row)
    }
  }
}
</script>

<style>
</style>