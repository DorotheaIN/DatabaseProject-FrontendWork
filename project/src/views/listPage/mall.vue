<template>
  <div class="docList">
    <Navigation></Navigation>
    <div class="select">
      <myselect
        :selectedOptions="options"
        :selectedData="docList"
        @selectData="changeData"
      >
      </myselect>
      <!-- <shop></shop> -->
    </div>
    <div class="search">
        <mysearch></mysearch>
    </div>
    <div class="cart">
        <!-- <el-button type="primary" icon="el-icon-shopping-cart-full"></el-button> -->
        <shoppingCart></shoppingCart>
    </div>
    <div class="card">
      <cardHos ref="listItem" :dataList="docData">
        <el-button type="primary" class="button" @click="addCart" >加购</el-button>
      </cardHos>

      <myform  :isVisible="isFormVisible" @formSubmit='submitForm' @formClose='closeForm' ></myform>
    </div>
  </div>
</template>

<style scoped>
.select{
    position: absolute;
    left:17%;
    top:18%
}
.card{
    position:absolute;
    left:14%;
    top:23%
}
.cart{
    position:absolute;
    left:85%;
    top:18%
}
.search{
    position:absolute;
    left:45%;
    top:18%
}
.page{
    position: absolute;
    left:70%;
    top:100%
}
</style>

<script>
import Navigation from "@/components/Navigation.vue";
import cardList from "@/components/cardList.vue";
import myselect from "@/components/singleSelect.vue";
import mysearch from '@/components/searchingSelect.vue'
import myform from "@/components/orderFormHos.vue";
import {getDocDataFun,getDocOptionFun} from "@/service/userService.js";
import shop from '@/components/shopDrawer.vue';
import cardHos from '@/components/cardHos.vue';
import shoppingCart from '@/components/shoppingCart.vue';

export default {
  name: "mall",
  components: {
    cardList,
    myselect,
    myform,
    shop,
    Navigation,
    mysearch,
    cardHos,
    shoppingCart,
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
    addCart(){

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
