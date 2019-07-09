<template>
    <div class="login-page">
        <div class="login-item">
            <el-form :model="from">
                <el-row>
                    <el-col v-show="isError" :span="24"><el-tag type="danger" class="error-tips"><i class="el-icon-error"></i> {{msg}}</el-tag></el-col>
                    <el-col :span="24">
                        <el-input v-model="from.userNameOrEmailAddress" placeholder="请输入用户名admin"></el-input>
                    </el-col>
                    <el-col :span="24">
                        <el-input type="password" v-model="from.password" placeholder="请输入密码123456"></el-input>
                    </el-col>
                    <el-col :span="24">
                        <el-button type="primary" :loading="saving" :disabled="!isCanSubmit" style="width: 100%" @click="save">登录</el-button>
                    </el-col>
                </el-row>
            </el-form>
        </div>
    </div>
</template>
<script>
    import { setCookie } from '../../service/common';
    import API from '../../api/api';
    export default {
        data(){
            return {
                msg: '',
                from: {
                    userNameOrEmailAddress: '',
                    password: ''
                },
                isCanSubmit: false,
                saving: false,
                isError: false
            }
        },
        mounted () {
            
        },
        methods: {
            save(){
                this.saving = true;
                this.isError = false;
                let api = API + '/api/TokenAuth/Authenticate';
                // this.$emit('listenLoadingHtml',true);
                this.$http.post(api, this.from)
                .then(response => response.json())
                .then(result => this.checkCookie(result))
                .catch(err => {
                    // this.$emit('listenLoadingHtml',false);
                    this.saving = false;
                    this.isError = true;
                    this.msg = err.body.error.message;
                })
            },
            checkCookie(data){
                setCookie('Abp.AuthToken',data.result.accessToken);
                setCookie('enc_auth_token',data.result.encryptedAccessToken);
                // this.$emit('listenLoadingHtml',false);
                this.$router.push('/admin/');
            }
        },
        watch: {
            from: {
                handler(val, oldVal){
                    if(this.from.userNameOrEmailAddress && this.from.password){
                        this.isCanSubmit = true;
                    }else{
                        this.isCanSubmit = false;
                    }
                },deep: true
            }
        }
    }
</script>
<style lang="less" scoped>
    .login-item{
        max-width: 350px;
        margin: 150px auto 0;

        .el-col{
            padding-bottom: 20px;
        }

        .error-tips{
            font-size: 14px;
            width:100%;
            border-color: #ffa39e;
            white-space: normal;
            padding: 7px 10px;
            line-height: 1.5;
            height: auto;
        }
    }
</style>