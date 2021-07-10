<template>
  <div class="title">
    <div class="image">
<!--        <img :src="`https://ui-avatars.com/api/?size=56&length=1&bold=true&background=409EFF&color=ffffff&rounded=true&name=${user.name}`"weight=44px height=44px>-->
        <span class="test">{{user.name}}</span>
    </div>

  </div>
</template>

<script>
export default {
name: "inquiry_title",
  data(){
    return{
      user:{
        name:'患者A',
        oppositeName:'医生A'
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
  margin-top: 20px;
  border-bottom: 1px solid #DCDCDC;
  margin-right: 10px;
  margin-left: 10px;
}
.image{
  padding-left:400px;
  padding-bottom: 5px;
}
img{
  vertical-align:middle;
}
.test{
  font-size: 23px;
  padding-left: 10px;
  height: 30px;
  line-height: 30px;
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
