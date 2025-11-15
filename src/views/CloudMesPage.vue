<template>

       <PageInHeaderComponet 
    :imagefile="item.titleImg"
    :selNum="item.selNum"
    :menu="item.menu"
  /> 
  <img :src="desktopImg" alt="Desktop" />
</template>

<script setup>
import desktopImg from '@/assets/Desktop-1.png'
import PageInHeaderComponet from '@/components/PageInHeaderComponet.vue';

const item = { 
  titleImg: 'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/sub_header/header_image002.png',
  selNum: 1, 
  menu: [
    { name: '클라우드FEMS', path: '/CloudFems' },
    { name: '클라우드MES', path: '/CloudMes' },
  ]
} 
</script>
