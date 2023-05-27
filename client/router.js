import {createRouter, createMemoryHistory} from 'vue-router'
import Welcome from './components/Welcome.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Dashboard from './components/Dashboard.vue'

const routes = [
  {path: '/', component: Welcome},
  {path: '/login', component: Login},
  {path: '/register', component: Register},
  {path: '/dashboard/:user', component: Dashboard}
]

const router = createRouter({
  history: createMemoryHistory(),
  routes, 
})

export default router
//app.use(router)
