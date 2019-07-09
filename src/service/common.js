/**
 * @description 设置cookie
 * @param 键名｜值 
 **/
export const setCookie = (name, value) => {
    let exp = new Date(); 
    exp.setTime(exp.getTime() + 30*24*60*60*1000); 
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
};

/**
 * @description 获取cookie
 * @param 键名
 * @returns cookie
 **/
export const getCookie = (name) => {
    let arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)){
        return unescape(arr[2]); 
    }
    else{
        return null; 
    }   
};

/**
 * @description 删除cookie
 * @param 键名
 **/
export const delCookie = (name) => {
    let exp = new Date(); 
    exp.setTime(exp.getTime() - 1); 
    let cval = getCookie(name); 
    if(cval != null){
        document.cookie = name + "="+cval+";expires="+exp.toGMTString(); 
    } 
};

/**
 * @description 格式化日期
 * @param 值
 * @returns 新日期
 **/
export const formatDate = (value) => {
    let d = new Date(input);
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
    let hour = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    return  year+ '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
};

/**
 * @description 格式化时间
 * @param 值
 * @returns 新时间
 **/
export const formatTime = (value) => {
    let result = '';
    let n = new Date(value).getTime();
    let now = new Date().getTime();
    let d = now - n;
    let monthC = d / 1000 * 60 * 60 * 24 * 30;
    let weekC = d / (7 * 1000 * 60 * 60 * 24);
    let dayC = d / 1000 * 60 * 60 * 24;
    let hourC = d / 1000 * 60 * 60;
    let minC = d / 1000 * 60;

    if (monthC >= 1) {
        result = '大约' + parseInt(monthC) + "个月前上线";
    }else if (weekC >= 1) {
        result = '大约' + parseInt(weekC) + "周 前上线";
    }else if (dayC >= 1) {
        result = '大约' + parseInt(dayC) + "天 前上线";
    }else if (hourC >= 1) {
        result = '大约' + parseInt(hourC) + "个小时 前上线";
    }else if (minC >= 1) {
        result = parseInt(minC) + "分钟 前上线";
    }else{
        result = "不到一分钟 前上线";
    }
    return result;
};


/**
 * @description 倒计时
 * @param dom,秒数，状态，原始文字，修改后文字，类型
 * @returns 状态
 **/
let setTimer = null;
export const getPhoneCode = (o, time, status, text, retext, type) => {
    if(type != undefined && type == 'off'){
        clearTimeout(setTimer)
    }
    
    if(time == 0) {
        o.innerHTML = text;
        o.classList.remove('loading');
        time = 60;
        status = true;
    } else {
        status = false;
        o.classList.add('loading');
        o.innerHTML = retext + '(' + time + 's)';
        time--;
        setTimer = setTimeout(() => {
            getPhoneCode(o,time,status,text,retext)
        }, 1000);
    }
    return status;
};


export const islogin = () =>{
    let status = false;
    let token = getCookie('Abp.AuthToken');
    if(token != null){
        status = true;
    }
    return status;
};
export const loadHtml = () => {
    let html = ''+ 
        '<div class="el-loading-item">'+
            '<div class="el-loading-mask" style="background:rgba(0,0,0,0.2);"><div class="el-loading-spinner"><svg viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg></div></div>'+
        '</div>';
    return html;
};

export const numberIntercept = (value, args) => {
    if(value !== null){
        if(args !== undefined){
            if(value.length > args){
                let divisible = ((value.length - args) % 2 === 0) ? true : false;
                let result = (value.length - args) / 2;
                if(divisible){
                    value = value.substr(0,result) + '***' + value.substr(value.length - result);
                }else{
                    value = value.substr(0, parseInt(result)) + '***' + value.substr(value.length - parseInt(result) - 1);
                }
            }
        }else{
            if(value.length > 13){
                value = value.substr(0,5) + '***' + value.substr(value.length - 5);
            }else if(value.length === 11){
                value = value.substr(0,3) + '****' + value.substr(value.length - 4);
                /**手机号码处理**/
            }
        }
    }
    return value;
}