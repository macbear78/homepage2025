<template>
  <section class="relative w-full h-[600px] bg-black text-white overflow-hidden flex flex-col md:flex-row">
    <!-- 왼쪽 텍스트 영역 -->
    <div class="relative z-10 flex flex-col justify-center px-10 md:px-24 w-full md:w-1/2 bg-black/70 backdrop-blur-sm">
      <h2 class="text-4xl font-bold mb-2">Cloud MES</h2>
      <p class="text-lg text-teal-400 mb-6">
        IoT 기반 생산정보/품질/설비 관리시스템
      </p>

      <ul class="space-y-2 text-gray-200 leading-relaxed text-base mb-8">
        <li>· 생산현황의 전반적인 실시간 모니터링 관리</li>
        <li>· 계획대비 실적관리를 통한 목표관리</li>
        <li>· 재공 및 재고, 추적관리(Lot tracking)의 실시간 정보제공</li>
        <li>· 설비, 금형 등 기타 부수적 자원의 생산정보 관리</li>
        <li>· 설비, 금형, 치공구 등 사용자원의 보전관리</li>
        <li>· 인터넷을 통한 다양한 장비에서 MES 사용가능</li>
      </ul>

      <button
        class="border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-black transition-all w-fit"
      >
        자세히보기 →
      </button>
    </div>

    <!-- 오른쪽 배경 이미지 -->
    <div class="relative w-full md:w-1/2 h-[300px] md:h-full">
      <img
        src="@/assets/images/mes_bg.png"
        alt="Cloud MES Background"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/30"></div>
    </div>
  </section>
</template>

<script setup>
// 별도 스크립트 없음
</script>

<style scoped>
/* 추가적인 커스텀 효과가 필요할 경우 여기에 작성 */
</style>
