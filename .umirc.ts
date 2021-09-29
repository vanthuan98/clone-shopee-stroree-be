import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', redirect: '/home', component: '@/pages/index' },
    { path: '/home', component: '@/pages/home/Home' },
    { path: '/category/:id/', redirect: '/category/:id/all', component: '@/pages/categories/Categories' },
    { path: '/category/:id/all', component: '@/pages/categories/Categories' }
  ],
  fastRefresh: {},
});
