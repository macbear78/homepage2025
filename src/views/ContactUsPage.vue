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
import PageInHeaderComponet from '@/components/PageInHeaderComponet.vue';

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
