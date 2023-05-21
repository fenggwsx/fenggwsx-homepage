<template>
  <footer>
    <div class="power">
      <span
        >Copyright&nbsp;&copy;&nbsp;{{ fullYear }}
        <a href="https://fenggwsx.top">fenggwsx</a>
      </span>
      <!-- 以下信息请不要修改哦 -->
      <span class="hidden"
        >&nbsp;&amp;&nbsp;Made&nbsp;by&nbsp;<a
          :href="config.github"
          target="_blank"
        >
          {{ config.author }}
        </a></span
      >
    </div>
  </footer>
</template>

<script setup>
import { mainStore } from "@/store";
import config from "@/../package.json";
const store = mainStore();

let fullYear = new Date().getFullYear();
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 46px;
  line-height: 46px;
  text-align: center;
  backdrop-filter: blur(10px);
  background: rgb(0 0 0 / 25%);
  z-index: 0;
  animation: fade;
  -webkit-animation: fade 0.5s;
  @media (max-width: 720px) {
    font-size: 0.85rem;
  }
  @media (max-width: 480px) {
    .hidden {
      display: none;
    }
  }
  .power {
    animation: fade;
    -webkit-animation: fade 0.3s;
  }
}
</style>&.hidden {
  display: none;
}