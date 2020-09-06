import Vue from "vue";
import VueRouter from "vue-router";

import login from "../view/login";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "hash",
    routes: [
        { path: "/login", name: "logIn", component: login },
    ]
});

//授權判斷
router.beforeEach(async (to, from, next) => {
    next();
});

export default router;
