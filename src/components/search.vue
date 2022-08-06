<template>
  <div class="searchBar">
    <input type="text" v-model="searchKey" @keyup="initSeacrh"/>
  </div>

</template>
<script setup>
import {computed, ref} from 'vue'
import {searchStore} from "../stores/search.ts";

const store = searchStore();
const searchKey = ref('')

function initSeacrh(){
  store.currentPagiantion = 0
  store.keyword = searchKey.value
  store.searchPackagesByName()
}
</script>
