<template>

  <header 
   :class="[
    'z-50 fixed top-0 left-0 w-full shadow-md transition-all duration-300',
    bgStyle === 'black' ? 'bg-black' : 'bg-white' 
  ]"> 
    <!-- 반응형 그리드: 모바일 6, 테블릿 8, PC 12 -->
    <div @mouseenter="isHover = true"
       class=" z-60 grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 items-center h-20 gap-4 ">
      
     
      <!-- 로고 -->
      <div class="flex col-span-2 justify-center">
        <img src="https://nepic-s3-data-homepage-bucket.s3.ap-northeast-2.amazonaws.com/images/logo.png"
          alt="Company Logo" class="h-10" />
      </div>



      <!-- 데스크탑 메뉴 -->
      <div class="hidden sm:flex col-span-6 sm:col-span-6 lg:col-span-8 justify-start space-x-24">
        <div class="grid grid-cols-5 gap-4 w-full">
          <router-link :to="'/'" :class="['text-black text-2xl font-extrabold no-underline tracking-wide transition-all duration-300',
            bgStyle === 'black' ? 'text-white' : 'text-black'
          ]">
            회사정보</router-link>
          <router-link :to="'/'" :class="['text-black text-2xl font-extrabold no-underline tracking-wide transition-all duration-300',
            bgStyle === 'black' ? 'text-white' : 'text-black'
          ]">
            서비스</router-link>
          <router-link :to="'/'" :class="['text-black text-2xl font-extrabold no-underline tracking-wide transition-all duration-300',
            bgStyle === 'black' ? 'text-white' : 'text-black'
          ]">
            지원사업</router-link>
          <router-link :to="'/'" :class="['text-black text-2xl font-extrabold no-underline tracking-wide transition-all duration-300',
            bgStyle === 'black' ? 'text-white' : 'text-black'
          ]">
            뉴스</router-link>
          <router-link :to="'/'" :class="['text-black text-2xl font-extrabold no-underline tracking-wide transition-all duration-300',
            bgStyle === 'black' ? 'text-white' : 'text-black'
          ]">
            고객지원</router-link>
        </div>
      </div>
      <div class="flex col-span-2 justify-center space-x-8">
        <img :src="blogImg" alt="blog" class="h-8" />
        <img :src="youtubeImg" alt="youtube" class="h-8" />
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
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
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

    <transition name="slide-fade">
      <div name="b"
          v-show="isHover"
          @mouseleave="isHover = false" 
        :class="['absolute w-full z-40 grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 items-center h-32 gap-4 transition-all duration-300',
               bgStyle === 'black' ? 'bg-black' : 'bg-white'   
        ]">
        <div class="flex col-span-2"></div>
        <div class="hidden sm:flex col-span-6 sm:col-span-6 lg:col-span-8 justify-start space-x-24">
          <!-- 내부를 5등분하는 그리드 -->
          <div class="grid grid-cols-5 gap-4 w-full mt-3">
            <div class="flex flex-col space-y-2">
              <router-link :to="'/AboutCompany'" 
              :class="['no-underline',
                  bgStyle === 'black' ? 'text-white' : 'text-black'
              ]">
                회사소개</router-link>
              <router-link :to="'/'"
              :class="['no-underline',
                  bgStyle === 'black' ? 'text-white' : 'text-black'
              ]">
                조직도</router-link>
              <router-link :to="'/'"
              :class="['no-underline',
                  bgStyle === 'black' ? 'text-white' : 'text-black'
              ]">
                오시는길</router-link>
            </div>
            <div class="flex flex-col space-y-2">
              <router-link :to="'/'" 
              :class="['no-underline',
                  bgStyle === 'black' ? 'text-white' : 'text-black'
              ]">
                MES&ERP</router-link>
              <router-link :to="'/'" 
              :class="['no-underline',
                  bgStyle === 'black' ? 'text-white' : 'text-black'
              ]">
                IoT구축</router-link>
              <router-link :to="'/'" 
              :class="['no-underline',
                  bgStyle === 'black' ? 'text-white' : 'text-black'
              ]">
                스마트공방</router-link>

            </div>
            <div class="flex flex-col space-y-2">
              <router-link :to="'/'" :class="['no-underline',
                  bgStyle === 'black' ? 'text-white' : 'text-black'
              ]">
                중기청</router-link>
              <router-link :to="'/'" :class="['no-underline',
                  bgStyle === 'black' ? 'text-white' : 'text-black'
              ]">
                바우처</router-link>

            </div>
            <div class="flex flex-col space-y-2">
              <router-link :to="'/News/NewsCardList'" :class="['no-underline',
                  bgStyle === 'black' ? 'text-white' : 'text-black'
              ]">
                뉴스</router-link>
              <router-link :to="'/'" :class="['no-underline',
                  bgStyle === 'black' ? 'text-white' : 'text-black'
              ]">
                공지사항</router-link>
            </div>
            <div class="flex flex-col space-y-2">
              <router-link :to="'/support1'" :class="['no-underline',
                  bgStyle === 'black' ? 'text-white' : 'text-black'
              ]">
                온라인문의</router-link>
              <router-link :to="'/support2'" :class="['no-underline',
                  bgStyle === 'black' ? 'text-white' : 'text-black'
              ]">
                견적요청</router-link>
            </div>
          </div>
        </div>
      </div>
    </transition>
</template>

<script setup>
import { ref, computed } from "vue";

const mobileMenu = ref(false);
const isHover = ref(false);

const props = defineProps({
  bgStyle: {
    type: String,
    default: 'black'
  }
})

// 배경에 따라 이미지 자동 선택
const blogImg = computed(() =>
  props.bgStyle === 'black'
    ? "https://nepic-s3-data-homepage-bucket.s3.ap-northeast-2.amazonaws.com/images/blog2.png"
    : "https://nepic-s3-data-homepage-bucket.s3.ap-northeast-2.amazonaws.com/images/blog.png"
)

const youtubeImg = computed(() =>
  props.bgStyle === 'black'
    ? "https://nepic-s3-data-homepage-bucket.s3.ap-northeast-2.amazonaws.com/images/youtube2.png"
    : "https://nepic-s3-data-homepage-bucket.s3.ap-northeast-2.amazonaws.com/images/youtube.png"
)

</script>

<style scoped>
/* 헤더 높이 확보 */
body {
  padding-top: 80px;
}

/* slide + fade 트랜지션 */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 1.0s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {

  transform: translateY(-200px);
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  transform: translateY(0);
}
</style>
