<template>
  <div>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" width="76.8px">
      <el-menu-item
          @click="dialogReportVisible=true"
          index="1">
        <i class="el-icon-location"></i>
        <span slot="title">举报</span>
      </el-menu-item>
      <el-dialog title="举报患者" center :visible.sync="dialogReportVisible" width="30%">
        <el-form :model="formReport" :disabled="formReportDisabled">
          <el-form-item label="举报类型" :label-width="formLabelWidth">
            <el-radio v-model="radio" label="1">言论侮辱</el-radio>
            <el-radio v-model="radio" label="2">恶意问诊</el-radio>
            <el-radio v-model="radio" label="3">不良图片</el-radio>
          </el-form-item>
          <el-form-item label="举报理由" :label-width="formLabelWidth">
            <el-input
                type="textarea"
                v-model="formReport.desc"
                class="input"
                :autosize="{ minRows: 2, maxRows: 4}"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <div class="button">
              <el-button type="primary" @click="submit">生成</el-button>
              <el-button @click="clearAllReportContent">清空</el-button>
            </div>

          </el-form-item>
        </el-form>
<!--        <div slot="footer" class="dialog-footer">-->
<!--          <el-button @click="clearAllReportContent">清空</el-button>-->
<!--          <el-button type="primary" @click="submit">提交</el-button>-->
<!--        </div>-->
      </el-dialog>
      <el-menu-item index="3" @click="quit">
        <i class="el-icon-document"></i>
        <span slot="title">退出</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {postReportDataFun} from "../service/userService";

export default {
  name: "inquiry_navigation_patient",
  data() {
    return {
      patientId:'111',
      docId:'111',
      time:'2.12',
      radio:0,
      isCollapse: true,
      dialogVisible:false,
      dialogReportVisible:false,
      formReport:{
        time:'',
        desc:''
      },
      formLabelWidth: '120px',
      value1:null,
      value2:null,
      value3:null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      formReportDisabled:false
    };
  },
  methods: {
    postReport(){
      postReportDataFun({
        pati_id:this.$store.state.inquiry.patientId,
        doctor_id:this.$store.state.inquiry.doctorId,
        time:this.formReport.time,
        content:this.formReport.desc,
      }).then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
    },
    submit(){
      let date=new Date().getDate();
      let month=new Date().getMonth()+1;
      let year=new Date().getFullYear();
      this.formReport.time=month+'-'+date+'-'+year;
      this.postReport();
      this.dialogReportVisible = false;
      this.formReportDisabled=true;
      console.log('submit!report')
    },
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
      this.$router.push('/Home');
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
.button{
  position: relative;
  width: 50%;
  left: 33%;
}
.input{
  width: 210px;
}

</style>
