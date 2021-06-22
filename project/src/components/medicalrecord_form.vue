<template>
  <div class="form_body">
    <el-form ref="form" :model="form" size="mini" label-width="90px" >
      <el-form-item label="患者姓名：">
        <span>{{patient_name}}</span>
      </el-form-item>
      <el-form-item label="患者主诉：">
        <el-input
            type="textarea"
            v-model="form.desc"
            :autosize="{ minRows: 2, maxRows: 4}"
        ></el-input>
      </el-form-item>
      <el-form-item label="诊断疾病：">
        <el-autocomplete
            class="inline-input"
            v-model="form.disease"
            :fetch-suggestions="querySearchDiseases"
            placeholder="请输入内容"
            :trigger-on-focus="false"
            @select="handleSelect"
            size="mini"
        ></el-autocomplete>
      </el-form-item>
      <el-form-item label="所属科室：">
        <el-autocomplete
            class="inline-input"
            v-model="form.department"
            :fetch-suggestions="querySearchDepartments"
            placeholder="请输入内容"
            :trigger-on-focus="false"
            @select="handleSelect"
            size="mini"
        ></el-autocomplete>
      </el-form-item>
      <el-form-item label="相应症状：">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="头痛" name="type"></el-checkbox>
          <el-checkbox label="头昏" name="type"></el-checkbox>
          <el-checkbox label="心悸" name="type"></el-checkbox>
          <el-checkbox label="胸闷" name="type"></el-checkbox>
          <el-checkbox label="胸痛" name="type"></el-checkbox>
          <el-checkbox label="发热" name="type"></el-checkbox>
          <el-checkbox label="咳嗽" name="type"></el-checkbox>
          <el-checkbox label="咳痰" name="type"></el-checkbox>
          <el-checkbox label="鼻衄" name="type"></el-checkbox>
          <el-checkbox label="耳鸣" name="type"></el-checkbox>
          <el-checkbox label="眼花" name="type"></el-checkbox>
          <el-checkbox label="乏力" name="type"></el-checkbox>
          <el-checkbox label="消瘦" name="type"></el-checkbox>
          <el-checkbox label="浮肿" name="type"></el-checkbox>
          <el-checkbox label="呕吐" name="type"></el-checkbox>
          <el-checkbox label="尿痛" name="type"></el-checkbox>
          <el-checkbox label="便秘" name="type"></el-checkbox>
          <el-checkbox label="腹泻" name="type"></el-checkbox>
          <el-checkbox label="多饮" name="type"></el-checkbox>
          <el-checkbox label="多食" name="type"></el-checkbox>
          <el-checkbox label="多尿" name="type"></el-checkbox>
          <el-checkbox label="皮疹" name="type"></el-checkbox>
          <el-checkbox label="呼吸困难" name="type"></el-checkbox>
          <el-checkbox label="关节肿痛" name="type"></el-checkbox>
          <el-checkbox label="视力模糊" name="type"></el-checkbox>
          <el-checkbox label="四肢麻木" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">生成</el-button>
        <el-button>清空</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
export default {
  name: "inquiry_record",
  data() {
    return {
      patient_name:'患者A',
      diseases:[],
      departments:[],
      form: {
        disease: '',
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
