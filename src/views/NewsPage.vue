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
