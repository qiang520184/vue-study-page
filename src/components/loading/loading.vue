<template>
    <div class="loading_box" v-if="show">
        <img class="img" src="./images/loading.gif" alt="">
        <p class="text">{{ text }}</p>
    </div>
</template>
<script lang="ts" name="RequestLoading" setup>
import { defineProps, withDefaults, ref, defineExpose } from 'vue'

interface DefineProps {
    text: string
}
withDefaults(defineProps<DefineProps>(), {
    text: '努力加载中...',
})
const show = ref(false)

const showLoading = () => {
    
    console.log('%c [  ]-20', 'font-size:13px; background:pink; color:#bf2c9f;', 1)
    show.value = true
}

const hiddenLoading = (cb) => {

    console.log('%c [  ]-26', 'font-size:13px; background:pink; color:#bf2c9f;', 2)
    show.value = false
    cb && cb()
}

defineExpose({
    showLoading,
    hiddenLoading
})
</script>
<style lang="scss" scoped>
    .loading_box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-150px, -150px, 0);
        width: 300px;
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .img {
            display: flex;
            width: 160px;
            height: 160px;
        }
        .text {
            margin-top: 6px;
            height: 31px;
            font-size: 24px;
            font-family: MicrosoftYaHei;
            color: #B0BAC5;
            line-height: 31px;
        }
    }
</style>
