<template>
  <div class="tabs">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="查看病历" name="first">
        <el-form ref="form1" :model="form1" size="mini" label-width="90px" >
          <el-form-item label="患者姓名：">
            <span>{{patient_name}}</span>
          </el-form-item>
          <el-form-item label="患者主诉：">
            <span>{{form1.desc}}</span>
          </el-form-item>
          <el-form-item label="诊断疾病：">
            <span>{{disease}}</span>
          </el-form-item>
          <el-form-item label="所属科室：">
            <span>{{form1.department}}</span>
          </el-form-item>
          <el-form-item label="相应症状：">
            <el-checkbox-group v-model="form1.checkList" disabled>
              <el-checkbox label="头痛"></el-checkbox>
              <el-checkbox label="头昏"></el-checkbox>
              <el-checkbox label="心悸"></el-checkbox>
              <el-checkbox label="胸闷"></el-checkbox>
              <el-checkbox label="胸痛"></el-checkbox>
              <el-checkbox label="发热"></el-checkbox>
              <el-checkbox label="咳嗽"></el-checkbox>
              <el-checkbox label="咳痰"></el-checkbox>
              <el-checkbox label="鼻衄"></el-checkbox>
              <el-checkbox label="耳鸣"></el-checkbox>
              <el-checkbox label="眼花"></el-checkbox>
              <el-checkbox label="乏力"></el-checkbox>
              <el-checkbox label="消瘦"></el-checkbox>
              <el-checkbox label="浮肿"></el-checkbox>
              <el-checkbox label="呕吐"></el-checkbox>
              <el-checkbox label="尿痛"></el-checkbox>
              <el-checkbox label="便秘"></el-checkbox>
              <el-checkbox label="腹泻"></el-checkbox>
              <el-checkbox label="多饮"></el-checkbox>
              <el-checkbox label="多食"></el-checkbox>
              <el-checkbox label="多尿"></el-checkbox>
              <el-checkbox label="皮疹"></el-checkbox>
              <el-checkbox label="呼吸困难"></el-checkbox>
              <el-checkbox label="关节肿痛"></el-checkbox>
              <el-checkbox label="视力模糊"></el-checkbox>
              <el-checkbox label="四肢麻木"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
      </el-tab-pane>


      <el-tab-pane label="查看处方" name="second">
        <div class="form_body">
          <el-form ref="form" :model="form" size="mini" label-width="90px" >
            <el-form-item label="患者姓名：">
              <span>{{patient_name}}</span>
            </el-form-item>
            <el-form-item label-position="top"  label="初步诊断：">{{disease}}</el-form-item>
          </el-form>
          <el-form label-position="top" ref="form" :model="form" size="mini" label-width="90px" >
            <el-form-item  label="处理意见：">
              <el-table
                  :data="data">
                <el-table-column
                    fixed
                    prop="name"
                    width="160px"
                    label="药品">
                </el-table-column>
                <el-table-column
                    fixed
                    prop="num"
                    width="70px"
                    label="数量/盒">
                </el-table-column>
                <el-table-column
                    fixed
                    prop="method"
                    width="180px"
                    label="用法">
                </el-table-column>
              </el-table>
            </el-form-item>
          </el-form>
        </div>
     </el-tab-pane>


      <el-tab-pane label="查看照片" name="third">
        查看照片
      </el-tab-pane>
      <el-tab-pane label="医生信息" name="fourth">
      <doc_info></doc_info>
      </el-tab-pane>
    </el-tabs>
  </div>

</template>

<script>
import doc_info from "./doc_info";
export default {
  name: "tabs_patient",
  components:{
    doc_info
  },
  data() {
    return {
      activeName: 'fourth',
      patient_name:'患者A',
      disease:'风寒',
      departments:[],
      form1: {//查看病历
        desc:'xxxx',  //患者主诉
        department:'xxx',//科室
        delivery: false,
        checkList:['耳鸣','呕吐']//症状
      },
      form2:{

      },
      data:[],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    loadAllData(){
      return[
        {"name":"阿莫西林","num":1,"method":"口服"}
      ]
    }
  },
  mounted() {
    this.data=this.loadAllData();
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
/deep/.el-form--label-top .el-form-item__label{
  padding-left: 10px;
}
</style>
