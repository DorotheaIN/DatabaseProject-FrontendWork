<template>
  <div class="form_body">
    <el-form ref="form" :model="patient" size="mini" label-width="90px">
      <el-form-item label="姓名：">
        <span>{{patient.patiName}}</span>
      </el-form-item>
<!--      <el-form-item label="身份证号：">-->
<!--        <span>{{patient.identi}}</span>-->
<!--      </el-form-item>-->
      <el-form-item label="性别：">
        <span>{{patient.sex}}</span>
      </el-form-item>
<!--      <el-form-item label="电话：">-->
<!--        <span>{{patient.tel}}</span>-->
<!--      </el-form-item>-->
      <el-form-item label="身高：">
        <span>{{patient.height}}</span>
      </el-form-item>
      <el-form-item label="体重：">
        <span>{{patient.weight}}</span>
      </el-form-item>
      <el-form-item label="BMI：">
        <span>{{patient.BMI}}</span>
      </el-form-item>
      <el-form-item label="心率：">
        <span>{{patient.heartRate}}</span>
      </el-form-item>
      <el-form-item label="血压：">
        <span>{{patient.bloodPre}}</span>
      </el-form-item>
<!--      <el-form-item label="收缩压：">-->
<!--        <span>{{patient.smallBloodPressure}}</span>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="舒张压：">-->
<!--        <span>{{patient.largeBloodPressure}}</span>-->
<!--      </el-form-item>-->
    </el-form>
  </div>
</template>

<script>
import {getPatientInfoDataFun,getPatientInfoFun} from "../service/userService";

export default {
name: "patient_information",
  data(){
  return{
    patient:{
      identi:'',
      patiId:'',
      patiName:'',
      sex:'',
      tel:'',
      height:'',
      weight:'',
      BMI:'',
      heartRate:'',
      bloodPre:'',
      // smallBloodPressure:'',
      // largeBloodPressure:'',
    }
  }
  },
  created() {
    this.getPatientInfo();
  },
  methods:{
    getPatientInfo(){
      getPatientInfoDataFun({
        "ID":this.$store.state.inquiry.patientId
      }).then(res=>{
        this.patient.identi=res.result.identification;
        this.patient.patiId=res.result.pati_ID;
        this.patient.patiName=res.result.pati_name;
        this.patient.sex=res.result.sex;
        this.patient.tel=res.result.tel;
        this.$store.commit("editInquiryPatientName",this.patient.patiName);
      }).catch(err=>{
        console.log(err);
      })
      getPatientInfoFun({
        "pati_id":this.$store.state.inquiry.patientId
      }).then(res=>{
        console.log(res);
        this.patient.height=res.result.height;
        this.patient.weight=res.result.weight;
        this.patient.BMI=res.result.bmi;
        this.patient.heartRate=res.result.heart_rate+' bmp';
        console.log(this.patient.heartRate);
        // this.patient.smallBloodPressure=res.result.diastolic_pressure;
        // this.patient.largeBloodPressure=res.result.systolic_pressure;
        this.patient.bloodPre=res.result.diastolic_pressure+'~'+res.result.systolic_pressure+' mmHg';
        this.patient.BMI=this.patient.BMI.toFixed(2);
      }).catch(err=>{
        console.log(err);
      })
    },
  }
}
</script>

<style scoped>

</style>
