 <template>
  <!-- 测试调用my-title自定义组件 -->
 <div>
    <my-title title="自定义标题" :btns="btns">
      <!-- 这里通过默认插槽，显示搜素时想要 -->
      <my-query :query="query" />  
    </my-title> 
   </div> 
</template>

<script>
// 引入my-title 和 my-query组件
import myTitle from './components/my-title'
import myQuery from './components/my-query'
export default {
  components: {
    'my-title': myTitle,
    'my-query': myQuery
  },
  data() {
    return {
      btns: [
        { type: 'primary', name: '搜索', query: true, icon: 'el-icon-search', action: this.actionQuery }
      ],
      query: [
        {
          type: 'search',
          label: '搜索',
          placeholder: '请输入关键字！',
          size: 'mini',
          key: 'keyword',
          align: 'auto', // flex布局，margin-right： auto使后面的元素一直靠右, 如下新建就将一直靠右
          value: '',
          action: this.queryKeyword
        },
        {
          type: 'button',
          label: '新建',
          size: 'mini',
          icon: 'el-icon-plus',
          action: this.queryAdd
        },
        {
          type: 'button',
          label: '新建1',
          size: 'mini',
          icon: 'el-icon-plus',
          action: this.queryAdd
        }
      ]
    }
  },
  methods: {
    actionQuery(show) {
      console.log(show)
    },
    queryKeyword(keyword) {
      console.log(keyword)
    },
    queryAdd() {
      console.log('新增')
    }
  }
}
</script>
<style lang="sass" scoped>

</style>