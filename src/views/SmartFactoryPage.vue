<template>

       <PageInHeaderComponet 
    :imagefile="item.titleImg"
    :selNum="item.selNum"
    :menu="item.menu"
  />
  <img :src="desktopImg" alt="Desktop" />
</template>

<script setup> 
import desktopImg from '@/assets/Desktop-7.png'
import PageInHeaderComponet from '@/components/PageInHeaderComponet.vue';

const item = {
  titleImg: 'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/sub_header/header_image003.png',
  selNum: 0,
  menu: [
    { name: '스마트팩토리', path: '/SmartFactory' },
    { name: '에너지효율화', path: '/EnergyEfficiency' },
  ]
} 
</script>
