<template>
  <div class="container" v-if="pokemons">
    <Fieldset>
      <template #legend>
        <span class="legend">Lista de Pokemones</span>
      </template>
      <div class="pokemon-list">
        <PokemonItem
          v-for="pokemon in pokemons"
          :key="pokemon.id"
          :pokemon="pokemon"
        />
      </div>
    </Fieldset>

    <div class="row">
      <Button label="Anterior" class="p-button-outlined p-button-secondary" />
      <Button label="Siguiente" class="p-button-secondary" />
    </div>
  </div>
</template>

<script setup>
import Fieldset from "primevue/fieldset";
import Button from "primevue/button";
import PokemonItem from "./PokemonItem.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const pokemons = computed(() => store.getters["pokemon/pokemonsList"]);
console.log(pokemons.value);
</script>

<style scoped>
.row {
  margin-top: 3rem;
  padding-left: 0.5rem;
  display: flex;
}
.p-button {
  width: 6rem;
  margin-right: 1rem;
}
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
