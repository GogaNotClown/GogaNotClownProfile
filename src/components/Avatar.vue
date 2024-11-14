<script setup>
import {useUserData} from '../composables/useUserData';

const {avatarSrc} = useUserData();
</script>

<template>
  <img :src="avatarSrc" alt="Avatar" class="hero-img" v-if="avatarSrc"/>
</template>