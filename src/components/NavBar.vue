<template>
  <div>
    <Menubar :model="items">
      <template #start>
        <img alt="logo" src="../assets/logo.png" height="40" class="mr-2" />
      </template>
    </Menubar>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Menubar from "primevue/menubar";

const items = ref([
  {
    label: "Inicio",
    to: "/",
  },
  {
    label: "Pokemones",
    to: { name: "pokemonsList" },
  },
  {
    label: "Favoritos",
    to: { name: "favoritesPokemons" },
  },
]);
</script>
<style scoped>
.p-component {
  font-family: pokefont;
  font-size: 1.8rem;
}
.p-menubar {
  justify-content: space-between;
}
</style>
