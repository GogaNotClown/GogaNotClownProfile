<script setup lang="ts">
import UserAvatar from './components/UserAvatar.vue'
import UserName from './components/UserName.vue'
import UserDesc from './components/UserDesc.vue'
import UserSocialLinks from './components/UserSocialLinks.vue'
</script>

<template>
  <section class="flex items-center justify-center h-dvh">
    <div class="flex flex-wrap justify-center items-center gap-5">
      <UserAvatar />
      <div class="flex flex-col gap-1.5">
        <UserName />
        <UserDesc />
        <UserSocialLinks />
      </div>
    </div>
  </section>
</template>
