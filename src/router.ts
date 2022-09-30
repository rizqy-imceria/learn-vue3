import { createRouter, createWebHistory } from "vue-router";
import Cuy from "./components/Cuy.vue"
import ReactiveComponent from "./components/Reactive.vue"

// const Home = 
import App from './components/HelloWorld.vue'
const routes = [
  { path: '/cuy', component: Cuy },
  { path: '/hello', component: App },
  { path: '/reactive', component: ReactiveComponent }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router