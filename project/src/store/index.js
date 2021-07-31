import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    identity:'patient',
    inquiry:{

      patientId:'89286462',
      // doctorId:'157',
      doctorId:'137',
      patientName:'步开诚',
      doctorName:'束雯华',
      preId:'20075',
      diseaseDecided:'',
      includeDisabled:true,
      chatroomId:-1,
    }
  },
  mutations: {
    increment(state,id){
      for(let i of state.productList){
        if(i.pro_id === id) {
          i.pro_num++;
          break;
        }
      }
    },
    subtract(state,id){
      for(let i of state.productList){
        if(i.pro_id === id) {
          i.pro_num--;
          break;
        }
      }
    },
    clear(state,newList){
      state.productList = newList
    },
    editDiseaseDecided(state,disease){
      state.inquiry.diseaseDecided=disease
    },
    editInquiryPreId(state,preId){
      state.inquiry.preId=preId;
    },
    editInquiryPatientName(state,name){
      state.inquiry.patientName=name;
    },
    editInquiryDocName(state,name){
      state.inquiry.doctorName=name;
    },
    editInquiryIncludeDisabled(state,disabled){
      state.inquiry.includeDisabled=disabled;
    },
    editChatRoomId(state,id){
      state.inquiry.chatroomId=id;
    },
  },
  getters:{
    totalPrice(state){
      let price = 0;
      for (let i of state.productList) {
        if(i.select === true)
        price += i.pro_num * i.pro_price;
      }
      return price.toFixed(2);
    }
  },
  // actions: {
  // },
  // modules: {
  // }
})
