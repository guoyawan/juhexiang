import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import tabbar from '@/components/tabbar.vue';
import right from '@/components/right.vue';
import navs from '@/components/navs.vue';
import { Lazyload } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
// import { NoticeBar } from 'vant';

// Vue.use(NoticeBar);
Vue.use(Tabbar).use(TabbarItem);

Vue.use(Swipe).use(SwipeItem);

Vue.use(Lazyload , {
    lazyComponent:true,
});

Vue.config.productionTip = false;

Vue.component('tabbar', tabbar);
Vue.component('right', right);
Vue.component('navs', navs);

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
