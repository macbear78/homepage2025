<template>

    <SubHeaderComponent
    :imagefile="item.titleImg"
    :subTitleName="item.titleName"
    :selNum="item.selNum" 
    :menu="item.menu"
    />

  <div
    class="h-[500px] grid bg-green-500 grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 items-center relative z-20"
  >

  </div> 
</template>


<script setup>
import { ref } from 'vue'
import SubHeaderComponent from '@/components/SubHeaderComponent.vue';

const item = {
  titleImg: 'https://nepic-s3-data-homepage-bucket.s3.ap-northeast-2.amazonaws.com/images/SubHeader1.png',
  titleName : "회사정보",
  selNum: 0,
  menu: [
    { name: '회사소개', path: '/CloudFems' },
    { name: '조직도', path: '/CloudMes' },
    { name: '오시는길', path: '/CloudMes' },
  ] 
} 

</script> 


<style>
section {
    display: block;
    position: relative;
    width: 100%;
    padding: 0;
    margin: 0; 
}
*, *::before, *::after {
    box-sizing: border-box;
}



</style>
 