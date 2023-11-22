
import type { App, VNode } from 'vue'
import { createVNode, render, cloneVNode } from 'vue'
import Loading from '@/components/loading/loading.vue'
export default {
    install(app: App) {
        console.log('%c [  ]-8', 'font-size:13px; background:pink; color:#bf2c9f;', app)
        const dom: VNode = createVNode(Loading)
        const weakMap = new WeakMap()
        app.directive('loading', {
            mounted(el) {

                console.log('%c [  ]-14', 'font-size:13px; background:pink; color:#bf2c9f;', el)
                if (!weakMap.get(el)) {
                    weakMap.set(el, window.getComputedStyle(el).position)
                }
            },
            updated(el: HTMLElement, binding: { value: boolean }) {

                console.log('%c [  ]-20', 'font-size:13px; background:pink; color:#bf2c9f;', el, weakMap.get(el))
                console.log('%c [  ]-20', 'font-size:13px; background:pink; color:#bf2c9f;', binding)
                const position:string = weakMap.get(el)
                if (position !== 'relative' && position !== 'absolute') {
                    el.style.position = 'relative'
                }

                const newVNode = cloneVNode(dom)
                render(newVNode, el)

                console.log('%c [  ]-30', 'font-size:13px; background:pink; color:#bf2c9f;', )
                if (binding.value) {
                    newVNode?.component?.exposed?.showLoading()
                } else {
                    newVNode?.component?.exposed?.hiddenLoading()
                    el.style.position = position
                }
            }
        })
    }
}
