<template>
  <div class="pagination">
      Total results: {{store.totalResults}}
      <ul class="pagination-body">
        <li class="pagination-item" :class="{'active': page == store.currentPagiantion}" v-for="page in pagesCount" @click="setOffset(page)">
          {{page}}
        </li>
      </ul>
  </div>
</template>
<script setup>
import {computed, onMounted} from 'vue'
import {searchStore} from "../stores/search.ts";

const store = searchStore();

const pagesCount = Math.floor(store.totalResults/10)
function setOffset(page){
  store.currentPagiantion = page
  store.searchPackagesByName()
}
</script>
