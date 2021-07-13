<template>
  <div class="talk_body">
    <div class="talk_show">
      <div :class="[(item.senderId==userId)?'btalk':'atalk']" v-for="item in text_array"><span>{{item.content}}</span></div>
    </div>
    <div class="talk_input">
      <el-input
          @keyup.enter="dealMessage"
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入"
          v-model="text.content">
      </el-input>
      <div class="button_show">
        <el-button type="primary" icon="el-icon-edit" circle size="small" @click="dealMessage"></el-button>
        <el-upload
            class="upload-demo"
            action="/api/Patient/getImg"
            :show-file-list="false"
            :on-success="handUpLoadSuccess"
            :on-preview="handlePreview"
            :before-upload="beforeUpload"
            :file-list="fileList"
            :auto-upload="true">
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
      </div>
    </div>
  </div>
</template>

<script>
import {getPatientInfoDataFun} from "../service/userService";

const axios = require('axios');
export default {
name: "text_box",
  data() {
    return {
      // my_text_array: [],
      // my_text: '',
      // my_pic_array: [],
      userId:'12345',
      text_array:[{content:'hello',senderId:'34455'}],
      text:{
        content:'',
        senderId:''
      },
      opposite_text_array: ["hello"],
      opposite_pic_array: [],
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
      let _this=this;
      if(_this.text.content!='') {
        _this.text_array.push({content:_this.text.content,senderId:_this.userId});
        _this.text.content = '';
        _this.text.senderId='';
        console.log(_this.text_array);
      }
    },
    handUpLoadSuccess:function (res,file,fileList){
      let _this=this;
      console.log(res,file);
      _this.dataObj.url=res.url;
      console.log(_this.dataObj.url);
    },
    beforeUpload(file){
      console.log(file);
    },
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
  height: 84%;
  border: 1px #CFCFCF;
  top:0;
  background: #fff;
  margin:0;
  overflow: auto;
}
.talk_input{
  position: relative;
  height: 14%;
  margin: auto;
  width:95%;
  bottom: 0;
}

.atalk {
  margin: 10px;
  margin-left: 30px;
}

.atalk span {
  display: inline-block;
  background: #0181cc;
  border-radius: 10px;
  color: #fff;
  padding: 5px 10px;
}

.button_show{
  height: 40px;
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
