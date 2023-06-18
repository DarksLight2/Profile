import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/pages/HomePage.vue";
import SkillsPage from "@/pages/SkillsPage.vue";
import ContactsPage from "@/pages/ContactsPage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import PostPage from "@/pages/PostPage.vue";
const routes = [
    {
        path: '/',
        component: HomePage,
        name: 'home'
    },
    {
        path: '/about',
        component: AboutPage,
        name: 'about'
    },
    {
        path: '/contacts',
        component: ContactsPage,
        name: 'contacts'
    },
    {
        path: '/skills',
        component: SkillsPage,
        name: 'skills'
    },
    {
        path: '/post/:id',
        component: PostPage,
        name: 'post'
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router