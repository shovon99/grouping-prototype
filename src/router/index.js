import { createRouter, createWebHistory } from 'vue-router'

import LogIn from "../views/LogIn.vue"
import NotFound from "../views/NotFound.vue"
import StudentView from "../views/StudentView.vue"

const routes = [
  {
    path: '/',
    name: 'login',
    component: LogIn
  },
  {
    path: '/student-view/:id',
    name: 'studentView',
    component: StudentView,
    props: true
  },
  {
    path: '/404',
    name: 'notFound',
    component: NotFound
  },
  
  //Catch all not found pages
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
