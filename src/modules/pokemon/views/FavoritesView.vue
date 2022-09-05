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
    <!-- Empty state for favorites -->
    <div v-if="!pokemonsFavorites.length" class="empty-state">
      <img
        src="https://i.pinimg.com/originals/1f/0b/85/1f0b85bb750807778b1fe2444527fbd2.gif"
        alt="Not found page"
      />
      <h3>Tu pokedex esta vacio</h3>
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
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 100%;
  margin: 0 auto;
  width: 400px;
}
img {
  width: 100%;
  max-width: 350px;
}
h3 {
  font-size: 2rem;
  margin: 0;
  font-weight: 100;
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
