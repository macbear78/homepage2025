<template>
  <section class="w-full py-24 bg-white">
    <div class="text-center mb-16">
      <p class="text-5xl font-bold">History</p>
    </div>

    <div class="relative max-w-7xl mx-auto">

      <!-- Swiper -->
      <Swiper
        :modules="[Navigation]"
        :slides-per-view="3"
        :centered-slides="true"
        :space-between="40"
        :loop="true"
        :navigation="false"
        @swiper="onSwiperInit"
        class="history-swiper"
      >
        <SwiperSlide
          v-for="(year, index) in history"
          :key="index"
        >
          <div class="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <h2 class="text-4xl font-bold mb-6">{{ year.year }}</h2>

            <div v-for="(item, i) in year.items" :key="i">
              <p class="text-gray-800 mb-3">
                <b class="text-blue-600">{{ item.month }}.</b>
                {{ item.text }}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <!-- Navigation Buttons -->
      <button class="history-prev slider-btn left-0">
        <i class="fas fa-angle-left"></i>
      </button>

      <button class="history-next slider-btn right-0">
        <i class="fas fa-angle-right"></i>
      </button>

    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const history = [
  {
    year: "2023 ~",
    items: [
      { month: "04", text: "산업단지공단 에너지자급자족인프라 사업 수주" },
      { month: "04", text: "스마트에너지플랫폼 사업 수주" },
    ],
  },
  {
    year: "2022",
    items: [
      { month: "02", text: "에너지 최적화 알고리즘 개발 완료" },
      { month: "06", text: "스마트팩토리 프로젝트 구축 완료" },
    ],
  },
  {
    year: "2021",
    items: [
      { month: "03", text: "AI 기반 설비 고장 예측 기능 개발" },
      { month: "10", text: "클라우드 EMS 서비스 출시" },
    ],
  },
  {
    year: "2020",
    items: [
      { month: "01", text: "Moncat Factory 설립" },
      { month: "08", text: "첫 번째 스마트에너지 프로젝트 수주" },
    ],
  },
];

const onSwiperInit = (swiper) => {
  swiper.params.navigation.prevEl = ".history-prev";
  swiper.params.navigation.nextEl = ".history-next";
  swiper.navigation.init();
  swiper.navigation.update();
};
</script>

<style scoped>
.slider-btn {
  @apply absolute top-1/2 -translate-y-1/2 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center text-3xl shadow-lg cursor-pointer transition hover:bg-gray-700;
}

.slider-btn {
  position: absolute;
  z-index: 9999 !important;
  pointer-events: auto !important;
}

.history-swiper {
  position: relative;
  z-index: 1;
}

.swiper-slide {
  z-index: 1;
  pointer-events: none;  /* 클릭 방해 방지 */
}

.swiper-slide * {
  pointer-events: none;
}
</style>
