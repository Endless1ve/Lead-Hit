import { createRouter, createWebHashHistory } from "vue-router";

import AuthView from "@/views/AuthView.vue";

const routes = [
  {
    path: "/",
    name: "auth",
    component: AuthView,
  },
  {
    path: "/analytics",
    component: () => import("@/views/AnalyticsView.vue"),
    name: "analytics",
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHashHistory("/Lead-Hit/"),
  routes,
});

export default router;
