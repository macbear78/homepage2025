<template>
  <div
    class="grid bg-white grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 items-center h-[800px] gap-4 relative z-20"
  >
    <div class="w-full h-[800px] col-span-12">
      <p class="text-5xl font-bold m-5">사업분야</p>
      <p class="text-2xl m-5">
        소규모 사업장에도 생산성을 높여서 시장에서 경쟁력을 높일 수 있도록 시스템을 구축해 드립니다.
      </p>

      <div class="flex justify-center items-center gap-28 w-full">

 
        <div
          ref="boxA"
          class="card start-hidden"
        >
            <v-img
              :src="'https://nepic-s3-data-homepage-bucket.s3.ap-northeast-2.amazonaws.com/images/midle1.png'"
              alt="sample"
              class="overflow-hidden rounded-lg cursor-pointer"
              cover
            >
              <template #default>
                <img
                  :src="'https://nepic-s3-data-homepage-bucket.s3.ap-northeast-2.amazonaws.com/images/midle1.png'"
                  alt="sample"
                  class="object-cover transition-transform duration-300 hover:scale-[1.3]"
                />
              </template>
            </v-img>
        </div>
        
        <div
          ref="boxB"
          class="card start-hidden"
        >
            <v-img
              :src="'https://nepic-s3-data-homepage-bucket.s3.ap-northeast-2.amazonaws.com/images/midle2.png'"
              alt="sample"
              class="overflow-hidden rounded-lg cursor-pointer"
              cover
            >
              <template #default>
                <img
                  :src="'https://nepic-s3-data-homepage-bucket.s3.ap-northeast-2.amazonaws.com/images/midle2.png'"
                  alt="sample"
                  class="object-cover transition-transform duration-300 hover:scale-[1.3]"
                />
              </template>
            </v-img>
        </div>

        <div
          ref="boxC"
          class="card start-hidden"
        >
            <v-img
              :src="'https://nepic-s3-data-homepage-bucket.s3.ap-northeast-2.amazonaws.com/images/midle3.png'"
              alt="sample"
              class="overflow-hidden rounded-lg cursor-pointer"
              cover
            >
              <template #default>
                <img
                  :src="'https://nepic-s3-data-homepage-bucket.s3.ap-northeast-2.amazonaws.com/images/midle3.png'"
                  alt="sample"
                  class="object-cover transition-transform duration-300 hover:scale-[1.3]"
                />
              </template>
            </v-img>
        </div>



      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const boxA = ref(null);
const boxB = ref(null);
const boxC = ref(null);

onMounted(() => {
  const boxes = [boxA.value, boxB.value, boxC.value];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 순차 애니메이션 → index * 200ms 딜레이
          boxes.forEach((box, index) => {
            setTimeout(() => {
              box.classList.add("fade-up");
              box.classList.remove("start-hidden");
            }, index * 250); // ← 250ms 간격으로 순차 실행
          });

          observer.disconnect(); // 한 번만 실행
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(boxA.value); // A가 보이면 전체 순차 실행
});
</script>

<style scoped>
.card {
  background: #e5e7eb;
  border-radius: 30px;
  overflow: hidden;
  width: 400px;
  height: 550px;
  transition: all 0.8s ease-out;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.start-hidden {
  opacity: 0;
  transform: translateY(50px);
}

.fade-up {
  opacity: 1;
  transform: translateY(0);
}
</style>
