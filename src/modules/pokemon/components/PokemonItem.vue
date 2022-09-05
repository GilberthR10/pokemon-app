<template>
  <span class="pokemon-list__item" v-if="pokemon">
    <p>{{ pokemon.name }}</p>
    <Button label="Info" class="p-button-info" @click="addPokemonToDataTable" />
  </span>
</template>

<script setup>
import Button from "primevue/button";
import usePokemon from "../composables/usePokemon";

const { addPokemonToInfo } = usePokemon();

// eslint-disable-next-line no-undef
const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
});

const addPokemonToDataTable = () => {
  addPokemonToInfo(props.pokemon);
};
</script>

<style scoped>
.pokemon-list__item {
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
