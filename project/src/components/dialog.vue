<template>
  <div>
    <el-dialog
      title="详细信息"
      :visible.sync="visible"
      width="30%"
      @close="handleClose"
    >
      <ul>
        <li v-for="(value,Key) in dataList" :key=Key>
           {{Key}}:{{value}}
        </li>
      </ul>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="visible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>



<script>
export default {
  data() {
    return {
      visible:false,
      dataList:{}
    };
  },
  props:{
    dialogVisible:{
      type:Boolean,
      default:false
    },
    dialogData:{
      type:Object,
      default:function(){
        return {}
      }
    }
  },
  methods: {
    handleClose() {
      // this.$confirm("确认关闭？")
      //   .then((_) => {
      //     done();
      //   })
      //   .catch((_) => {});
        this.$emit('dialogClick',false)
    },
  },
  watch:{
        // 监听 addOrUpdateVisible 改变
        dialogVisible(){
            this.visible = this.dialogVisible
            },
        dialogData(){
          this.dataList = this.dialogData
        }
  }
};
</script>
