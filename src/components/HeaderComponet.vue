<template>
  <header class="fixed top-0 left-0 w-full bg-white shadow-md z-50">
    
      <!-- 반응형 그리드: 모바일 6, 테블릿 8, PC 12 -->
      <div class="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 items-center h-20 gap-4">
        
        <!-- 로고 -->
        <div class="flex col-span-2 justify-center">
          <img src="https://nepic-s3-data-homepage-bucket.s3.ap-northeast-2.amazonaws.com/images/logo.png" alt="Company Logo" class="h-10" />
        </div>

        <!-- 데스크탑 메뉴 -->
        <nav class="hidden sm:flex col-span-6 sm:col-span-6 lg:col-span-8 justify-start space-x-24">
          <router-link :to="'/'" class="text-black text-2xl font-extrabold no-underline tracking-wide">
              회사정보</router-link>
          <router-link :to="'/'" class="text-black text-2xl font-extrabold no-underline tracking-wide">
              서비스</router-link>
          <router-link :to="'/'" class="text-black text-2xl font-extrabold no-underline tracking-wide">
              지원사업</router-link>
          <router-link :to="'/'" class="text-black text-2xl font-extrabold no-underline tracking-wide">
              뉴스</router-link>
          <router-link :to="'/'" class="text-black text-2xl font-extrabold no-underline tracking-wide">
              고객지원</router-link>    
        </nav>
        <div class="flex col-span-2 justify-center space-x-8">
            <img src="https://nepic-s3-data-homepage-bucket.s3.ap-northeast-2.amazonaws.com/images/blog.png" alt="" class="h-8" />
            <img src="https://nepic-s3-data-homepage-bucket.s3.ap-northeast-2.amazonaws.com/images/youtube.png" alt="" class="h-8" />
        </div>
          <!-- <router-link
              :to="link.url"
              class="menu-link text-white text-2xl font-extrabold no-underline tracking-wide"
            >
              {{ link.name }}
            </router-link> -->

        <!-- 모바일 햄버거 -->
        <div class="sm:hidden col-span-3 flex justify-end">
          <button @click="mobileMenu = !mobileMenu" class="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <!-- 모바일 메뉴 -->
        <div v-if="mobileMenu" class="sm:hidden col-span-6 mt-2 space-y-2">
          <a href="#" class="block text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" class="block text-gray-700 hover:text-blue-600">About</a>
          <a href="#" class="block text-gray-700 hover:text-blue-600">Services</a>
          <a href="#" class="block text-gray-700 hover:text-blue-600">Contact</a>
        </div>

      </div>
    
  </header>
</template>

<script setup>
import { ref } from "vue";

const mobileMenu = ref(false);
</script>

<style scoped>
/* 헤더 높이 확보 */
body {
  padding-top: 80px;
}
</style>
