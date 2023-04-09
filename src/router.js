import { createRouter, createWebHashHistory } from "vue-router";
import Contacts_tab from './components/Contacts_tab.vue'
import App from './App.vue'
import Main_page from '@/pages/main_page.vue'
import ReallyMain_Page from '@/pages/Products_page.vue'

export default createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes: [
        { path: '/really', component: Main_page},
        { path: '/contacts', component: Contacts_tab},
        { path: '/main', component: App},
        { path: '/', component: ReallyMain_Page},
    ]
})