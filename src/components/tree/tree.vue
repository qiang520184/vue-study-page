<template>
    <div
        class="tree"
    >
        <div
            v-if="showAll"
            :class="['tree-title']"
            @click="inputAll"
        >
            <div
                class="tree-empty"
                :style="{ width: level * 0.01 * 40 +'rem' }"
            />
            <div class="tree-name">
                <Checkbox
                    class="checkbox-style"
                    :style="{ marginLefts: level * 0.01 * 40 +'rem' }"
                    :value="allStatus"
                    :indeterminate="indeterminate"
                    @input="inputAll"
                />
                全选
            </div>
        </div>
        <div
            v-for="(item, index) in data"
            :key="index"
            class="tree-box"
        >
            <div
                :class="['tree-title', { open : expandList.includes(item.dictId)}]"
                @click="treeTitleClick(item)"
            >
                <div
                    class="tree-empty"
                    :style="{ width: level * 0.01 * 40 +'rem' }"
                />
                <div class="tree-name">
                    <Checkbox
                        v-if="showInput(item)"
                        class="checkbox-style"
                        :style="{ marginLefts: level * 0.01 * 40 +'rem' }"
                        :value="currentKeys.includes(item.dictId)"
                        @input="input(item)"
                    />
                    {{ item.dictName }}
                </div>
                <div
                    v-if="loadingMap[item.dictId]"
                    class="loading"
                />
                <div
                    v-else
                    v-show="item.childList && showChildren(item.childList) || item.isChild === 1"
                    :class="!expandList.includes(item.dictId) ? 'is-fold blue': 'blue'"
                />
            </div>
            <template v-if="item.childList && showChildren(item.childList)">
                <Tree
                    v-show="expandList.includes(item.dictId)"
                    :expand-list="expandList"
                    :data="item.childList"
                    :level="level + 1"
                    :parent-id="parentId"
                    :current-keys="currentKeys"
                    @updateParentId="updateParentId"
                    @updateCurrentkeys="updateCurrentkeys"
                    @updateExpandList="updateExpandList"
                />
            </template>
        </div>
    </div>
</template>

<script>
import Checkbox from './checkbox.vue';

