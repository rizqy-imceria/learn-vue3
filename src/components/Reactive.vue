<script setup>
import { reactive } from 'vue'
const cuy = reactive({
  nested: { count: 0 }
})

function mutateDeeply () {
  cuy.nested.count++
}
</script>
<template>
  <div>
    <button @click="mutateDeeply" class="bg-blue-500 text-white p-3">add cuy</button>
    <p>jumlah: {{ cuy.nested.count }}</p>
  </div>
</template>
