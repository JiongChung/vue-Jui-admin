<template>
    <div>{{msg}}</div>
</template>
<script>
    export default {
        data () {
            return {
                msg: 'test page'
            }
        },
        mounted () {
            console.log('test page')  
        },
    }
</script>