<!-- 根据指定数据动态生成table -->
<template>
  <div class="dy-table">
    <!--全选-->
    <table class="table-title">
      <tr>
        <th width="2%">
          <input type="checkbox" :checked="isAllChecked()" @change="changeAllChecked($event)" />
        </th>
        <th width="29%">人员姓名</th>
        <th width="69%">部门名称</th>
      </tr>
      <tbody v-for="(data, index) in list" :key="index">
        <tr>
          <td colspan="4">
            <input
              type="checkbox"
              :checked="isTitleChecked(data)"
              @change="changeTitleChecked(data,$event)"
            />全选
          </td>
        </tr>
        <tr v-for="(item, index) in data.listItem" :key="index">
          <td>
            <input type="checkbox" :value="item" v-model="data.selected" />
          </td>
          <td>{{ item.userAlais }}</td>
          <td>
            {{item.deptName}}
            <span>[{{item.orgName}}]</span>
          </td>
        </tr>
      </tbody>
    </table>
    <!--测试选中的数据-->
    <button @click="selectedData">已选中的数据</button>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import dataList from "./data/list.json";
export default {
  data() {
    //这里存放数据
    return {
      list: [
        {
          selected: [], // 记录每类每一项的选中
          listItem: [] // 子全选项
        }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    /**--处理数据为指定数据格式 {select: [], listItem:[{}]}--*/
    mapData(list) {
      // list ==> root
      let map = {}, dest = [];
      for (let i = 0; i < list.length; ++i) {
        let ai = list[i];
        if (!map[ai.deptName]) {
          dest.push({
            selected: [],
            listItem: [ai]
          });
          map[ai.deptName] = ai;
        } else {
          for (let j = 0; j < dest.length; ++j) {
            let dj = dest[j];
            if (dj.listItem[0].deptName == ai.deptName) {
              dj.listItem.push(ai);
              break;
            }
          }
        }
      }
      return dest;
    },

    /**--打印已选中的数据--*/
    selectedData() {
      let res = [];
      for (let item of this.list) {
        res = res.concat(item.selected);
      }
      console.log(res)
    },
    /**--当子全选状态变化时的处理方法--*/
    changeTitleChecked (data, event) {
      if (event.target.checked === true) {
        data.listItem.forEach(item => {
          data.selected.indexOf(item) === -1 && data.selected.push(item);
        })
      } else {
        data.selected = [];
      }
    },
    /**--判断所有子全选的选择状态--*/
    isTitleChecked (data) {
      let _selected = data.selected;
      let _listItem = data.listItem;
      // 验证selected中是否含有全部的item, 如果是 证明子全选为true
      return _listItem.every( item => {
        return _selected.indexOf(item) != -1;
      })
    },

    /**--全选框change事件的回调处理方法--*/
    changeAllChecked (event) {
      if (event.target.checked === true) {
        this.list.forEach(data => {
          data.listItem.forEach( item => {
            data.selected.indexOf(item) === -1 && data.selected.push(item);
          })
        })
      } else {
        this.list.forEach( data => {
          data.selected = []
        });
      }
    },

    /**--判断全选框选择状态--*/
    isAllChecked () {
      return this.list.every(function(data) {
        return data.selected.length === data.listItem.length;
      });
    }
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.list = this.mapData(dataList.root);
  }
};
</script>
<style lang='scss' scoped>
.dy-table {
  input[type="checkbox"] {
    cursor: pointer;
  }
  table {
    border-collapse: collapse;
    margin: 0 auto;
    width: 100%;
    text-align: left;
    th {
      border: 1px solid #cad9ea;
      background: linear-gradient(to top, #ffffff, #cce8eb);
      color: #666;
      height: 30px;
    }
    th,
    td {
      padding-left: 5px;
    }
    tr {
      &:nth-child(odd) {
        background: #fff;
      }
      &:nth-child(even) {
        background: #f5fafa;
      }
      td {
        &:first-child {
          border-left: 1px solid #cad9ea;
          color: #666;
          height: 30px;
        }
        &:last-child {
          border-right: 1px solid #cad9ea;
          color: #666;
          height: 30px;
        }
      }
    }
    thead th {
      background-color: #cce8eb;
    }
  }
}
</style>