import {createWebHistory, createRouter} from "vue-router";
import ComponentLanding from "./components/ComponentLanding";
import ComponentNotFound from "./components/ComponentNotFound";

const routes = [
    {
        path: "/",
        component: ComponentLanding,
    },
    {
        path: "/:catchAll(.*)",
        component: ComponentNotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;