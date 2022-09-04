import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PrimeVue from "primevue/config";

import "primevue/resources/themes/bootstrap4-light-blue/theme.css"; //themes
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "./index.css";

createApp(App).use(store).use(router).use(PrimeVue).mount("#app");
