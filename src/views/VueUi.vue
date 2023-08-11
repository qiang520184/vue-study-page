<template>
    <div class="vue-ui">
        VueUi
        <div class="left">
            left
        </div>
        <div class="right">
            <iframe class="iframe" src="" frameborder="0">
                
            </iframe>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, onMounted, toRaw } from 'vue'



</script>

<style scoped lang="less">
    .vue-ui {
        width: 100%;
        height: 100%;
        display: flex;
        .left {
            flex: 7;
        }
        .right {
            flex: 3;
            display: flex;
            align-items: center;
            justify-content: center;
            .iframe {
                width: 430px;
                height: 932px;
                border: 1px solid red;
            }
        }
    }
</style>
