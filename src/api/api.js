import Vue from 'vue';
import * as moment from 'moment';
import VueResource from 'vue-resource';
Vue.use(VueResource);
let API = 'http://192.168.2.110';

// downloadTempFile 导出xls
export const downloadTempFile = params => {
    const url = API + '/File/DownloadTempFile?fileType=' + params.fileType + '&fileToken=' + params.fileToken + '&fileName=' + params.fileName;
    window.location.href = url; 
}

export const getChargeList = (...params) => {
    let input = '';
    let paramsNameList = ['InviteCode','PhoneNumber','NickName','UserGradeId','AgentGradeId','PayMethod','ChargeType','Status','OilCardTypeId','PayFromDate','PayToDate','MaxResultCount','SkipCount'];
    paramsNameList.forEach((item, index) => {
        if(params[index] != undefined){
            input += item + '=' + encodeURIComponent((typeof(params[index]) == 'object') ? moment(params[index].format('YYYY-MM-DD')).toJSON() : params[index]) + '&';
        }
    });    
    return Vue.http.get(API+'/api/services/app/UserCharge/GetChargeList?'+input).then(res => res.data);
};
export const getChargeListToExcel = (...params) => {
    let input = '';
    let paramsNameList = ['InviteCode','PhoneNumber','NickName','UserGradeId','AgentGradeId','PayMethod','ChargeType','Status','OilCardTypeId','PayFromDate','PayToDate','MaxResultCount','SkipCount'];
    paramsNameList.forEach((item, index) => {
        if(params[index] != undefined){
            input += item + '=' + encodeURIComponent((typeof(params[index]) == 'object') ? moment(params[index].format('YYYY-MM-DD')).toJSON() : params[index]) + '&';
        }
    });    
    return Vue.http.get(API+'/api/services/app/UserCharge/GetChargeListToExcel?'+input).then(res => res.data);
};
export const getUserRechargeToExcel = (...params) => {
    let input = '';
    let paramsNameList = ['InviteCode','PhoneNumber','NickName','UserGradeId','AgentGradeId','PayMethod','ChargeType','Status','OilCardTypeId','PayFromDate','PayToDate','MaxResultCount','SkipCount'];
    paramsNameList.forEach((item, index) => {
        if(params[index] != undefined){
            input += item + '=' + encodeURIComponent((typeof(params[index]) == 'object') ? moment(params[index].format('YYYY-MM-DD')).toJSON() : params[index]) + '&';
        }
    });    
    return Vue.http.get(API+'/api/services/app/UserCharge/GetUserRechargeToExcel?'+input).then(res => res.data);
};
export const userChargeInit = (...params) => {
    let input = '';
    let paramsNameList = ['InviteCode','PhoneNumber','NickName','UserGradeId','AgentGradeId','PayMethod','ChargeType','Status','OilCardTypeId','PayFromDate','PayToDate','MaxResultCount','SkipCount'];
    paramsNameList.forEach((item, index) => {
        if(params[index] != undefined){
            input += item + '=' + encodeURIComponent((typeof(params[index]) == 'object') ? moment(params[index].format('YYYY-MM-DD')).toJSON() : params[index]) + '&';
        }
    });    
    return Vue.http.post(API+'/api/services/app/UserCharge/Init').then(res => res.data);
};


export default API;