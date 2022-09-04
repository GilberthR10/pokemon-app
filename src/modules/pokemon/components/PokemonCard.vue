<template>
  <Fieldset :class="types">
    <template #legend>
      <span class="legend">{{ pokemon.name }}</span>
    </template>
    <img :src="pokemon.image" alt="" />
  </Fieldset>
</template>

<script setup>
import Fieldset from "primevue/fieldset";
import { computed, toRefs } from "vue";

// eslint-disable-next-line no-undef
const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
});

const { pokemon } = toRefs(props);
//get pokemon type
const types = computed(() => pokemon.value.types[0].type.name);
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
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: 0.7;
}
.p-fieldset:hover {
  opacity: 1;
}

img {
  width: 10rem;
  height: 100%;
  object-fit: contain;
  max-width: 100%;
}
.bug {
  background: #aedf78;
}

.water {
  background: #43ccff;
}

.grass {
  background: #00ca91;
}

.fire {
  background: #e95c4d;
}

.normal {
  background: #a5a5a5;
}

.poison {
  background: #611380;
}

.electric {
  background: #f9be00;
}
.ground {
  background: #bfac21;
}

.fairy {
  background: #f87ea7;
}

.fighting {
  background: #e81319;
}
.psychic {
  background: #8a0532;
}

.ghost {
  background: #8e55a4;
}
.rock {
  background: #776a3e;
}
.ice {
  background: #66d1e5;
}
.flying {
  background: #5eb9b2;
}
.dark {
  background: #2d221c;
}

.dragon {
  background: #29036a;
}

.steel {
  background: #7b8e8a;
}
.unknown {
  background: #454545;
}

.shadow {
  background: #4f4f4f;
}
</style>
