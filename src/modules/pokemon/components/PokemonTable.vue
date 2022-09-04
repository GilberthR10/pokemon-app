<template>
  <div class="data-container" v-if="infoPokemon">
    <DataTable
      :value="infoPokemon"
      :paginator="true"
      :rows="5"
      :rowsPerPageOptions="[5, 10]"
      responsiveLayout="scroll"
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      currentPageReportTemplate="Mostrando registro del {first} al {last} de un total de {totalRecords} registros"
    >
      <Column field="code" header="Favorito">
        <template #body="slotProps">
          <Button
            label="Agregar"
            class="p-button-info"
            @click="addFavorites(slotProps.data)"
          />
        </template>
      </Column>
      <Column field="name" header="Nombre"></Column>
      <Column field="height" header="Alto"></Column>
      <Column field="width" header="Ancho"></Column>
      <Column field="image" header="Imagen">
        <template #body="slotProps">
          <img :src="slotProps.data.image" alt="pokemon" />
        </template>
      </Column>
      <Column :exportable="false" style="min-width: 8rem" header="Eliminar">
        <template #body="slotProps">
          <Button
            icon="pi pi-trash"
            class="p-button-rounded p-button-danger"
            @click="confirmDeletePokemon(slotProps.data)"
          />
        </template>
      </Column>
    </DataTable>
    <Dialog
      v-model:visible="deleteProductDialog"
      :style="{ width: '450px' }"
      header="Confirmar"
      :modal="true"
    >
      <div class="confirmation-content">
        <span v-if="pokemon"
          >Seguro que quieres borrar a <b>{{ pokemon.name }}</b
          >?</span
        >
      </div>
      <template #footer>
        <Button
          label="No"
          icon="pi pi-times"
          class="p-button-text"
          @click="deleteProductDialog = false"
        />
        <Button
          label="Yes"
          icon="pi pi-check"
          class="p-button-text"
          @click="deleteProduct"
        />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import { ref, computed } from "vue";
import { useStore } from "vuex";

const deleteProductDialog = ref(false);
const pokemon = ref(null);
const store = useStore();

const infoPokemon = computed(() => store.getters["pokemon/getPokemonsInfo"]);
const addFavorites = (data) => {
  store.dispatch("pokemon/addPokemonToFavorites", data);
};

const confirmDeletePokemon = (data) => {
  pokemon.value = data;
  deleteProductDialog.value = true;
};

const deleteProduct = () => {
  deleteProductDialog.value = false;
  store.dispatch("pokemon/removePokemonFromInfo", pokemon.value);
};
</script>

<style scoped>
.data-container {
  margin: 1rem auto;
  width: 100%;
}
</style>
