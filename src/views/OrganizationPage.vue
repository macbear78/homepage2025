<template>
  <h1>AA</h1>

  <PageInHeaderComponet 
    :imagefile="item.titleImg"
    :selNum="item.selNum"
    :menu="item.menu"
  /> 
  
  <v-img
      src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/company/organization_page_image001.png"
      width="100%"/>
  <v-row>
    <v-col>
      <p class="text-left ml-10 mt-2 text-3xl font-bold">"미래 조직운영 방향 사업부제</p>
      <p class="text-left ml-10 mt-6 text-3xl">운영을 통한 빠른 의사결정 체계"</p>
    </v-col>
    <v-col>
      <v-img
      src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/company/organization_page_image002.png"
      width="100%"/>
    </v-col>
  </v-row>

</template> 

<script setup>

import PageInHeaderComponet from '@/components/PageInHeaderComponet.vue';


const item = {  
  titleImg: 'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/sub_header/header_image001.png',
  selNum: 1, 
  menu: [
    { name: '회사소개', path: '/AboutCompany' }, 
    { name: '조 직 도', path: '/Organization' },
    { name: '오시는길', path: '/ContactUs' },
  ]
} 
</script>
