<template>
  <div class="form_body">
    <el-form ref="form" :model="form" size="mini" label-width="90px" >
      <el-form-item label="医生姓名：">
        <span>{{doc_name}}</span>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {
  name: "doc_info",
  data(){
    return{
      doc_name:'xxxx',
    }
  }
}
</script>

<style scoped>

</style>
