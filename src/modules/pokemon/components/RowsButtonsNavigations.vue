<template>
  <div class="row">
    <Button
      label="Anterior"
      class="p-button-outlined p-button-secondary"
      @click="handleBefore"
      v-if="!disabled"
    />
    <Button label="Siguiente" class="p-button-secondary" @click="handleNext" />
  </div>
</template>

<script setup>
import Button from "primevue/button";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const offset = computed(() => store.getters["pokemon/getOffset"]);
const disabled = computed(() => {
  return offset.value === 0;
});
const handleBefore = () => {
  store.dispatch("pokemon/decrementOffset", 10);
  store.dispatch("pokemon/getPokemonsList");
};
const handleNext = () => {
  store.dispatch("pokemon/incrementOffset", 10);
  store.dispatch("pokemon/getPokemonsList");
};
</script>

<style scoped>
.row {
  margin: 3rem 0;
  padding-left: 0.5rem;
  display: flex;
}
.p-button {
  width: 6rem;
  margin-right: 1rem;
}
</style>
