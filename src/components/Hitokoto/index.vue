<template>
  <div class="hitokoto cards">
    <!-- 一言内容 -->
    <div class="content" @click="updateHitokoto">
      <span class="text">{{ hitokotoData.text }}</span>
      <span class="from">-「&nbsp;{{ hitokotoData.from }}&nbsp;」</span>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, h } from "vue";
import { getHitokoto } from "@/api";
import debounce from "@/utils/debounce.js";
import { mainStore } from "@/store";
const store = mainStore();

// 一言数据
let hitokotoData = reactive({
  text: "这里应该显示一句话",
  from: "無名",
});

// 获取一言数据
const getHitokotoData = () => {
  getHitokoto()
    .then((res) => {
      hitokotoData.text = res.hitokoto;
      hitokotoData.from = res.from;
    })
    .catch(() => {
      ElMessage({
        message: "一言获取失败",
        icon: h(Error, {
          theme: "filled",
          fill: "#efefef",
        }),
      });
    });
};

// 更新一言数据
const updateHitokoto = () => {
  hitokotoData.text = "新的一言正在赶来的路上";
  hitokotoData.from = "来源加载中";
  // 防抖
  debounce(() => {
    getHitokotoData();
  }, 500);
};

onMounted(() => {
  getHitokotoData();
});
</script>

<style lang="scss" scoped>
.hitokoto {
  width: 100%;
  height: 100%;
  padding: 20px;
  animation: fade;
  -webkit-animation: fade 0.5s;
  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .text {
      font-size: 1.1rem;
      word-break: break-all;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    .from {
      margin-top: 10px;
      font-weight: bold;
      align-self: flex-end;
      font-size: 1.1rem;
    }
  }
}
</style>