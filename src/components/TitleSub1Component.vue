<template>
  <div
    class="grid bg-white grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 items-center h-[800px] gap-4 relative z-20"
  >
    <div class="col-span-12">
      <!-- start-hidden은 초깃값, fade-up은 보일 때 클래스 -->
      <div
        ref="boxA"
        :class="[
          'anim-root',
          isVisible ? 'fade-up' : 'start-hidden',
          zoomIn ? 'zoom-in' : ''
        ]"
      >
        <v-img
          :src="'https://nepic-s3-data-homepage-bucket.s3.ap-northeast-2.amazonaws.com/images/midle-m2-1.png'"
          class="w-full h-[800px]"
          cover
        ></v-img>
      </div>
    </div>
  </div>
</template>




<script setup>

import { ref, onMounted, onBeforeUnmount } from "vue";

const boxA = ref(null);
const isVisible = ref(false);
const zoomIn = ref(false);
let observer = null;

onMounted(() => {
  const target = boxA.value;
  if (!target) return;

  const options = {
    threshold: 0.25,
    rootMargin: "0px 0px -10% 0px",
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true;

        // 등장 후 약간의 딜레이 후 확대
        setTimeout(() => {
          zoomIn.value = true;
        }, 900); // fade-up이 끝나는 시점(0.9s) 이후 실행
      }
    });
  }, options);

  observer.observe(target);
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});


</script>

<style scoped>
.anim-root {
  transition: opacity 0.9s ease-out, transform 0.9s ease-out;
  will-change: opacity, transform;
}

/* 1단계: 아래에서 위로 등장 */
.start-hidden {
  opacity: 0;
  transform: translateY(80px);
}

.fade-up {
  opacity: 1;
  transform: translateY(0);
}

/* 2단계: 천천히 확대 */
.zoom-in {
  transform: scale(1.05); /* 아주 자연스러운 확대 */
  transition: transform 3s ease-out;
}
</style> 
