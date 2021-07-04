<template>
  <div class="title">
    <div class="image">
      <img :src="`https://ui-avatars.com/api/?size=60&length=1&bold=true&background=409EFF&color=ffffff&rounded=true&name=${name}`"weight=44px height=44px>
      <span>{{user.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
name: "inquiry_title",
  data(){
    return{
      user:{
        name:'病人',
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
.image{
  padding-left:14px;
}
.image span{
  bottom: 14px;
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
