<template>
  <div class="not-found">
    <img
      src="https://i.pinimg.com/originals/1f/0b/85/1f0b85bb750807778b1fe2444527fbd2.gif"
      alt="Not found page"
    />
    <h1>404</h1>
    <h2>Pagina no encontrada</h2>
    <Button
      label="Regresar"
      class="p-button-raised p-button-secondary p-button-lg"
      @click="$router.push('/')"
    />
  </div>
</template>

<script setup>
import Button from "primevue/button";
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

h1 {
  font-size: 10rem;
  margin: 0;
}

h2 {
  font-size: 2rem;
  margin: 0;
}
button {
  margin-top: 2rem;
}
</style>
