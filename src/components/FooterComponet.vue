<template>
  <footer class="bg-gray-900 text-gray-300 py-10">
    <!-- 반응형 그리드 -->
    <div class="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 items-start gap-6 px-6 max-w-7xl mx-auto">

      <!-- 로고 영역 -->
      <div class="flex flex-col col-span-6 sm:col-span-4 lg:col-span-3 justify-start">
        
          <img 
            src="https://nepic-s3-data-homepage-bucket.s3.ap-northeast-2.amazonaws.com/images/logo.png"
            alt="Company Logo"
            class="h-10"
          />
        
        <p class="font-semibold text-white">㈜ 네픽</p>
      </div> 

      <!-- 회사 정보 -->
      <div class="col-span-6 sm:col-span-4 lg:col-span-6 leading-6 text-sm">
        
        <p>대표이사:홍길동 | 주소: 서울특별시 강남구 테헤란로 123</p>
        <p>사업자등록번호 : 123-45-67890</p>
        <p></p>
        <p>대표번호: 02-123-4567</p>
        <p>Email: contact@example.com</p>
      </div>

      <!-- COPYRIGHT -->
      <div class="col-span-6 sm:col-span-8 lg:col-span-3 text-sm text-gray-500 text-left lg:text-right mt-4 lg:mt-0">
        © 2025 NEPIC. All rights reserved.
      </div>

    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
</style>
