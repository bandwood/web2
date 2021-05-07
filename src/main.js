import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import Header from "./components/Header.vue"
import Main from "./components/Main.vue"
import Footer from "./components/Footer.vue"
import Book from "./components/Book.vue"
import CNNode from "./components/CNNode.vue"
import Work from "./components/Work.vue"
import Student from "./components/Student.vue"


Vue.use(ElementUI);
Vue.use(VueRouter);


const routes = [
  { path: '/header', component: Header },
  { path: '/main', component: Main },
  { path: '/footer', component: Footer },
  { path: '/book', component: Book },
  { path: '/cnnode', component: CNNode },
  { path: '/work', component: Work },
  { path: '/student', component: Student },



]


Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
}).$mount('#app')
