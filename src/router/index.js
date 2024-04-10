import { createRouter, createWebHashHistory } from "vue-router";

import AuthView from "@/views/AuthView.vue";

const routes = [
  {
    path: "/",
    name: "auth",
    component: AuthView,
  },
];

const router = createRouter({
  history: createWebHashHistory("/Lead-Hit/"),
  routes,
});

export default router;
