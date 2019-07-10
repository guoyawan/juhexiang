import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import cates from './views/cates.vue'
import peer from './views/peer.vue'
import attached from './views/nav/attached.vue'
import knowledge from './views/nav/knowledge.vue'
import specking from './views/nav/specking.vue'
// import green from './views/jade/green/green.vue'
// import suet from './views/jade/suet/suet.vue'
// import first from './views/jade/first/first.vue'
// import new_message from './views/jade/new_message/new_message.vue'
// import old_message from './views/jade/old_message/old_message.vue'
// import three_message from './views/jade/360_message/three_message.vue'
// import special from './views/jade/special/special.vue'
// import project from './views/jade/project/project.vue'
// import wroth from './views/jade/wroth/wroth.vue'
// import toutiao from './views/jade/toutiao/toutiao.vue'


Vue.use(Router);

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: '璨玞堂'
            }
        }, {
            path: '/cates',
            name: 'cates',
            component: cates,
            meta: {
                title: '璨玞堂和田玉分类'
            }
        }, {
            path: '/peer',
            name: 'peer',
            component: peer,
            meta: {
                title: '璨玞堂和田玉行情揭秘'
            }
        }, {
            path: '/specking',
            name: 'specking',
            component: specking,
            meta: {
                title: '璨玞堂带你了解和田玉'
            }
        }, {
            path: '/knowledge',
            name: 'knowledge',
            component:knowledge,
            meta: {
                title: '璨玞堂和田玉专题'
            }
        }, {
            path: '/attached',
            name: 'attached',
            component: attached,
            meta: {
                title: '璨玞堂和田玉结缘欣赏'
            }
        },{
            path: '/green',
            name: 'green',
            component: resolve => require(['@/views/jade/green/green.vue'],resolve),
            meta: {
                title: '璨玞堂和田碧玉专题'
            }
        }, {
            path: '/suet',
            name: 'suet',
            component: resolve => require(['@/views/jade/suet/suet.vue'],resolve),
            meta: {
                title: '璨玞堂和田羊脂玉专题'
            }
        }, {
            path: '/new_message',
            name: 'new_message',
            component: resolve => require(['@/views/jade/new_message/new_message.vue'],resolve),
            meta: {
                title: '璨玞堂和田玉鉴别专题'
            }
        }, {
            path: '/first',
            name: 'first',
            component: resolve => require(['@/views/jade/first/first.vue'],resolve),
            meta: {
                title: '璨玞堂和田玉科普专题页'
            }
        }, {
            path: '/old_message',
            name: 'old_message',
            component: resolve => require(['@/views/jade/old_message/old_message.vue'],resolve),

            meta: {
                title: '璨玞堂给您揭秘——和田玉为什么被称为"传家宝"'
            }
        }, {
            path: '/special',
            name: 'special',
            component: resolve => require(['@/views/jade/special/special.vue'],resolve),
            meta: {
                title: '璨玞堂贴心小专题——和田玉玉价有多深'
            }
        }, {
            path: '/project',
            name: 'project',
            component: resolve => require(['@/views/jade/project/project.vue'],resolve),
            meta: {
                title: '和璨玞堂一起聊聊和田玉手镯那些事'
            }
        }, {
            path: '/three_message',
            name: 'three_message',
            component: resolve => require(['@/views/jade/three_message/three_message.vue'],resolve),
            meta: {
                title: '买和田玉——认准源头直供品牌璨玞堂'
            }
        },{
            path: '/wroth',
            name: 'wroth',
            component: resolve => require(['@/views/jade/wroth/wroth.vue'],resolve),
            meta: {
                title: '加璨玞堂微信，送好礼！！！'
            }
        },{
            path: '/toutiao',
            name: 'toutiao',
            component: resolve => require(['@/views/tuiguang/toutiao/toutiao.vue'],resolve),
            meta: {
                title: '关注璨玞堂公众号，了解最新活动！！！'
            }
        },{
            path: '/one_phoenix',
            name: 'one_phoenix',
            component: resolve => require(['@/views/tuiguang/one_phoenix/one_phoenix.vue'],resolve),
            meta: {
                title: '关注璨玞堂微信号，结缘属于你的美玉！'
            }
        },{
            path: '/two_phoenix',
            name: 'two_phoenix',
            component: resolve => require(['@/views/tuiguang/two_phoenix/two_phoenix.vue'],resolve),
            meta: {
                title: '关注璨玞堂微信号，送好礼！！！'
            }
        }
    ]
})
