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

router.beforeEach((to, from, next) => {
  const storageKey = localStorage.getItem("leadhit-site-id");
  if (to.meta.requiresAuth && !storageKey) {
    next({ name: "auth" });
  } else {
    next();
  }
});

export default router;
