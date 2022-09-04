import { createStore } from "vuex";
import pokemon from "./modules/pokemon";

export default createStore({
  modules: {
    pokemon,
  },
});
