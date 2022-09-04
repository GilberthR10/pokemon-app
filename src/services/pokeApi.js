import API from "./API";
export default {
  getPokemonList(page) {
    return API().get(`pokemon?limit=10&offset=${page}`);
  },

  getPokemonDetails({ url }) {
    return API().get(url);
  },
};
