<template>
  <span class="container" v-if="pokemon">
    <p>{{ pokemon.name }}</p>
    <Button label="Info" class="p-button-info" @click="addToFavorites" />
  </span>
</template>

<script setup>
import Button from "primevue/button";
import { useStore } from "vuex";

const store = useStore();

// eslint-disable-next-line no-undef
const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
});

const addToFavorites = () => {
  store.dispatch("pokemon/addPokemonToInfo", props.pokemon);
};
</script>

<style scoped>
.container {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-family: pokefont;
  width: 400px;
  max-width: 100%;
}
p {
  font-size: 1.2rem;
  font-weight: 100;
}
</style>
