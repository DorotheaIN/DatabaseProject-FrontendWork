<template>
  <div class="docList">
    <div>
      <myselect
        :selectedOptions="options"
        :selectedData="docList"
        @selectData="changeData"
      >
      </myselect>
      <shop></shop>
    </div>
    <div>
      <cardList ref="listItem" :dataList="docData">
        <el-button type="primary" class="button" @click="showForm" >预约</el-button>
      </cardList>
      <myform  :isVisible="isFormVisible" @formSubmit='submitForm' @formClose='closeForm'></myform>
    </div>
  </div>
</template>

<script>
import cardList from "@/components/cardList.vue";
import myselect from "@/components/singleSelect.vue";
//import myselect from '@/components/searchSelect.vue'
import myform from "@/components/orderForm.vue";
import {getDocDataFun,getDocOptionFun} from "@/service/userService.js";
import shop from '@/components/shopDrawer.vue';

export default {
  name: "DocList",
  components: {
    cardList,
    myselect,
    myform,
    shop
  },
  data() {
    return {
      docList: [],
      docData: [],
      options: [],
      isFormVisible:false
    };
  },
  created() {
    this.getDataList();
    this.getOptions();
  },
  methods: {
    getDataList(){
      getDocDataFun(
      ).then(res=>{
        this.docList = res.result;
        this.docData = res.result;
      }).catch(err=>{
         console.log(err);
      });
    },
    getOptions(){
      getDocOptionFun().then(res=>{
        this.options = res.result.map((item) => {
        return { value: `${item}`, label: `${item}` };
        });
      }).catch(err=>{
        console.log(err);
      });
    },
    changeData(newdata) {
      this.docData = newdata;
    },
    showForm(mes){
      this.isFormVisible = true
      this.$refs.listItem.recordLocation(mes)
    },
    closeForm(){
      this.isFormVisible = false
    },
    submitForm(mes){
      mes.docId = this.$refs.listItem.lastCardInfo._id
      mes.docName = this.$refs.listItem.lastCardInfo._name
      console.log(mes);
    },
  },
};
</script>
