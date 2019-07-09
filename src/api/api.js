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


// UserAssetDrawingApply 提现申请
export const getDrawingApplyList = (...params) => {
    let input = '';
    let paramsNameList = ['InviteCode','PhoneNumber','Status','DrawingFromDate','DrawingToDate','MaxResultCount','SkipCount'];
    paramsNameList.forEach((item, index) => {
        if(params[index] !== undefined){
            input += item + '=' + encodeURIComponent((typeof(params[index]) == 'object') ? moment(params[index].format('YYYY-MM-DD')).toJSON() : params[index]) + '&';
        }
    });    
    return Vue.http.get(API+'/api/services/app/UserAssetDrawingApply/GetDrawingApplyList?'+input).then(res => res.data); 
};
export const getDrawingApplyListToExcel = (...params) => {
    let input = '';
    let paramsNameList = ['InviteCode','PhoneNumber','Status','DrawingFromDate','DrawingToDate','MaxResultCount','SkipCount'];
    paramsNameList.forEach((item, index) => {
        if(params[index] !== undefined){
            input += item + '=' + encodeURIComponent((typeof(params[index]) == 'object') ? moment(params[index].format('YYYY-MM-DD')).toJSON() : params[index]) + '&';
        }
    });    
    return Vue.http.get(API+'/api/services/app/UserAssetDrawingApply/GetDrawingApplyListToExcel?'+input).then(res => res.data); 
};
export const drawingApplyUpdateStatus = params => { return Vue.http.put(API+'/api/services/app/UserAssetDrawingApply/UpdateStatus', params).then(res => res.data);};


// DropDownData 公共接口
export const getSalesPlan = () => {return Vue.http.get(API+'/api/services/app/DropDownData/GetSalesPlan').then(res => res.data); };
export const getCouponPlanType = () => {return Vue.http.get(API+'/api/services/app/DropDownData/GetCouponPlanType').then(res => res.data); };
export const getCommonStatus = () => {return Vue.http.get(API+'/api/services/app/DropDownData/GetCommonStatus').then(res => res.data); };
export const getCouponPlanScopeType = () => {return Vue.http.get(API+'/api/services/app/DropDownData/GetCouponPlanScopeType').then(res => res.data); };
export const getSalePlanType = () => {return Vue.http.get(API+'/api/services/app/DropDownData/GetSalePlanType').then(res => res.data); };
export const getUserGrade = () => {return Vue.http.get(API+'/api/services/app/DropDownData/GetUserGrade').then(res => res.data); };
export const getAgentGrade = () => {return Vue.http.get(API+'/api/services/app/DropDownData/GetAgentGrade').then(res => res.data); };
export const getCommissionType = () => {return Vue.http.get(API+'/api/services/app/DropDownData/GetCommissionType').then(res => res.data); };
export const getOilCardOrderApplyStatus = () => {return Vue.http.get(API+'/api/services/app/DropDownData/GetOilCardOrderApplyStatus').then(res => res.data); };
export const getOilCardType = () => {return Vue.http.get(API+'/api/services/app/DropDownData/GetOilCardType').then(res => res.data); };
export const getOilCardLoadStatus = () => {return Vue.http.get(API+'/api/services/app/DropDownData/GetOilCardLoadStatus').then(res => res.data); };
export const getDrawingStatus = () => {return Vue.http.get(API+'/api/services/app/DropDownData/GetDrawingStatus').then(res => res.data); };
export const getUserCouponStatus = () => {return Vue.http.get(API+'/api/services/app/DropDownData/GetUserCouponStatus').then(res => res.data); };
export const getGiftPackagePlan = () => {return Vue.http.get(API+'/api/services/app/DropDownData/GetGiftPackagePlan').then(res => res.data); };
export const getPointReleasesChargeType = () => {return Vue.http.get(API+'/api/services/app/DropDownData/GetPointReleasesChargeType').then(res => res.data); };
export const getTransationType = () => {return Vue.http.get(API+'/api/services/app/DropDownData/GetTransationType').then(res => res.data); };
export const getCommisionTransationType = () => {return Vue.http.get(API+'/api/services/app/DropDownData/GetCommisionTransationType').then(res => res.data); };
export const getChargeType = () => {return Vue.http.get(API+'/api/services/app/DropDownData/GetChargeType').then(res => res.data); };
export const getOrderType = () => {return Vue.http.get(API+'/api/services/app/DropDownData/GetOrderType').then(res => res.data); };

export const loadHtml = () => {
    let html = ''+ 
        '<div class="el-loading-item">'+
            '<div class="el-loading-mask" style="background:rgba(0,0,0,0.2);"><div class="el-loading-spinner"><svg viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg></div></div>'+
        '</div>';
    return html;
};

export default API;