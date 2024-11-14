<script setup>
import Avatar from "./components/Avatar.vue";
import Title from "./components/Title.vue";
import Desc from "./components/Desc.vue";
import Technologies from './components/Technologies.vue';
</script>

<template>
  <section class="hero">
    <div class="hero-blocks">
      <Avatar/>
      <div class="hero-text-block">
        <Title/>
        <Desc/>
        <Technologies/>
      </div>
    </div>
  </section>
</template>

<style src="./style.css"></style>
