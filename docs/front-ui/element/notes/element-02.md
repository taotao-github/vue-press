# element tree相关要点

## tree的2种自定义节点内容渲染方式

1. **使用render-content自定义节点内容**
```html
<el-tree
  :data="data"
  :props="{children: 'children',label: 'name'}"
  :default-expand-all="false"
  :render-content="renderContent">
  <!-- tree -->
</el-tree>

<script>
export default{
  methods: {
    renderContent(h, { node, data, store }){
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
            <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
          </span>
        </span>);
      }
    }
  }
}
</script>
```

2. **使用scoped slot自定义节点内容**
```html
<el-tree
  :data="data"
  :props="{children: 'children',label: 'name'}"
  :default-expand-all="false"
  :render-content="renderContent">
  <!-- tree -->
  <span class="custom-tree-node" slot-scope="{ node, data }">
    <span>{{node.label}}</span>
    <span>
      <el-button size="mini" type="text" on-click="append(data)">Append</el-button>
      <el-button size="mini" type="text" on-click="remove(node, data)">Delete</el-button>
    </span>
  </span>);
</el-tree>
```

## tree的同级拖拽控制（同级拖拽排序）
```html
<el-tree
  :data="data"
  :props="{children: 'children',label: 'name'}"
  :allow-drop="allowDrop"
  draggable
  show-checkbox
  @node-drop="sort">
  <!-- tree -->
</el-tree>

<script>
export default{
  methods: {
    // 控制同级别拖拽
    allowDrop(draggingNode, dropNode, type) {
      if (draggingNode.data.level === dropNode.data.level) { // level组件自动生成的属性
        // parentId是父节点id
        if (draggingNode.data.parentId === dropNode.data.parentId) {
          return type === 'prev' || type === 'next'
        }
      } else {
        // 不同级进行处理
        return false
      }
    },
    sort(draggingNode, dropNode, type, event) {
      // console.log(draggingNode, dropNode, type, event)
      const sortArr = []
      for (const item of dropNode.parent.childNodes) {
        sortArr.push(item.data.id)
      }
      console.log(sortArr) // 拖拽后的childNodes数组顺序
    }
  }
}
</script>
```