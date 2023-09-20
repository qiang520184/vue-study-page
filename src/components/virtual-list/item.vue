<template>
    <div class="item">
        <div>
            {{ source.id }} ---- {{ source.text }}
        </div>
      </div>
  </template>

<script setup lang="ts">
import { defineProps } from 'vue'
type Props = {
  source: {
    id: string
    text: string
  }
}
const props = defineProps<Props>()
console.log('%c [ props ]-18', 'font-size:13px; background:pink; color:#bf2c9f;', props)

</script>

<style scoped>
    .item {
        width: 25%;
        height: 50px;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .item:nth-child(2n) {
        background-color: #f8f8f8;
    }  
</style>
