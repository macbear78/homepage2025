<template>

  <PageInHeaderComponet 
    :imagefile="item.titleImg"
    :selNum="item.selNum"
    :menu="item.menu"
  />
  <div class="container">
    <h4>클라우드FEMS</h4>
    <v-text>
      <p>당사의 클라우드 FEMS는 국내 최초 SaaS기반의 공장에너지 관리시스템으로 에너지 다소비 공장의 에너지 정보를 수집하고
         설비 상태 및 운영정보를 실시간 분석하여 에너지 비용 절감, 품질 향상, 생산성 향상을 목표로 하는 종합 플랫폼입니다.</p>
    </v-text>

    <v-img
      src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/fems_page/page_image001.png"
      width="100%"/>
    <v-img
      src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/fems_page/page_image002.png"
      width="100%"/>
    
    <!-- 구분선 -->
    <hr class="border-t-2 border-gray-300 my-10" />

    <div class="text-center mt-6">
      <h2 class="text-2xl font-bold">클라우드 시스템 장점</h2>
    </div>
    <v-row class="mt-10">
      <v-col cols="4" md="4">
        <v-row>
         <v-col cols="6">
            <v-img
            src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/fems_page/page_image003.png"
            />

         </v-col>
         <v-col cols="6" class="py-10">
            
            <h5 class="text-center mt-2">초기 투자 비용의 감소</h5>
            <p class="text-center mt-6">하드웨어 및 소프트웨어를 별도 구매할
                           필요 없이 빌려서 사용한 만큼만 지불</p>
         </v-col>
         </v-row>
      </v-col>

        <v-col cols="4" md="4">
          <v-row>
         <v-col cols="6">
            <v-img
            src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/fems_page/page_image004.png"
            />

          </v-col>
          <v-col cols="6" class="py-10">  
              <h5 class="text-center mt-2">환경 변화에 따른 유연성</h5>
              <p class="text-center mt-6">공장의 확장과 축소 상황에도 유연하게
                     시스템을 즉시 재구성 할 수 있는 솔루션</p>
          </v-col>
         </v-row>
        </v-col>


        <v-col cols="4" md="4">
          <v-row>
         <v-col cols="6">
            <v-img
            src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/fems_page/page_image005.png"
            />

         </v-col>
         <v-col cols="6" class="py-10">
            <h5 class="text-center mt-2">지속 가능한 운영 환경</h5>
            <p class="text-center mt-6">상주 인력이 모니터링을 통하여 시스템을
                    지속 감시 하며 필요 시 현장 지원</p>
         </v-col>
         </v-row>
        </v-col>
    </v-row>

    <v-row class="mt-10">
      <v-col cols="4" md="4">
        <v-row>
         <v-col cols="6">
            <v-img
            src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/fems_page/page_image006.png"
            />

         </v-col>
         <v-col cols="6" class="py-10">
            
            <h5 class="text-center mt-2">제조/생산 빅데이터</h5>
            <p class="text-center mt-6">설비, 에너지, 원단위, 불량율 등 생산과
                 관련된 다양한 시스템 데이터를 확보</p>
         </v-col>
         </v-row>
      </v-col>

        <v-col cols="4" md="4">
          <v-row>
         <v-col cols="6">
            <v-img
            src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/fems_page/page_image007.png"
            />

          </v-col>
          <v-col cols="6" class="py-10">  
              <h5 class="text-center mt-2">비대면 업무 환경</h5>
              <p class="text-center mt-6">시간과 장소의 제약을 받지 않고 다양한
                  환경에서 공장운영상황을 모니터링 제어</p>
          </v-col>
         </v-row>
        </v-col>


        <v-col cols="4" md="4">
          <v-row>
         <v-col cols="6">
            <v-img
            src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/fems_page/page_image008.png"
            />

         </v-col>
         <v-col cols="6" class="py-10">
            <h5 class="text-center mt-2">데이터 보안</h5>
            <p class="text-center mt-6">전문 보안 관제팀이 보안 관련 규제에
                  준수하여 데이터를 보호</p>
         </v-col>
         </v-row>
        </v-col>
    </v-row>


    <h2 class="mt-2">클라우드FEMS기대효과</h2>
    <v-row class="flex justify-center mt-2">

  <div class="bg-white border-2 border-blue-600 rounded-lg shadow-lg p-4 m-2 w-[250px] h-[100px] text-center text-blue-600 text-lg font-bold">
    체계적인<br> 절감 프로세스
  </div>

  <div class="bg-white border-2 border-blue-600 rounded-lg shadow-lg p-4 m-2 w-[250px] h-[100px] text-center text-blue-600 text-lg font-bold">
    데이터 기반의<br> 품질관리
  </div>

  <div class="bg-white border-2 border-blue-600 rounded-lg shadow-lg p-4 m-2 w-[250px] h-[100px] text-center text-blue-600 text-lg font-bold">
    제조/생산<br> 빅데이터 구축
  </div>

  <div class="bg-white border-2 border-blue-600 rounded-lg shadow-lg p-4 m-2 w-[250px] h-[100px] text-center text-blue-600 text-lg font-bold">
    다양한 미래 사업과의<br> 연계 확장성
  </div>

</v-row>

<v-row class="flex justify-center mb-2">

  <div class="bg-white border-2 border-blue-600 rounded-lg shadow-lg p-4 m-2 w-[250px] h-[100px] text-center text-blue-600 text-lg font-bold">
    모니터링 강화 및<br> 일원화 시스템
  </div>

  <div class="bg-white border-2 border-blue-600 rounded-lg shadow-lg p-4 m-2 w-[250px] h-[100px] text-center text-blue-600 text-lg font-bold">
    각종 인증을 위한<br> 기반 마련
  </div>

  <div class="bg-white border-2 border-blue-600 rounded-lg shadow-lg p-4 m-2 w-[250px] h-[100px] text-center text-blue-600 text-lg font-bold">
    생산/운영계획 수립과<br> 정책대응
  </div>

