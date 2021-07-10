<template>
  <div class="docList">
    <Navigation></Navigation>
     <div class="pic">
            <el-carousel :interval="4000"  height="350px" indicator-position="outside">
            <el-carousel-item v-for="item in imagesBox" :key="item.id">
            <img :src="item.idView" class="image">
            </el-carousel-item>
            </el-carousel>
    </div>
    <!-- <div class="select">
      <myselect
        :selectedOptions="options"
        :selectedData="docList"
        @selectData="changeData"
      >
      </myselect> -->
      <!-- <shop></shop> -->
    <!-- </div> -->
    <!-- <div class="search">
        <mysearch></mysearch>
    </div> -->
     <!-- <div class="online">
            <div class="partition">在线问诊</div>
            <div class="button1"> <el-button type="text">查看更多</el-button></div>
            <div class="link-top"></div>
            <div class="card">
                <cardList ref="listItem" :dataList="docData">
                    <el-button type="primary" class="button" @click="showForm" >预约</el-button>
                </cardList>

                <myform  :isVisible="isFormVisible" @formSubmit='submitForm' @formClose='closeForm' ></myform>
            </div>
    </div>
     <div class="offline">
            <div class="partition">线下预约</div>
            <div class="button1"> <el-button type="text" class="bu">查看更多</el-button></div>
            <div class="link-top"></div>
           <div class="card1">
                <cardHos ref="listItem" :dataList="docData">
                    <el-button type="primary" class="button" @click="showForm" >预约</el-button>
                </cardHos>

                <myform1  :isVisible="isFormVisible" @formSubmit='submitForm' @formClose='closeForm' ></myform1>
         </div>
    </div> -->
    <div class="announce">
        <announcement></announcement>
    </div>
    <div class="pa">
        <Patients></Patients>
    </div>
    <div class="acid">
        <acid></acid>
    </div>
    
    
  </div>
</template>

<style scoped>
.pa{
    position: absolute;
    top:500px;
    left:900px;
}
.acid{
    position: absolute;
    top:970px;
    left:900px;
}
.announce{
    position:absolute;
    top:500px;
    left:250px;
}
.button1{
    position:absolute;
    top:10px;
    left:900px;
}
.online{
    position:relative;
    top:465px;
    left:260px;
}
.partition{
    position:absolute;
    left:0%;
    top:10px;
    font-family:"微软雅黑";
    font-size:25px;
}
.bu{
    font-size:18px;
}
 .link-top {
     position:absolute;
    left:0px;
    top:50px;
    width: 1000px;
    height: 100px;
    border-top: solid #ACC0D8 2px;
        }
.offline{
     position:relative;
    top:1080px;
    left:240px;
}
.select{
    position: absolute;
    left:17%;
    top:18%
}
.card{
    position:absolute;
    left:-55px;
    top:50px;
}
.card1{
    position: absolute;
    left:-55px;
    top:50px
}
.search{
    position:absolute;
    left:45%;
    top:18%
}
img {
  /*设置图片宽度和浏览器宽度一致*/
  width: 100%;
  height: inherit;
}
.page{
    position: absolute;
    left:70%;
    top:100%
}
.pic{
    position:absolute;
    width:100%;
    height:auto;
    top:110px;
}
</style>

<script>
import Navigation from "@/components/Navigation.vue";
import cardList from "@/components/cardList.vue";
import myselect from "@/components/singleSelect.vue";
import mysearch from '@/components/searchingSelect.vue'
import myform from "@/components/orderForm.vue";
import myform1 from "@/components/orderFormHos.vue";
import {getDocDataFun,getDocOptionFun} from "@/service/userService.js";
import shop from '@/components/shopDrawer.vue';
import cardHos from '@/components/cardHos.vue';
import announcement from '@/components/announcement.vue';
import Patients from '@/components/patients_know.vue';
import acid from '@/components/n_acid.vue'


export default {
  name: "Home",
  components: {
    cardList,
    myselect,
    myform,
    shop,
    Navigation,
    mysearch,
    cardHos,
    myform1,
    announcement,
    Patients,
    acid
  },
  data() {
    return {
      docList: [],
      docData: [],
      options: [],
      isFormVisible:false,
       imagesBox:[
            { id:0,idView:require("@/assets/photo1.png") },
            { id:1,idView:require("@/assets/photo2.png") },
      ]
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
