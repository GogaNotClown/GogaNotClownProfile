<script setup lang="ts">
import type { Component } from 'vue'
import { RiGithubLine, RiSteamLine, RiFigmaLine } from '@remixicon/vue'

interface LinkTechnologies {
  title: string
  url: string
  icon: Component
}

const technologies: LinkTechnologies[] = [
  { title: 'My GitHub Profile', url: 'https://github.com/GogaNotClown/', icon: RiGithubLine },
  { title: 'My Steam Profile', url: 'https://steamcommunity.com/id/awfulhere/', icon: RiSteamLine },
  { title: 'My Figma Profile', url: 'https://www.figma.com/@pursuitofdreams', icon: RiFigmaLine },
];
</script>

<template>
  <li v-for="technology in technologies" :key="technology.url">
    <a :href="technology.url" target="_blank" :title="technology.title"
      class="text-white font-medium text-lg transition-all duration-300 ease-in-out hover:opacity-65">
      <component :is="technology.icon" color="white" size="23px" />
    </a>
  </li>
</template>
