<template>
  <div class="resultModal">
    <div class="resultModal-close" @click='closeModal'></div>
    <div class="resultModal-body">
      <h3>Package Name : <i>{{currentPackage.name}}</i></h3>
      <dl v-for="(value, key) in currentPackage">
        <dt>{{key}}</dt>
        <dd>{{value}}</dd>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import {searchStore} from "../stores/search.ts";

const store = searchStore();
const props = defineProps({
  currentPackage: String
})

const currentPackage = computed(() => {
  return store.currentPackage
})

function closeModal(){
  store.modalOpen = false;
}

</script>
