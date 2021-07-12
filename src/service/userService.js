import url from '../axios/url';
import request from '../axios/request';

export function getDocDataFun(params) {
    return request.get(url.patient.getDocListData, params);
  }

export function getDocOptionFun(params) {
    return request.get(url.patient.getDocOptionData, params);
  }

export function getImg(params){
    return request.post(url.patient.getLocalImg,params);
}

export function loginPFun(params){
  return request.get(url.patient.patientLogin,params);
}

export function loginDFun(params){
  return request.get(url.patient.doctorLogin,params);
}

export function registerPFun(params){
  return request.post(url.patient.patientRegister,params);
}

export function registerDFun(params){
  return request.post(url.patient.doctorRegister,params);
}