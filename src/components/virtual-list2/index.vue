<template>
  <div class="virtual-view" ref="viewRef" @scroll="scroll">
    <div class="virtual-view-scroll" >
    </div>
    <div class="virtual-view-transform" ref="transformRef">
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
    list: any[],
    rows: number,
    itemHeight: number,
}
const props = withDefaults(defineProps<Props>(), {
    list: () => [],
    rows: 1,
    itemHeight: 100,
})

const renderList = ref([])
const viewHeight = ref(0)
const viewRef = ref<HTMLElement>()

const transformRef = ref<HTMLElement>()

const scrollTop = ref(0)

const translate = ref(0)

const scroll = () => {

}
onMounted(() => {
    viewHeight.value = viewRef.value?.offsetHeight || 0
    console.log('%c [  ]-44', 'font-size:13px; background:pink; color:#bf2c9f;', viewRef.value, viewHeight)
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
