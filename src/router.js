import { createRouter, createWebHashHistory } from "vue-router";
import ContactsPage from '@/pages/ContactsPage.vue'
import ProductsPage from '@/pages/ProductsPage.vue'

export default createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes: [
        { path: '/contacts', component: ContactsPage},
        { path: '/', component: ProductsPage},
    ]
})