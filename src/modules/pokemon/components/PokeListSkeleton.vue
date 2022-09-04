<template>
  <Skeleton class="container mb-4" width="400px" height="62px">
    <Skeleton class="paragraph" />
    <Skeleton width="10rem" height="10rem" class="mb-2"></Skeleton>
  </Skeleton>
</template>

<script setup>
import Skeleton from "primevue/skeleton";
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
.paragraph {
  font-size: 1.2rem;
}
</style>
