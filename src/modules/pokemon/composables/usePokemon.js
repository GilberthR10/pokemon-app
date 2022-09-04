import { computed } from "vue";
import { useStore } from "vuex";

const usePokemon = () => {
  const store = useStore();

  const loadPokemons = () => {
    store.dispatch("pokemon/getPokemonsList");
  };

  const addPokemonToFavorites = (pokemon) => {
    store.dispatch("pokemon/addPokemonToFavorites", pokemon);
  };
  const deletePokemonFromInfo = (pokemon) => {
    store.dispatch("pokemon/removePokemonFromInfo", pokemon);
  };

  const addPokemonToInfo = (pokemon) => {
    store.dispatch("pokemon/addPokemonToInfo", pokemon);
  };

  const handlePaginationPrevious = (num) => {
    store.dispatch("pokemon/decrementOffset", num);
    store.dispatch("pokemon/getPokemonsList");
  };

  const handlePaginationNext = (num) => {
    store.dispatch("pokemon/incrementOffset", num);
    store.dispatch("pokemon/getPokemonsList");
  };

  return {
    addPokemonToFavorites,
    addPokemonToInfo,
    deletePokemonFromInfo,
    handlePaginationPrevious,
    handlePaginationNext,
    loadPokemons,

    pokemonList: computed(() => store.getters["pokemon/pokemonsList"]),
    loading: computed(() => store.getters["pokemon/isLoading"]),
    infoPokemon: computed(() => store.getters["pokemon/getPokemonsInfo"]),
    offsetPage: computed(() => store.getters["pokemon/getOffset"]),
    pokemonsFavorites: computed(
      () => store.getters["pokemon/getFavoritesPokemons"]
    ),
  };
};

export default usePokemon;
