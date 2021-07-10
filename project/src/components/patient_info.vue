<template>
  <div class="form_body">
    <el-form ref="form" :model="form" size="mini" label-width="90px" >
      <el-form-item label="患者姓名：">
        <span>{{patient_name}}</span>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {
name: "patient_information",
  data(){
  return{
    patient_name:'患者A'
  }

  }
}
</script>

<style scoped>

</style>
