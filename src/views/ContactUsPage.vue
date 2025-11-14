<template>

      <PageInHeaderComponet 
    :imagefile="item.titleImg"
    :selNum="item.selNum"
    :menu="item.menu"
  /> 
  <img :src="desktopImg" alt="Desktop" />
</template>

<script setup>

import desktopImg from '@/assets/Desktop-4.png'
import titleImg from '@/assets/baner02.png' // <- 추가
import PageInHeaderComponet from '@/components/PageInHeaderComponet.vue';

const item = { 
  titleImg, // import한 이미지를 넣기
  selNum: 2,
  menu: [
    { name: '회사소개', path: '/AboutCompany' },
    { name: 'BI 소개', path: '/AboutBi' },
    { name: '오시는길', path: '/ContactUs' },
  ]
} 
</script>
