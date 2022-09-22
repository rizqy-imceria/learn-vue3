import { createRouter, createWebHistory } from "vue-router";
// const Home = { template: '<div>Home</div>'}
import Cuy from "./components/Cuy.vue"


// const Home = 
import App from './components/HelloWorld.vue'
const routes = [
  { path: '/cuy', component: Cuy },
  { path: '/hello', component: App }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router