<template>
    <div class="main-content-item">
        <v-search v-on:listenSearch="showSearchData"></v-search>
        <div class="list-item">
            <div class="count">
                <span>共{{totalCount}}条记录</span>
            </div>
            <table cellspacing="0" cellpadding="0" border="0" width="100%">
                    <tr>
                    <th style="width: 50px;">#</th>
                    <th>用户信息</th>
                    <th>金额类型</th>
                    <th>当前金额</th>
                    <th>提现金额</th>
                    <th>提现手续费</th>
                    <th>手续费率(%)</th>
                    <th>实际划款</th>
                    <th>提现类型</th>
                    <th>银行卡信息</th>
                    <th>提现时间</th>
                    <th>状态</th>
                    <th>操作</th>
                </tr>
                <tr v-for="record in tableData">
                    <td>{{record.serialnumber}}</td>
                    <td>
                        ID：{{record.inviteCode}}<br />
                        昵称：{{record.nickName}}<br />
                        手机：{{record.phoneNumber}}
                    </td>
                    <td>{{record.assetTypeName}}</td>
                    <td>{{record.remainingAmount}}</td>
                    <td>{{record.drawingAmount}}</td>
                    <td>{{record.handlingFee}}</td>
                    <td>{{record.handlingFeeRate}}</td>
                    <td>{{record.actualAmount}}</td>
                    <td>{{record.returnTypeName}}</td>
                    <td>
                        银行：{{record.bankCardName}}<br />
                        卡号：{{record.bankCardNo}}<br />
                        户名：{{record.bankCardUserName}}
                    </td>
                    <td>{{record.drawingTime | dateformat('YYYY-MM-DD HH:mm:ss')}}</td>
                    <td>
                        <el-tag size="mini" v-if="record.status == 2">{{record.statusName}}</el-tag>
                        <el-tag type="warning" size="mini" v-if="record.status == 1">{{record.statusName}}</el-tag>
                        <el-tag type="danger" size="mini" v-if="record.status == 3">{{record.statusName}}</el-tag>
                    </td>
                    <td>
                        <el-button size="mini" type="primary" v-if="record.status == 1" @click="createOrEditModal(record.id)" plain>编辑</el-button>
                        <el-button size="mini" type="info" v-else @click="createOrEditModal(record.id)" plain>查看</el-button>
                    </td>
                </tr>
            </table>
            <div class="page-item clearfix">
                <span class="totalCount">Total: {{totalCount}}</span>
                <v-page 
                    :setPageSize="MaxResultCount" 
                    :setTotalCount="totalCount" 
                    v-on:linsenCurrentPage="showCurrentPageFromChild"
                    v-on:linsenEachPageQty="showEachPageQtyFromChild"
                ></v-page>
            </div>
            <div v-html="loadingHtml" v-show="isloading"></div>
        </div>
        <v-createoreditmodal
            :dialogVisible="dialogVisible"
            :tableData="tableData"
            v-on:linsenDialog="showMsgFromDialog"
            @modalSave="getDrawingApplyList()"
            ref="createOrEditModal">
        </v-createoreditmodal>
    </div>
</template>
<script>
    import Pagination from '@/components/page/index';
    import Search from './search';
    import CreateOrEditModal from './createOrEditModal';
    import { getDrawingApplyList, loadHtml } from '@/api/api';
    export default {
        components: {
            'v-page': Pagination,
            'v-search': Search,
            'v-createoreditmodal': CreateOrEditModal
        },
        data () {
            return {
                InviteCode: '',
                PhoneNumber: '',
                Status: '',
                DrawingFromDate: '',
                DrawingToDate: '',
                MaxResultCount: 10,
                SkipCount: 0,
                totalCount: 0,
                currentPageTotal: 0,
                totalResult: [],
                tableData: [],
                loadingHtml: '',
                isloading: false,
                dialogVisible: false
            }
        },
        mounted () {
            this.loadingHtml = loadHtml();
            this.getDrawingApplyList();
        },
        methods: {
            getDrawingApplyList(){
                this.isloading = true;
                getDrawingApplyList(
                    this.InviteCode ? this.InviteCode : undefined,
                    this.PhoneNumber ? this.PhoneNumber : undefined,
                    this.Status ? this.Status : undefined,
                    this.DrawingFromDate ? this.DrawingFromDate : undefined,
                    this.DrawingToDate ? this.DrawingToDate : undefined,
                    this.MaxResultCount ? this.MaxResultCount : undefined,
                    this.SkipCount ? this.SkipCount : undefined
                ).then(data => {
                    this.isloading = false;
                    this.tableData = data.result.items;
                    this.totalCount = data.result.totalCount;
                    for(let i=0; i<data.result.items.length; i++){
                        this.tableData[i].serialnumber = i + 1 + this.currentPageTotal;
                    }
                })
            },

            showCurrentPageFromChild(data){
                this.SkipCount = this.MaxResultCount * (data - 1);
                this.getDrawingApplyList();
            },

            showEachPageQtyFromChild(data){
                this.MaxResultCount = data;
                this.getDrawingApplyList();
            },

            showSearchData(data){
                this.InviteCode = data.InviteCode;
                this.PhoneNumber = data.PhoneNumber;
                this.Status = data.Status;
                this.DrawingFromDate = data.DrawingFromDate;
                this.DrawingToDate = data.DrawingToDate;
                this.SkipCount = 0;
                this.getDrawingApplyList();
            },

            createOrEditModal(id){
                this.dialogVisible = true;
                this.$refs.createOrEditModal.show(id)
            },

            showMsgFromDialog(data){
                this.dialogVisible = data.dialogVisible
            }
        }
    }
</script>