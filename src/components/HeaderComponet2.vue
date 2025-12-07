<template>
  <header class="fixed top-0 left-0 w-full bg-white shadow z-50">
    <div class="flex items-center justify-between h-16 px-4">

      <!-- 로고 -->
      <img 
        src="https://nepic-s3-data-homepage-bucket.s3.ap-northeast-2.amazonaws.com/images/logo.png"
        alt="Logo"
        class="h-8"
      />

      <!-- 햄버거 버튼 -->
      <button @click="toggleMenu" class="text-black focus:outline-none">
        <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7"
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>

        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-7 w-7"
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- 메뉴 영역 -->
    <transition name="slide-fade">
      <div 
        v-if="menuOpen" 
        class="bg-white border-t px-4 py-3 space-y-3"
      >
        <div v-for="(item, idx) in menuList" :key="idx" class="border-b pb-2">

          <!-- 1차 메뉴 -->
          <div 
            class="flex justify-between items-center"
            @click="toggleSub(idx)"
          >
            <span class="text-lg font-semibold">{{ item.title }}</span>

            <svg v-if="item.sub.length > 0 && !item.open" xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
               d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
               clip-rule="evenodd" />
            </svg>
            <svg v-if="item.sub.length > 0 && item.open" xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
               d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832l-3.71 3.938a.75.75 0 11-1.08-1.04l4.24-4.5a.75.75 0 011.08 0l4.24 4.5a.75.75 0 01-.02 1.06z"
               clip-rule="evenodd" />
            </svg>
          </div>

          <!-- 2차 메뉴 -->
          <transition name="fade">
            <div 
              v-if="item.open" 
              class="ml-4 mt-2 space-y-2 text-gray-700"
            >
              <router-link 
                v-for="(sub, sid) in item.sub" 
                :key="sid"
                :to="sub.url"
                class="block text-base"
              >
                {{ sub.name }}
              </router-link>
            </div>
          </transition>

        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => menuOpen.value = !menuOpen.value

// 모바일용 메뉴 구조 (PC 서브메뉴와 동일)
const menuList = ref([
  {
    title: "회사정보",
    open: false,
    sub: [
      { name: "회사소개", url: "/AboutCompany" },
      { name: "조직도", url: "/" },
      { name: "오시는길", url: "/" }
    ]
  },
  {
    title: "서비스",
    open: false,
    sub: [
      { name: "MES&ERP", url: "/" },
      { name: "IoT구축", url: "/" },
      { name: "스마트공방", url: "/" }
    ]
  },
  {
    title: "지원사업",
    open: false,
    sub: [
      { name: "중기청", url: "/" },
      { name: "바우처", url: "/" }
    ]
  },
  {
    title: "뉴스",
    open: false,
    sub: [
      { name: "뉴스", url: "/News/NewsCardList" },
      { name: "공지사항", url: "/" }
    ]
  },
  {
    title: "고객지원",
    open: false,
    sub: [
      { name: "온라인문의", url: "/support1" },
      { name: "견적요청", url: "/support2" }
    ]
  },
])

const toggleSub = (index) => {
  menuList.value[index].open = !menuList.value[index].open
}
</script>

<style scoped>
/* 메뉴 열릴 때 슬라이드 애니메이션 */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* 서브메뉴 fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
