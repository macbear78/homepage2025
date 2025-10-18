<template>
  <div class="relative inline-block"
       @mouseenter="hover = true"
      @mouseleave="hover = false"
    >
  <header
    class="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-black/90 text-white z-50 backdrop-blur-md"
  >
    <!-- 왼쪽: 로고 영역 -->
    <div class="flex items-center space-x-3">
      <slot name="left">
        <img src="/logo.png" alt="moncat factory" class="h-6" />
        <h1 class="text-lg font-semibold">{{ title }}</h1>
      </slot>
    </div>

     <!-- 가운데: 메뉴 -->
  <div class="hidden md:flex flex-1 justify-center">
    <nav>
      <ul class="flex space-x-20">
        <li v-for="link in navLinks" :key="link.name">
          <a
            :href="link.url"
            class="font-semibold hover:text-teal-400 transition-colors duration-300"
          > 
            {{ link.name }}
          </a>
        </li>
      </ul>
    </nav>
  </div>

    <!-- 모바일용 메뉴 아이콘 -->
    <!-- <button
      class="md:hidden flex flex-col justify-center items-center space-y-1"
      @click="menuOpen = !menuOpen"
    >
      <span
        class="block w-6 h-0.5 bg-white transition-transform duration-300"
        :class="{ 'rotate-45 translate-y-1.5': menuOpen }"
      ></span>
      <span
        class="block w-6 h-0.5 bg-white transition-opacity duration-300"
        :class="{ 'opacity-0': menuOpen }"
      ></span>
      <span
        class="block w-6 h-0.5 bg-white transition-transform duration-300"
        :class="{ '-rotate-45 -translate-y-1.5': menuOpen }"
      ></span>
    </button> -->

    <!-- 모바일 드롭다운
    <transition name="slide-fade">
      <div
        v-if="menuOpen"
        class="absolute top-full left-0 w-full bg-black/95 text-center py-4 space-y-4 md:hidden"
      >
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.url"
          class="block text-lg font-semibold hover:text-teal-400 transition"
        >
          {{ link.name }}
        </a>
      </div>
    </transition> -->
  </header>
      <!-- 숨겨진 화면 -->
      <transition name="slide-fade">
        <div
          v-if="hover"
          class="absolute top-full left-0 w-full bg-black/95 text-center py-4 space-y-4"
        >
        <p>a</p>
          <div
           class="w-full flex items-center justify-between px-8 py-4 bg-black/90 text-white z-50 backdrop-blur-md"
           >

     <!-- 가운데: 메뉴 -->
  <div class="hidden md:flex flex-1 justify-center">
    <nav>
     <div class="bg-black/70 text-white py-8 px-16">
    <div class="grid grid-cols-3 gap-y-4 gap-x-16 text-lg">
      <!-- 1열 -->
      <div class="space-y-4">
        <a href="#" class="hover:text-yellow-300 transition">회사소개</a>
        <a href="#" class="hover:text-yellow-300 transition">BI 소개</a>
        <a href="#" class="hover:text-yellow-300 transition">오시는길</a>
      </div>

      <!-- 2열 -->
      <div class="space-y-4">
        <a href="#" class="hover:text-yellow-300 transition">클라우드 FEMS</a>
        <a href="#" class="hover:text-yellow-300 transition">클라우드 MES</a>
      </div>

      <!-- 3열 -->
      <div class="space-y-4">
        <a href="#" class="hover:text-yellow-300 transition">스마트팩토리</a>
        <a href="#" class="hover:text-yellow-300 transition">에너지효율화</a>
      </div>
    </div>
  </div>
    </nav>
  </div>
</div>
        </div>
      </transition>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";


const hover = ref(false)

defineProps({
  title: {
    type: String,
    default: "moncat factory",
  },
  navLinks: {
    type: Array,
    default: () => [
      { name: "회사소개", url: "/about" },
      { name: "솔루션", url: "/solution" },
      { name: "주요사업", url: "/business" },
      { name: "뉴스", url: "/news" },
    ],
  },
});
</script>

<style>
/* 호버 트랜지션 */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
