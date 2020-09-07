import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/Index.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/infoshow',
        name: 'infoshow',
        component: () => import('../views/InfoShow.vue')
      },
      {
        path: '/blogDetail',
        name: 'blogDetail',
        component: () => import('../views/BlogDetail.vue')
      },
      {
        path: '/singleBlog',
        name: 'singleBlog',
        component: () => import('../views/SingleBlog.vue')
      },
      {
        path: '/writeBlog',
        name: 'writeBlog',
        component: () => import('../components/Dialog.vue')
      }
    ]
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//路由守卫
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.blog_token ? true : false;
  if (to.path == '/login' || to.path == "/register") {
    next();
  } else {
    isLogin ? next() : next("/login")
  }
})

export default router