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


  <div class="d-flex flex-row items-center justify-center bg-gray-100 h-[360px]"> 

    <div
      class="bg-white w-[280px] h-[200px] m-3 rounded-xl flex flex-col items-center justify-center
             transition-all duration-300 cursor-pointer
             hover:shadow-xl hover:scale-105"
    >
      <img
      src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/company/page_image002.png"
      width="70" class="m-3"
      />
      <p class="text-4xl font-bold text-blue-800">BBB-</p>
      <p class="text-sm">신용등급</p>
    </div>

    <div
      class="bg-white w-[280px] h-[200px] m-3 rounded-xl flex flex-col items-center justify-center
             transition-all duration-300 cursor-pointer
             hover:shadow-xl hover:scale-105"
    >
      <img
      src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/company/page_image003.png"
      width="70" class="m-3"
      />
      <p class="text-4xl font-bold text-blue-800">B</p>
      <p class="text-sm">현금흐름등급</p>
    </div>

    <div
      class="bg-white w-[280px] h-[200px] m-3 rounded-xl flex flex-col items-center justify-center
             transition-all duration-300 cursor-pointer
             hover:shadow-xl hover:scale-105"
    >
    
      <img
      src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/company/page_image004.png"
      width="70" class="m-3"
      />
      <p class="text-4xl font-bold text-blue-800">TI-3</p>
      <p class="text-sm">기술평가등급</p>
    </div> 

    <div
      class="bg-white w-[280px] h-[200px] m-3 rounded-xl flex flex-col items-center justify-center
             transition-all duration-300 cursor-pointer
             hover:shadow-xl hover:scale-105"
    >
      <img
      src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/company/page_image005.png"
      width="70" class="m-3"
      />
      <p class="text-4xl font-bold text-blue-800">정상</p>
      <p class="text-sm">Watch 등급</p>
    </div>

  </div>

  <HistoryComponent/>

  <!-- Client & Partner -->
  <div class="mt-10">
  <p class="text-3xl font-bold ml-5">Client & Partner</p>

  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
    <div 
      v-for="(img, index) in clients_partners_img" 
      :key="index"
      class="bg-gray-500 w-[180px] h-[120px] rounded-xl flex items-center justify-center"
    >
      <v-img :src="img" contain />
    </div>
  </div>
</div>



 
  
</template>


<script setup>
import { ref } from 'vue'
import PageInHeaderComponet from '@/components/PageInHeaderComponet.vue';
import HistoryComponent from '@/components/HistoryComponent.vue';

const item = {
  titleImg : 'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/sub_header/header_image001.png', 
  selNum: 0, 
  menu: [  
    { name: '회사소개', path: '/AboutCompany' },
    { name: '조 직 도', path: '/Organization' },
    { name: '오시는길', path: '/ContactUs' },
  ]
}
const clients_partners_img = ref([
  'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/client_and_partner/image+98.png', 
  'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/client_and_partner/image+99.png',  
  'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/client_and_partner/image+100.png',
  'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/client_and_partner/image+101.png', 
  'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/client_and_partner/image+102.png',  
  'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/client_and_partner/image+103.png', 
  'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/client_and_partner/image+104.png', 
  'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/client_and_partner/image+105.png',
  'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/client_and_partner/image+106.png',
  'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/client_and_partner/image+107.png',
  'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/client_and_partner/image+108.png',
  'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/client_and_partner/image+109.png',
  'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/client_and_partner/image+110.png',
  'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/client_and_partner/image+111.png',
  'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/client_and_partner/image+112.png',
  'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/client_and_partner/image+113.png',
  'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/client_and_partner/image+114.png',
  'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/client_and_partner/image+115.png',
  'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/client_and_partner/image+116.png',
  'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/client_and_partner/image+117.png',
  'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/client_and_partner/image+118.png',
  'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/client_and_partner/image+119.png',
  'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/client_and_partner/image+120.png',
  'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/client_and_partner/image+121.png',
  'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/client_and_partner/image+122.png',
  'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/client_and_partner/image+123.png',
  'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/client_and_partner/image+124.png',
  'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/client_and_partner/image+125.png',
  'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/client_and_partner/image+126.png',
  'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/client_and_partner/image+127.png'  
  ]);
</script> 


<style>
section {
    display: block;
    position: relative;
    width: 100%;
    padding: 0;
    margin: 0; 
}
*, *::before, *::after {
    box-sizing: border-box;
}



</style>
 