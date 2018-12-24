import Vue from "vue";
import VueRouter from "vue-router";
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import Contact from "./components/Contact.vue";
import About from "./components/About.vue";

Vue.use(VueRouter)

const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
];

const router = new VueRouter({
    routes,
    mode: "history"
});

new Vue({
    el: "#app",
    router,
    components: {
        Navbar
    }
});