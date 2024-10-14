import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import StreamMergerPush from "../views/stream-merger-push.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/stream-merger-push",
    name: "stream-merger-push",
    component: StreamMergerPush,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
