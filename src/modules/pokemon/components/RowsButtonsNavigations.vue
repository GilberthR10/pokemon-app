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
import { computed } from "vue";
import usePokemon from "../composables/usePokemon";

const { handlePaginationPrevious, handlePaginationNext, offsetPage } =
  usePokemon();

const disabled = computed(() => {
  return offsetPage.value === 0;
});
const handleBefore = () => {
  handlePaginationPrevious(10);
};
const handleNext = () => {
  handlePaginationNext(10);
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