</v-row>

    <v-img
      src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/fems_page/page_image009.png"
      width="100%"/>


          <h2 class="mt-2">클라우드 FEMS V2.0 기능소개</h2>
    <v-row class="flex justify-center mt-2">

  <div class="bg-white border-2 border-blue-600 rounded-lg shadow-lg p-4 m-2 w-[250px] h-[100px] text-center text-blue-600 text-lg font-bold">
    사전 인지하고<br> 예방하는 시스템
  </div>

  <div class="bg-white border-2 border-blue-600 rounded-lg shadow-lg p-4 m-2 w-[250px] h-[100px] text-center text-blue-600 text-lg font-bold">
    운영 방향성을<br> 제시하는 분석 환경
  </div>

  <div class="bg-white border-2 border-blue-600 rounded-lg shadow-lg p-4 m-2 w-[250px] h-[100px] text-center text-blue-600 text-lg font-bold">
    한눈에 보이는<br> 전력 관리 시스템
  </div>

  <div class="bg-white border-2 border-blue-600 rounded-lg shadow-lg p-4 m-2 w-[250px] h-[100px] text-center text-blue-600 text-lg font-bold">
    손쉬운 데이터 기반<br> 인사이트 발굴 도구
  </div>

</v-row>

    <v-img
      src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/fems_page/page_image010.png"
      width="100%"/>

  </div>


  <h2 class="mt-2">클라우드 FEMS 차별화 요소</h2>
  <v-row>
    <v-col>
      <p class="text-left ml-10 mt-2 text-3xl font-bold">디지털트윈</p>
      <p class="text-left ml-10 mt-6 text-3xl">가상 환경에서 수행하는 공장 운영 최적화</p>
      <p class="text-left ml-10 mt-6 text-lg">사용자는 3D 모델링을 통하여 구현된 가상의 공장 환경에서 원하는 위치와 설비로 자유롭게 이동이 가능합니다.</p>
      <p class="text-left ml-10 mt-6 text-lg">또한, 공장의 모든 설비의 현재 상황을 한눈에 모니터링하며 성능 시뮬레이션 기능을 통하여 최적의 운영환경을 구성할 수 있습니다.</p>
      <div class="bg-black border-2 border-blue-600 rounded-lg shadow-lg p-4 m-2 w-[700px] h-[100px] text-center text-blue-600 text-lg font-bold">
        공장의 실시간 운영 현황 감시와 빅데이터를 기반으로<br> 한 최적 운영 시뮬레이션
      </div>
    </v-col>
    <v-col>
      <v-img
      src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/fems_page/page_image011.png"
      width="100%"/>
    </v-col>
  </v-row>
 
  <v-row>
    <v-col>
             <v-img
      src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/fems_page/page_image012.png"
      width="100%"/>
    </v-col>
                <v-col>
      <p class="text-left ml-10 mt-2 text-3xl font-bold">AI제어 솔루션</p>
      <p class="text-left ml-10 mt-6 text-3xl">수용가 맞춤형 AI 절감 알고리즘 적용</p>
      <p class="text-left ml-10 mt-6 text-lg">열원, 공조, 생산 등 공장에서 집중적인 관리가 필요한 설비에 AI기반의 제어 기술이 적용된 특화시스템을 구축할 수 있습니다.</p>
      <p class="text-left ml-10 mt-6 text-lg">보다 강화된 수용가 특화의 모니터링 기능이 제공되며, 에너지 소비 최적화를 위한 운영환경 컨설팅을 제안 받을 수 있습니다.</p>
            <div class="bg-black border-2 border-blue-600 rounded-lg shadow-lg p-4 m-2 w-[700px] h-[100px] text-center text-blue-600 text-lg font-bold">
        수용가의 생산· 운영정보가 반영된 에너지 소비 최소화<br>제어 솔루션
      </div>
    </v-col>
  </v-row>

    <v-row>
        <v-col>
      <p class="text-left ml-10 mt-2 text-3xl font-bold">통계분석도구 지원</p>
      <p class="text-left ml-10 mt-6 text-3xl">누구나 쉽게 사용가능한 통계 분석 도구</p>
      <p class="text-left ml-10 mt-6 text-lg">회귀분석 기반의 데이터 통계 분석 도구를 손쉽게 사용할 수 있도록 구현하였습니다.</p>
      <p class="text-left ml-10 mt-6 text-lg">사용자는 몇번의 클릭만으로 어떻게 설비를 운영해야 하는지 판단할 수 있으며, 운영에 따른 에너지 절감량을 명확하게 검증할 수 있습니다.</p>
            <div class="bg-black border-2 border-blue-600 rounded-lg shadow-lg p-4 m-2 w-[700px] h-[100px] text-center text-blue-600 text-lg font-bold">
        몇번의 클릭만으로 효율 향상을 위한 운전 분석과 절감<br> 성과 평가
      </div>
    </v-col>
    <v-col>
      <v-img
      src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/fems_page/page_image013.png"
      width="100%"/>
    </v-col>
  </v-row>
  
</template> 

<script setup>
import PageInHeaderComponet from '@/components/PageInHeaderComponet.vue';

const item = { 
  titleImg: 'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/sub_header/header_image002.png', 
  selNum: 0,
  menu: [
    { name: '클라우드FEMS', path: '/CloudFems' },
    { name: '클라우드MES', path: '/CloudMes' },
  ] 
} 
</script>