<template>

  <PageInHeaderComponet 
    :imagefile="item.titleImg"
    :selNum="item.selNum"
    :menu="item.menu"
  /> 
  <div class="container">
              <p class="text-center ml-10 mt-2 text-3xl font-bold">클라우드 MES</p>
      <p class="text-center ml-10 mt-6 text-xl">당사의 클라우드 MES는 모듈기반 SaaS형 솔루션으로 제조 프로세스를 표준화함으로써
       <br>원가절감, 품질 및 생산성을 향상시키는 생산관리 시스템입니다.
      </p>
          <v-img
      src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/mes_page/page_image001.png"
      width="100%"/> 


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


           <div class="text-center mt-6">
      <h2 class="text-2xl font-bold">클라우드 MES 기대효과</h2>
    </div>
    

<div class="grid grid-cols-2 grid-rows-2 gap-4">
  <div class="h-32 rounded-lg bg-blue-300 text-white font-bold flex flex-row justify-between">
  <v-img
    src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/mes_page/page_image002.png"
  />
  <v-col>
      <h3>재고 자산 평가</h3>
  <p>제품생산에 들어가는 에너지비용 평가<br>
  기업재고 자산가치를 올바르게 인식<br>
  재고 자산을 효율적으로 운용</p>
  </v-col>
  </div>



  <div class="h-32 rounded-lg bg-blue-300 text-white font-bold flex flex-row justify-between">
  <v-img
    src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/mes_page/page_image003.png"
  />
  <v-col>
      <h3>판매가격 결정</h3>
  <p>신제품 개발 및 판매가격 결정<br>
  제품의 목표 생산 원가 도출<br>
  판매 수주를 위한 적정 원가 산정</p>
  </v-col>
</div>


  <div class="h-32 rounded-lg bg-blue-300 text-white font-bold flex flex-row justify-between">
  <v-img
    src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/mes_page/page_image004.png"
  />
  <v-col>
      <h3>프로세스 개선</h3>
  <p>원가 목표 수입에 의한 공정 개선<br>
  원재료 배합, 선정, 구성 비율 개선<br>
  원가 절감을 위한 생산 프로세스 개선</p>
  </v-col>
</div>


  <div class="h-32 rounded-lg bg-blue-300 text-white font-bold flex flex-row justify-between">
  <v-img
    src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/mes_page/page_image005.png"
  />
  <v-col>
      <h3>수익성 분석</h3>
  <p>제품별 수익성 분석 및 평가<br>
  고객별, 제품별 판매 전략 수립<br>
  수익성에 기반한 영업/생산 계획</p>
  </v-col>
</div>

</div>

<div class="text-center mt-6">
      <h2 class="text-2xl font-bold">클라우드 MES 기능소개</h2>
    </div>
<v-img
    src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/mes_page/page_image006.png"
  />
</div>


<h2 class="mt-2">클라우드 FEMS 차별화 요소</h2>
  <v-row>
    <v-col>
      <p class="text-left ml-10 mt-2 text-3xl font-bold">AI챗봇을 활용한 팩토리 어시스턴트</p>
      <p class="text-left ml-10 mt-6 text-lg">대화형 AI 챗봇을 활용하여 수집된 데이터베이스로부터 사용자가 원하는 정보를</p>
      <p class="text-left ml-10 mt-6 text-lg">직관적이고, 편리하며, 쉽게 이해할 수 있는 방식으로 제공</p>
      <div class="bg-black border-2 border-blue-600 rounded-lg shadow-lg p-4 m-2 w-[700px] h-[100px] text-center text-blue-600 text-lg font-bold">
        공장의 실시간 운영 현황 감시와 빅데이터를 기반으로<br> 한 최적 운영 시뮬레이션
      </div>
    </v-col>
    <v-col> 
      <v-img
      src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/mes_page/page_image007.png"
      width="100%"/>
    </v-col>
  </v-row>
 
  <v-row>
    <v-col>
             <v-img
      src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/mes_page/page_image008.png"
      width="100%"/>
    </v-col>
                <v-col>
      <p class="text-left ml-10 mt-2 text-3xl font-bold">제조기업 경쟁력 강화를 위한</p>
      <p class="text-left ml-10 mt-6 text-3xl font-bold">원가분석 시스템</p>
      <p class="text-left ml-10 mt-6 text-lg">설비별/제품별/작업자별 생산정보와 에너지 사용량 정보를 명확하게 구분하여</p>
      <p class="text-left ml-10 mt-6 text-lg">수집하여 제품 원가를 산출하고 설비별/공정별/제품별/작업자별 원 단위 비교평가</p>
      <p class="text-left ml-10 mt-6 text-lg">가능한 지표 구현</p>
    </v-col>
  </v-row>

    <v-row>
        <v-col>
      <p class="text-left ml-10 mt-2 text-3xl font-bold">데이터 기반의 경영 효율 평가 시스템</p>
      <p class="text-left ml-10 mt-6 text-lg">제조기업의 설비 운영, 제품생산, 재고관리 측면에서 제조 프로세스의 운영 효율</p>
      <p class="text-left ml-10 mt-6 text-lg">평가를 할 수 있는 지표 구현</p>
            <div class="bg-black border-2 border-blue-600 rounded-lg shadow-lg p-4 m-2 w-[700px] h-[100px] text-center text-blue-600 text-lg font-bold">
        몇번의 클릭만으로 효율 향상을 위한 운전 분석과 절감<br> 성과 평가
      </div>
    </v-col>
    <v-col> 
      <v-img
      src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/mes_page/page_image009.png"
      width="100%"/>
    </v-col>
  </v-row>


</template>

<script setup>
import PageInHeaderComponet from '@/components/PageInHeaderComponet.vue';

const item = { 
  titleImg: 'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/sub_header/header_image002.png',
  selNum: 1, 
  menu: [
    { name: '클라우드FEMS', path: '/CloudFems' },
    { name: '클라우드MES', path: '/CloudMes' },
  ]
} 
</script>
