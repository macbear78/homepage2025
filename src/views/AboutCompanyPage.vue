<template>
  
     <PageInHeaderComponet 
    :imagefile="item.titleImg"
    :selNum="item.selNum"
    :menu="item.menu"
  />

      <v-img
      src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/company/page_image001.png"
      width="100%"/>

            <v-img
      src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/company/page_image002.png"
      width="100%"/>
  
</template>


<script setup>

import PageInHeaderComponet from '@/components/PageInHeaderComponet.vue';

const item = {
  titleImg : 'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/sub_header/header_image001.png', 
  selNum: 0, 
  menu: [  
    { name: '회사소개', path: '/AboutCompany' },
    { name: 'BI 소개', path: '/AboutBi' },
    { name: '오시는길', path: '/ContactUs' },
  ]
} 
</script> 
 