<script setup lang="ts">
import { useUserData } from '../composables/useUserData'

const { username } = useUserData()
</script>

<template>
  <h1 class="text-white font-bold text-2xl">{{ username }}</h1>
</template>
