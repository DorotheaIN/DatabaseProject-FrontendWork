<template>
  <div class="form_body">
    <el-form ref="form" :model="form" size="mini" label-width="90px" >
      <el-form-item label="患者姓名：">
        <span>{{patient_name}}</span>
      </el-form-item>
      <el-form-item label="初步诊断：">{{form.disease}}</el-form-item>
      <el-form-item label="处理意见：">{{form.disease}}</el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">生成</el-button>
        <el-button>清空</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "prescription_form",
  data() {
    return {
      patient_name:'患者A',
      diseases:[],
      departments:[],
      form: {
        disease: '风寒',
        department:'',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    querySearchDiseases(queryString,cb){
      let diseases=this.diseases;
      let results=queryString?diseases.filter(this.createFilterDiseases(queryString)):diseases;
      cb(results);
    },
    querySearchDepartments(queryString,cb){
      let departments=this.departments;
      let results=queryString?departments.filter(this.createFilterDepartments(queryString)):departments;
      cb(results);
    },
    createFilterDiseases(queryString){
      return (disease)=>{
        return (disease.value.toLowerCase().indexOf(queryString.toLowerCase())===0)
      };
    },
    createFilterDepartments(queryString){
      return (department)=>{
        return (department.value.toLowerCase().indexOf(queryString.toLowerCase())===0)
      };
    },
    loadAllDiseases(){
      return [
        {"value":"风寒感冒"},
        {"value":"小儿麻痹症"}
      ]
    },
    loadAllDepartments(){
      return [
        {"value":"眼科"},
        {"value":"耳科"}
      ]
    },
    handleSelect(item){
      console.log(item);
    }

  },
  mounted() {
    this.diseases=this.loadAllDiseases();
    this.departments=this.loadAllDepartments();
  }
}
</script>

<style scoped>
.form_body{
  width: 99%;
  height: 100%;
  border: 0;
  left:20px;
  font-family: "微软雅黑";
  overflow: auto;
}
/deep/.el-form-item{
  font-size: 10px;
  margin-bottom: 1px;
}
/deep/.el-form-item--mini.el-form-item{
  margin-bottom: 6px;
}
</style>
