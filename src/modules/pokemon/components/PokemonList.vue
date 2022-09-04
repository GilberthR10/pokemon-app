<template>
  <div class="container">
    <Fieldset>
      <template #legend>
        <span class="legend">Lista de Pokemones</span>
      </template>
      <div class="pokemon-list">
        <template v-if="!loading">
          <PokemonItem
            v-for="pokemon in pokemons"
            :key="pokemon.id"
            :pokemon="pokemon"
          />
        </template>
        <template v-else>
          <PokeListSkeleton v-for="i in 10" :key="i" />
        </template>
      </div>
    </Fieldset>

    <rows-buttons-navigations />
  </div>
</template>

<script setup>
import Fieldset from "primevue/fieldset";
import PokemonItem from "./PokemonItem.vue";
import PokeListSkeleton from "./PokeListSkeleton.vue";
import RowsButtonsNavigations from "./RowsButtonsNavigations.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const pokemons = computed(() => store.getters["pokemon/pokemonsList"]);
const loading = computed(() => store.getters["pokemon/isLoading"]);
</script>

<style scoped>
.pokemon-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(450px, 1fr));
  margin: 0 auto;
  max-width: 100%;
  gap: 1rem;
}
/* media query*/
@media (max-width: 700px) {
  .pokemon-list {
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 auto;
    max-width: 100%;
  }
}
</style>
