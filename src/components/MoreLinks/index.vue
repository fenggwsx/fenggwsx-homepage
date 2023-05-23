<template>
  <div class="links">
    <div class="line">
      <Icon size="20">
        <Cogs />
      </Icon>
      <span class="title">后台管理</span>
    </div>
    <el-row class="link-all" :gutter="20">
      <el-col
        :span="12"
        v-for="(item, index) in linksData"
        :key="item"
        @click="jumpLink(item.link)"
      >
        <div
          class="item cards"
          :style="index < 3 ? 'margin-bottom: 20px' : null"
        >
          <span class="name">{{ item.name }}</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { Icon } from "@vicons/utils";
import {
  Cogs
} from "@vicons/fa";

// 网站链接数据
// 建议不要超出6个，若需要超出请自行调整样式
let linksData = [
  {
    name: "Modem",
    link: "https://modem.fenggwsx.top/",
  },
  {
    name: "Proxmox VE",
    link: "https://pve.fenggwsx.top/",
  },
  {
    name: "OpenWRT",
    link: "https://openwrt.fenggwsx.top/",
  },
  {
    name: "Nginx Proxy Manager",
    link: "https://npm.fenggwsx.top/",
  },
  {
    name: "Portainer",
    link: "https://portainer.fenggwsx.top/",
  },
  {
    name: "WX Edge",
    link: "https://wxedge.fenggwsx.top/",
  },
];

// 链接跳转
const jumpLink = (url) => {
  window.open(url, "_blank");
};
</script>

<style lang="scss" scoped>
.links {
  .line {
    margin: 2rem 0.25rem 1rem;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    .title {
      margin-left: 8px;
      font-size: 1.15rem;
      text-shadow: 0 0 5px #00000050;
    }
  }
  .link-all {
    .item {
      height: 60px;
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;

      &:hover {
        transform: scale(1.02);
        background: rgb(0 0 0 / 40%);
        transition: 0.3s;
      }
      .name {
        font-size: 1.1rem;
        margin-left: 8px;
      }
      @media (min-width: 720px) and (max-width: 820px) {
        .name {
          display: none;
        }
      }
      @media (max-width: 720px) {
        height: 80px;
      }
      @media (max-width: 460px) {
        flex-direction: column;
        .name {
          font-size: 1rem;
          margin-left: 0;
          margin-top: 8px;
        }
      }
    }
    .cards {
      backdrop-filter: none;
    }
  }
}
</style>