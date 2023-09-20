<template>
  <div class="virtual-view">
    <template v-for="(item, index) in renderList" :key="`${rows} - ${index}`">
        <slot name="default" :data="item"></slot>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
const props = defineProps(['list', 'rows'])

const renderNum = 10
const renderList = computed(() => {
  if (props.rows > 1) {
    return convertTo2DArray(props.list.slice(0, renderNum * props.rows), props.rows)
  } else {
    return props.list.slice(0, 10)
  }
})
const convertTo2DArray = (arr, size = 2) => {
  return arr.reduce((acc, val, index) => {
    if (index % size === 0) {
      acc.push([])
    }
    acc[acc.length - 1].push(val)
    return acc
  }, [])
}

console.log('%c [  ]-32', 'font-size:13px; background:pink; color:#bf2c9f;', renderList.value)
console.log('%c [  ]-15', 'font-size:13px; background:pink; color:#bf2c9f;', props)
</script>

<style scoped lang="scss">
.virtual-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
}
</style>
