import pokeApi from "@/services/pokeApi";
export const getPokemonsList = async ({ commit, state }) => {
  commit("setLoading", true);
  try {
    const response = await pokeApi.getPokemonList(state.offset);
    //get details from pokemon url and map it to a new object
    const pokemons = await Promise.all(
      response.data.results.map(async (pokemon) => {
        const pokemonDetails = await pokeApi.getPokemonDetails(pokemon);
        return {
          name: pokemonDetails.data.name,
          image:
            pokemonDetails.data.sprites.other.dream_world.front_default ||
            pokemonDetails.data.sprites.front_default,
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
};

//add a pokemon to favoritesPokemons
export const addPokemonToFavorites = ({ commit }, pokemon) => {
  commit("setFavoritesPokemons", pokemon);
};

//remove a pokemon from favoritesPokemons
export const removePokemonFromFavorites = ({ commit }, pokemon) => {
  commit("removePokemonFromFavorites", pokemon);
};

//add pokemon to pokemonsInfo
export const addPokemonToInfo = ({ commit }, pokemon) => {
  commit("setPokemonsInfo", pokemon);
};
//remove pokemon from pokemonsInfo
export const removePokemonFromInfo = ({ commit }, pokemon) => {
  commit("removePokemonFromInfo", pokemon);
};

//increment offset by given number
export const incrementOffset = ({ commit, state }, value) => {
  const offset = state.offset + value;
  commit("setOffset", offset);
};

//decrement offset by given number
export const decrementOffset = ({ commit, state }, value) => {
  if (state.offset === 0) return;
  const offset = state.offset - value;
  commit("setOffset", offset);
};
