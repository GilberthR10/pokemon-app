import { shallowMount } from "@vue/test-utils";
import { createStore } from "vuex";
import pokemon from "@/modules/pokemon/store";
import { pokemonState } from "../mocks/test-pokemon-state";
import PokemonList from "@/modules/pokemon/components/PokemonList";
import RowsButtonsNavigations from "@/modules/pokemon/components/RowsButtonsNavigations";
import Fieldset from "primevue/fieldset";

const createVuexStore = (initialState) =>
  createStore({
    modules: {
      pokemon: {
        ...pokemon,
        state: { ...initialState },
      },
    },
  });

describe("PokemonList.vue", () => {
  test("should render the component", () => {
    const wrapper = shallowMount(PokemonList);
    expect(wrapper.exists()).toBe(true);
  });

  test("Should set initial state", () => {
    const store = createVuexStore(pokemonState);
    const { loading, offset, favoritesPokemons, pokemonsList } =
      store.state.pokemon;

    expect(loading).toBeFalsy();
    expect(offset).toEqual(0);
    expect(favoritesPokemons).toEqual([]);
    expect(pokemonsList.length).toBe(10);
  });

  test("shoul renders two child elements", () => {
    const wrapper = shallowMount(PokemonList);
    expect(wrapper.findComponent(RowsButtonsNavigations).exists()).toBe(true);
    expect(wrapper.findComponent(Fieldset).exists()).toBe(true);
  });
});
