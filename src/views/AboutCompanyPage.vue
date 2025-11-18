<template>
  
     <PageInHeaderComponet 
    :imagefile="item.titleImg"
    :selNum="item.selNum"
    :menu="item.menu"
  />

  <div>
      <v-row no-gutters>


      <!-- 텍스트 영역 -->
      <v-col cols="7" md="7" class="text-left">
        <div class="ml-20 mt-20">
            <p class="text-3xl">창립이래 높은 재무 건전성과<br>
              공인된 기술력을 갖춘 회사
            </p>
            <p class="text-xl">(주)유호스트는 디지털 트랜스포메이션 전문 기업으로 고객에게 맞춤형 솔루션을<br>
              제공해 더 높은 가치와 성과를 창출하는데 도움을 드립니다.
            </p>
            
        </div>
        
          
            
        

      </v-col>  
      <!-- 이미지 영역 -->
      <v-col cols="5" md="5">
              <v-img
      src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/company/page_image001.png"
      height="500px"/>
      </v-col>


    </v-row>

  </div>

<div class="bg-gray-100 h-[500px]">
  <div class="d-flex justify-center mb-6 h-[200px]">

    <div
      class="bg-white w-[100px] h-[100px] m-10 rounded-xl flex flex-col items-center justify-center
             text-2xl font-bold
             transition-all duration-300 cursor-pointer
             hover:shadow-xl hover:scale-105"
    >
      1
    </div>

    <div
      class="bg-white w-[100px] h-[100px] m-10 rounded-xl flex flex-col items-center justify-center
             text-2xl font-bold
             transition-all duration-300 cursor-pointer
             hover:shadow-xl hover:scale-105"
    >
      2
    </div>

    <div
      class="bg-white w-[100px] h-[100px] m-10 rounded-xl flex flex-col items-center justify-center
             text-2xl font-bold
             transition-all duration-300 cursor-pointer
             hover:shadow-xl hover:scale-105"
    >
      3
    </div>

    <div
      class="bg-white w-[100px] h-[100px] m-10 rounded-xl flex flex-col items-center justify-center
             text-2xl font-bold
             transition-all duration-300 cursor-pointer
             hover:shadow-xl hover:scale-105"
    >
      4
    </div>

  </div>
</div>



 
  
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
 