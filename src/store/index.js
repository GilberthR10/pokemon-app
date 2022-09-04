import { createStore } from "vuex";
import pokemon from "../modules/pokemon/store";

export default createStore({
  modules: {
    pokemon,
  },
});
