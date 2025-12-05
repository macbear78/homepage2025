<template>
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
    <SubHeaderComponent
    :imagefile="item.titleImg"
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
  titleImg: 'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/sub_header/header_image004.png',
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
 