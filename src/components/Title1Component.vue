<template>
  <section class="relative w-full h-screen overflow-hidden">
    <!-- 🎥 배경 비디오 -->
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/videos/background.mp4" type="video/mp4" />
      브라우저가 video 태그를 지원하지 않습니다.
    </video>

    <!-- 🌑 반투명 오버레이 -->
    <div class="absolute top-0 left-0 w-full h-full bg-black/50"></div>

    <!-- ✨ 중앙 문구 -->
    <div
      class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
    >
      <transition name="fade" mode="out-in">
        <h1
          :key="title"
          class="text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg"
        >
          {{ title }}
        </h1>
      </transition>

      <transition name="fade-delayed" mode="out-in">
        <p
          :key="subtitle"
          class="text-2xl text-gray-200"
        >
          {{ subtitle }}
        </p>
      </transition>

      <!-- 🔽 아래로 스크롤 아이콘 -->
      <div
        @click="$emit('scroll-next')"
        class="absolute bottom-10 cursor-pointer animate-bounce"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-10 h-10 text-white opacity-80 hover:opacity-100 transition-opacity"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// ✍️ 문구 리스트
const messages = [
  {
    title: 'Welcome to Moncat Factory',
    subtitle: 'Creative Design & Development',
  },
  {
    title: '클라우드 기반 맞춤형 솔루션으로',
    subtitle: '에너지 효율 극대화',
  },
  {
    title: 'AI와 데이터로 혁신을 만듭니다',
    subtitle: '스마트한 미래를 설계하세요',
  },
]

const index = ref(0)
const title = ref(messages[index.value].title)
const subtitle = ref(messages[index.value].subtitle)

let intervalId = null

onMounted(() => {
  intervalId = setInterval(() => {
    index.value = (index.value + 1) % messages.length
    title.value = messages[index.value].title
    subtitle.value = messages[index.value].subtitle
  }, 5000) // 5초마다 자연스럽게 전환
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<style scoped>
/* 🎬 기본 페이드 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 💫 서브타이틀은 약간 딜레이 주기 */
.fade-delayed-enter-active,
.fade-delayed-leave-active {
  transition: opacity 1.5s ease 0.3s; /* 0.3초 딜레이 */
}
.fade-delayed-enter-from,
.fade-delayed-leave-to { 
  opacity: 0;
}
</style> 
