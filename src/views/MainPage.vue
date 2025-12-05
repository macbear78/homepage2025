<template>
  <div class="w-full overflow-hidden">
    <!-- Title1 (스크롤 버튼 포함) -->
    <!-- 첫 번째 섹션 -->
    <section>
      <Title1Component @scroll-next="scrollToNext" />
    </section>

    <!-- 두 번째 섹션 -->
    <section ref="title2Ref" class="bg-white">
      <Title2Component />
    </section>

    <TitleSub1Component/>
    <TitleSub2Component/>
    <TitleSub3Component/>   

  </div>
</template>

<script setup>
import { ref } from 'vue'
import Title1Component from '@/components/Title1Component.vue'
import Title2Component from '@/components/Title2Component.vue'
import TitleSub1Component from '@/components/TitleSub1Component.vue'
import TitleSub2Component from '@/components/TitleSub2Component.vue'
import TitleSub3Component from '@/components/TitleSub3Component.vue'

// 각 섹션 참조
const title2Ref = ref(null)

// 👇 사용자 정의 부드러운 스크롤 함수 (약 1.5초)
function smoothScrollTo(targetY, duration = 1500) {
  const startY = window.scrollY
  const distance = targetY - startY
  const startTime = performance.now()

  function animation(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    // easeInOutCubic 가속 곡선
    const ease = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2

    window.scrollTo(0, startY + distance * ease)

    if (progress < 1) {
      requestAnimationFrame(animation)
    }
  }

  requestAnimationFrame(animation)
}

// Title1의 버튼 클릭 시 실행
function scrollToNext() {
  const targetY = title2Ref.value.offsetTop
  smoothScrollTo(targetY, 1500) // 1500ms = 1.5초 동안 이동
}
</script>

