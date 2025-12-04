<template>
  <header class="fixed top-0 left-0 w-full bg-white shadow-md z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 반응형 그리드: 모바일 6, 테블릿 8, PC 12 -->
      <div class="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 items-center h-20 gap-4">
        
        <!-- 로고 -->
        <div class="col-span-3 sm:col-span-2 lg:col-span-3 flex items-center">
          <img src="/logo.png" alt="Company Logo" class="h-10" />
        </div>

        <!-- 데스크탑 메뉴 -->
        <nav class="hidden sm:flex col-span-6 sm:col-span-6 lg:col-span-9 justify-end space-x-6">
          <a href="#" class="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" class="text-gray-700 hover:text-blue-600">About</a>
          <a href="#" class="text-gray-700 hover:text-blue-600">Services</a>
          <a href="#" class="text-gray-700 hover:text-blue-600">Contact</a>
        </nav>

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
