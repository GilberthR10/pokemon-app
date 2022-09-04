<template>
  <div class="home">
    <NavBar />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>
<script setup>
import NavBar from "@/components/NavBar.vue";
</script>
<style>
html,
body {
  margin: 0;
  padding: 0;
}
body {
  height: 100vh;
  width: 100vw;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.p-button-info {
  width: 100px;
  font-family: pokefont;
}
.home {
  display: grid;
  grid-template-rows: 50px 1fr;
  height: 100vh;
  max-width: 1220px;
  margin: 0 auto;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 4rem;
  padding-bottom: 4rem;
}
.fade-enter-active {
  animation: fadeIn;
  animation-duration: 0.5s;
}

.fade-leave-active {
  animation: fadeOutLeft;
  animation-duration: 0.5s;
}
</style>
