<template>
  <div>
    <div class="navigation">
      <div class="image">
        <img :src="`https://ui-avatars.com/api/?size=60&length=1&bold=true&background=409EFF&color=ffffff&rounded=true&name=${user.name}`"weight=44px height=44px>
      </div>
      <inquiry_navigation_doc></inquiry_navigation_doc>
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
import text_box from "@/components/text_box";
import inquiry_record from "@/components/medicalrecord_form";
import tabs from "@/components/tabs";
import inquiry_title from "@/components/inquiry_title";
import inquiry_navigation_doc from "@/components/inquiry_navigation_doc";
export default {
  name: "Inquiry",
  components:{
    inquiry_title,
    text_box,
    inquiry_record,
    tabs,
    inquiry_navigation_doc
  },
  data(){
    return{
      user:{
        name:'医生1'
      },
      text:'',
      textarea2:''
    }

  }
}
</script>
<style scoped>

.navigation{
  position: absolute;
  top:10px;
  width:64px;
}
.image{
  padding-top: 15px;
  padding-left: 10px;
}
.text{
  position: absolute;
  top:0;
  left: 64px;
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
