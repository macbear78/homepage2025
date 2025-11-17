<template>

       <PageInHeaderComponet 
    :imagefile="item.titleImg"
    :selNum="item.selNum"
    :menu="item.menu"
  /> 

  <div class="bg-white border-2 border-blue-600 rounded-lg shadow-lg p-4 m-2 w-[250px] h-[500px] text-center text-blue-600 text-lg font-bold">
   


      <div>
        스마트에너지플랫폼이란?<br>한국산업단지공단에서 주관하는 기업 자부담금이 없는 정부
        <br>지원금 100% 지원사업으로 공장의 에너지 관리를 위한 인프라를
        <br>국가에서 제공하고 기업이 잘 활용할 수 있도록 지원하는 사업
 
      </div>
            <v-img
      src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/energyefficiency_page/page_image001.png"
      width="100%"/>

  </div>

      <div>
            <p>
        스마트에너지플랫폼 사업
      </p>

          <v-img
      src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/energyefficiency_page/page_image002.png"
      width="100%"/>

    </div>

</template>

<script setup>

import PageInHeaderComponet from '@/components/PageInHeaderComponet.vue';

const item = {
  titleImg: 'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/sub_header/header_image003.png',
  selNum: 1,
  menu: [
    { name: '스마트팩토리', path: '/SmartFactory' },
    { name: '에너지효율화', path: '/EnergyEfficiency' },
  ]
} 
</script>
