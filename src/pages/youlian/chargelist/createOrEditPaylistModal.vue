<template>
    <div class="createOrEditModal">
        <el-dialog
            title="查看详细"
            top="3vh"
            :before-close="close"
            :visible.sync="dialogVisible">
            <div>
                <el-form :model="myForm" :label-position="'right'" label-width="150px">
                    <el-form-item label="用户昵称">
                        <el-input v-model="myForm.nickName" size="small" readonly="readonly" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="用户手机">
                        <el-input v-model="myForm.phoneNumber" size="small" readonly="readonly" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="充值金额">
                        <el-input v-model="myForm.chargeAmount" size="small" readonly="readonly" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="订单号">
                        <el-input v-model="myForm.chargeNo" size="small" readonly="readonly" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="会员等级">
                        <el-input v-model="myForm.userGradeName" size="small" readonly="readonly" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="充值方案">
                        <el-input v-model="myForm.chargeTypeName" size="small" readonly="readonly" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="充值卡号">
                        <el-input v-model="myForm.oilCardNo" size="small" readonly="readonly" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="充值卡类型">
                        <el-input v-model="myForm.oilCardTypeName" size="small" readonly="readonly" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="购买时间">
                        <el-input :value="myForm.payTime | dateformat('YYYY-MM-DD HH:mm:ss')" size="small" readonly="readonly" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="购买方式">
                        <el-input v-model="myForm.payMethodName" size="small" readonly="readonly" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="第三方单号">
                        <el-input v-model="myForm.payTransactionNo" size="small" readonly="readonly" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="订单状态">
                        <el-radio-group v-model="myForm.status">
                            <el-radio v-for="item in statuslist" :key="item.id" disabled :label="item.id">{{item.name}}</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="close">关闭</el-button>
                <!-- <el-button type="primary" @click="save">保存</el-button> -->
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default{
        props: ['dialogVisible','tableData'],
        data() {
            return {
                myForm: {
                    nickName: '',
                    phoneNumber: '',
                    chargeAmount: '',
                    chargeNo: '',
                    userGradeName: '',
                    chargeTypeName: '',
                    oilCardNo: '',
                    oilCardTypeName: '',
                    payTime: '',
                    payMethodName: '',
                    payTransactionNo: '',
                    status: ''
                },
                statuslist: orderStastu
            };
        },
        mounted() {
            
        },
        methods: {
            close(){
                this.$emit('linsenDialog',{dialogVisible: false});
            },
            show(viewid){
                this.myForm = this.tableData.filter(item => item.id == viewid)[0];
                this.payTime = this.myForm.payTime;
            },
            save(){
                let params = {
                    dialogVisible: false
                }
                this.$emit('linsenDialog',params);
            }
        },
   };

   export const orderStastu = [
    {
        id: 1,
        name: '待发货'
    },
    {
        id: 2,
        name: '购买成功'
    },
    {
        id: 3,
        name: '待支付'
    }
];
</script>