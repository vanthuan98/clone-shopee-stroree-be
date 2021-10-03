import { defineConfig } from 'umi';

export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    routes: [
        { path: '/', redirect: '/home', component: '@/pages/index' },
        { path: '/home', component: '@/pages/home/Home' },
        { path: '/category/:id/', redirect: '/category/:id/all', component: '@/pages/categories/Categories' },
        { path: '/category/:id/all', component: '@/pages/categories/Categories' },
        {
            path: '/admin',
            component: '@/pages/admin/Admin',
            routes: [
                { path: '/admin', redirect: '/admin/nav1' },
                { path: '/admin/nav1', component: '../pages/admin/components/Nav1' },
                { path: '/admin/nav2', component: '../pages/admin/components/Nav2' },
            ],
        },
    ],
    fastRefresh: {},
    dva: {
        hmr: true,
    },
});
