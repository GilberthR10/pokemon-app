export const pokemonState = {
  pokemonsList: [
    {
      name: "bulbasaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      id: 1,
      types: [
        {
          slot: 1,
          type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        },
        {
          slot: 2,
          type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        },
      ],
      width: 69,
      height: 7,
    },
    {
      name: "ivysaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      id: 2,
      types: [
        {
          slot: 1,
          type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        },
        {
          slot: 2,
          type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        },
      ],
      width: 130,
      height: 10,
    },
    {
      name: "venusaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
      id: 3,
      types: [
        {
          slot: 1,
          type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        },
        {
          slot: 2,
          type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        },
      ],
      width: 1000,
      height: 20,
    },
    {
      name: "charmander",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
      id: 4,
      types: [
        {
          slot: 1,
          type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        },
      ],
      width: 85,
      height: 6,
    },
    {
      name: "charmeleon",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
      id: 5,
      types: [
        {
          slot: 1,
          type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        },
      ],
      width: 190,
      height: 11,
    },
    {
      name: "charizard",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",
      id: 6,
      types: [
        {
          slot: 1,
          type: { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        },
        {
          slot: 2,
          type: { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
        },
      ],
      width: 905,
      height: 17,
    },
    {
      name: "squirtle",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg",
      id: 7,
      types: [
        {
          slot: 1,
          type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        },
      ],
      width: 90,
      height: 5,
    },
    {
      name: "wartortle",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg",
      id: 8,
      types: [
        {
          slot: 1,
          type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        },
      ],
      width: 225,
      height: 10,
    },
    {
      name: "blastoise",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg",
      id: 9,
      types: [
        {
          slot: 1,
          type: { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
        },
      ],
      width: 855,
      height: 16,
    },
    {
      name: "caterpie",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg",
      id: 10,
      types: [
        {
          slot: 1,
          type: { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
        },
      ],
      width: 29,
      height: 3,
    },
  ],
  favoritesPokemons: [],
  pokemonsInfo: [],
  offset: 0,
  loading: false,
};
