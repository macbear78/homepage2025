<template>
  <div class="relative inline-block"
       @mouseenter="hover = true"
      @mouseleave="hover = false"
    >
  <header
    class="fixed top-0 left-0 w-full grid grid-cols-4 items-center px-6 md:px-12 py-3 bg-black/90 text-white z-50 backdrop-blur-md"
  >

    <div class="flex items-center space-x-3">
      <slot name="left">
        <img src="/logo.png" alt="moncat factory" class="h-6" />
      </slot>
    </div>
    

     <!-- 가운데: 메뉴 -->
    
    <nav class="justify-center col-start-2 col-end-4" >
      <ul class="grid grid-cols-5 gap-16">
        <li v-for="link in navLinks" :key="link.name">
          
          <router-link
            :to="link.url"
            class="text-white text-2xl font-extrabold no-underline tracking-wide hover:text-teal-400 transition-colors duration-300"
          > 
          
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="justify-self-end">
        <button class="hamburger-menu" @click="toggleMobileMenu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
</div>

  </header>

      <!-- 숨겨진 화면 -->
        <transition name="slide-fade">
  <div
    v-if="hover" 
    class="fixed top-20 left-0 w-full grid grid-cols-4 grid-rows-3 items-center px-6 md:px-12 py-10 bg-black/90 text-white z-50 backdrop-blur-md"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <nav class="justify-center col-start-2 col-end-4" >
       <ul class="grid grid-cols-5 gap-16">
        <li v-for="link in testLinks1" :key="link.name">
          <router-link
            :to="link.url"
            class="text-white text-lg no-underline tracking-wide hover:text-teal-400 transition-colors duration-300"
          > 
            {{ link.name }}
          </router-link>
        </li>
      </ul> 
    </nav> 
        <nav class="justify-center col-start-2 col-end-4" >
       <ul class="grid grid-cols-5 gap-16">
        <li v-for="link in testLinks2" :key="link.name">
          <router-link
            :to="link.url"
            class="text-white text-lg no-underline tracking-wide hover:text-teal-400 transition-colors duration-300"
          > 
            {{ link.name }}
          </router-link>
        </li>
      </ul> 
    </nav>
        <nav class="justify-center col-start-2 col-end-4" >
       <ul class="grid grid-cols-5 gap-16">
        <li v-for="link in testLinks3" :key="link.name">
          <a
            :href="link.url"
            class="text-white text-lg no-underline tracking-wide hover:text-teal-400 transition-colors duration-300"
          > 
            {{ link.name }}
          </a>
        </li>
      </ul> 
    </nav>
    
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
      { name: "회사소개", url: "/AboutCompany" },
      { name: "솔루션", url: "" },
      { name: "주요사업", url: "" },
      { name: "뉴스", url: "/News" },
      { name: "온라인견적", url: "/OnlineQuote/EstimateList" },
    ],
    },
   testLinks1 : 
  {
    type: Array,
    default: () =>   [
        { name: "회사소개", url: "/AboutCompany" },
      { name: "클라우드 FEMS", url: "/CloudFems" },
      { name: "스마트팩토리", url: "/SmartFactory" },
      
    ]
  },
     testLinks2 : 
  {
    type: Array,
    default: () =>   [
        { name: "BI소개", url: "/AboutBi" },
      { name: "클라우드 MES", url: "/CloudMes" },
      { name: "에너지효율화", url: "/EnergyEfficiency" },
      
    ] 
  },
      testLinks3 : 
  {
    type: Array,
    default: () =>   [
        { name: "오시는길", url: "/ContactUs" },      
    ]
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
