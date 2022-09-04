//set pokemonList
export const setPokemonsList = (state, pokemonsList) => {
  state.pokemonsList = [...pokemonsList];
};

export const setOffset = (state, page) => (state.offset = page);

export const setLoading = (state, loading) => (state.loading = loading);

//set  favoritesPokemons
export const setFavoritesPokemons = (state, pokemon) => {
  const isPokemon = state.favoritesPokemons.find(
    (favPokemon) => favPokemon.name === pokemon.name
  );
  if (!isPokemon) {
    state.favoritesPokemons.push(pokemon);
  }
};

//remove a pokemon from favoritesPokemons
export const removePokemonFromFavorites = (state, pokemon) => {
  state.favoritesPokemons = state.favoritesPokemons.filter(
    (favPokemon) => favPokemon.name !== pokemon.name
  );
};

//set  pokemonsInfo
export const setPokemonsInfo = (state, pokemon) => {
  const isPokemon = state.pokemonsInfo.find(
    (favPokemon) => favPokemon.name === pokemon.name
  );
  if (!isPokemon) {
    state.pokemonsInfo.push(pokemon);
  }
};

//remove a pokemon from pokemonsInfo
export const removePokemonFromInfo = (state, pokemon) => {
  state.pokemonsInfo = state.pokemonsInfo.filter(
    (favPokemon) => favPokemon.name !== pokemon.name
  );
};
