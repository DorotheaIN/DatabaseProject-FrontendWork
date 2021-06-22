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
            action="uploadPics"
            :show-file-list="false"
            :on-success="dealPicture"
            :file-list="fileList">
          <img v-if="pic.url" :src="pic.url" class="avatar">
          <el-button type="primary" icon="el-icon-picture" circle size="small"></el-button>
        </el-upload>
        <!--
  action: 图片上传的地址
  show-file-list: 是否显示文件上传列表
  accept: 可接受的上传类型，image/*为图片
  headers: 头部信息
  on-success: 上传成功事件
  on-error: 上传失败事件
  before-upload: 上传前处理事件，返回一个值，值为false将阻止上传
  on-progress: 上传中事件
  -->
        <el-button type="primary" icon="el-icon-folder" circle size="small"></el-button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
name: "text_box",
  data() {
    return {
      text_array: [],
      text: '',
      pic_array:[],
      pic:{
        name:'',
        url:''
      },
      fileList: [{name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    }
  },
  methods:{
    dealMessage: function () {
      if(this.text!='') {
        this.text_array.push(this.text);
        this.text = '';
      }
    },
    dealPicture:function (pic){
    }
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
