<template>
  <section
    class="relative w-full h-[280px] flex items-center justify-between bg-black text-white overflow-hidden px-10 md:px-24"
  >
    <!-- 배경 이미지 -->
    <img
      src="@/assets/images/factory_bg.png"
      alt="Factory Background"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <!-- 어두운 오버레이 -->
    <div class="absolute inset-0 bg-black/60"></div>

    <!-- 왼쪽 텍스트 -->
    <div class="relative z-10 flex flex-col space-y-2">
      <h2 class="text-3xl md:text-4xl font-extrabold leading-snug">
        문캣팩토리만의<br />
        특별한 솔루션을 만나보세요
      </h2>
    </div>

    <!-- 오른쪽 버튼 -->
    <div class="relative z-10">
      <button
        class="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 4v16h16V4M4 4l8 8m0 0l8-8m-8 8v12" />
        </svg>
        <span>소개서 다운로드</span>
      </button>
    </div>
  </section>
</template>

<script setup>
// 별도의 스크립트 로직 없음
</script>

<style scoped>
/* 반응형에서 높이 조정 */
@media (max-width: 768px) {
  section {
    flex-direction: column;
    text-align: center;
    height: auto;
    padding: 3rem 1.5rem;
  }
}
</style>
