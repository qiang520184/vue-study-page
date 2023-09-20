<template>
  <div class="list">
    <virtualList :list="items" :rows="rows">
      <template v-if="rows > 1" v-slot="{ data }">
        <MyComponent v-for="(i) in data" :source="i">
        </MyComponent>
      </template>

    </virtualList>
  </div>
</template>

<script setup lang="ts">
import virtualList from '@/components/virtual-list/index.vue'
import MyComponent from '@/components/virtual-list/item.vue'

import { computed } from 'vue'
const items = computed(() => {
  return getData(1000)
})

const itemHeight = 50

const rows = 4

const getData = (count: number) => {
  const data = []
  for (let index = 0; index < count; index++) {
    data.push({
      id: String(index + 1),
      text: Math.random().toString(16).substr(10)
    })
  }
  return data
}
const source = {
  id: '902',
  text: '0c865'
}
</script>
<style>
.list {
  width: 400px;
  height: 500px;
  margin: 0 auto;
}
</style>
