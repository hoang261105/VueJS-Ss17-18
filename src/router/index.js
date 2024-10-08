import About from "@/views/B1+2/About.vue";
import Contact from "@/views/B1+2/Contact.vue";
import Home from "@/views/B1+2/Home.vue";
import Input from "@/views/B3/Input.vue";
import NotFound from "@/views/B4/NotFound.vue";
import Dashboard from "@/views/B5/Dashboard.vue";
import Login from "@/views/B5/Login.vue";
import Admin from "@/views/B6/Admin.vue";
import Products from "@/views/B6/Products.vue";
import Setting from "@/views/B6/Setting.vue";
import User from "@/views/B6/User.vue";
import ListPost from "@/views/B7/ListPost.vue";
import PostDetail from "@/views/B7/PostDetail.vue";
import PostNotFound from "@/views/B7/PostNotFound.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    alias: "/home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/contact",
    name: "contact",
    alias: "/get-in-touch",
    component: Contact,
  },
  {
    path: "/search",
    name: "search",
    component: Input,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/admin",
    name: "admin",
    component: () =>
      import(/*webpackChunkName: "admin"*/ "@/views/B6/Admin.vue"),
    children: [
      {
        path: "users",
        name: "users",
        component: () =>
          import(/*webpackChunkName: "users"*/ "@/views/B6/User.vue"),
      },
      {
        path: "settings",
        name: "settings",
        component: () =>
          import(/*webpackChunkName: "settings"*/ "@/views/B6/Setting.vue"),
      },
      {
        path: "products",
        name: "products",
        component: () =>
          import(/*webpackChunkName: "products"*/ "@/views/B6/Products.vue"),
      },
    ],
  },
  {
    path: "/posts",
    name: "ListPost",
    component: ListPost,
  },
  {
    path: "/posts/:id",
    name: "PostDetail",
    component: PostDetail,
  },
  {
    path: "/404",
    name: "PostNotFound",
    component: PostNotFound,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: NotFound,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (from.name === "ListPost" && to.name === "PostDetail") {
      return { left: 0, top: window.innerHeight / 2, behavior: "smooth" };
    } else if (to.name === "ListPost") {
      return savedPosition || { left: 0, top: 0 };
    } else {
      return { left: 0, top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  const isLogin = true;
  if (to.path === "/dashboard" && !isLogin) {
    next("/login");
  } else {
    next();
  }
});
