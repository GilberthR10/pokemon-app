<template>
  <div class="container">
    <h1>Tus Favoritos</h1>
    <div class="pokemon-list">
      <PokemonCard
        v-for="pokemon in pokemonsFavorites"
        :key="pokemon.id"
        :pokemon="pokemon"
      />
    </div>
  </div>
</template>

<script setup>
import PokemonCard from "../components/PokemonCard.vue";
import usePokemon from "../composables/usePokemon";

const { pokemonsFavorites } = usePokemon();
</script>

<style scoped>
.container {
  width: 100%;
  padding: 0 1rem;
}
.pokemon-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
