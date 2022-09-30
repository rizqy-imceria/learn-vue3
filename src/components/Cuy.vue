<script setup lang="ts">
import { ref } from 'vue'
const show = ref(false)
const showAction = ref(false)

</script>
<template>
  <div class="fixed inset-0">
    <div class="bg-[#ff7900] flex justify-between text-white">
      <div class="p-3">
        Logo
      </div>
      <div
        @mouseover="showAction = true"
        @mouseleave="showAction = false"
        class="p-3 cursor-pointer"
      >
        <div>
          Actions
        </div>
        <Transition>
          <div v-if="showAction" class="bg-[#ff7900] text-white absolute right-0 top-12">
            <div class="p-2">Username</div>
            <div class="p-2">Logout</div>
          </div>
        </Transition>
      </div>
    </div>
    <button @click="show = !show">Toggle</button>
  </div>
</template>
<style>
  .v-enter-active {
    transition: all 0.3s ease-out;
  }

  .v-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .v-enter-from {
    transform: translateY(-20px);
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

</style>
