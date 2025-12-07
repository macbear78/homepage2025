<template>
  <div class="relative bg-blue">
    <v-carousel
      cycle
      hide-delimiter-background
      height="700"
      interval="5000"
      continuous
      class="no-gap"
      v-model="currentSlide"
      @update:modelValue="playAnimation"
    >
      <template #prev></template>
      <template #next></template>

      <v-carousel-item
        v-for="(image, i) in slides"
        :key="i"
        class="fill-height no-padding relative"
      >
        <v-img :src="image" class="w-full h-full" cover></v-img>

        <!-- 텍스트 박스 -->
        <div class="absolute bottom-40 left-10 flex flex-col items-start">
          <div class="relative">
            <!-- 제목 --> 
            <transition name="slide-left">
              <h2
                v-if="titleVisible[i]"
                class="text-white text-5xl font-bold whitespace-nowrap"
              >
                {{ titles[i] }}
              </h2>
            </transition>

            <!-- 부제목 -->
            <transition name="slide-left">
              <p
                v-if="subtitleVisible[i]"
                class="absolute text-start text-white text-2xl mt-4 whitespace-nowrap"
              >
                {{ subtitles[i] }}<br/>
                {{ subtitles2[i] }}
              </p>
            </transition>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script setup>
import { ref } from "vue";

const currentSlide = ref(0);

const slides = [
  "https://nepic-s3-data-homepage-bucket.s3.ap-northeast-2.amazonaws.com/images/m-slide1.png",
  "https://nepic-s3-data-homepage-bucket.s3.ap-northeast-2.amazonaws.com/images/m-slide2.png",
  "https://nepic-s3-data-homepage-bucket.s3.ap-northeast-2.amazonaws.com/images/m-slide3.png"
];

const titles = [
  "스마트 제조를 위한 최적의 파트너",
  "사업장의 모든 데이터 연결 및 장비제어",
  "작은 사업장의 혁신적 변화"
];

const subtitles = [
  "실시간 데이터 기반 MES·ERP 솔루션으로",
  "현장 설비, 센서, 환경 정보를 실시간으로 수집·분석·제어를 원격으로",
  "생산·재고·설비를 손쉽게 디지털화하여"
];

const subtitles2 = [
  "생산성 향상과 경영 효율화를 동시에 실현합니다.",
  "어디서나 관리하여 안전하고 효율적인 스마트 사업장을 구축합니다.",
  "공방 운영 효율을 높이는 스마트공방 시스템을 제공합니다."
];

// 슬라이드별 텍스트 show/hidden 저장하는 배열
const titleVisible = ref([true, false, false]);
const subtitleVisible = ref([false, false, false]);


// 슬라이드 바뀔 때 애니메이션 실행
function playAnimation(index) {

  // 모든 텍스트 숨기기
  titleVisible.value = [false, false, false];
  subtitleVisible.value = [false, false, false];

  // 순차 애니메이션
  setTimeout(() => {
    titleVisible.value[index] = true;
  }, 300);

  setTimeout(() => {
    subtitleVisible.value[index] = true;
  }, 900);

}
</script>

<style scoped>
/* 슬라이드 왼쪽 → 오른쪽 효과 */
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(-40px);
}

.slide-left-enter-active {
  transition: all 0.6s ease;
}

.slide-left-enter-to {
  opacity: 1;
  transform: translateX(0);
}
</style>
