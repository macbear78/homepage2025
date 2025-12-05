<template>
  <div class="min-h-screen bg-gray-50">
    <!-- 페이지 헤더 -->
    <header class="bg-blue-700 text-white py-6 text-center">
      <h1 class="text-3xl font-bold">부산시청 오시는 길</h1>
    </header>

    <!-- 주소 및 연락처 -->
    <section class="max-w-3xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">부산시청 정보</h2>
      <p class="mb-2"><strong>주소:</strong> 부산광역시 연제구 중앙대로 1001</p>
      <p class="mb-2"><strong>전화:</strong> 051-888-2000</p>
      <p class="mb-2"><strong>팩스:</strong> 051-888-2020</p>
    </section>

    <!-- 교통 안내 -->
    <section class="max-w-3xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">교통 안내</h2>
      <ul class="list-disc list-inside space-y-2">
        <li>지하철: 부산 1호선 시청역 1번 출구 도보 5분</li>
        <li>버스: 100, 139, 181, 200번 시청 하차</li>
        <li>자가용: 중앙대로 이용, 시청 주차장 이용 가능</li>
      </ul>
    </section>

    <!-- 지도 -->
    <section class="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">지도</h2>
      <div id="map" class="w-full h-96 rounded-lg shadow-inner"></div>
    </section>
          <!-- iframe 지도 (반응형) -->
      <div class="relative w-full h-0" style="padding-bottom: 56.25%;">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.0359852591173!2d127.02070297629386!3d37.48347717888572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca13f3680a52d%3A0xd42c06d88e068b8a!2z66qs7Lqj7YG065287Jqw65Oc!5e0!3m2!1sko!2skr!4v1763369872214!5m2!1sko!2skr" 
          class="absolute top-0 left-0 w-full h-full border-0"
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
   
  </div>
</template>

<script setup>



</script>




