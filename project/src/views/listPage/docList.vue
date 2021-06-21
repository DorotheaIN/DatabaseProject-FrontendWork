<template>
  <div class="docList">
    <div>
        <myselect :selectedOptions="options" :selectedData="docList" @selectData="changeData">
        </myselect>
    </div>
    <div>
        <cardList :dataList="docData">
        </cardList>
    </div>
    
  </div>
</template>

<script>
import cardList from '@/components/cardList.vue'
import myselect from '@/components/singleSelect.vue'
export default {
    name:'DocList',
    components:{
        cardList,
        myselect
        },
    data(){
         return {
             docList:[],
             docData:[],
             options:[],
             }
    },
    created(){
        this.getDataList();
        this.getOptions();
    },
    methods:{
        getDataList(){
            this.$http.get("/data/userList.josn")
            .then((res) => {
                this.docList = res.data;
                this.docData = res.data;
            })
            .catch((err) => {
                console.log(err);
                });
        },
        getOptions(){
            this.$http.get("/data/selectOption.josn")
            .then((res) => {
                this.options = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        changeData(newdata){
            this.docData = newdata
        }
    },
}
</script>
