<template>
  <div>
    <div class="text">
      <text_box></text_box>
    </div>

    <el-container>
      <el-main>
        <div class="text"></div>

      </el-main>
      <el-aside width="350px">
      </el-aside>
    </el-container>
  </div>

</template>

<script>
import text_box from "../components/text_box";
import Text_box from "../components/text_box";
export default {
  name: "Inquiry",
  components: {Text_box},
  comments:{
    text_box
  },
  data(){
    return{
      text:'',
      textarea2:''
    }

  }
}
</script>
<style scoped>
.text{
  position: absolute;
  padding: 0;
  margin: 0;
  top:0;
  left: 0;
  bottom: 0;
  width: 70%;
  border: 1px solid #DCDCDC;
}
html,body,#app{
  height: 100%;
}
</style>
