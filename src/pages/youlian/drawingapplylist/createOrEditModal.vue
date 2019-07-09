<template>
   <div class="createOrEditModal">
        <el-dialog
            title="查看详细"
            top="3vh"
            :before-close="close"
            :visible.sync="dialogVisible">
            <el-form :model="myForm" :label-position="'right'" label-width="150px">
                <el-form-item label="用户昵称">
                    <el-input v-model="myForm.nickName" size="small" readonly="readonly" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="提现金额">
                    <el-input v-model="myForm.drawingAmount" size="small" readonly="readonly" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="金额类型">
                    <el-input v-model="myForm.assetTypeName" size="small" readonly="readonly" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="提现手续费">
                    <el-input v-model="myForm.handlingFee" size="small" readonly="readonly" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="提现手续费比例(%)">
                    <el-input v-model="myForm.handlingFeeRate" size="small" readonly="readonly" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="提现类型">
                    <el-input v-model="myForm.returnTypeName" size="small" readonly="readonly" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="银行卡号">
                    <el-input v-model="myForm.bankCardNo" size="small" readonly="readonly" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="提现银行">
                    <el-input v-model="myForm.bankCardName" size="small" readonly="readonly" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="银行卡开户姓名">
                    <el-input v-model="myForm.bankCardUserName" size="small" readonly="readonly" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="提现状态">
                    <el-radio-group v-model="status">
                        <el-radio v-for="item in withdrawStatusList" :disabled='myForm.status > 1' :key="item.id" :label="item.id">{{item.name}}</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="审批说明">
                    <el-input v-model="myForm.approvalRemark" type="textarea" :rows="5" placeholder="请输入审批说明" size="small" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="close">关闭</el-button>
                <el-button type="primary" @click="save" v-if="myForm.status == 1" :loading="saving">保存</el-button>
            </span>
        </el-dialog>
   </div>
</template>

<script>
    import { drawingApplyUpdateStatus } from '@/api/api';

    export default{
       props: ['dialogVisible','tableData'],
       data() {
           return {
                myForm: {},
                status: '',
                saving: false,
                withdrawStatusList: withdrawStatusList
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
                this.status = this.myForm.status;
            },
            save(){
                let input = {};
                input.id = this.myForm.id;
                input.status = this.status;
                input.approvalRemark = this.myForm.approvalRemark;
                this.$confirm('你确定要提现到'+this.myForm.bankCardUserName+'的银行卡？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.saving = true;
                    drawingApplyUpdateStatus(input).then(response => {
                        this.saving = false;
                        this.$emit('linsenDialog',{dialogVisible: false});
                        this.$emit('modalSave');
                        this.$message({type: 'success', message: '保存成功'});
                    }, err => {
                        this.saving = false;
                        this.$message.error(err.body.error.message);
                    });
                })
                
            }
       }
   };

   export const withdrawStatusList = [
        { id: 1, name: '待审核' },
        { id: 2, name: '审核通过' },
        { id: 3, name: '取消申请' }
    ];
</script>