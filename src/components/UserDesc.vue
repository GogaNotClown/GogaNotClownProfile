<script setup lang="ts">
import { useUserData } from '../composables/useUserData'

const { desc, company, companyName } = useUserData()
</script>

<template>
  <p class="text-white font-bold text-base">{{ desc }}</p>
  <a :href="company" target="_blank"
    class="text-center lg:text-left text-white font-bold text-base transition-all duration-300 ease-in-out hover:opacity-85">
    @{{ companyName }}
  </a>
</template>
