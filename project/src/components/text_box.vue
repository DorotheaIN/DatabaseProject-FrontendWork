<template>
  <div class="talk_body">
    <div class="talk_show">
      <div class="btalk" v-for="item in text_array"><span>{{item}}</span></div>
      <div class="btalk" v-for="item in pic_array"><span>{{item}}</span></div>
    </div>
    <div class="talk_input">
      <el-input
          @keyup.enter="dealMessage"
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入"
          v-model="text">
      </el-input>
      <div class="button_show">
        <el-button type="primary" icon="el-icon-edit" circle size="small" @click="dealMessage"></el-button>
        <el-upload
            class="upload-demo"
            action="http://localhost:8080/Inquiry"
            :show-file-list="true"
            :on-success="handUpLoadSuccess"
            :on-preview="handlePreview"
            :before-upload="beforeUpload"
            :file-list="fileList"
            :auto-upload="false">
          <el-button type="primary" icon="el-icon-picture" circle size="small"></el-button>
        </el-upload>
        <!--
        <img v-if="pic.url" :src="pic.url" class="avatar">
        :data="Pic"
        :before-upload="beforeUpload"
  action: 图片上传的地址????????????????????????????????????????????????????
  show-file-list: 是否显示文件上传列表
  accept: 可接受的上传类型，image/*为图片
  headers: 头部信息
  on-success: 上传成功事件
  on-error: 上传失败事件
  before-upload: 上传前处理事件，返回一个值，值为false将阻止上传
  on-progress: 上传中事件
  -->
<!--        <el-upload-->
<!--            class="upload-demo"-->
<!--            ref="upload"-->
<!--            action="https://jsonplaceholder.typicode.com/posts/"-->
<!--            :on-preview="handlePreview"-->
<!--            :before-upload="beforeUpload"-->
<!--            :file-list="fileList"-->
<!--            :auto-upload="false">-->
<!--          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>-->
<!--          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
<!--        </el-upload>-->
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios');
export default {
name: "text_box",
  data() {
    return {

      text_array: [],
      text: '',
      pic_array: [],
      dataObj: {
        url: ''
      },
      fileList:[]
    }
  },
  methods:{
    handlePreview(file) {
      console.log(file);
    },
    dealMessage: function () {
      if(this.text!='') {
        this.text_array.push(this.text);
        this.text = '';
        console.log(this.text_array);
      }
    },
    handUpLoadSuccess:function (res,file){
      let _this=this;
      console.log(res,file);
      _this.dataObj.url=URL.createObjectURL(file.raw);
      console.log(_this.dataObj.url);
    },
    beforeUpload(file){
      console.log(file);
    }

    /*
    beforeUpload:function (file){

      let api = "http://localhost:8080/Inquiry";
      let fd = new FormData();
      fd.append('file',file);//传文件
      // fd.append('srid',this.upLoadData.srid);//传其他参数
      console.log(api);
      this.$axios.post(api,fd).then(function(res){
        console.log('成功');
      })
      return falseww
    }
    */

  }
};
</script>

<style scoped>
.talk_body {
  position: relative;
  width: 100%;
  height: 90%;
  background: #fff;
  border: 0;
  overflow: auto;
}
.talk_show {
  position: relative;
  width: 100%;
  height: 80%;
  border: 1px #CFCFCF;
  top:0;
  background: #fff;
  margin:0;
  overflow: auto;
}
.talk_input{
  position: relative;
  height: 20%;
  margin: auto;
  width:95%;
  bottom: 0;
}

.atalk {
  margin: 10px;
}

.atalk span {
  display: inline-block;
  background: #0181cc;
  border-radius: 10px;
  color: #fff;
  padding: 5px 10px;
}

.button_show{
  padding-top: 10px;
  left:20px;
  text-align: right;
  bottom:0px;
}


.btalk {
  margin: 10px;
  text-align: right;
}

.btalk span {
  display: inline-block;
  background: #87CEFA;
  border-radius: 10px;
  color: #fff;
  padding: 5px 10px;
}
/deep/.upload-demo{
  padding-left: 10px;
  padding-right: 10px;
  width: 50px;
  display: inline;
}
</style>
