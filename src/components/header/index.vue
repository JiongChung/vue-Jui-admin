<template>
    <div :style="{height: (iframeItem ? '100%' : '')}">
        <div>
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                    <el-menu-item v-for="item in menu" :index="item.key" :key="item.key" v-if="item.children.length == 0">{{item.title}}</el-menu-item>
                    <el-submenu :index="item.key" :key="item.key"  v-else>
                        <template slot="title">{{item.title}}</template>
                        <el-menu-item v-for="sub in item.children" :index="sub.key" :key="sub.key" v-if="sub.path" @click="addTabs(sub.title, sub.name, sub.path)">{{sub.title}}</el-menu-item>
                        <el-submenu :index="sub.key" v-else>
                            <template slot="title">{{sub.title}}</template>
                            <el-menu-item v-for="last in sub.children" :index="last.key" :key="last.key" @click="addTabs(last.title, last.name, last.path)">{{last.title}}</el-menu-item>
                        </el-submenu>
                    </el-submenu>
            </el-menu>
        </div>
        <div style="height: 100%;margin-top: -48px;padding-top: 48px;" v-show="iframeItem">
            <div class="tabtools">
                <ul class="clearfix">
                    <li v-for="(item, key) in tabslist" :class="{active: cur == key}">
                        <span class="text" @click="tabs(key)">{{item.title}}</span>
                        <span class="remove el-icon-close" @click="remove(item.name)"></span>
                    </li>
                </ul>
            </div>
            <div class="tabs-content">
                <div v-for="(item, key) in tabslist" v-show="cur == key" class="content-list">
                    <iframe
                        :src="item.content"
                        frameborder="0"
                        class="container-frame"
                        scrolling="">
                    </iframe>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import menu from '@/router/menu';
    export default {
        data () {
            return {
                activeIndex: '1',
                tabslist: [],
                cur: 0,
                iframeItem: false,
                menu: []
            }
        },
        mounted () {
            this.menu = menu;
        },
        methods: {
            handleSelect(key, keyPath) {
                // console.log(key, keyPath);
            },
            remove(targetName) {
                for(let i=0; i<this.tabslist.length; i++){
                    if(targetName == this.tabslist[i].name){
                        if(i == this.tabslist.length-1){
                            if(this.tabslist.length > 1){
                                this.tabs(i - 1);
                            }else{
                                this.iframeItem = false;
                                this.$emit('listenHeader', false);
                            }
                        }else{
                            this.tabs(i+1);
                        }
                        this.tabslist.splice(i, 1);
                        break;
                    }
                }
            },
            tabs(index){
                this.cur = index;
            },
            addTabs(title, name, url){
                this.iframeItem = true;
                this.$emit('listenHeader', true);
                this.tabslist.push({
                    title: title,
                    name: name, 
                    content: url
                });
                this.tabs(this.tabslist.length-1);
            }
        }
    }
</script>