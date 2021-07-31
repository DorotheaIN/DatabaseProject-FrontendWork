import url from '../axios/url';
import request from '../axios/request';

export function getDocDataFun(params) {
    return request.get(url.patient.getDocListData, params);
  }

export function getDocOptionFun(params) {
    return request.get(url.patient.getDocOptionData, params);
  }
  export function getPatientInfoDataFun(params){
    return request.get(url.doctor.getPatientInfoData,params);
  }
  export function postPreDataFun(params){
    return request.post(url.doctor.postPreData,params);
  }

  export function postMedicineIncludedDataFun(params){
    return request.post(url.doctor.postMedicineIncludedData,params);
  }
  export function postReportDataFun(params){
    return request.post(url.doctor.postReportData,params);
  }
  export function getDocInfoData(params){
    return request.get(url.patient.getDocInfoData,params);
  }
  export function getDrugsIncludedListDataFun(params){
    return request.get(url.patient.getDrugsIncludedListData,params);
  }
  export function postRateDataFun(params){
    return request.post(url.patient.postRateData,params);
  }
  export function getPreDataFun(params){
    return request.get(url.patient.getPreData,params);
  }
  export function getDiseaseListDataFun(params){
    return request.get(url.patient.getDiseaseListData,params);
  }
  export function getDepartmentListDataFun(params){
    return request.get(url.patient.getDepartmentListData,params);
  }
export function getPatientInfoFun(params){
  return request.get(url.patient.getPatientInfo,params);
}
export function postAutoAddDataFun(params){
  return request.post(url.patient.postAutoAddData,params);
}
export function getDrugListDataFun(params){
  return request.get(url.patient.getDrugListData,params);
}
export function sendChatMesFun(params){
  return request.post(url.alluser.sendChatMes,params);
}
export function getChatMesFun(params){
  return request.get(url.alluser.getChatMes,params);
}

