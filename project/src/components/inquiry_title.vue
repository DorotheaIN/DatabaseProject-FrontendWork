<template>
  <div class="title">
    <el-avatar size="mini"> {{user.name}} </el-avatar>
    <span>{{user.name}}</span>
    <div class="user_pic">
    </div>
    <div class="user_name">
    </div>
    <div class="buttoms">
      <el-button type="primary" icon="el-icon-edit" circle size="small" @click="dealMessage"></el-button>
      <el-button type="primary" icon="el-icon-picture" circle size="small"></el-button>
      <el-button type="primary" icon="el-icon-folder" circle size="small"></el-button>
    </div>
  </div>
</template>

<script>
export default {
name: "inquiry_title",
  data(){
    return{
      user:{
        name:'Patient'
      }
    }
  }
}
</script>

<style scoped>
.title{
  border-bottom: 1px solid #DCDCDC;
  margin-right: 10px;
}
.user_pic{
  left:40px;
  width: 150px;
  display: inline;
  vertical-align: middle;
}
.user_name{
  width:150px;
  height:150px;
  font-family:"黑体";
  font-size:25px;
  display: inline;
  vertical-align: middle;
}
.buttoms{
  left:500px;
  text-align: right;
  display: inline;
  vertical-align: middle;
}

</style>
