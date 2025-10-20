import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import AboutCompanyPage from "@/views/AboutCompanyPage.vue";
import AboutBiPage from "@/views/AboutBiPage.vue";
import CloudFemsPage from "@/views/CloudFemsPage.vue";
import CloudMesPage from "@/views/CloudMesPage.vue";
import ContactUsPage from "@/views/ContactUsPage.vue";
import EnergyEfficiencyPage from "@/views/EnergyEfficiencyPage.vue";
import NewsPage from "@/views/NewsPage.vue";
import OnlineQuotePage from "@/views/OnlineQuotePage.vue";
import SmartFactoryPage from "@/views/SmartFactoryPage.vue";
import EstimateListComponent from "@/components/EstimateListComponent.vue";
import EstimateDetailComponent from "@/components/EstimateDetailComponent.vue";
import EstimateWriteComponent from "@/components/EstimateWriteComponent.vue";
import EstimateUpdateComponent from "@/components/EstimateUpdateComponent.vue";

const routes = [ 
    {
        path: "/Main",
        name: "HomePage",
        component: HomePage,  
    },
    {
        path: "/AboutBi",  
        name: "AboutBiPage",  
        component: AboutBiPage, 
    },
    {
        path: "/AboutCompany",  
        name: "AboutCompanyPage",  
        component: AboutCompanyPage, 
    },
    {
        path: "/CloudFems",   
        name: "CloudFemsPage",  
        component: CloudFemsPage,  
    },
    {
        path: "/CloudMes",   
        name: "CloudMesPage",  
        component: CloudMesPage,  
    },
    {
        path: "/ContactUs",   
        name: "ContactUsPage",  
        component: ContactUsPage,  
    },
    {
        path: "/EnergyEfficiency",   
        name: "EnergyEfficiencyPage",  
        component: EnergyEfficiencyPage,  
    },
    {
        path: "/News",   
        name: "NewsPage",  
        component: NewsPage,  
    },
    {
        path: "/OnlineQuote",   
        name: "OnlineQuotePage",  
        component: OnlineQuotePage, 
        children: [
            {
                path: 'EstimateList', 
                component: EstimateListComponent
            },
            {
                path: 'EstimateDetail',
                component: EstimateDetailComponent
            },
            {
                path: 'EstimateWrite', 
                component: EstimateWriteComponent
            },
            {
                path: 'EstimateUpdate', 
                component: EstimateUpdateComponent
            },
        ] 
    },
    {
        path: "/SmartFactory",   
        name: "SmartFactoryPage",  
        component: SmartFactoryPage,  
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;