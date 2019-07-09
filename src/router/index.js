import Vue from 'vue';
import Router from 'vue-router';
const Login = r => require.ensure([], () => r(require('@/pages/login/index')), 'Login');
const Dashboard = r => require.ensure([], () => r(require('@/pages/dashboard/index')), 'Dashboard');
const Test = r => require.ensure([], () => r(require('@/pages/test/index')), 'Test');

const ChargeList = r => require.ensure([], () => r(require('@/pages/youlian/chargelist/index')), 'ChargeList');

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        { path: '/admin/', name: 'Dashboard', component: Dashboard },
        { path: '/account/login', name: 'Login', component: Login },
        { path: '/admin/test', name: 'Test', component: Test },
        { path: '/admin/youlian/chargelist', name: 'ChargeList', component: ChargeList },
        { path: "*", redirect: "/admin/" }
    ]
})
