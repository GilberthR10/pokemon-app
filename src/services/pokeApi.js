import API from "./API";
import authHeader from "./authHeader";
export default {
  getPokemonList(page) {
    return API().get(`pokemon?limit=10&offset=${page}`);
  },

  getPokemonDetails({ url }) {
    return API().get(url);
  },

  getUserToken() {
    return API().get(/*API URL */ { headers: authHeader() });
  },
};
