<template>
  <section class="flex flex-col md:flex-row items-center justify-between px-12 py-24 bg-white relative overflow-hidden">
    <!-- 왼쪽 텍스트 영역 -->
    <div class="md:w-1/2 space-y-6 z-10">
      <h2 class="text-3xl font-semibold text-gray-800 leading-snug">
        에너지 비용절감을 위한<br />
        클라우드 기반 모듈형 솔루션
      </h2>

      <h1 class="text-5xl font-bold text-teal-600">Moncat Factory</h1>

      <div class="space-y-3 text-gray-700">
        <p class="bg-gray-100 rounded-full px-4 py-2 inline-block">
          국내 최초 클라우드 FEMS 인증 및 에너지 절감 특허기술 보유
        </p>
        <p class="bg-gray-100 rounded-full px-4 py-2 inline-block">
          한국산업단지공단 FEMS 사업실적 <span class="font-bold">3년 연속 1위</span>
        </p>
        <p class="bg-gray-100 rounded-full px-4 py-2 inline-block">
          한국에너지공단 FEMS 사업실적 <span class="font-bold">4년 연속 1위</span>
        </p>
      </div>
    </div>

    <!-- 오른쪽 3D 블록 이미지 영역 -->
    <div class="md:w-1/2 relative mt-16 md:mt-0">
      <!-- 배경 데코 블록 -->
      <div class="absolute -top-10 left-0 w-64 h-64 bg-gradient-to-br from-cyan-400 to-blue-500 opacity-20 blur-3xl rounded-full"></div>

      <!-- 모듈 박스들 -->
      <div class="grid grid-cols-2 gap-6 justify-items-center relative z-10">
        <div class="bg-gray-200 rounded-2xl p-6 shadow-lg transform rotate-3">
          <p class="text-center font-semibold text-gray-800">FEMS</p>
        </div>
        <div class="bg-blue-500 rounded-2xl p-6 shadow-lg transform -rotate-6 text-white">
          <p class="text-center font-semibold">MES</p>
        </div>
        <div class="bg-cyan-500 rounded-2xl p-6 shadow-lg transform rotate-6 text-white">
          <p class="text-center font-semibold">FMS</p>
        </div>
        <div class="bg-gray-100 rounded-2xl p-6 shadow-lg transform -rotate-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-10 mx-auto text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M4 4v16h16V4H4zm4 4h8v8H8V8z" />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// 특별한 로직 없음 — 단순 디자인 구성
</script>

<style scoped>
/* 입체감 및 부드러운 전환 */
section {
  perspective: 1000px;
}
div.bg-gray-200,
div.bg-blue-500,
div.bg-cyan-500,
div.bg-gray-100 {
  transition: transform 0.4s ease, box-shadow 0.3s ease;
}
div.bg-gray-200:hover,
div.bg-blue-500:hover,
div.bg-cyan-500:hover,
div.bg-gray-100:hover {
  transform: scale(1.05) rotateY(10deg);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}
</style>
