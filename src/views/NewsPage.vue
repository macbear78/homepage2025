<template>

    <SubHeaderComponent
    :imagefile="item.titleImg"
    :selNum="item.selNum"
    :menu="item.menu"
    /> 
  <router-view></router-view>
</template>

<script setup>
import { RouterView } from 'vue-router';
import SubHeaderComponent from '@/components/SubHeaderComponent.vue';

const item = {
  titleImg: 'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/sub_header/header_image004.png',
  selNum: 0,
  menu: [
    { name: '뉴스', path: '/News/NewsCardList' },
    { name: '공지사항', path: '/' },
  ] 
} 
</script>
