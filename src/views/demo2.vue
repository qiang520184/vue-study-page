<template>
  <div class="wrap">
    <demoCard :en="en(1)" :cn="cn(1)"></demoCard>
    <demoCard :en="en(3)" :cn="cn(3)"></demoCard>
    <demoCard :en="en(3)" :cn="cn(7)"></demoCard>
    <demoCard :en="en(9)" :cn="cn(9)"></demoCard>

    <demoCard :en="en(1)" :cn="cn(1)"></demoCard>
    <demoCard :en="en(1)" :cn="cn(7)"></demoCard>
    <demoCard :en="en(3)" :cn="cn(7)"></demoCard>
    <demoCard :en="en(9)" :cn="cn(9)"></demoCard>

    <demoCard :en="en(1)" :cn="cn(1)"></demoCard>
    <demoCard :en="en(3)" :cn="cn(3)"></demoCard>
    <demoCard :en="en(7)" :cn="cn(7)"></demoCard>
    <demoCard :en="en(16)" ></demoCard>

  </div>
  <div class="control">
    <button @click="open">展开</button>
    <button @click="close">收起</button>
  </div>
</template>

<script lang="ts" setup>
import demoCard from './demoCard.vue'
import { computed, ref, onMounted, createApp, createElementBlock } from 'vue'

const enStr = 'The should'
const cnStr = 'adv.大约，左左左左左左左左左左'


const openStatus = ref(false)
const open = () => {
  console.log('open')
  openStatus.value = true
}
const en = function (num: number) {
  return enStr.padStart(num * enStr.length, 'The should')
}
const cn = function (num: number) {
  return cnStr.padStart(num * cnStr.length, 'The should')
}
const close = () => {
  console.log('close')
  openStatus.value = false
}
</script>

<style scoped lang="scss">
.wrap {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 30px;
}
.control {
  position: fixed;
  top: 500px;
}
</style>
