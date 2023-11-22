import { reactive, computed, ref, watch } from 'vue';
import { defineStore } from 'pinia';

export const readWordStore = defineStore('readWord', () => {
    const state = reactive({
        currentIndex: 0,
        wordList: [
            {
                phonetic: 'həˈləʊ',
                cn: '你好',
                en: 'hello',
                imgs: '',
                img: 'https://img2.baidu.com/it/u=1724736751,3342733214&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
            },
            {
                phonetic: 'həˈləʊ2',
                cn: '你好2',
                en: 'hello2',
                img: '',
            },
        ],
        cnStatus: true, // 中文开关
        enStatus: true, // 英文开关
        phoneticStatus: true, // 音标开关
        imgStatus: true, // 图片开关
        wordListStatus: false, // 单词列表开关
        fontSizeIndex: 0, // 英文字体档位
        fontSizeList: [70, 80, 90, 100],
        audioStatus: 'stop', // play stop
        audioPlayTime: 10, // 
        englishType: 0, // 0 英 1 美
    })
    // 修改当前单词索引
    const changeIndex = (index: number) => {
        state.currentIndex += index
    }
    // 修改当前单词索引
    const changeSwitch = (type: string) => {
        if (!checkHandle(type)) {
            alert('至少要保留一个哦')
            return
        } 
        switch (type) {
            case 'cn':
                state.cnStatus = !state.cnStatus
                break;
            case 'en':
                state.enStatus = !state.enStatus
                break;
            case 'phonetic':
                state.phoneticStatus = !state.phoneticStatus
                break;
            case 'img':
                state.wordListStatus = false // 图片和列表互斥
                state.imgStatus = !state.imgStatus
                break;
            case 'wordList':
                state.imgStatus = false // 图片和列表互斥
                state.wordListStatus = !state.wordListStatus
                break;
            default:
                break;
        }
    }
    // 中文、英文、音标 至少保留一个为打开状态
    const checkHandle = (type: string) => {
        let flag = true
        switch (type) {
            case 'cn':
                flag = !state.cnStatus || state.enStatus || state.phoneticStatus
                break;
            case 'en':
                flag = !state.enStatus || state.cnStatus || state.phoneticStatus
                break;
            case 'phonetic':
                flag = !state.phoneticStatus || state.enStatus || state.cnStatus
                break;
            default:
                break;
        }
        return flag
    }
    
    // 当前使用中的单词
    const word = computed(() => {
        return state.wordList[state.currentIndex]
    })
    const phonetic = computed(() => {
        return `${state.englishType === 0 ? '英 ' : '美 '}` + word.value.phonetic
      })
      
    // 计算英文字体显示大小
    const enFontSize = computed(() => {
        const base = 40;
            return {
            'font-size': (state.fontSizeList[state.fontSizeIndex] + base) + 'px'
        }
    })
    // 字号大小
    const fontSizeNumber = computed(() => {
        return state.fontSizeList[state.fontSizeIndex]
    })
    // 修改字体大小档位
    const changeFontSize = (index: number) => {
        state.fontSizeIndex += index
    }
    // 是否显示右侧留白
    const showRight = computed(() => {
        return state.imgStatus || state.wordListStatus
    })

    watch(() => word.value.img, (val) => {
        if (!val) {
            state.imgStatus = false
        }
    })
    // 字体变大时自动关闭图片 或 单词列表
    watch(() => state.fontSizeIndex, (val) => {
        if (val) {
            state.imgStatus = false
            state.wordListStatus = false
        }
    })
    // 字体变大时自动关闭图片 或 单词列表
    watch(() => [state.imgStatus, state.wordListStatus], (value) => {
        if (value.includes(true)) {
            state.fontSizeIndex = 0
        }
    }) 

    return { state, word , enFontSize, fontSizeNumber, showRight, changeIndex, changeSwitch, changeFontSize, phonetic }
})

export default readWordStore
