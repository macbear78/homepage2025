<template>
  <h2>뉴스</h2>
         <PageInHeaderComponet 
    :imagefile="item.titleImg"
    :selNum="item.selNum"
    :menu="item.menu"
  /> 
  <router-view></router-view>
</template>

<script setup>
import { RouterView } from 'vue-router';
import PageInHeaderComponet from '@/components/PageInHeaderComponet.vue';

const item = {
  titleImg: 'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/sub_header/header_image004.png',
  selNum: 0,
  menu: [
  ] 
} 
</script>
