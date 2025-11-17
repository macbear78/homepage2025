<template>
  <div
    class="relative inline-block"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <header
      class="fixed top-0 left-0 w-full grid grid-cols-5 items-center px-6 md:px-12 py-3 bg-black/90 text-white z-50 backdrop-blur-md"
    >
      <!-- 왼쪽 로고 -->
      <div class="flex items-center space-x-3">
          <router-link to="/main">
            <img 
              src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/logo001.png" 
              alt="moncat factory" 
              class="h-6 cursor-pointer"
            />
          </router-link>
      </div>


      <!-- 가운데 메뉴 -->
      <nav class="justify-center col-start-2 col-end-5">
        <ul class="grid grid-cols-6 gap-12">
          <li v-for="link in navLinks" :key="link.name">
            <router-link
              :to="link.url"
              class="menu-link text-white text-2xl font-extrabold no-underline tracking-wide"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- 햄버거 메뉴 -->
      <div class="justify-self-end">
        <button class="hamburger-menu" @click="toggleMobileMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </header>

    <!-- 숨겨진 서브 메뉴 -->
    <transition name="slide-fade">
      <div
        v-if="hover"
        class="fixed top-20 left-0 w-full grid grid-cols-5 grid-rows-3 items-center px-6 md:px-12 py-10 bg-black/90 text-white z-50 backdrop-blur-md"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
      >
        <nav class="justify-center col-start-2 col-end-5">
          <ul class="grid grid-cols-6 gap-12">
            <li v-for="link in testLinks1" :key="link.name">
              <router-link
                :to="link.url"
                class="menu-link text-white text-lg no-underline tracking-wide"
              >
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </nav>

        <nav class="justify-center col-start-2 col-end-5">
          <ul class="grid grid-cols-6 gap-12">
            <li v-for="link in testLinks2" :key="link.name">
              <router-link
                :to="link.url"
                class="menu-link text-white text-lg no-underline tracking-wide"
              >
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </nav>

        <nav class="justify-center col-start-2 col-end-5">
          <ul class="grid grid-cols-6 gap-12">
            <li v-for="link in testLinks3" :key="link.name">
              <router-link
                :to="link.url"
                class="menu-link text-white text-lg no-underline tracking-wide"
              >
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const hover = ref(false);

const navLinks = [
  { name: "회사소개", url: "/AboutCompany" },
  { name: "솔루션", url: "" },
  { name: "주요사업", url: "" },
  { name: "뉴스", url: "/News/NewsCardList" },
  { name: "온라인견적", url: "/OnlineQuote/EstimateList" },
  { name: "관리자", url: "/Admin" },
];

const testLinks1 = [
  { name: "회사소개", url: "/AboutCompany" },
  { name: "클라우드 FEMS", url: "/CloudFems" },
  { name: "스마트팩토리", url: "/SmartFactory" },
];
const testLinks2 = [
  { name: "BI소개", url: "/AboutBi" },
  { name: "클라우드 MES", url: "/CloudMes" },
  { name: "에너지효율화", url: "/EnergyEfficiency" },
];
const testLinks3 = [{ name: "오시는길", url: "/ContactUs" }];
</script>

<style scoped>
/* ✅ 메뉴 밑줄 애니메이션 */
.menu-link {
  position: relative;
  display: inline-block;
  padding-bottom: 4px;
  transition: color 0.3s ease;
}
.menu-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #14b8a6; /* teal-400 */
  transition: all 0.3s ease;
  transform: translateX(-50%);
}
.menu-link:hover {
  color: #14b8a6;
}
.menu-link:hover::after {
  width: 100%;
}

/* ✅ slide fade 애니메이션 */
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

/* ✅ 햄버거 메뉴 스타일 */
.hamburger-menu {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 24px;
  margin-left: 20px;
  z-index: 100;
}
.bar {
  display: block;
  width: 100%;
  height: 2px;
  background-color: #ffffff;
  transition: all 0.3s ease;
}
</style>
