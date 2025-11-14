<template>

       <PageInHeaderComponet 
    :imagefile="item.titleImg"
    :selNum="item.selNum"
    :menu="item.menu"
  /> 
  <img :src="desktopImg" alt="Desktop" />
</template>

<script setup>
import desktopImg from '@/assets/Desktop-2.png'
import titleImg from '@/assets/baner02.png' // <- 추가
import PageInHeaderComponet from '@/components/PageInHeaderComponet.vue';

const item = {
  titleImg, // import한 이미지를 넣기
  selNum: 1,
  menu: [
    { name: '스마트팩토리', path: '/SmartFactory' },
    { name: '에너지효율화', path: '/EnergyEfficiency' },
  ]
} 
</script>