export default {
    name: 'Tree',
    components: { Checkbox },
    props: {
        data: {
            type: Array,
            default: () => [],
        },
        expandList: { // 展开节点的ID
            type: Array,
            default: () => [],
        },
        currentKeys: { // 当前选中的节点的ID
            type: Array,
            default: () => [],
        },
        accordion: { // 是否每次只打开一个同级树节点展开
            type: Boolean,
            default: false,
        },
        defaultExpandAll: { // 是否默认展开所有节点
            type: Boolean,
            default: false,
        },
        lazy: {
            type: Boolean,
            default: false,
        },
        parentId: {
            type: String,
            default: '',
        },
        load: {
            type: Function,
            default: () => {},
        },
        level: {
            type: Number,
            default: 1,
        },

    },
    data() {
        return {
            loadingMap: {},
        };
    },
    computed: {
        showAll() {
            return this.level > 1 && this.data.length > 1 && this.data.every((item) => {
                if (!item.childList || !item.childList.length) {
                    return true;
                }
                if (item.childList) {
                    return item.childList.every((items) => !items.isShow);
                }
                return false;
            });
        },
        allStatus() {
            return this.data.every((item) => this.currentKeys.includes(item.dictId));
        },
        indeterminate() {
            let status = false;
            if (this.data.length > 1) {
                const selectDictIdList = [];
                this.data.forEach((item) => {
                    if (this.currentKeys.includes(item.dictId)) {
                        selectDictIdList.push(item.dictId);
                    }
                });
                if (selectDictIdList.length) {
                    status = !(selectDictIdList.length && selectDictIdList.length === this.data.length);
                }
            }
            return status;
        },
    },
    methods: {
        showChildren(childList) {
            return childList.every((item) => item.isShow);
        },
        showInput(item) {
            if (item.isShow) {
                if (item.childList) {
                    return item.childList.every((items) => !items.isShow);
                }
                return (!item.childList || !item.childList.length);
            } if (item.isChild === 0) {
                return true;
            }
            return false;
        },
        loadNodeData(item, data) {
            this.$set(item, 'childList', data);
            this.$set(this.loadingMap, item.dictId, false);
            this.expandChange(item);
        },
        treeTitleClick(item) {
            console.log('%c [  ]-175', 'font-size:13px; background:pink; color:#bf2c9f;', item);
            if (item.childList && item.childList.length) {
                this.expandChange(item);
            } else if (this.lazy && this.load && item.isShow !== 0 && item.isChild !== 0) {
                this.$set(this.loadingMap, item.dictId, true);
                this.load({ ...this.$props, node: item }, (data) => {
                    this.loadNodeData(item, data);
                });
            } else {
                this.input(item);
            }
        },
        expandChange(item) {
            console.log('%c [  ]-198', 'font-size:13px; background:pink; color:#bf2c9f;', this.currentKeys);
            const status = this.expandList.includes(item.dictId);
            let newExpandList;
            if (!status) {
                newExpandList = [...this.expandList, item.dictId];
            } else {
                newExpandList = this.expandList.filter((dictId) => dictId !== item.dictId);
            }
            this.$emit('updateExpandList', newExpandList);
        },
        updateExpandList(data) {
            this.$emit('updateExpandList', data);
        },
        updateCurrentkeys(data) {
            this.$emit('updateCurrentkeys', data);
        },
        updateParentId(id) {
            this.$emit('updateParentId', id);
        },
        input(item) {
            const status = this.currentKeys.includes(item.dictId);
            let currentKeys;
            if (!status) {
                const parentId = item.dictId.slice(0, 3);
                if (this.parentId !== parentId) {
                    currentKeys = [item.dictId];
                    this.updateParentId(parentId);
                } else {
                    currentKeys = [...this.currentKeys, item.dictId];
                }
                console.log('%c [  ]-220', 'font-size:13px; background:pink; color:#bf2c9f;', this.parentId, parentId);
            } else {
                currentKeys = this.currentKeys.filter((dictId) => dictId !== item.dictId);
            }

            this.$emit('updateCurrentkeys', currentKeys);
        },
        inputAll() {
            if (this.allStatus) {
                console.log('%c [ 取消全选 ]-241', 'font-size:13px; background:pink; color:#bf2c9f;');
                this.unSelectAll();
            } else {
                console.log('%c [ 全选 ]-241', 'font-size:13px; background:pink; color:#bf2c9f;');
                this.selectAll();
            }
        },
        selectAll() {
            const list = this.data.map((item) => item.dictId);
            let currentKeys;
            const parentId = list[0].slice(0, 3);
            if (this.parentId !== parentId) {
                currentKeys = list;
                this.updateParentId(parentId);
            } else {
                currentKeys = [...this.currentKeys].concat(list);
            }
            if (currentKeys && currentKeys.length) {
                currentKeys = [...new Set(currentKeys)];
            }
            this.$emit('updateCurrentkeys', currentKeys);
        },
        unSelectAll() {
            const list = this.data.map((item) => item.dictId);
            const newCurrentKeys = this.currentKeys.filter((item) => !list.includes(item));
            this.$emit('updateCurrentkeys', newCurrentKeys);
        },
    },
};
</script>

<style scoped lang="scss">
.tree {
    background: #fff;
}
.tree-box {
    // margin-right: .4rem;
}
.tree-title {
    position: relative;
    width: 100%;
    height: .97rem;
    display: flex;
    align-items: center;
    // justify-content: space-between;
    z-index: 9;
    .tree-name {
        flex: 1;
        // width: 100%;
        // display: inline-block;
        display: flex;
        align-items: center;
        padding-right: .34rem;
        line-height: 1.5;
    }
    .blue {
        flex-shrink: 0;
        display: inline-block;
        width: 0.4rem;
        height: 0.4rem;
        margin-right: .4rem;
        background: url("./images/fold@2x.png") no-repeat;
        background-size: 100%;
        transform: rotateZ(180deg);

        &.is-fold {
            transform: rotateZ(0deg);
        }
    }

    .loading {
        flex-shrink: 0;
        display: inline-block;
        width: 0.4rem;
        height: 0.4rem;
        margin-right: .4rem;
        background: url("./images/loading@2x.png") no-repeat;
        background-size: 100%;
        animation: spin 2s linear infinite;
    }

    .checkbox-style {
        flex-shrink: 0;
        margin-right: .1rem;
    }
}
.tree-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: .4rem;
    width: calc(100% - .8rem);
    height: .02rem;
    background: #EAF2FF;
}
.tree-title.open {
    position: relative;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
