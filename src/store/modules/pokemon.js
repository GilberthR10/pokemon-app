import pokeApi from "@/services/pokeApi";

const state = {
  pokemonsList: [],
  favoritesPokemons: [],
  pokemonsInfo: [],
  offset: 0,
  loading: false,
};
const getters = {
  pokemonsList: (state) => state.pokemonsList,
  getOffset: (state) => state.offset,
  loading: (state) => state.loading,
  getFavoritesPokemons: (state) => state.favoritesPokemons,
  getPokemonsInfo: (state) => state.pokemonsInfo,
};
const actions = {
  async getPokemonsList({ commit, state }) {
    commit("setLoading", true);
    try {
      console.log(state.offset);
      const response = await pokeApi.getPokemonList(state.offset);
      //get details from pokemon url and map it to a new object
      const pokemons = await Promise.all(
        state.pokemonsList
          .concat(response.data.results)
          .map(async (pokemon) => {
            const pokemonDetails = await pokeApi.getPokemonDetails(pokemon);
            return {
              name: pokemonDetails.data.name,
              /*               image:
                pokemonDetails.data.sprites.other.dream_world.front_default, */
              image: pokemonDetails.data.sprites.front_default,
              id: pokemonDetails.data.id,
              types: pokemonDetails.data.types,
              width: pokemonDetails.data.weight,
              height: pokemonDetails.data.height,
            };
          })
      );
      commit("setPokemonsList", pokemons);
    } catch (error) {
      console.log(error);
    } finally {
      commit("setLoading", false);
    }
  },
  //add a pokemon to favoritesPokemons
  addPokemonToFavorites({ commit }, pokemon) {
    commit("setFavoritesPokemons", pokemon);
  },
  //remove a pokemon from favoritesPokemons
  removePokemonFromFavorites({ commit }, pokemon) {
    commit("removePokemonFromFavorites", pokemon);
  },

  //add pokemon to pokemonsInfo
  addPokemonToInfo({ commit }, pokemon) {
    commit("setPokemonsInfo", pokemon);
  },
  //remove pokemon from pokemonsInfo
  removePokemonFromInfo({ commit }, pokemon) {
    commit("removePokemonFromInfo", pokemon);
  },

  //increment offset by 10
  incrementOffset({ commit, state }, value) {
    const offset = state.offset + value;
    commit("setOffset", offset);
  },

  //decrement offset by 10
  decrementOffset({ commit, state }, value) {
    if (state.offset === 0) return;
    const offset = state.offset - value;
    commit("setOffset", offset);
  },
};
const mutations = {
  //set pokemonList
  setPokemonsList: (state, pokemonsList) => (state.pokemonsList = pokemonsList),

  setOffset: (state, page) => (state.offset = page),

  setLoading: (state, loading) => (state.loading = loading),

  //set  favoritesPokemons
  setFavoritesPokemons: (state, pokemon) => {
    const isPokemon = state.favoritesPokemons.find(
      (favPokemon) => favPokemon.name === pokemon.name
    );
    if (!isPokemon) {
      state.favoritesPokemons.push(pokemon);
    }
  },

  //remove a pokemon from favoritesPokemons
  removePokemonFromFavorites: (state, pokemon) => {
    state.favoritesPokemons = state.favoritesPokemons.filter(
      (favPokemon) => favPokemon.name !== pokemon.name
    );
  },

  //set  pokemonsInfo
  setPokemonsInfo: (state, pokemon) => {
    const isPokemon = state.pokemonsInfo.find(
      (favPokemon) => favPokemon.name === pokemon.name
    );
    if (!isPokemon) {
      state.pokemonsInfo.push(pokemon);
    }
  },

  //remove a pokemon from pokemonsInfo
  removePokemonFromInfo: (state, pokemon) => {
    state.pokemonsInfo = state.pokemonsInfo.filter(
      (favPokemon) => favPokemon.name !== pokemon.name
    );
  },
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
