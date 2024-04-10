import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
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
