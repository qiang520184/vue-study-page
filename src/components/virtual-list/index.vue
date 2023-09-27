<template>
  <div class="virtual-view" ref="viewRef" @scroll="scroll">
    <div class="virtual-view-scroll" :style="cssStyle">
    </div>
    <div class="virtual-view-transform" ref="transformRef" :style="transformStyle">
        <div class="virtual-view-item">
            <template v-for="(item, index) in renderList" :key="`${rows} - ${index}`">
                <slot name="default" :data="item"></slot>
            </template>
        </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps,withDefaults, onMounted, ref } from 'vue'
type Props = {
    list: [],
    rows: number,
    itemHeight: number,
    viewHeight: number
}
const props = withDefaults(defineProps<Props>(), {
    list: () => [],
    rows: 1,
    itemHeight: 100,
    viewHeight: 100
})

const viewRef = ref<HTMLElement>()

const transformRef = ref<HTMLElement>()

// 渲染的个数
const renderCount = computed(() =>{
  return Math.ceil(props.viewHeight / props.itemHeight)
})

const scrollTop = ref(0)

const translate = ref(0)

const dataList= computed(() => {
    if (props.rows > 1) {
        return convertTo2DArray(props.list, props.rows)
    } else {
        return props.list
    }
})

const scrollViewHeight = computed(() =>{
    return dataList.value.length * props.itemHeight
}) 

const cssStyle = computed(() => {
  return {
    'padding-bottom': `${scrollViewHeight.value}px`
  }
})

const transformStyle = computed(() => {
  return {
    'transform': `translateY( ${translate.value}px)`
  }
})

// 渲染的数组
const renderList = ref([])
// 数组转二维数组
const convertTo2DArray = function <T>(arr: T[], size: number): T[][] {
  return arr.reduce((acc: T[][], val: T, index: number) => {
    if (index % size === 0) {
      acc.push([])
    }
    acc[acc.length - 1].push(val)
    return acc
  }, [])
}
type ThrottleFunction = (...args: any[]) => void

const throttle = function (func: ThrottleFunction, delay: number): ThrottleFunction {
  let timerId: ReturnType<typeof setTimeout> | null = null
  return function () {
    if (!timerId) {
      timerId = setTimeout(() => {
        func.apply(this, arguments)
        timerId = null
      }, delay)
    }
  }
}

const scroll = throttle(() => {

    scrollTop.value = viewRef.value?.scrollTop || 0

    let showStart = Math.floor(scrollTop.value / props.itemHeight)

    let start = Math.max(0, showStart - renderCount.value);
    
    let end = Math.min(dataList.value.length, showStart + renderCount.value * 2)

    renderList.value = dataList.value.slice(start, end) as []

    translate.value = start * props.itemHeight

    console.log(
        '%c [  ]-45',
        'font-size:13px; background:pink; color:#bf2c9f;',
        renderCount.value,
        scrollViewHeight.value,
        scrollTop.value,
        showStart,
        start, 
        end
    )
}, 10)
onMounted(() => {
  scroll();
})

</script>

<style scoped lang="scss">
.virtual-view {
    position: relative;
    width: 100%;
    height: 1000px;
    overflow: auto;
    overflow-y: overlay;
    overflow-x: overlay;
}
.virtual-view-scroll {
    width: 100%;
}
.virtual-view-transform {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.virtual-view-item { 
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
</style>
