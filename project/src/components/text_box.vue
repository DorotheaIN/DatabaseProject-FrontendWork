<template>
  <div class="talk_body">
    <div class="talk_show">
      <div class="btalk" v-for="item in text_array"><span>{{item}}</span></div>
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
        <el-button type="primary" icon="el-icon-picture" circle size="small"></el-button>
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
      text: ''
    }
  },
  methods:{
    dealMessage: function () {
      this.text_array.push(this.text);
      this.text = '';
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
</style>
