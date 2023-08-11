<template>
    <codemirror
      v-model="code"
      placeholder="Code gose here..."
      :style="{ height: '100%' }"
      :autofocus="true"
      :indent-with-tab="true"
      :tabSize="2"
      :extensions="extensions"
      @ready="log('ready', $event)"
      @change="log('change', $event)"
      @focus="log('focus', $event)"
      @blur="log('blur', $event)"
    />
  </template>
  
  <script>
  import { Codemirror } from "vue-codemirror";

  
// 引入解析器包
import { loadWASM } from 'onigasm'
import { onMounted, ref } from 'vue'
import { Registry } from 'monaco-textmate'
import { wireTmGrammars } from 'monaco-editor-textmate'

import { javascript } from '@codemirror/lang-javascript'
import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import { json } from "@codemirror/lang-json";
import { markdown } from "@codemirror/lang-markdown";
import { oneDark } from '@codemirror/theme-one-dark'


  export default {
    components: {
      Codemirror,
    },
    setup() {
      const code = `<template>
    <codemirror
      v-model="code"
      placeholder="Code gose here..."
      :style="{ height: '400px' }"
      :autofocus="true"
      :indent-with-tab="true"
      :tabSize="2"
      :extensions="extensions"
      @ready="log('ready', $event)"
      @change="log('change', $event)"
      @focus="log('focus', $event)"
      @blur="log('blur', $event)"
    />
  </template>
    
    import { Codemirror } from "vue-codemirror";
    // 引入解析器包
    import { loadWASM } from 'onigasm'
    import { onMounted, ref } from 'vue'
    import { Registry } from 'monaco-textmate'
    import { wireTmGrammars } from 'monaco-editor-textmate'
    import { javascript } from '@codemirror/lang-javascript'
    import { css } from "@codemirror/lang-css";
    import { html } from "@codemirror/lang-html";
    import { json } from "@codemirror/lang-json";
    import { markdown } from "@codemirror/lang-markdown";
    import { oneDark } from '@codemirror/theme-one-dark'
    export default {
        components: {
        Codemirror,
        },
        setup() {
        const extensions = [javascript(), oneDark];
    
        return {
            code,
            extensions,
            log: console.log,
        };
        },
    }`;
      const extensions = [javascript(), oneDark];
  
      return {
        code,
        extensions,
        log: console.log,
      };
    },
  };
  </script>
