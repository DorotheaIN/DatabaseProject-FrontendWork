<template>
  <div>
    <div>
      <el-select
        v-model="selectedValue"
        placeholder="请选择科室"
        @change="filterData(selectedValue)"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <el-row>
      <el-col
        :span="4"
        v-for="item in docData.slice((currentPage - 1) * pagesize,currentPage * pagesize)"
        :key="item.docId"
        :offset="1"
      >
        <div>
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <div class="image-zone">
              <el-avatar
                :size="100"
                :src="url"
                shape="circle"
                fit="contain"
              ></el-avatar>
            </div>
            <span>{{ item.docInfo.docName }}</span>
            <div class="botton-zone">
              <el-button-group>
                <el-button type="primary" class="button">预约</el-button>
                <el-button type="primary" class="button" @click="showDialog(),getDetail(item)">详细</el-button>
              </el-button-group>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <doc-info-dialog :dialogVisible="isDialogVisible" @dialogClick="changeDialog" :dialogData="diaData"></doc-info-dialog>
    <div style="margin-left: 35%">
      <div class="block">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[8, 12, 16]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next,jumper"
          :total="docData.length"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 5;
  float: left;
}

.docImage {
  float: left;
  width: 50px;
  height: 50px;
  padding: 5px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>

<script>
import docInfoDialog from "./dialog.vue";

export default {
  name: "docList",
  data() {
    return {
      url: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
      dataList: [],
      docData: [],
      currentPage: 1,
      pagesize: 8,
      isShow: false,
      options: [],
      selectedValue: "全部",
      isDialogVisible:false,
      diaData:{},
    };
  },
  components: {
    docInfoDialog,
  },
  created() {
    this.handleDataList();
    this.initSelect();
  },
  methods: {
    handleSizeChange(page_size) {
      this.pagesize = page_size;
    },
    handleCurrentChange(current_page) {
      this.currentPage = current_page;
    },
    handleDataList() {
      this.$http
        .get("/data/userList.josn")
        .then((res) => {
          this.dataList = res.data;
          this.docData = res.data;
          //this.$set(this.$data, "dataList", response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    initSelect() {
      this.$http
        .get("/data/selectOption.josn")
        .then((res) => {
          this.options = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    filterData(this_label) {
      this.currentPage = 1
      if (this_label === "全部") this.docData = this.dataList;
      else
        this.docData = this.dataList.filter((item) => {
          return item.docInfo.docProfession === this_label;
        });
    },
    showDialog(){
      this.isDialogVisible = true;
    },
    changeDialog(mes){
      if (mes === false)  this.isDialogVisible = false;
      else this.isDialogVisible = true;
    },
    getDetail(item) {
      this.diaData = item.docInfo
    },
  },
  watch: {
    dataList: function () {
      //一个监听 对应的div应该加v-if
      this.$nextTick(function () {
        this.isShow = true;
      });
    },
  },
};
</script>

