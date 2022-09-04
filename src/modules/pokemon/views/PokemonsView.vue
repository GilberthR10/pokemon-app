<template>
  <div class="pokemons-container">
    <!-- Lista de pokemones -->
    <pokemon-list />
    <!-- pokemon datatable -->
    <pokemon-table />
  </div>
</template>

<script setup>
import PokemonList from "@/modules/pokemon/components/PokemonList";
import PokemonTable from "@/modules/pokemon/components/PokemonTable";
import usePokemon from "../composables/usePokemon";

const { loadPokemons } = usePokemon();

loadPokemons();
</script>

<style scoped>
.pokemons-container {
  width: 100%;
  padding: 0 1rem;
}
</style>
