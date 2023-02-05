import { createRouter, createWebHistory } from 'vue-router'
import MovieList from '@/pages/MovieList.vue'

const routes = [
      {
            path: '/',
            name: 'MovieList',
            component: MovieList,
      },
      {
            path: '/movie/:id',
            name: 'MovieDetails',
            component: () => import ('@/pages/MovieDetails.vue')
      }
      // {
      //       path: '/about',
      //       name: 'about',
      //       component: AboutProject,
      //       // route level code-splitting
      //       // this generates a separate chunk (about.[hash].js) for this route
      //       // which is lazy-loaded when the route is visited.
      //       // component: () =>
      //       //   import(/* webpackChunkName: 'about' */ '../views/AboutView.vue'),
      // },
]

const router = createRouter({
      history: createWebHistory(import.meta.BASE_URL),
      routes,
})

export default router
