<template>
  <div class="app-container">
      <gc-spread-sheets
            hostClass='spread-host'
            @workbookInitialized = 'workbookInitialized($event)'>
        <gc-worksheet :data-source="tableData">
        </gc-worksheet>
      </gc-spread-sheets>
  </div>
</template>

<script>
  import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css'
  import GC from '@grapecity/spread-sheets'
  import '@grapecity/spread-sheets-vue'
  export default {
    data() {
      return {
        // 表格的数据源
        tableData: []
      }
    },  
    // 初始化表格数据
    created() {
      this.tableData = [
        ['1', 'TOM'],
        ['2', 'JACK'],
        ['3', 'JAMES']
      ]
    },
    methods: {
      // workbookInitialized是spread初始化完成后的回调事件，我们可以在事件中得到初始化好的workbook对象
      workbookInitialized(spread) {
        this.spread = spread
        spread.refresh()
      }
    }
  }
</script>

<style scoped>
  .spread-host {
    width: 100%;
    height: 800px
  }
</style>