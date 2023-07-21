<template>
    <div class="index">
        <div class="title">
            <button @click="format">json格式化</button>
        <button @click="getCodeContext">获取数据</button>
        <button @click="handleTheme">设置主题</button>

        </div>
        <div class="main">
            <div class="code" ref="editorContainer">

            </div>
        </div>
        <div class="foot">
            <a href="https://beian.miit.gov.cn/" target="_blank" data-v-96659767="">豫ICP备2023016029号-1</a>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, onMounted, toRaw } from 'vue'
import * as monaco from "monaco-editor";
const codeContent = ref("");

const editorContainer = ref<any>(null);
const editor = ref<any>(null);
const editorTheme = ref<string>("vs-dark");
onMounted(() => {
    editor.value = monaco.editor.create(editorContainer.value, {
        value: "",
        theme: editorTheme.value, // 主题
        language: "json",
        folding: true, // 是否折叠
        foldingHighlight: true, // 折叠等高线
        foldingStrategy: "indentation", // 折叠方式  auto | indentation
        showFoldingControls: "always", // 是否一直显示折叠 always | mouseover
        disableLayerHinting: true, // 等宽优化
        emptySelectionClipboard: false, // 空选择剪切板
        selectionClipboard: false, // 选择剪切板
        automaticLayout: true, // 自动布局
        codeLens: false, // 代码镜头
        scrollBeyondLastLine: false, // 滚动完最后一行后再滚动一屏幕
        colorDecorators: true, // 颜色装饰器
        accessibilitySupport: "auto", // 辅助功能支持  "auto" | "off" | "on"
        lineNumbers: "on", // 行号 取值： "on" | "off" | "relative" | "interval" | function
        lineNumbersMinChars: 5, // 行号最小字符   number
        readOnly: false, //是否只读  取值 true | false
    });
    // 监听内容变化
    editor.value.onDidChangeModelContent(() => {
        // format()
        console.log(editor.value, "监听内容变化");
    });
    
    // 监听失去焦点事件
    editor.value.onDidBlurEditorText(() => { });
});

// 获取编辑框内容
const getCodeContext = () => {
  codeContent.value = toRaw(editor.value).getValue();
  return console.log(codeContent.value);
}
// 自动格式化代码
const format = () =>{
  toRaw(editor.value).trigger("anything", "editor.action.formatDocument");
  // 或者
//   editor.value.getAction(['editor.action.formatDocument']).run()
}
// 修改主题
function handleTheme() {
  monaco.editor.setTheme("vs");
}


</script>

<style scoped lang="less">
.index {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
}

.title {
    width: 100%;
    height: 120px;
    background: pink;
    flex-shrink: 0;
}
.foot {
    height: 60px;
    line-height: 60px;
    text-align: center;
    a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
    }
}
.code {
    height: 100%;
}
.main {
    flex: 1;
}
</style>
