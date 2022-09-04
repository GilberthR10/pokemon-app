<template>
  <div class="pokemons-container">
    <!-- Lista de pokemones -->
    <pokemon-list />
    <!-- pokemon table -->
    <pokemon-table />
  </div>
</template>

<script setup>
import PokemonList from "@/modules/pokemon/components/PokemonList";
import PokemonTable from "@/modules/pokemon/components/PokemonTable";
/* import { computed } from "vue"; */
import { useStore } from "vuex";

const store = useStore();
const loadPokemons = () => store.dispatch("pokemon/getPokemonsList");
// get getter
/* const loading = computed(() => store.getters["pokemon/isLoading"]); */
loadPokemons();
</script>

<style scoped>
.pokemons-container {
  width: 100%;
  padding: 0 1rem;
}
</style>
