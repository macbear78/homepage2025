<template>
  <section class="relative w-full h-screen overflow-hidden">
    <!-- 배경 비디오 -->
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

    <!-- 어두운 오버레이 -->
    <div class="absolute top-0 left-0 w-full h-full bg-black/50"></div>

    <!-- 중앙 타이틀 -->
    <div class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
      <h1 class="text-6xl font-bold mb-4">Welcome to moncat factory</h1>
      <p class="text-2xl">Creative Design & Development</p>
    </div>
  </section>
</template>

<script setup>
// 특별한 로직이 없어도 script setup은 필요함.
</script>

<style scoped>
/* 필요시 추가 스타일 */
</style>
