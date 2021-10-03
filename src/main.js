import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 动态设置REM基准值
import 'amfe-flexible'

// vant组件库
import Vant from 'vant'

// vant全局样式
import 'vant/lib/index.css'

// 加载全局样式
import './styles/index.less'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
