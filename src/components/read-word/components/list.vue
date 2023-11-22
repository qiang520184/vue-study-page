<template>
    <div :class="['list-box', { show: status, hidden: !status }]" />
    <div :class="['list', { show: status, hidden: !status }]">
        <div ref="refMap" class="list-scroll">
            <DynamicScroller
                :items="newList"
                :min-item-size="144"
                :prerender="10"
                :emit-update="true"
                class="scroller"
                @resize="onResize"
                @onUpdate="onUpdate"
                style="height: 100%;"
            >
                <template v-slot="{ item, index, active }">
                <DynamicScrollerItem
                    :item="item"
                    :active="active"
                    :data-index="index"
                >
                    <div :class="['scroll-item', {current: currentIndex === index}]" @click="itemClick(item, index, active)" >
                        <div>{{ item.entry + item.entry }}</div>
                        <p></p>
                    </div>
                </DynamicScrollerItem>
                </template>
            </DynamicScroller>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { computed, ref, defineExpose, nextTick, watch } from 'vue'
import { DynamicScroller, DynamicScrollerItem } from "vue-virtual-scroller" 
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

const refMap = ref()
type Item = {
    en : string
}
interface DefineProps {
    list: Item[],
    status: boolean
    currentIndex: number,
    watchIndexScrollToView: boolean
}
interface DefineEmits {
    (event: 'update:index', index: number): void,
}
const emit = defineEmits<DefineEmits>()

const props = withDefaults(defineProps<DefineProps>(), {
    status: true,
    currentIndex: 0,
})
const newList = computed(() => {
    return props.list.map((item, index) => {
        return {
           ...item,
            id: index
        }
    })
})

const itemClick = (item, index, active) => {

    console.log('%c [  ]-85', 'font-size:13px; background:pink; color:#bf2c9f;', item, index, active)
    // emit('update:index', index)
}

const onResize =  () => {
      console.log('resize')
      console.log('%c [ resize ]-74', 'font-size:13px; background:pink; color:#bf2c9f;')
}

const onUpdate = (viewStartIndex, viewEndIndex, visibleStartIndex, visibleEndIndex) => {

    console.log('%c [ onUpdate ]-78', 'font-size:13px; background:pink; color:#bf2c9f;', viewStartIndex, viewEndIndex, visibleStartIndex, visibleEndIndex)
//   this.updateParts.viewStartIdx = viewStartIndex
//   this.updateParts.viewEndIdx = viewEndIndex
//   this.updateParts.visibleStartIdx = visibleStartIndex
//   this.updateParts.visibleEndIdx = visibleEndIndex
}

if (props.watchIndexScrollToView) {
    watch(() => props.currentIndex, () => {
        nextTick(() => {
            scrollIntoView()
        })
    })
}
const scrollIntoView = () => {
    const current = refMap.value.getElementsByClassName('current')[0]
    
    console.log('%c [  ]-95', 'font-size:13px; background:red; color:#bf2c9f;', refMap.value.scrollTop)
    current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
}
// const itemClick = (index) => {
//     emit('update:index', index)
// }
defineExpose({
    scrollIntoView,
})
</script>

<style scoped lang="scss">
    .list {
        position: fixed;
        top: 0;
        right: 0;
        width: 580px;
        height: calc(100vh - 140px);
        background: #095238;
        padding-top: 40px;
        padding-bottom: 100px;
        border-radius: 20px 0 0 20px;
        transform: translateX(100%);
        &-scroll {
            height: 100%;
            overflow: auto;
            overflow: overlay;
            .scroll-item {
                // width: 500px;
                display: flex;
                flex-direction: column;
                margin-left: 40px;
                font-size: 60px;
                font-family: Microsoft YaHei-Regular, Microsoft YaHei;
                font-weight: 400;
                color: #FFFFFF;
                display: flex;
                align-items: center;
                word-break: break-word;
                div {
                    width: calc(100% - 24px);
                    min-height: 127px;
                    padding: 24px 30px;
                    border-radius: 20px;
                    background: #467962;
                }
                p {
                    flex-shrink: 0;
                    width: 100%;
                    height: 28px;
                }
            }
            .current {
                div {
                    background: #1EB562;
                }
            }
        }
        ::-webkit-scrollbar {
        /*滚动条整体样式*/
            width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
            height: 1px;
        }
        ::-webkit-scrollbar-thumb {
            /*滚动条里面小方块*/
            background-color: rgba(0, 0, 0, .1);
            border-radius: .04rem;
        }
    }
    @keyframes showBox {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(0%);
            // right: fit-content;
        }
    }
    @keyframes hiddenBox {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(100%);
            width: 0;
            overflow: hidden;
        }
    }
    .show {
        animation: showBox 0.3s ease-in-out forwards;
    }
    .hidden {
        animation: hiddenBox 0.3s ease-in-out forwards;
    }
    .list-box {
        flex-shrink: 0;
        width: 6.08rem;
        height: 100%;
        
    }
    .list::before {
        content: '';
        flex-shrink: 0;
        width: 580px;
        height: 100px;
        background: red;
    }
    
</style>
