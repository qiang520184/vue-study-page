<template>

<!-- <div class="wrap">
  <button class="trigger">鼠标放上来试试</button>
  <div class="grid">
    <div>
      <p>
        欢迎关注前端侦探
      </p>
    </div>
  </div>
</div> -->
<!-- <div class="wrap">
  <button class="trigger">鼠标放上来试试（较多文本）</button>
  <div class="grid">
    <div>
      <p>
        欢迎关注前端侦探，这里有一些有趣的、你可能不知道的HTML、CSS、JS小技巧技巧，比如这篇文章，如何让
        auto height 支持过渡动画？一起看看吧
      </p>
    </div>
  </div>
</div> -->


<div class="g-contaner">
    <div class="g-btn">Hover Me</div>
    <p class="content">
    能够适配任意高度。能够适配任意高度。能够适配任意高度。
    </p>
</div>

<div class="g-contaner">
    <div class="g-btn">Hover Me</div>
    <p class="content">
    能够适配任意高度。能够适配任意高度。能够适配任意高度。能够适配任意高度。能够适配任意高度。能够适配任意高度。
    </p>
</div>

</template>


<style scoped lang="scss">
// html,
// body {
//   margin: 0;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: aliceblue;
//   gap: 15px
// }
// .trigger {
//   border: 0;
//   background-color: royalblue;
//   color: #fff;
//   outline: 0;
//   font-size: 16px;
//   padding: 0.4em 1em;
//   border-radius: 0.2em;
//   cursor: pointer;
// }
// .grid {
//   position: absolute;
//   margin-top: 10px;
//   max-width: 250px;
//   border-radius: 5px;
//   display: grid;
//   grid-template-rows: 0fr;
//   transition: 0.3s;
//   overflow: hidden;
//   background-color: rgba(0, 0, 0, 0.65);
//   color: #fff;
// }
// .grid > * {
//   min-height: 0;
//   padding: 0 10px;
// }
// .wrap:hover .grid {
//   grid-template-rows: 1fr;
// }
// span {
//   padding: 10px;
// }

body, html {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    padding: 20px;
}

.g-contaner {
    width: 300px;
}

p {
    width: 200px;
    max-height: 50px;
    box-sizing: border-box;
    line-height: 24px;
    background: #ddd;
    overflow: hidden;
    transition: all .3s linear;
}

.g-btn {
    width: 80px;
    padding: 5px;
    border: 1px solid #333;
    margin-bottom: 10px;
    cursor: pointer;
}

.g-btn:hover ~ .content {
    max-height: 300px;
}


</style>
