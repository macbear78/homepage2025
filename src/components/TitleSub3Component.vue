<template>
  <section class="relative w-full h-[300px]">
    <!-- 배경 이미지 -->
    <div 
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url(${bannerImage})` }"
    ></div>

    <div class="relative z-10 flex flex-row items-center justify-between h-full px-10 md:px-20">
      <!-- 왼쪽 텍스트 -->
      <div class="text-white">
        <h1 class="text-white text-3xl md:text-5xl font-bold leading-snug">
          몬캣팩토리만의<br />
          특별한 솔루션을 만나보세요
        </h1>
      </div>

      <!-- 오른쪽 버튼 -->
      <a
        href="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/pdf/moncatfactory_FEMS.pdf"
        target="_blank"
        class="inline-flex items-center bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/>
        </svg>
        소개서 다운로드
      </a>
    </div>
  </section>
</template>

<script setup>
const bannerImage = 'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/main_page/page_image004.png';
</script>
