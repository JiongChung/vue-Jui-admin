<template>
    <div class="dashboard-page">
        <v-header v-on:listenHeader="showHeaderData" />
        <div v-show="!isShow">
            {{msg}}
        </div>
    </div>
</template>
<script>
    import Header from '@/components/header/index';
    export default {
        components: {
          'v-header': Header  
        },
        data(){
            return {
                msg: '323',
                isShow: false
            }
        },
        methods: {
            showHeaderData(data){
                this.isShow = data;
            }
        }
    }
</script>
<style scoped>
    .dashboard-page{
        height: 100%;
    }
</style>