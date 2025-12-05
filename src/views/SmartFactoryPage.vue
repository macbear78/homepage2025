<template>

       <PageInHeaderComponet 
    :imagefile="item.titleImg"
    :selNum="item.selNum"
    :menu="item.menu"
  />

 <div class="container">
  <div class="bg-white border-2 border-blue-600 rounded-lg shadow-lg p-4 m-2 w-[250px] h-[500px] text-center text-blue-600 text-lg font-bold">
  


      <div>
        스마트팩토리란?<br> 공장의 생산설비(시스템)를 기반으로 한 수직적 통합과
        <br>고객의 요구사항을 시작으로 하는 제품개발 가치사슬 기반의
        <br>수평적 통합이 구현되는 공장

      </div>
            <v-img
      src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/smartfactor_page/page_image001.png"
      width="100%"/>

  </div>


    <v-img
      src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/smartfactor_page/page_image002.png"
      width="100%"/>

    <div class="bg-white border-2 border-blue-600 rounded-lg shadow-lg p-4 m-2 w-full text-center text-blue-600 text-lg font-bold">
      단순히 새로운 시스템 도입이 목적이 아닌 ‘우리 회사의 경쟁력을 높이는 방법이 무엇인지‘ 인지하는 것이 스마트공장의 시작
    </div>


    <div>
      <p>
        스마트공장 기대효과
각 공장에서 수집된 수많은 데이터를 기반으로 분석하고, 의사결정하는 데이터 기반의 공장 운영체계를 갖춤으로써
생산현장에서 발생하는 현상 및 문제들의 상관관계에 파악 용이

돌발 장애, 품질 불량 등의 원인을 파악해 해결할 수 있고 숙련공들이 노하우를 데이터화하여 누구나 쉽게 활용 가능
      </p>
    </div>


    <div>
            <p>
        적용범위
제품 기획·개발부터 양산까지, 주문부터 완제품 출하까지 제조 관련 모든 과정에 적용

응용 시스템 뿐만 아니라 현장 자동화와 제어 자동화 영역까지 공장 운영의 모든 부분을 포함
      </p>

          <v-img
      src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/smartfactor_page/page_image007.png"
      width="100%"/>

    </div>


    <div>
            <p>
        디지털트윈
시·공간 제약 없이 가상의 세계와 현실 세계 간 상호 피드백을 통한 동반 최적화로 육안으로 확인이 불가하거나 위험성이 높은 공간에 대한
실시간 모니터링 및 제어가 가능하며, 다양한 사전 예측 통한 피해 예방 및 사고 최소화 대응 가능

에너지, 제조, 안전, 국방 등 다양한 응용서비스에서의 데이터 분석과 예측, 시뮬레이션을 통해 최적의 솔루션을 제공
      </p>

          <v-img
      src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/smartfactor_page/page_image008.png"
      width="100%"/>

    </div>
    

 </div>

</template>

<script setup> 
import PageInHeaderComponet from '@/components/PageInHeaderComponet.vue';

const item = {
  titleImg: 'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/sub_header/header_image003.png',
  selNum: 0,
  menu: [
    { name: '스마트팩토리', path: '/SmartFactory' },
    { name: '에너지효율화', path: '/EnergyEfficiency' },
  ]
} 
</script>
