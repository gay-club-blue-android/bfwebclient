import {createWebHistory, createRouter} from "vue-router";
import ComponentLanding from "./components/ComponentLanding";
import ComponentNotFound from "./components/ComponentNotFound";
import ComponentAuth from "./components/ComponentAuth";
import ComponentProfile from "./components/ComponentProfile";
import ComponentNewProduct from "./components/ComponentNewProduct";
import innerStorage from "/src/inner-storage"


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
        path: "/newproduct",
        component: ComponentNewProduct
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


router.beforeEach((to, from) => {
    console.log(from);
    console.log(to);
    console.dir(innerStorage.getValueByKey(innerStorage.keys.farmer));

    if (to.path.startsWith("/profile") || to.path.startsWith("/newproduct")) {
        if (innerStorage.getValueByKey(innerStorage.keys.farmer) === null) {
           return '/auth';
        }
   }
})

export default router;