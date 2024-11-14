<script setup>
import { useUserData } from '../composables/useUserData';
const { username } = useUserData();
</script>

<template>
  <h1 class="hero-title">{{ username }}</h1>
</template>