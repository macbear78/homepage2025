<template>
  <v-card class="mx-auto my-12 bg-black text-white" max-width="1200" rounded="xl">
    <v-row no-gutters>


      <!-- 텍스트 영역 -->
      <v-col cols="12" md="4" class="p-6 flex flex-col justify-between">
        <div> 
          <v-card-title class="text-white text-2xl font-bold">Cloud MES</v-card-title>
          <v-card-subtitle class="text-teal-400 mb-4">
            IoT 기반 생산정보/품질/설비 관리시스템
          </v-card-subtitle>

          <v-card-text class="space-y-2 text-gray-200">
            <div>· 생산현황의 전반적인 실시간 모니터링 관리</div>
            <div>· 계획대비 실적관리를 통한 목표관리</div>
            <div>· 설비, 금형 등 기타 부수적 자원의 생산정보 관리</div>
            <div>· 설비, 금형, 치공구등 사용자원의 보전관리</div>
            <div>· 인터넷을 통한 다양한 장비에서 MES 사용가능</div>
          </v-card-text>
        </div>

        <v-card-actions>
          <v-btn color="teal" class="mt-4" rounded>자세히보기</v-btn>
        </v-card-actions>
      </v-col>

      <!-- 이미지 영역 -->
      <v-col cols="12" md="8">
        <v-img
          src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/main_page/page_image003.png"
          height = "400"
          cover
        ></v-img>
      </v-col>
    </v-row>
  </v-card> 
</template>

<script setup>
</script>
