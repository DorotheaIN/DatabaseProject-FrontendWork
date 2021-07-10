import url from '../axios/url';
import request from '../axios/request';

export function getDocDataFun(params) {
    return request.get(url.patient.getDocListData, params);
  }

export function getDocOptionFun(params) {
    return request.get(url.patient.getDocOptionData, params);
  }
