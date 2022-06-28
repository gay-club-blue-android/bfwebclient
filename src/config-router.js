import {createWebHistory, createRouter} from "vue-router";
import ComponentLanding from "./components/ComponentLanding";
import ComponentNotFound from "./components/ComponentNotFound";
import ComponentAuth from "./components/ComponentAuth";
import ComponentProfile from "./components/ComponentProfile";
// import globalVariables from './global-variables'

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
        path: "/profile",
        component: ComponentProfile
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


// router.beforeEach((to, from) => {
//     console.log(from);
//
//     if (to.fullPath.includes("profile")) {
//         if (globalVariables.farmer === null) {
//             return "/auth";
//         }
//     }
// })

export default router;