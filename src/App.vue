<script setup lang="ts">
import results from './components/results.vue'
import search from './components/search.vue'
import modal from './components/modal.vue'
import {searchStore} from "./stores/search.ts";
const store = searchStore();
</script>

<template>
  <div class="app-wrapper">
    <header>
      <h1>NPM Packages Search</h1>
      <search />
    </header>

    <main>
      <results v-if="store.result.length > 0" />
    </main>

    <footer>
      <modal v-if="store.modalOpen" />
      Made by <a href="https://github.com/deadpihto21">Boris Sobolevskiy</a>
    </footer>
  </div>
</template>

<style scoped>

</style>
