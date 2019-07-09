<template>
    <div class="search-item">
        <el-form @keyup.enter.native="submitSearch()" ref="form">
            <el-row :gutter="20">
                <el-col :span="4">
                    <span class="label">用户ID</span>
                    <el-input v-model="InviteCode" size="small" placeholder="请输入用户ID"></el-input>
                </el-col>
                <el-col :span="4">
                    <span class="label">用户昵称</span>
                    <el-input v-model="NickName" size="small" placeholder="请输入用户昵称"></el-input>
                </el-col>
                <el-col :span="4">
                    <span class="label">用户手机</span>
                    <el-input v-model="PhoneNumber" size="small" placeholder="请输入用户手机"></el-input>
                </el-col>
                <el-col :span="4">
                    <span class="label">会员等级</span>
                    <el-select v-model="UserGradeId" size="small" placeholder="全部">
                        <el-option label="全部" value=""></el-option>
                        <el-option
                            v-for="item in userGradeList"
                            :key="item.id"
                            :label="item.value"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="4">
                    <span class="label">合伙人等级</span>
                    <el-select v-model="AgentGradeId" size="small" placeholder="全部">
                        <el-option label="全部" value=""></el-option>
                        <el-option
                            v-for="item in agentGradeList"
                            :key="item.id"
                            :label="item.value"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="4">
                    <span class="label">支付方式</span>
                    <el-select v-model="PayMethod" size="small" placeholder="全部">
                        <el-option label="全部" value=""></el-option>
                        <el-option
                            v-for="item in payMethodList"
                            :key="item.id"
                            :label="item.value"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4">
                    <span class="label">充值类型</span>
                    <el-select v-model="ChargeType" size="small" placeholder="全部">
                        <el-option label="全部" value=""></el-option>
                        <el-option
                            v-for="item in chargeTypeList"
                            :key="item.id"
                            :label="item.value"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="4">
                    <span class="label">充值状态</span>
                    <el-select v-model="Status" size="small" placeholder="全部">
                        <el-option label="全部" value=""></el-option>
                        <el-option
                            v-for="item in chargeStatusList"
                            :key="item.id"
                            :label="item.value"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="4">
                    <span class="label">油卡类型</span>
                    <el-select v-model="OilCardTypeId" size="small" placeholder="全部">
                        <el-option label="全部" value=""></el-option>
                        <el-option
                            v-for="item in oilCardTypeList"
                            :key="item.id"
                            :label="item.value"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="7">
                    <el-row :gutter="20">
                        <el-col :span="12">
                            <span class="label">交费时间</span>
                            <el-date-picker
                                v-model="PayFromDate"
                                type="date"
                                size="small"
                                placeholder="选择日期">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="12">
                            <span class="label">至</span>
                            <el-date-picker
                                v-model="PayToDate"
                                type="date"
                                size="small"
                                placeholder="选择日期">
                            </el-date-picker>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="5" style="padding-top:35px">
                    <el-button type="primary" size="small" @click="submitSearch">查询</el-button>
                    <el-button plain type="info" size="small" :loading="isExcel" @click="exportToExcel(1)"><i v-show="!isExcel" class="el-icon-document el-icon--right"></i> 导出到Excel</el-button>
                    <el-button plain type="info" size="small" :loading="isExcelTwo" @click="exportToExcel(2)"><i v-show="!isExcelTwo" class="el-icon-download el-icon--right"></i> 下载充值记录</el-button>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>
import * as moment from 'moment';
import API, { userChargeInit, getChargeListToExcel, getUserRechargeToExcel ,downloadTempFile } from '@/api/api';

export default{
    data(){
        return{
            InviteCode: '',
            NickName: '',
            PhoneNumber: '',
            UserGradeId: '',
            AgentGradeId: '',
            PayMethod: '',
            ChargeType: '',
            Status: '',
            OilCardTypeId: '',
            PayFromDate: '',
            PayToDate: '',
            agentGradeList: [],
            userGradeList: [],
            chargeStatusList: [],
            chargeTypeList: [],
            oilCardTypeList: [],
            payMethodList: [],
            searchParameter: {},
            excelData: [],
            isExcel: false,
            isExcelTwo: false
        }
    },
    mounted(){
        this.getuserChargeInit();
    },
    methods: {
        getuserChargeInit(){
            userChargeInit().then(data => {
                this.agentGradeList = data.result.agentGrade;
                this.userGradeList = data.result.userGrade;
                this.chargeStatusList = data.result.chargeStatus;
                this.chargeTypeList = data.result.chargeType;
                this.oilCardTypeList = data.result.oilCardType;
                this.payMethodList = data.result.payMethod;
            });
        },

        submitSearch(){
            this.searchParameter.InviteCode = this.InviteCode.trim();
            this.searchParameter.NickName = this.NickName.trim();
            this.searchParameter.PhoneNumber = this.PhoneNumber.trim();
            this.searchParameter.UserGradeId = this.UserGradeId;
            this.searchParameter.AgentGradeId = this.AgentGradeId;
            this.searchParameter.PayMethod = this.PayMethod;
            this.searchParameter.ChargeType = this.ChargeType;
            this.searchParameter.Status = this.Status;
            this.searchParameter.OilCardTypeId = this.OilCardTypeId;
            this.searchParameter.PayFromDate = this.PayFromDate ? moment(this.PayFromDate).format('YYYY-MM-DDTHH:mm:ssZ').replace('+08:00','.000Z') : '';
            this.searchParameter.PayToDate = this.PayToDate ? moment(this.PayToDate).format('YYYY-MM-DDTHH:mm:ssZ').replace('+08:00','.000Z') : '';
            
            this.$emit('listenSearch',this.searchParameter);
        },

        exportToExcel(type){
            if(type == 1){
                this.isExcel = true;
            }else{
                this.isExcelTwo = true;
            }
            
            if(type == 1){
                getChargeListToExcel(
                    this.InviteCode ? this.InviteCode : undefined,
                    this.PhoneNumber ? this.PhoneNumber : undefined,
                    this.NickName ? this.NickName : undefined,
                    this.UserGradeId ? this.UserGradeId : undefined,
                    this.AgentGradeId ? this.AgentGradeId : undefined,
                    this.PayMethod ? this.PayMethod : undefined,
                    this.ChargeType ? this.ChargeType : undefined,
                    this.Status ? this.Status : undefined,
                    this.OilCardTypeId ? this.OilCardTypeId : undefined,
                    this.PayFromDate ? this.PayFromDate : undefined,
                    this.PayToDate ? this.PayToDate : undefined,
                    1,
                    0
                ).then(data => {
                    downloadTempFile(data.result);
                })
            }else{
                getUserRechargeToExcel(
                    this.InviteCode ? this.InviteCode : undefined,
                    this.PhoneNumber ? this.PhoneNumber : undefined,
                    this.NickName ? this.NickName : undefined,
                    this.UserGradeId ? this.UserGradeId : undefined,
                    this.AgentGradeId ? this.AgentGradeId : undefined,
                    this.PayMethod ? this.PayMethod : undefined,
                    this.ChargeType ? this.ChargeType : undefined,
                    this.Status ? this.Status : undefined,
                    this.OilCardTypeId ? this.OilCardTypeId : undefined,
                    this.PayFromDate ? this.PayFromDate : undefined,
                    this.PayToDate ? this.PayToDate : undefined,
                    1,
                    0
                ).then(data => {
                    downloadTempFile(data.result);
                });
            }
        }
    }
}
</script>
