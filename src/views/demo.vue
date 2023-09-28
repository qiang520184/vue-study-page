<template>
  <div class="overflowtext-box">
    <div class="overflowtext-wrap">
      <input type="checkbox" id="overflowtext-exp" />
      <div class="overflowtext-text">
        <label class="overflowtext-btn" for="overflowtext-exp"></label>
        should be carefully prepared in order to give the school an overall and accurate
         sumshould be carefully prepared in order to give the school an overall and accurate
          sumshould be carefully prepared in order to give the school an overall and accurate 
          sumshould be carefully prepared in order to give the school an overall and accurate sumshould be carefull
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.overflowtext-box {
  /**其他样式**/
  width: 320px;
  height: 200px;
  background-color: yellowgreen;
  position: absolute;
  left: calc(50% - 150px);
  line-height: 25px;
  top: 200px;
  /**关键代码-超出隐藏遮挡方块**/
  overflow: hidden;
  .overflowtext-wrap {
    /**关键代码-解决高度设置为百分百失效的问题**/
    display: flex;
    .overflowtext-text {
      /**默认显示三行文字并且文字截断**/
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      word-wrap: break-word;
      word-break: break-all;
      /** 设置float有文字环绕效果**/
      .overflowtext-btn {
        float: right;
        clear: both;
        &::after {
          content: '展开';
          color: #006eff;
        }
      }
      /** 占位：占高度，宽度设为0px**/
      &::before {
        content: '';
        float: right;
        width: 0px;
        height: 100%;
        background-color: pink;
        margin-bottom: -25px; /**和主体行高一样**/
      }
      /**遮挡方块：和.overflowtext-box背景颜色设置一样的，为了在不溢出文字的时候遮挡展开按钮**/
      &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #ffede7;
      }
    }
    /**选框（隐藏）**/
    #overflowtext-exp {
      display: none;
    }
    /**选中时：显示行数加大**/
    #overflowtext-exp:checked + .overflowtext-text {
      -webkit-line-clamp: 999;
      max-height: none;
      /**选中时：隐藏遮挡方块**/
      &::after {
        visibility: hidden;
      }
      /**选中时：文字显示收起**/
      .overflowtext-btn::after {
        content: '收起';
        color: #006eff;
      }
    }
  }
}
</style>
