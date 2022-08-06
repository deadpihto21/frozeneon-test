<template>
  <div class="searchReusltGrid">
    <h2> Search results:</h2>
    <result-card v-for="card in searchResults" :card="card" />
    <div class="pagination-wrapper" v-if="total > 10">
      <pagination />
    </div>
  </div>

</template>
<script setup>
import {computed} from 'vue'
import {searchStore} from "../stores/search.ts";
import resultCard from "./resultCard.vue"
import pagination from "./pagination.vue"

const store = searchStore();

const searchResults = computed(() => {
  return store.result
})
const total = computed(() => {
  return store.totalResults
})

</script>
