<template>
  <div>
    <div class="navigation">
      <div >
        <img src="https://ui-avatars.com/api/?size=42&rounded=true&background=0D8ABC&color=fff&李华=蓝卡">
      </div>
      <inquiry_navigation></inquiry_navigation>
    </div>
    <div class="text">
      <inquiry_title></inquiry_title>
      <text_box></text_box>
    </div>
    <div class="record">
      <div class="tab_pos">
        <tabs></tabs>
      </div>
    </div>
  </div>


</template>

<script>
import text_box from "../components/text_box";
import inquiry_record from "../components/medicalrecord_form";
import tabs from "../components/tabs";
import inquiry_title from "../components/inquiry_title";
import inquiry_navigation from "../components/inquiry_navigation";
export default {
  name: "Inquiry",
  components:{
    inquiry_title,
    text_box,
    inquiry_record,
    tabs,
    inquiry_navigation
  },
  data(){
    return{
      text:'',
      textarea2:''
    }

  }
}
</script>
<style scoped>
.navigation{
  width:5%;
  height:100%;
}
.text{
  position: absolute;
  top:0;
  left: 5%;
  bottom: 0;
  width: 65%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
  overflow: hidden
}

.record{
  position: absolute;
  padding: 0;
  margin: 0;
  top:0;
  right:0;
  bottom: 0;
  width: 30%;
  border: 0;
  overflow: hidden
}
.tab_pos{
  position: relative;
  margin: auto;
  top:15px;
  left:20px;
  overflow: hidden

}

</style>
