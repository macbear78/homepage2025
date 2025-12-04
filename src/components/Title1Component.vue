<template>
  <div class="bg-blue">
      <v-carousel
        cycle
        hide-delimiter-background
        height="700"
        interval="3000"
        continuous
        class="no-gap"
      >
        <!-- 화살표 슬롯 제거 -->
        <template #prev></template>
        <template #next></template>

        <v-carousel-item
          v-for="(image, i) in slides"
          :key="i"
          class="fill-height no-padding"
        >
          <v-img
            :src="image"
            class="w-full h-full"
            cover
          ></v-img>
        </v-carousel-item>
      </v-carousel>
  </div>
  
</template>

<script setup>
const slides = [
  "https://nepic-s3-data-homepage-bucket.s3.ap-northeast-2.amazonaws.com/images/slide1.png",
  "https://nepic-s3-data-homepage-bucket.s3.ap-northeast-2.amazonaws.com/images/slide2.png",
  "https://nepic-s3-data-homepage-bucket.s3.ap-northeast-2.amazonaws.com/images/slide3.png"
];
</script>

<style scoped>
.v-carousel .v-window-item {
  padding: 0 !important;
}

.v-carousel .v-carousel-item {
  margin: 0 !important;
}

.fill-height {
  height: 100%;
}

.no-padding {
  padding: 0 !important;
}
section {
  background-color: #000; /* 또는 이미지와 비슷한 색상 */
}
</style>
