<template>
  <div class="min-h-screen bg-gray-50">
    <!-- 상단 헤더 -->
    <PageInHeaderComponet 
      :imagefile="item.titleImg"
      :selNum="item.selNum"
      :menu="item.menu"
    />

    <!-- 지도 -->
    <section class="max-w-4xl mx-auto my-10 p-4 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold mb-4">부산시청 위치</h2>
      

    </section>

    <!-- Map1Component 사용 (선택적) -->
    <!-- 필요 없으면 제거 가능 -->
    <Map1Component/>
  </div>
</template>

<script setup>
import PageInHeaderComponet from '@/components/PageInHeaderComponet.vue';
import Map1Component from '@/components/Map1Component.vue';

const item = { 
  titleImg: 'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/sub_header/header_image001.png', 
  selNum: 2,
  menu: [
    { name: '회사소개', path: '/AboutCompany' },
    { name: 'BI 소개', path: '/AboutBi' },
    { name: '오시는길', path: '/ContactUs' },
  ]
} 
</script>

<style scoped>
/* 필요시 추가 스타일링 가능 */
</style>
