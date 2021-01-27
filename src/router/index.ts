import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import ContentMap from "../views/mapview/ContentMap.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "ContentMap",
    component: ContentMap,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
