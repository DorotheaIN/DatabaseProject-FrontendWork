<template>
  <div class="title">
    <el-image :src="user.pic_url"></el-image>
    <span>{{user.name}}</span>
    <div class="user_pic">
    </div>
    <div class="user_name">
    </div>
  </div>
</template>

<script>
export default {
name: "inquiry_title",
  data(){
    return{
      user:{
        name:'李华',
        pic_url:'https://ui-avatars.com/api/?size=42&rounded=true&name=李'
      }
    }
  },
  methods:{
    loadPicUrl(){

    }
  },
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
