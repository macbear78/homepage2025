<template>
  <div class="relative inline-block"
       @mouseenter="hover = true"
      @mouseleave="hover = false"
    >
  <header
    class="fixed top-0 left-0 w-full grid grid-cols-10 items-center px-6 md:px-12 py-3 bg-black/90 text-white z-50 backdrop-blur-md"
  >

    <div class="flex items-center space-x-3">
      <slot name="left">
        <img src="/logo.png" alt="moncat factory" class="h-6" />
      </slot>
    </div>
    <div>aa</div>
    <div>aa</div>
    <div>aa</div>
    <div>aa</div>
    <div>aa</div>
    <div>aa</div>
     <!-- 가운데: 메뉴 -->
    
    <!-- <nav class="justify-self-start col-start-3 col-end-8" >
      <ul class="flex space-x-32">
        <li v-for="link in navLinks" :key="link.name">
          <a
            :href="link.url"
            class="font-semibold hover:text-teal-400 transition-colors duration-300"
          > 
            {{ link.name }}
          </a>
        </li>
      </ul>
    </nav> -->
  <!-- 오른쪽: 버튼 또는 아이콘 -->
  <!-- <div class="justify-self-end flex space-x-4 col-start-10">
       <button class="hamburger-menu" @click="toggleMobileMenu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
  </div> -->
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
    class="fix top-20 left-0 w-full grid grid-cols-10 items-center px-6 md:px-12 py-3 bg-black/90 text-white z-50 backdrop-blur-md"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
   <div>aa</div>
   <div>aa</div>
   <div>aa</div>
   <div>aa</div>
   <div class="col-start-10"></div>
    <div>aa</div> 
    <div>aa</div>
    <div>aa</div>
    <div class="col-start-10"></div>
     <div>aa</div>
    <div>aa</div>
    <div>aa</div>
    <!-- <div></div>
  <div class="justify-self-start col-start-3 col-end-8" >

  </div> 
 


  <div></div>
  <div class="justify-self-start col-start-3 col-end-8" >

      <div class="max-w-5xl mx-auto grid grid-cols-3 gap-y-8 gap-x-20 text-lg text-left">
    
       
          <div class="flex flex-col space-y-3 text-center">
            <a href="#" 
              class="font-semibold hover:text-teal-400 transition-colors duration-300">회사소개</a>
            <a href="#" class="font-semibold hover:text-teal-400 transition-colors duration-300">BI 소개</a>
            <a href="#" class="font-semibold hover:text-teal-400 transition-colors duration-300">오시는길</a>
          </div>

     
          <div class="flex flex-col space-y-3 text-center">
            <a href="#" class="font-semibold hover:text-teal-400 transition-colors duration-300">클라우드 FEMS</a>
            <a href="#" class="font-semibold hover:text-teal-400 transition-colors duration-300">클라우드 MES</a>
          </div>

         
          <div class="flex flex-col space-y-3 text-center">
            <a href="#" class="font-semibold hover:text-teal-400 transition-colors duration-300">스마트팩토리</a>
            <a href="#" class="font-semibold hover:text-teal-400 transition-colors duration-300">에너지효율화</a>
          </div> 
    
        </div>
    </div> -->

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
      { name: "온라인견적", url: "/OnlineQuote/EstimateList" },
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
/* 햄버거 메뉴 아이콘 스타일 */
.hamburger-menu {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 24px; /* 이미지 아이콘 크기 맞춤 */
  height: 24px;
  margin-left: 20px;
  z-index: 100; /* 다른 요소 위에 표시 */
}
.bar {
  display: block;
  width: 100%;
  height: 2px;
  background-color: #ffffff;
  transition: all 0.3s ease;
}
</style>
