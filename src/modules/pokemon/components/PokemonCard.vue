<template>
  <Fieldset>
    <template #legend>
      <span class="legend">{{ pokemon.name }}</span>
    </template>
    <img :src="pokemon.image" alt="" />
  </Fieldset>
</template>

<script setup>
import Fieldset from "primevue/fieldset";

// eslint-disable-next-line no-undef
defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.p-fieldset {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  margin: 1rem;
  border-radius: 10px;
}
img {
  width: 20rem;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
</style>
