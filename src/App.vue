<template>
  <div id="app">
    <router-view v-on:listenLoadingHtml="showMsgLoadingHtml" v-if="isRouterAlive" style="height:100%" />
    <div v-html="loadingHtml" v-show="isloading"></div>
  </div>
</template>

<script>
    import { getCookie, isloading, islogin } from './service/common';
    export default {
        name: 'App',
        provide(){
            return{
                reload: this.reload
            }
        },
        data(){
            return{
                isRouterAlive: true,
                loadingHtml: '',
                isloading: false,
            }
        },
       
        mounted: function(){
            this.loadingHtml = isloading();
            this.$nextTick(() => {
                if(!islogin()){
                    this.$router.push('/account/login');
                }
            });
        },
        methods: {
            reload(){
                this.isRouterAlive = false;
                this.$nextTick(function(){
                    this.isRouterAlive = true;
                });
            },
            showMsgLoadingHtml(data){
                this.isloading = data;
            }
        }
    }
</script>

<style>
    #app{
        height: 100%;
    }
</style>
