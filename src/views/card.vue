<template>
  <div class="wrap">
    <div class="card-box">
      <div :class="['card']">
        <div class="card-padding">
          <div class="title">
            <span class="title-content">
              The ________ should be carefully prepared in order to give the school an overall and
              accurate summary of your abilities.
            </span>
            <div class="title-icon">
              <span>@</span>
            </div>
          </div>
          <div class="content">
            adv.大约，左右到处，处处，各处将近，几乎prep.关于，对于；涉及……方面在……到处，在……各处

          </div>
        </div>
      </div>
    </div>
    <div class="card-box">
      <div :class="['card']">
        <div class="card-padding">
          <div class="title">
            <span class="title-content">
              The ________ should be carefully prepared in order to give the school an overall and
              accurate summary of your abilities. accurate summary of your abilities. accurate
              summary of your abilities. accurate summary of your abilities. accurate summary of
              your abilities. accurate summary of your abilities. accurate summary of your
              abilities. accurate summary of your abilities. accurate summary of your abilities.
            </span>
            <div class="title-icon">
              <span>@</span>
            </div>
          </div>
          <div class="content">
            adv.大约，左右到处，处处，各处将近，几乎prep.关于，对于；涉及……方面在……到处，在……各处
            The ________ should be carefully prepared in order to give the school an overall and
            accurate summary of your abilities.
            ________应该仔细准备，以便向学校全面准确地总结你的能力。
          </div>
        </div>
      </div>
    </div>

    <div class="card-box">
      <div :class="['card']">
        <div class="card-padding">
          <div class="title">
            <span class="title-content">
              The ________ should be carefully prepared in order to give the school an overall and
              accurate summary of your abilities. accurate summary of your abilities. accurate
              summary of your abilities. accurate summary of your abilities. accurate summary of
              your abilities. accurate summary of your abilities. accurate summary of your
              abilities. accurate summary of your abilities. accurate summary of your abilities.
            </span>
            <div class="title-icon">
              <span>@</span>
            </div>
          </div>
          <div class="content">
            adv.大约，左右到处，处处，各处将近，几乎prep.关于，对于；涉及……方面在……到处，在……各处
            The ________ should be carefully prepared in order to give the school an overall and
            accurate summary of your abilities.
            ________应该仔细准备，以便向学校全面准确地总结你的能力。
          </div>
        </div>
      </div>
      <div :class="['card', { open: openStatus },  {close: !openStatus }]">
        <div class="card-padding">
          <div class="title">
            <span class="title-content">
              The ________ should be carefully prepared in order to give the school an overall and
              accurate summary of your abilities. accurate summary of your abilities. accurate
              summary of your abilities. accurate summary of your abilities. accurate summary of
              your abilities. accurate summary of your abilities. accurate summary of your
              abilities. accurate summary of your abilities. accurate summary of your abilities.
            </span>
            <div class="title-icon">
              <span>@</span>
            </div>
          </div>
          <div class="content">
            adv.大约，左右到处，处处，各处将近，几乎prep.关于，对于；涉及……方面在……到处，在……各处
            The ________ should be carefully prepared in order to give the school an overall and
            accurate summary of your abilities.
            ________应该仔细准备，以便向学校全面准确地总结你的能力。
          </div>
        </div>
      </div>
    </div>

    <div class="card-box">
      <div :class="['card']">
        <div class="card-padding">
          <div class="title">
            <span class="title-content">
              The ________ should be carefully prepared in order to give the school an overall and
              accurate summary of your abilities. accurate summary of your
            </span>
            <div class="title-icon">
              <span>@</span>
            </div>
          </div>
          <div class="content">
            adv.大约，左右到处，处处，各处将近，几乎prep.关于，对于；涉及……方面在……到处，在……各处；涉及……方面在……到处，在……各处 Th；涉及……方面在……到处，在……各处 Th；涉及……方面在……到处，在……各处 Th The12313fff1 <span style="color: red;">123</span>
          </div>
        </div>
      </div>
    </div>
    <div class="card-box">
      <div :class="['card']">
        <div class="card-padding">
          <div class="title">
            <span class="title-content">
              The ________ should be carefully prepared in order to give the school an overall and
              accurate summary of your abilities. accurate summary of your abilities. accurate
              summary of your abilities. accurate summary of your abilities. accurate summary of
              your abilities. accurate summary of your abilities. accurate summary of your
              abilities. accurate summary of your abilities. accurate summary of your abilities.
            </span>
            <div class="title-icon">
              <span>@</span>
            </div>
          </div>
          <div class="content">
            adv.大约，左右到处，处处，各处将近，几乎prep.关于，对于；涉及……方面在……到处，在……各处
            The ________ should be carefully prepared in order to give the school an overall and
            accurate summary of your abilities.
            ________应该仔细准备，以便向学校全面准确地总结你的能力。
          </div>
        </div>
      </div>
    </div>
    <div class="card-box">
      <div :class="['card']">
        <div class="card-padding">
          <div class="title">
            <span class="title-content">
              The ________ should be carefully prepared in order to give the school an overall and
              accurate summary of your abilities. accurate summary of your abilities. accurate
              summary of your abilities. accurate summary of your abilities. accurate summary of
              your abilities. accurate summary of your abilities. accurate summary of your
              abilities. accurate summary of your abilities. accurate summary of your abilities.
            </span>
            <div class="title-icon">
              <span>@</span>
            </div>
          </div>
          <div class="content">
            adv.大约，左右到处，处处，各处将近，几乎prep.关于，对于；涉及……方面在……到处，在……各处
            The ________ should be carefully prepared in order to give the school an overall and
            accurate summary of your abilities.
            ________应该仔细准备，以便向学校全面准确地总结你的能力。
          </div>
        </div>
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
}
.card {
  position: relative;
  width: 312px;
  height: 202px;
  display: flex;
  align-items: center;
  justify-content: center;
  //   background: pink;
  border-radius: 8px;
  margin: 0 auto;
  border: 2px solid pink;
  &-padding {
    // position: absolute;
    // top: 0;
    // right: 0;
    // bottom: 0;
    // left: 0;
    // margin: auto;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 16px 0 26px;
    width: calc(100% - (16px * 2));
    height: calc(100%);
    background-color: #fff;
  }
}
.card.open {
    position: absolute;
    top: 0;
    left: 0;
    height: initial;
    min-height: 202px;
    background: #fff;
    z-index: 99;
}
.card.close {
    position: absolute;
    top: 0;
    left: 0;
    // height: initial;
    // min-height: 202px;
    z-index: 99;
}

.title {
  max-height: 100%;
  flex-shrink: 0;
  display: flex;
  font-size: 20px;
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: 700;
  color: #485766;
  line-height: 22px;
  overflow: hidden;
  &-content {
    // flex: 1;
  }
  &-icon {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    padding-left: 16px;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background-color: rgba(107, 171, 255, 1);
    }
  }
}
.content {
  flex: 1; /* 占满剩余部分 */
  margin-top: 8px;
  font-size: 14px;
  font-family: Microsoft YaHei-Regular, Microsoft YaHei;
  font-weight: 400;
  color: #99a3ae;
  line-height: 22px;
  overflow: hidden;
}
</style>
