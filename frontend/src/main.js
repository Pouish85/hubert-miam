import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./pages/Home.vue";
import restaurantPage from "./pages/RestaurantPage.vue";
import restaurantTypePage from "./pages/RestaurantTypePage.vue";

library.add(faBicycle);

const routes = [
    { path: "/", component: Home },
    {
        name: "Restaurant",
        path: "/restaurant/:restaurantName",
        component: restaurantPage,
    },
    {
        name: "RestaurantType",
        path: "/restaurantType/:countryName",
        component: restaurantTypePage,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const vueApp = createApp(App);

vueApp.use(router);

vueApp.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
