import FavoritesView from "@/modules/pokemon/views/FavoritesView.vue";
import PokemonsView from "@/modules/pokemon/views/PokemonsView.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFoundVue from "@/views/NotFound.vue";

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
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: NotFoundVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
