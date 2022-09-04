import FavoritesView from "@/modules/pokemon/views/FavoritesView.vue";
import PokemonsView from "@/modules/pokemon/views/PokemonsView.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/pokemones",
    name: "pokemonsList",
    component: PokemonsView,
  },
  {
    path: "/favoritos",
    name: "favoritesPokemons",
    component: FavoritesView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
