<template>
  <div>
    <el-row>
      <el-col
        :span="4"
        v-for="item in dataList.slice((currentPage - 1) * pagesize,currentPage * pagesize)"
        :key="item.id"
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
            <span>{{ item.info.name }}</span>
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
    <infoDialog :dialogVisible="isDialogVisible" @dialogClick="changeDialog" :dialogData="diaData"></infoDialog>
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
          :total="dataList.length"
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
import infoDialog from "./dialog.vue";

export default {
  name: "cardList",
  data() {
    return {
      url: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
      currentPage: 1,
      pagesize: 8,
      isDialogVisible:false,
      diaData:{},
    };
  },
  props:{
    dataList:{
      type:Array,
      default:function(){
        return []
      }
    }
  },
  components: {
    infoDialog,
  },
  methods: {
    handleSizeChange(page_size) {
      this.pagesize = page_size;
    },
    handleCurrentChange(current_page) {
      this.currentPage = current_page;
    },
    showDialog(){
      this.isDialogVisible = true;
    },
    changeDialog(mes){
      if (mes === false)  this.isDialogVisible = false;
      else this.isDialogVisible = true;
    },
    getDetail(item) {
      this.diaData = item.info
    },
  },
  watch: {
    dataList: function () {
      this.$nextTick(function () {
        this.currentPage = 1;
      });
    },
  },
};
</script>

