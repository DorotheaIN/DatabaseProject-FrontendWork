<template>
    <div>
        <!-- <div v-for="info in infoList.slice((currentPage - 1) * pagesize,currentPage * pagesize)"
        :key="info.disease_name" class="inf">
            <el-divider></el-divider>
             <p>{{info.disease_name}}</p>
             <p>{{info.pathogeny}}</p>
             <p>{{info.symptoms}}</p>
             <p>{{info.complication}}</p>
             <p>{{info.medication}}</p>
        </div> -->
        <div class="total" v-for="info in infoList.slice((currentPage - 1) * pagesize,currentPage * pagesize)"
        :key="info.disease_name">
        
            <div class="back">
                <el-divider content-position="left"><span style="background-color:#eaf4fc;">{{info.disease_name}}?</span></el-divider>
                 <ul style="text-align:left">
                    <li>{{info.pathogeny}}</li>
                    <li>{{info.symptoms}}</li>
                    <li>{{info.complication}}</li>
                </ul>
            </div>
            <div class="rback">
               <p style="background-color:#eaf4fc ">推荐药品:</p>
               <img src="../assets/m.jpg" class="image">

            </div>
            
        </div>
        <div class="block">
            <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[4, 8, 12]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next,jumper"
            :total="infoList.length"
            >
            </el-pagination>
      </div>
    </div>
</template>

<style scoped>
.image{
    width:70%;
    height:100%;
}
.inf{
    position: relative;
    left:12%;
    top:50%
}
.el-divider{
    background-color:#0059b3;
}
.el-divider__text{
    padding:0;
    font-size: 30px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.total{
    position: relative;
    left:16%;
    width:70%;
    height:auto;
}

.back{
    position: relative;
    left:1%;
    /* bottom:50%; */
    width:67%;
    height:auto;
    /* background-color: beige; */
    background-color:#eaf4fc;
    padding:5px;
    margin:6px;

}
.rback{
    position: absolute;
    left:70%;
    top:0;
    width:25%;
    height:auto;
    background-color: #eaf4fc;
    padding:5px;
    margin:0px;

}
</style>

<script>
export default {
    name:"disease",
    data(){
        return{
            infoList:[
                {
                    'disease_name':'头疼',
                    'pathogeny':'着凉',
                    'symptoms':'头疼1',
                    'complication':'123',
                    'medication':'感冒灵',

                },
                {
                    'disease_name':'头疼',
                    'pathogeny':'着凉',
                    'symptoms':'头疼1',
                    'complication':'123',
                    'medication':'感冒灵',

                },
                {
                    'disease_name':'头疼',
                    'pathogeny':'着凉',
                    'symptoms':'头疼1',
                    'complication':'123',
                    'medication':'感冒灵',

                },
            ],
            currentPage: 1,
            pagesize: 4,
        }
    },
    methods:{
        handleSizeChange(page_size) {
      this.pagesize = page_size;
    },
    
    handleCurrentChange(current_page) {
      this.currentPage = current_page;
    },
    
    },
    watch: {
    dataList: function () {
      this.$nextTick(function () {
        this.currentPage = 1;
      });
    },
  },
}
</script>