<template>
    <div>
        <Navigation></Navigation>
        <div class="pic">
            <el-carousel :interval="4000"  height="350px" indicator-position="outside">
            <el-carousel-item v-for="item in imagesBox" :key="item.id">
            <img :src="item.idView" class="image">
            </el-carousel-item>
            </el-carousel>
        </div>
        <div class="online">
            <div class="partition">在线问诊</div>
            <div class="button"> <el-button type="text">查看更多</el-button></div>
            <div class="link-top"></div>
            <div class="card1">
                <doc_card></doc_card>
            </div>
            <div class="card2">
                <doc_card></doc_card>
            </div>
            <div class="card3">
                <doc_card></doc_card>
            </div>
            <div class="card4">
                <doc_card></doc_card>
            </div>
        </div>
         <div class="offline">
            <div class="partition">线下预约</div>
            <div class="button"> <el-button type="text">查看更多</el-button></div>
            <div class="link-top"></div>
            <div class="card1">
                <hos_card></hos_card>
            </div>
            <div class="card2">
                 <hos_card></hos_card>
            </div>
            <div class="card3">
                 <hos_card></hos_card>
            </div>
            <div class="card4">
                 <hos_card></hos_card>
            </div>
        </div>
         
        <div class="foot">
            <el-footer>2021-6-9 版权所有</el-footer>
        </div>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import doc_card from '../components/doc_card.vue'
import hos_card from '../components/hos_card.vue'
export default {
    name:"Home",
    components:{
      Navigation,
      doc_card,
      hos_card
  },
    data(){
        return {
            imagesBox:[
            { id:0,idView:require("../assets/photo1.png") },
            { id:1,idView:require("../assets/photo2.png") },
      ]
    };
  },

 
};
</script>
    

<style scoped>
.online{
    position:relative;
    top:465px;
    left:260px;

}
.offline{
     position:relative;
    top:880px;
    left:260px;
}
.button{
    position:absolute;
    top:10px;
    left:900px;
}
/deep/.el-button{
    font-size:18px;
}
.partition{
    position:absolute;
    left:0px;
    top:10px;
    font-family:"微软雅黑";
    font-size:25px;
}

 .link-top {
     position:absolute;
    left:0px;
    top:50px;
    width: 1000px;
    height: 100px;
    border-top: solid #ACC0D8 2px;
        }


.el-footer {
    background-color:#c2d1f0;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

img {
  /*设置图片宽度和浏览器宽度一致*/
  width: 100%;
  height: inherit;
}

.pic{
    position:absolute;
    width:100%;
    top:110px;
}

.card1{
    position:absolute;
    left:0px;
    top:70px;
}
.card2{
    position:absolute;
    left:263px;
    top:70px;
}
.card3{
    position:absolute;
    left:526px;
    top:70px;
}
.card4{
    position:absolute;
    left:789px;
    top:70px;
}
.foot{
    position:absolute;
    left:0px;
    top:1400px;
    width:100%;
}

</style>