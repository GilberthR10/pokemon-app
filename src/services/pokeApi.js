import API from "./API";
export default {
  //get pokeapi paginated results 10 items per page
  getPokemonList(page) {
    return API().get(`pokemon?limit=10&offset=${page}`);
  },
  //get details from pokemon url and map it to a new object
  getPokemonDetails({ url }) {
    return API().get(url);
  },
};
