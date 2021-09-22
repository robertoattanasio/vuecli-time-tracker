import { createApp } from "vue";
import App from "./App.vue";
import CardContainer from "./components/CardContainer.vue";
import UserContainer from "./components/UserContainer.vue";
import StatsContainer from "./components/StatsContainer.vue";

const app = createApp(App);

app.component("card-container", CardContainer);
app.component("user-container", UserContainer);
app.component("stats-container", StatsContainer);

app.mount("#app");
