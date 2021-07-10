<template>
    <div >
        <div style="cursor:pointer;">
        <img src="../assets/acid.jpg" width=480px height=290px   @click='showForm'>
        </div>
          <myform  :isVisible="isFormVisible" @formSubmit='submitForm' @formClose='closeForm' ></myform>
    </div>
</template>

<script>
import myform from "@/components/acid_form.vue";
export default {
    name:"n_acid",
    components:{
        myform,
    },
    data(){
        return{
            isFormVisible:false,
        }
    },
    methods:{
            showForm(mes){
      this.isFormVisible = true
      this.$refs.listItem.recordLocation(mes)
    },
    closeForm(){
      this.isFormVisible = false
    },
    submitForm(mes){
      mes.docId = this.$refs.listItem.lastCardInfo._id
      mes.docName = this.$refs.listItem.lastCardInfo._name
      console.log(mes);
    },
    },
}
</script>

<style scoped>

</style>