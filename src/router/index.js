import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import TestComponent from "@/components/TestComponent.vue";
// import LandingComponent from "@/components/LandingComponent.vue";
import CreateInMetaversePage from "@/views/CreateInMetaversePage.vue";
import EstimateListPage from "@/views/EstimateListPage.vue";
import EstimateWritePage from "@/views/EstimateWritePage.vue";
import EstimateDetailPage from "@/views/EstimateDetailPage.vue";
import EstimateUpdatePage from "@/views/EstimateUpdatePage.vue";
const routes = [ 
    // {
    //     path: "/",
    //     name: "Landing",
    //     component: LandingComponent,
    // }, 
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/test",  // TestComponent.vue로 이동할 Path
        name: "TestComponent",  // router name
        component: TestComponent,  // Path로 이동될 Component
    },
    {
        path: "/CreateInMetaversePage",  // 
        name: "CreateInMetaversePage",  // router name
        component: CreateInMetaversePage,  // Path로 이동될 Component
    },
    {
        path: "/EstimateListPage",  // 
        name: "EstimateListPage",  // router name
        component: EstimateListPage,  // Path로 이동될 Component
    },
    {
        path: "/EstimateWritePage",  // 
        name: "EstimateWritePage",  // router name
        component: EstimateWritePage,  // Path로 이동될 Component
    },
    {
        path: "/EstimateDetailPage",  // 
        name: "EstimateDetailPage",  // router name
        component: EstimateDetailPage,  // Path로 이동될 Component
    },
    {
        path: "/EstimateUpdatePage",  // 
        name: "EstimateUpdatePage",  // router name
        component: EstimateUpdatePage,  // Path로 이동될 Component
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;