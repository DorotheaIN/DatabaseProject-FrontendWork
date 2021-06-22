<template>
  <div class="docList">
    <div>
      <myselect
        :selectedOptions="options"
        :selectedData="docList"
        @selectData="changeData"
      >
      </myselect>
    </div>
    <div>
      <cardList :dataList="docData"> </cardList>
    </div>
  </div>
</template>

<script>
import cardList from "@/components/cardList.vue";
//import myselect from "@/components/singleSelect.vue";
import myselect from '@/components/searchSelect.vue'
export default {
  name: "DocList",
  components: {
    cardList,
    myselect,
  },
  data() {
    return {
      docList: [],
      docData: [],
      options: [],
      //optionList:[],
    };
  },
  created() {
    this.getDataList();
    this.getOptions();
  },
//   beforeUpdate(){//因为涉及$所以不能在created中 mounted也不行...
//     this.formOptions();
//     console.log("刷新");
//   },
  methods: {
    getDataList() {
      this.$http
        .get("/data/userList.josn")
        .then((res) => {
          this.docList = res.data;
          this.docData = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getOptions() {
      this.$http
        .get("/data/selectOption.josn")
        .then((res) => {
          //this.options = res.data;
          this.options = res.data.map((item) => {
          return { value: `${item}`, label: `${item}` };
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // formOptions() {
    //   this.optionList = this.options.map((item) => {
    //       return { value: `${item}`, label: `${item}` };
    //       });
    // },
    changeData(newdata) {
      this.docData = newdata;
    },
  },
};
</script>
