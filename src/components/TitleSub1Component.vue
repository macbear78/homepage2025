<template>
  <section class="relative w-full h-[600px] overflow-hidden">
    <!-- 배경 이미지 -->
    <img
      src="@/assets/images/fems_bg.png"
      alt="Cloud FEMS Background"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <!-- 어두운 오버레이 -->
    <div class="absolute inset-0 bg-black/60"></div>

    <!-- 콘텐츠 영역 -->
    <div class="relative z-10 flex flex-col justify-center items-end h-full text-white px-10 md:px-24">
      <div class="max-w-xl text-right">
        <h2 class="text-4xl font-bold mb-2">Cloud FEMS</h2>
        <p class="text-lg text-teal-400 mb-6">
          IoT 기반 설비/공정/생산 에너지 관리시스템
        </p>

        <ul class="space-y-2 text-gray-200 leading-relaxed text-base mb-8">
          <li>· 개별수용가 맞춤형 에너지 및 설비 트리 구성</li>
          <li>· 설비효율 기반 성능 지표, 목표 관리 제공</li>
          <li>· 기간/시간별 사용량 정밀 분석 및 증감분석</li>
          <li>· 일/월 단위 자동 생성 분석리포트 제공</li>
          <li>· 실시간 에너지 사용을 볼 수 있는 에너지맵 탑재</li>
        </ul>

        <button
          class="border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-black transition-all"
        >
          자세히보기 →
        </button>
      </div>
    </div>
  </section>
  <div class="md:w-1/2 relative mt-16 md:mt-0">
      <v-imag>
        <img src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/main_page/page_image002.png" alt="Moncat Factory" class="w-full h-auto" />
      </v-imag>
    </div>
</template>

<script setup>
// 별도 스크립트 필요 없음
</script>

<style scoped>
/* 필요시 여기에 세부 스타일 조정 */
</style>
