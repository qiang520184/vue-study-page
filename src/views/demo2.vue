<template>
  <div class="wrap">
    <div :class="['card-box', { open: openStatus }]">
      <div :class="['card', { open: openStatus }]">
        <div class="padding-top"></div>
        <div class="card-content">
          <div class="title">
            <div class="title-content">
              <label @click="openStatus ? close() : open()"></label>
              The should 
              <em></em>
            </div>
            <div class="title-icon">
              <span>@</span>
            </div>
            <div class="icon" v-if="!openStatus" @click="openStatus ? close() : open()">---</div>
          </div>
          <div class="content" v-if="0">
            adv.大约，左右左左右左右左左右左右左左右左右左 左左右左右左左右左右左左右左右左左左右左右左左右左右左左右左右左
            <label @click="openStatus ? close() : open()"></label>
            <em></em>
          </div>
        </div>
        <!-- <div class="icon"  @click="openStatus ? close() : open()">---</div> -->
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
  height: 128px;
  border-radius: 8px;
  border: 2px solid #6babff;
}
.card-box.open {
  border-color: transparent;
}
.card.open {
  height: initial;
  min-height: 118px;
  border-radius: 8px;
  border: 2px solid #6babff;
  .title-content {
    -webkit-line-clamp: 999;
  }
  .content {
    -webkit-line-clamp: 999;
    em {
        background-color: transparent;
    }
    &::before {
      height: 100%;
    }
  }
  .icon {
    position: initial;
    width: initial;
    z-index: 299;
  }
}
.card {
  position: absolute;
  top: -2px;
  left: -2px;
  width: 310px;
  height: 128px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 2px solid transparent;
}
.card-content {
  flex: auto;
  //   overflow: hidden;
}
.padding-top {
  flex-shrink: 0;
  height: 16px;
}
.icon {
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 100;
  background-color: #fff;
  flex-shrink: 0;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  padding: 0 16px;
  flex: 1;
  display: flex;
  position: relative;
  z-index: 91;
  .title-content {
    position: relative;
    flex: 1;
    
    font-size: 18px;
    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
    font-weight: 700;
    color: #485766;
    line-height: 22px;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;
    label {
      float: right;
      clear: both;
    //   &::after {
    //     content: '展开';
    //     color: #006eff;
    //   }
    }
    /** 占位：占高度，宽度设为0px**/
    &::before {
      content: '';
      float: right;
      width: 0px;
      height: 100%;
      margin-bottom: -22px; /**和主体行高一样**/
    }
    /**遮挡方块：和.overflowtext-box背景颜色设置一样的，为了在不溢出文字的时候遮挡展开按钮**/
    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      // background-color: rgb(231, 255, 255);
      background-color: #fff;
    }
    em {
      position: absolute;
      left: 0;
      width: 310px;
      height: 100px;
    //   background-color: skyblue;
    //   background-color: #fff;
      z-index: 2000;
    }
  }
  &-icon {
    flex-shrink: 0;
    padding-left: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon {
    left: 0;
    top: calc(128px - 200%);
  }
}
.content {
  height: auto;
  padding: 8px 16px 28px;
  line-height: 22px;
  position: relative;
    z-index: 101;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  //   overflow: hidden;
  word-wrap: break-word;
  word-break: break-all;
  background-color: #fff;

  label {
    position: absolute;
    left: calc(50% - 11px);
    bottom: 0;
    width: 22px;
    height: 22px;
    z-index: 210;
    background-color: yellow;
    // &::after {
    //     content: '展';
    //     position: absolute;
    //     top: 20px;
    //     right: calc(310px / 2);
    //     color: #006eff;
    //     z-index: 9;
    // }
  }
  em {
    position: absolute;
    top: 30px;
    margin-top: 22px;
    left: 0;
    width: 100%;
    height: 100px;
    // background-color: pink;
    background-color: #fff;

    z-index: 200;
  }
  /** 占位：占高度，宽度设为0px**/
    // &::before {
    //       content: '';
    //       position: absolute;
    //     //   top: 30px;
    //       width: 0;
    //       height: 100%;
    //       background-color: #fff;
    //       z-index: 19;
    //       // float: right;
    //       // width: 0px;
    //       // height: 44px;
    //       margin-bottom: -22px; /**和主体行高一样**/
    //     }
  /**遮挡方块：和.overflowtext-box背景颜色设置一样的，为了在不溢出文字的时候遮挡展开按钮**/
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    // background-color: rgb(231, 255, 255);
    background-color: #fff;
  }
}
</style>
