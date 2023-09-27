<template>
  <div class="wrap">
    <div class="card-box">
      <div :class="['card', { open: openStatus }]">
        <div class="padding-top"></div>
        <div class="title">
          <div class="title-content">
            <label @click="openStatus ? close() : open()"></label>
            The should beThe
            be
          </div>
          <div class="title-icon">
            <span>@</span>
          </div>
        </div>
        <div class="content" v-if="1">
          <label @click="openStatus ? close() : open()"></label>
          adv.大约，左右到处，处处，各处将近，几乎prep.关于，对于；涉及方面在到处，在各处涉及方面在到处，在各处涉及方面在到处，在各处涉及方面在到处，在各处涉及方面在到处，在各处
        </div>
        <div class="icon">---</div>
      </div>
    </div>
  </div>
  <div class="control">
    <button @click="open">展开</button>
    <button @click="close">收起</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const openStatus = ref(false)
const open = () => {
  console.log('open')
  openStatus.value = true
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
.card-box {
  position: relative;
  width: 310px;
  height: 118px;
  border-radius: 8px;
  border: 2px solid #6babff;
}
.card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 118px;
  display: flex;
  flex-direction: column;
}
.padding-top {
  flex-shrink: 0;
  height: 16px;
}
.icon {
  flex-shrink: 0;
  height: 28px;

  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
    padding:0 16px;
    flex: 1;
    display: flex;
   
    &-content {
        flex: 1;
        height: 22px;
        font-size: 18px;
        font-family: Microsoft YaHei-Bold, Microsoft YaHei;
        font-weight: 700;
        color: #485766;
        line-height: 22px
    }
    &-icon {
        flex-shrink: 0;
        padding-left:16px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
.content {
    flex: auto;
    padding: 8px 16px 0;
}
</style>
