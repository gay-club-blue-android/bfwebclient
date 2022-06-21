import {createWebHistory, createRouter} from "vue-router";
import ComponentLanding from "./components/ComponentLanding";
import ComponentNotFound from "./components/ComponentNotFound";
import ComponentAuth from "./components/ComponentAuth";

const routes = [
    {
        path: "/",
        component: ComponentLanding,
    },
    {
        path: "/auth",
        component: ComponentAuth
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