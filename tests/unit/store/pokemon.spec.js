import { createStore } from "vuex";
import pokemon from "@/modules/pokemon/store";
import { pokemonState } from "../mocks/test-pokemon-state";

const createVuexStore = (initialState) =>
  createStore({
    modules: {
      pokemon: {
        ...pokemon,
        state: { ...initialState },
      },
    },
  });

describe("state pokemon", () => {
  test("mutation: set Pokemons to favorites", () => {
    const store = createVuexStore(pokemonState);
    store.commit("pokemon/setFavoritesPokemons", {
      name: "bulbasaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      id: 1,
      types: [
        {
          slot: 1,
          type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        },
        {
          slot: 2,
          type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        },
      ],
      width: 69,
      height: 7,
    });
    store.commit("pokemon/setFavoritesPokemons", {
      name: "picachu",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      id: 2,
      types: [
        {
          slot: 1,
          type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        },
        {
          slot: 2,
          type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        },
      ],
      width: 69,
      height: 7,
    });
    const { favoritesPokemons } = store.state.pokemon;
    expect(favoritesPokemons.length).toEqual(2);
  });

  test("Should increment offset state", () => {
    const store = createVuexStore(pokemonState);
    store.commit("pokemon/setOffset", 10);
    expect(store.state.pokemon.offset).toEqual(10);
  });
});
