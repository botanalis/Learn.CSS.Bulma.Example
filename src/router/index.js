import Vue from "vue";
import VueRouter from "vue-router";

import dataStore from "../store";
import demo from "../view/demo";
import login from "../view/login";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "hash",
    routes: [
        { path: "/login", name: "logIn", component: login },
        { path: "/", component: demo, meta: { requireAuth: true},
            children:[

            ]
        }

    ]
});

//授權判斷
router.beforeEach(async (to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)){
        if (dataStore.state.auth.authenticated){
            next();
        }else{
            next({
                path: "/login",
                query: {
                    redirect: to.fullPath
                }
            });
        }
    }else{
        next();
    }
});

export default router;
