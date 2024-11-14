<script setup>
import {useUserData} from '../composables/useUserData';

const {desc, company, companyName} = useUserData();
</script>

<template>
  <p class="hero-desc">{{ desc }}</p>
  <a :href="company" target="_blank" class="hero-company">
    @{{ companyName }}
  </a>
</template>