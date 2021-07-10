<template>
  <div>
    <el-col span="10px">
      <el-input
          size="mini"
          width="10px"
          placeholder="如：阿莫西林"
          v-model="name">
      </el-input>
    </el-col>
    <el-col span="10px">
      <el-input
          size="mini"
          width="10px"
          placeholder="如：1"
          v-model="num">
      </el-input>
    </el-col>
    <el-col span="2px">
      <el-input
          size="mini"
          width="50px"
          placeholder="如：每日三次，口服"
          v-model="method">
      </el-input>
    </el-col>
    <el-button @click="addMedicine">添加</el-button>
    <el-table
      :data="data">
      <el-table-column
        fixed
        prop="name"
        width="90px"
        label="药品">
        <template slot-scope="scope">
          <el-input type="text" v-model="editName" v-if="editIndex === scope.$index" />
          <span v-else>{{ scope.row.name }}</span>
        </template>
        </el-table-column>
      <el-table-column
          fixed
          prop="num"
          width="70px"
          label="数量/盒">
        <template slot-scope="scope">
          <el-input type="text" v-model="editNum" v-if="editIndex === scope.$index" />
          <span v-else>{{ scope.row.num }}</span>
        </template>
      </el-table-column>
      <el-table-column
          fixed
          prop="method"
          width="95px"
          label="用法">
        <template slot-scope="scope">
          <el-input type="text" v-model="editMethod" v-if="editIndex === scope.$index" />
          <span v-else>{{ scope.row.method }}</span>
        </template>
      </el-table-column>
      <el-table-column
          fixed
          prop="action"
          width="153px"
          label="操作">
        <template slot-scope="scope">
          <div v-if="editIndex === scope.$index">
            <el-button @click="handleSave(scope.$index)">保存</el-button>
            <el-button @click="editIndex = -1">取消</el-button>
          </div>
          <div v-else>
            <el-button @click="handleEdit(scope.row, scope.$index)">编辑</el-button>
            <el-button type="error"  @click="remove(scope.$index)">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
name: "medicine_form",
  data() {
    return {
      name:'',
      num:'',
      method:'',
      data:[],
      editIndex:-1,
      editName:'',
      editNum:'',
      editMethod:''
    };
  },
  methods: {
    addMedicine(){
      let _this=this;
      if(_this.name!=''&&_this.num!=''&&_this.method!=''){
        _this.data.push({
          name:_this.name,
          num:_this.num,
          method:_this.method
        })
        console.log(this.data)
        _this.name='';
        _this.num='';
        _this.method='';
      }
    },
    handleEdit(row,index){
      this.editName=row.name;
      this.editNum=row.num;
      this.editMethod=row.method;
      this.editIndex=index;
    },
    handleSave(index){
      this.data[index].name=this.editName;
      this.data[index].num=this.editNum;
      this.data[index].method=this.editMethod;
      this.editIndex=-1;
    },
    remove(index){
      this.data.splice(index,1);
    }

  }
}
</script>

<style scoped>

</style>
