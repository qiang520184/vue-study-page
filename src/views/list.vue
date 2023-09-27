<template>
  <div class="list">
    <virtualList :list="items" :rows="rows" :itemHeight="itemHeight" :viewHeight="1000">
      <template v-slot="{ data }">
        <MyComponent
          :style="`width: ${100 / rows}%; height:${itemHeight}px`"
          v-for="(itemData, index) in objectToArray(data)"
          :key="index"
          :source="itemData"
        >
        </MyComponent>
      </template>
    </virtualList>

    <!-- <View :list="items" :itemHeight="itemHeight" :viewHeight="1000"> 
        <template v-slot="{item}">
            <MyComponent
                :style="`width: ${100}%; height:${itemHeight}px`"
                :source="item"
            >
            </MyComponent>
      </template>
    </View> -->
  </div>
  <div class="rows">
    <button @click="rows = 1" :class="{ Highlight: rows === 1 }">1</button>
    <button @click="rows = 2" :class="{ Highlight: rows === 2 }">2</button>
    <button @click="rows = 3" :class="{ Highlight: rows === 3 }">3</button>
    <button @click="rows = 4" :class="{ Highlight: rows === 4 }">4</button>
    <button @click="rows = 5" :class="{ Highlight: rows === 5 }">5</button>
  </div>
</template>

<script setup lang="ts">
import virtualList from '@/components/virtual-list/index.vue'

import View from '@/components/virtual-list/a.vue'


import MyComponent from '@/components/virtual-list/item.vue'

import { computed, ref } from 'vue'
const items = computed(() => {
  return getData(20000) as []
})

const itemHeight = 100

const rows = ref(5)

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
const objectToArray = function <T>(data: T): T[] {
  return Array.isArray(data) ? data : [data]
}
</script>
<style>
.list {
  width: 1002px;
  height: 1002px;
  border: 1px solid red;
}
.Highlight {
    color: red;
    background-color: pink;
}
</style>
