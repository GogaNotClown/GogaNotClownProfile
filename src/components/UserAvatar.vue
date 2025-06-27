<script setup lang="ts">
import { useUserData } from '../composables/useUserData'

const { avatarSrc } = useUserData()
</script>

<template>
  <img :src="avatarSrc" alt="Avatar" class="w-[200px] rounded-xl">
</template>
