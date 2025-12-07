<template>
  <div
    class="grid bg-white grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 
           items-center min-h-[500px] sm:min-h-[600px] lg:min-h-[800px] 
           gap-4 relative z-20"
  >
    <div class="col-span-6 sm:col-span-8 lg:col-span-12">
      <div
        ref="boxA"
        :class="[
          'anim-root',
          isVisible ? 'fade-up' : 'start-hidden',
          zoomIn ? 'zoom-in' : ''
        ]"
      >
        <v-img
          src="https://nepic-s3-data-homepage-bucket.s3.ap-northeast-2.amazonaws.com/images/midle-m2-1.png"
          class="w-full 
                 h-[350px] 
                 sm:h-[550px] 
                 lg:h-[800px]"
          cover
        />
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

        // fade-up 후 확대 애니메이션
        setTimeout(() => {
          zoomIn.value = true;
        }, 900);
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

/* 2단계: 부드러운 확대 */
.zoom-in {
  transform: scale(1.05);
  transition: transform 3s ease-out;
}
</style>

