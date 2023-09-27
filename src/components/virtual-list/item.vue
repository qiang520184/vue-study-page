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
defineProps<Props>()

</script>

<style scoped lang="scss">
    .item {
        /* height: 50px; */
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid red;
    }
    // .item:nth-child(2n) {
    //     background-color: #f8f8f8;
    // }  
</style>
