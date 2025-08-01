<template>
  <nav ref="navbarRef" class="navbar" :class="{ 'is-scrolled': isScrolled }">
    <div class="navbar__container">
      <div class="navbar__logo">
        <span class="logo-icon">🗡️</span>珂朵莉电子设定集
      </div>
      <div class="online-count" v-if="onlineCount !== null">
        当前在线：<span class="count">{{ onlineCount }}人</span>
      </div>
      <button class="navbar__toggle" :class="{ active: open }" @click="toggleMenu">
        <span class="navbar__toggle-line"></span>
        <span class="navbar__toggle-line"></span>
        <span class="navbar__toggle-line"></span>
      </button>
      <ul class="navbar__links" :class="{ 'is-open': open }">
        <li v-for="item in links" :key="item.name" @click="onLinkClick">
          <router-link :to="item.path" class="link">{{
            item.name
          }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, onBeforeUnmount } from "vue";
import { io } from "socket.io-client";

const siteId = "kdl";

const onlineCount = ref<number | null>(null);

// 连接时带上 query.siteId
const socket = io("http://1.94.189.79:3000", {
  query: { siteId },
});

const open = ref(false);
const isScrolled = ref(false);
const navbarRef = ref<HTMLElement | null>(null);

const links = [
  { name: "首页", path: "/" },
  { name: "故事概览", path: "/timeLine" },
  { name: "角色设定", path: "/characters" },
  { name: "留言板", path: "/message" },
  { name: "图集", path: "/gallery" },
  { name: "柯学探讨", path: "/talk" },
   { name: "柯学演绎", path: "/story" },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const toggleMenu = () => {
  open.value = !open.value;
};

const onLinkClick = () => {
  open.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  socket.on("onlineCount", (count: number) => {
    onlineCount.value = count;
  });
});
onBeforeUnmount(() => {
  socket.disconnect();
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
$base-night: #1e2e4d;
$gradient-start: #758cb3;
$gradient-end: #d06487;

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: $base-night;
  backdrop-filter: blur(6px);
  transition: background 0.3s, box-shadow 0.3s;
  padding: 11px;


  &.is-scrolled {
    background: rgba(30, 46, 77, 0.85);
    box-shadow: 0 2px 8px rgba(117, 140, 179, 0.5);
  }

  &__container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;
  }

  &__logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;

    .logo-icon {
      margin-right: 0.5em;
      font-size: 1.3rem;
      filter: drop-shadow(0 0 4px rgba(208, 100, 135, 0.7));
    }
  }

  .online-count {

    color: #fde8e8;
    font-family: "Cinzel Decorative", serif;
    font-size: 1.05rem;

    .count {
      color: #d14b4b;
      font-weight: bold;
      text-shadow: 0 0 3px #d14b4b;
    }
  }

  &__toggle {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 24px;
    height: 18px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;

    .navbar__toggle-line {
      width: 100%;
      height: 2px;
      background: linear-gradient(to right, $gradient-start, $gradient-end);
      transition: transform 0.3s;
    }

    &.active {
      .navbar__toggle-line:nth-child(1) {
        transform: rotate(45deg) translate(4px, 4px);
      }

      .navbar__toggle-line:nth-child(2) {
        opacity: 0;
      }

      .navbar__toggle-line:nth-child(3) {
        transform: rotate(-45deg) translate(4px, -4px);
      }
    }
  }

  &__links {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-left: 2rem;
    }

    a {
      position: relative;
      color: rgba(255, 255, 255, 0.9);
      font-size: 1rem;
      font-weight: 500;
      text-decoration: none;
      padding: 0.25rem 0;
      transition: color 0.3s;

      &::after {
        content: "";
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(to right, $gradient-start, $gradient-end);
        transition: width 0.3s;
      }

      &:hover,
      &.router-link-active {
        color: #fff;

        &::after {
          width: 100%;
          box-shadow: 0 0 4px rgba($gradient-end, 0.7);
        }
      }
    }

    @media (max-width: 768px) {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: $base-night;
      flex-direction: column;
      overflow: hidden;
      max-height: 0;
      transition: max-height 0.3s ease;

      &.is-open {
        max-height: 300px;

        li {
          margin: 1rem 0;
          text-align: center;
        }
      }
    }
  }

  @media (max-width: 768px) {
    &__toggle {
      display: flex;
    }

    .navbar__logo {
      display: none;
    }
  }
}
</style>
