<template>
  <div>
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
export default {
  name: "Inquiry",
  components:{
    inquiry_title,
    text_box,
    inquiry_record,
    tabs
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
.text{
  position: absolute;
  padding-left: 3%;
  top:0;
  left: 0;
  bottom: 0;
  width: 67%;
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
