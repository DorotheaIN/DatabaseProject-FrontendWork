<template>
<div>

  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" width="76.8px">
    <el-menu-item
        @click="dialogReportVisible=true"
        index="1">
      <i class="el-icon-location"></i>
      <span slot="title">举报</span>
    </el-menu-item>
    <el-dialog title="举报医生" center :visible.sync="dialogReportVisible" width="30%">
      <el-form :model="formReport">
        <el-form-item label="举报类型" :label-width="formLabelWidth">
          <el-radio v-model="radio" label="1">言论侮辱</el-radio>
          <el-radio v-model="radio" label="2">恶意问诊</el-radio>
          <el-radio v-model="radio" label="3">不良图片</el-radio>
        </el-form-item>
        <el-form-item label="举报理由" :label-width="formLabelWidth">
          <el-input
              type="textarea"
              v-model="formReport.desc"
              :autosize="{ minRows: 2, maxRows: 4}"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="clearAllReportContent">清空</el-button>
        <el-button type="primary" @click="dialogReportVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <!--  评价实现 menuItem+dialog+form+rate-->
    <el-menu-item
        @click="dialogVisible=true"
        index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">评价</span>
    </el-menu-item>
    <el-dialog title="问诊评价" center :visible.sync="dialogVisible" width="30%">
      <el-form :model="form">
        <el-form-item label="医生态度" :label-width="formLabelWidth">
            <el-rate
                v-model="value1"
                :colors="colors"
                show-text>
            </el-rate>
        </el-form-item>
        <el-form-item label="病情分析" :label-width="formLabelWidth">
          <el-rate
              v-model="value2"
              :colors="colors"
              show-text>
          </el-rate>
        </el-form-item>
        <el-form-item label="诊疗方案" :label-width="formLabelWidth">
          <el-rate
              v-model="value3"
              :colors="colors"
              show-text>
          </el-rate>
        </el-form-item>
        <el-form-item label="更多评价" :label-width="formLabelWidth">
          <el-input
              type="textarea"
              v-model="form.desc"
              :autosize="{ minRows: 2, maxRows: 4}"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="clearAllContent">清空</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 结束问诊！！！！！！！！！暂时是跳转到doc_card -->
    <el-menu-item index="3" @click="quit">
      <i class="el-icon-document"></i>
      <span slot="title">退出</span>
    </el-menu-item>
<!--    <el-menu-item index="4">-->
<!--      <i class="el-icon-setting"></i>-->
<!--      <span slot="title">导航四</span>-->
<!--    </el-menu-item>-->
  </el-menu>
</div>
</template>

<script>
export default {
name: "inquiry_navigation",
  data() {
    return {
      radio:0,
      isCollapse: true,
      dialogVisible:false,
      dialogReportVisible:false,
      form: {
        desc: '',
      },
      formReport:{

      },
      formLabelWidth: '120px',
      value1:null,
      value2:null,
      value3:null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900']
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    createAssessForm() {
      this.$prompt('请输入邮箱', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: '邮箱格式不正确'
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '你的邮箱是: ' + value
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    },
    clearAllContent(){
      this.value1=null;
      this.value2=null;
      this.value3=null;
      this.form.desc='';
    },
    clearAllReportContent(){
      this.radio=0;
      this.formReport.desc='';
    },
    quit(){
      this.$router.push('/doc_card');
    }
  }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
/deep/ .el-rate__icon{
  font-size: 35px;
}
</style>
