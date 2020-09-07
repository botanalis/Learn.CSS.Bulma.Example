import Vue from "vue";
import VueRouter from "vue-router";

import dataStore from "../store";
import demo from "../view/demo";
import action from "../view/action";
import login from "../view/login";
import dashboard from "../view/home/dashboard";
import bookList from "../view/book/bookList";
import bookEdit from "../view/book/bookEdit";
import customerList from "../view/customer/customerList";
import orderList from "../view/order/orderList";


Vue.use(VueRouter);

const router = new VueRouter({
    mode: "hash",
    routes: [
        { path: "/login", name: "logIn", component: login },
        { path: "/", component: demo, meta: { requireAuth: true},
            children:[
                {
                    //儀錶版
                    path: "dashboard", component: action,
                    children:[
                        {
                            path: "info", name: "dashboard", component: dashboard
                        }
                    ]
                },
                {
                    //書籍
                    path: "book", component: action,
                    children: [
                        {
                            //清單
                            path: "list", name: "bookList", component: bookList
                        },
                        {
                            //編輯
                            path: ":op(create|edit)", name: "bookEdit", component: bookEdit
                        }
                    ]
                },
                {
                    //顧客
                    path: "customer", component: action,
                    children: [
                        {
                            //清單
                            path: "list", name: "customerList", component: customerList
                        }
                    ]
                },
                {
                    //訂單
                    path: "order", component: action,
                    children: [
                        {
                            //清單
                            path: "list", name: "orderList", component: orderList
                        }
                    ]
                }
            ]
        }

    ]
});

//授權判斷
router.beforeEach(async (to, from, next) => {
    next();
});

export default router;
