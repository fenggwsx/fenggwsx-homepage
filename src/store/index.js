import {
    defineStore
} from "pinia";

export const mainStore = defineStore("main", {
    state: () => {
        return {
            innerWidth: null, // 当前窗口宽度
            coverType: "0", // 壁纸种类
            siteStartShow: true, // 建站日期显示
            backgroundShow: false, // 壁纸展示状态
            boxOpenState: false, // 盒子开启状态
            mobileOpenState: false, // 移动端开启状态
            mobileFuncState: false, // 移动端功能区开启状态
            setOpenState: false, // 设置页面开启状态
        }
    },
    getters: {
        // 获取页面宽度
        getInnerWidth(state) {
            return state.innerWidth;
        }
    },
    actions: {
        // 更改当前页面宽度
        setInnerWidth(value) {
            this.innerWidth = value;
            if (value >= 720) {
                this.mobileOpenState = false;
                this.mobileFuncState = false;
            }
        }
    },
    persist: {
        key: 'data',
        storage: window.localStorage,
        paths: ['coverType', 'siteStartShow'],
    },
})