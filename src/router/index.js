import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Counter from "../views/Counter.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/counter",
    name: "counter",
    component: Counter,
  },

  // redirct

  { path: "/counter", redirect: "/counter" },

  // catch all 404
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
