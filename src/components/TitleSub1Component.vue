<template>
  <v-card class="mx-auto my-12 bg-black text-white" max-width="1200" rounded="xl">
    <v-row no-gutters>
      <!-- 이미지 영역 -->
      <v-col cols="12" md="8">
        <v-img
          src="https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/main_page/page_image002.png"
          height = "400"
          cover
        ></v-img>
      </v-col>

      <!-- 텍스트 영역 -->
      <v-col cols="12" md="4" class="p-6 flex flex-col justify-between">
        <div>
          <v-card-title class="text-white text-2xl font-bold">Cloud FEMS</v-card-title>
          <v-card-subtitle class="text-teal-400 mb-4">
            IoT 기반 설비/공정/생산 에너지 관리시스템
          </v-card-subtitle> 

          <v-card-text class="space-y-2 text-gray-200">
            <div>· IoT 기반 설비/공정생산 에너지 관리시스템</div>
            <div>· 설비/공정생산 에너지 관리시스템</div>
            <div>· 설비/공정생산 에너지 관리시스템</div>
            <div>· 개별수용가 맞춤형 에너지 및 설비 트리 구성</div>
          </v-card-text>
        </div>

        <v-card-actions>
          <v-btn color="teal" class="mt-4" rounded>자세히보기</v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card> 
</template>

<script setup>
</script>
