<template>
    <div>
        <div class="logo">
            <img src="../assets/logo.png"  alt="济病通在线问诊" width=90px height=84px >
            <span class="logo_name">济病通在线问诊</span>
        </div>
        <div class="navBar">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" active-text-color="#409EFF">
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">线上预约</el-menu-item>
                <el-menu-item index="3">线下预约</el-menu-item>
                <el-menu-item index="4">健康商城</el-menu-item>
                <el-menu-item index="5">疾病信息</el-menu-item>
            </el-menu>
            <div class="line"></div>
        </div>
        <div class="ava">
            <img src="../assets/avatar.png"  alt="我的信息" width=50px height=50px >
        </div>
    </div>
</template>

<script>
  export default {
    name:"Navigation",
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="less" scoped>
.navBar{
    position:absolute;
    left:700px;
    top:20px;
   
}
/deep/.el-menu-item{
     font-family:"微软雅黑";
    font-size:18px;   
}
.logo{
    position:absolute;
    left:250px;
    top:20px;
}
.logo_name{
    font-family:"幼圆";
    font-size:30px;
}
img{
    vertical-align:middle;
}
.ava{
    position:absolute;
    left:1400px;
    top:30px;
}
</style>