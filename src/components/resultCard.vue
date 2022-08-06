<template>
  <ul class="resultCard">
    <li @click="openModal"> {{card.package.name}} </li>
  </ul>
</template>

<script setup>
import {searchStore} from "../stores/search.ts";

const props = defineProps({
  card: Object
})
const store = searchStore();

function openModal(){
  store.modalOpen = true;
  store.showPackage(props.card.package.name)
}
</script>
