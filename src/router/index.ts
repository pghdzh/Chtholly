import { createRouter, createWebHashHistory } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.configure({ showSpinner: false }); // NProgress Configuration 刷新页面头部进度条

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/views/homeView/index.vue"),
    },
    {
      path: "/timeLine",
      component: () => import("@/views/timeLineView/index.vue"),
    },
    {
      path: "/characters",
      component: () => import("@/views/charactersView/index.vue"),
    },
    {
      path: "/message",
      component: () => import("@/views/messageView/index.vue"),
    },
    {
      path: "/gallery",
      component: () => import("@/views/galleryView/index.vue"),
    },
    {
      path: "/talk",
      component: () => import("@/views/talkView/index.vue"),
    },
    {
      path: "/story",
      component: () => import("@/views/storyView/index.vue"),
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
