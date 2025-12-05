import { createWebHistory, createRouter } from "vue-router";
import MainPage from "@/views/MainPage.vue";
import AboutCompanyPage from "@/views/AboutCompanyPage.vue";
import OrganizationPage from "@/views/OrganizationPage.vue";
import ContactUsPage from "@/views/ContactUsPage.vue";
import NewsPage from "@/views/NewsPage.vue";
import NewsCardListComponet from "@/components/NewsCardListComponent.vue";
import NewsCardDetailComponent from "@/components/NewsCardDetailComponent.vue";
import AdminPage from "@/views/AdminPage.vue";
import AdminMainComponent from "@/components/admin_board/AdminMainComponent.vue";
import NewsBoardWriteComponent from "@/components/admin_board/NewsBoardWriteComponent.vue";
import NewsBoardListComponent from "@/components/admin_board/NewsBoardListComponent.vue";
import NewsBoardDetailComponent from "@/components/admin_board/NewsBoardDetailComponent.vue";
import NewsBoardUpdateComponent from "@/components/admin_board/NewsBoardUpdateComponent.vue";

const routes = [ 
    {
        path: "/Main",
        name: "MainPage",
        component: MainPage,  
    },
    {
        path: "/Organization",  
        name: "OrganizationPage",  
        component: OrganizationPage, 
    },
    { 
        path: "/AboutCompany",  
        name: "AboutCompanyPage",  
        component: AboutCompanyPage, 
    },
    {
        path: "/ContactUs",   
        name: "ContactUsPage",  
        component: ContactUsPage,  
    },

    {
        path: "/News",   
        name: "NewsPage",  
        component: NewsPage, 
        children: [
            {
                path: 'NewsCardList',
                component: NewsCardListComponet
            },
            {
                path: 'NewsCardDetail',
                component: NewsCardDetailComponent
            },
        ]    
    },
    {
        path: "/Admin",   
        name: "AdminPage",  
        component: AdminPage, 
        children: [
            {
                path: 'AdminMain', 
                component: AdminMainComponent
            },
            {
                path: 'NewsboardWrite', 
                component: NewsBoardWriteComponent
            },
            {
                path: 'NewsboardList', 
                component: NewsBoardListComponent
            },
            {
                path: 'NewsboardDetail', 
                component: NewsBoardDetailComponent
            },
            {
                path: 'NewsboardUpdate', 
                component: NewsBoardUpdateComponent
            },
        ] 
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;