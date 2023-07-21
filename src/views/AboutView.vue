<template>
  <div class="about">
    <h1 ref="h1" @click="click">This is an about page</h1>
    <h2>{{ num }}</h2>

    <!-- <RouterLink to="/">to-Home</RouterLink> -->
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';

const num = ref(1)

const click = () => {
    num.value += 1
}

</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
