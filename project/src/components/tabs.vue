<template>
  <div class="tabs">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="病历填写" name="first">
        <medicalrecord_form></medicalrecord_form>
      </el-tab-pane>
      <el-tab-pane label="处方填写" name="second">
        <prescription_form></prescription_form>
      </el-tab-pane>
      <el-tab-pane label="查看照片" name="third">
        查看照片
      </el-tab-pane>
      <el-tab-pane label="患者信息" name="fourth">
        患者信息
      </el-tab-pane>
    </el-tabs>
  </div>

</template>

<script>
import medicalrecord_form from "./medicalrecord_form";
import prescription_form from "./prescription_form";
export default {
name: "tabs",
  data() {
    return {
      activeName: 'fourth'
    };
  },
  components:{
    medicalrecord_form,
    prescription_form
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style scoped>
.tabs{
  position: relative;
  width: 90%;
  height: 100%;
}
/deep/.tab_pos{
  left:0px;
  right: 0px;
}
/deep/.el-tabs__item{
  font-weight: bolder;
  padding: 0 15px;
}

/deep/.el-checkbox{
  margin-right: 6px;
}
</style>
