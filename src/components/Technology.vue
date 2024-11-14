<script setup>
const technologies = [
  {title: 'My GitHub Profile', url: 'https://github.com/GogaNotClown/', icon: 'ri-github-line'},
  {title: 'My Steam Profile', url: 'https://steamcommunity.com/id/awfulhere/', icon: 'ri-steam-line'},
  {title: 'My Figma Profile', url: 'https://figma.com/@rofl/', icon: 'ri-paint-line'},
];
</script>

<template>
  <li v-for="(tech, index) in technologies" :key="index">
    <a :href="tech.url" target="_blank" :title="tech.title" class="hero-link social">
      <i :class="tech.icon"></i>
    </a>
  </li>
</template>