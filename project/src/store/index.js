import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList:[
      {
      'pro_id':1,
      'pro_name': 'Dior 迪奥 花漾甜心小姐 女士淡香水',//产品名称
      'pro_purity': '50ml',//规格
      'pro_service': "不支持7天无理由退货",//售后
      'pro_num': 1,//数量
      'pro_img': 'img/1.jpg',//图片链接
      'pro_price': 498,//单价,
      'select': true ,//选中状态
      },
      {
      'pro_id':2,
      'pro_name': 'Dior 迪奥 花漾甜心小姐 女士淡香水',//产品名称
      'pro_purity': '50ml',//规格
      'pro_service': "不支持7天无理由退货",//售后
      'pro_num': 1,//数量
      'pro_img': 'img/1.jpg',//图片链接
      'pro_price': 498,//单价,
      'select': true ,//选中状态
      },
      {
      'pro_id':3,
      'pro_name': 'Dior 迪奥 花漾甜心小姐 女士淡香水',//产品名称
      'pro_purity': '50ml',//规格
      'pro_service': "不支持7天无理由退货",//售后
      'pro_num': 1,//数量
      'pro_img': 'img/1.jpg',//图片链接
      'pro_price': 498,//单价,
      'select': true ,//选中状态
      },
      {
      'pro_id':4,
      'pro_name': 'Dior 迪奥 花漾甜心小姐 女士淡香水',//产品名称
      'pro_purity': '50ml',//规格
      'pro_service': "不支持7天无理由退货",//售后
      'pro_num': 1,//数量
      'pro_img': 'img/1.jpg',//图片链接
      'pro_price': 498,//单价,
      'select': true ,//选中状态
      },
      {
      'pro_id':5,
      'pro_name': '迪奥（dior）口红CD烈艳蓝金唇膏',//产品名称
      'pro_purity': '350g',//规格
      'pro_service': "不支持7天无理由退货",//售后
      'pro_num': 1,//数量
      'pro_img': 'img/2.jpg',//图片链接
      'pro_price': 268,//单价
      'select': true //选中状态
      },
      {
      'pro_id':6,
      'pro_name': 'LANCÔME 兰蔻 嫩肌活肤精华肌底液',//产品名称
      'pro_purity': '50ml',//规格
      'pro_service': "不支持7天无理由退货",//售后
      'pro_num': 1,//数量
      'pro_img': 'img/3.jpg',//图片链接
      'pro_price': 598,//单价
      'select': true //选中状态
      }
    ],
    identity:'patient',
    inquiry:{
      patientId:'51892598',
      // doctorId:'115',
      doctorId:'137',
      patientName:'',
      doctorName:'',
      preId:'20075',
      diseaseDecided:'',
      includeDisabled:true
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
    }
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
