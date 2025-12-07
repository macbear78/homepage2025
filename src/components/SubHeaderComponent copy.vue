<template>
  <div
    class="relative grid bg-gray-500 
           grid-cols-1 sm:grid-cols-8 lg:grid-cols-12 
           h-[300px] sm:h-[400px] lg:h-[500px] 
           gap-4 z-20"
  >
    <!-- 🔹 배경 이미지 -->
    <div 
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url(${imagefile})` }"
    ></div>

    <!-- 🔹 제목 영역 -->
    <div class="relative z-30 col-span-1 sm:col-span-8 lg:col-span-12 px-6 mt-[70px] sm:mt-[80px] lg:mt-[100px]">
      <p class="text-white 
                text-3xl sm:text-4xl lg:text-5xl 
                font-bold drop-shadow-lg">
        {{ menu[selNum].name }}
      </p>
    </div>

    <!-- 🔹 하단 메뉴바 - 반응형 -->
    <div
      name="bb"
      class="absolute bottom-0 left-0 
             bg-[#1C013B] z-30 
             w-full sm:w-auto 
             px-4 py-2
             flex flex-wrap sm:flex-nowrap 
             items-center 
             overflow-x-auto whitespace-nowrap"
    >
      <!-- 홈 > 소제목 -->
      <div class="flex items-center text-white mr-5">
        <span @click="homeRouter()" class="cursor-pointer mr-1">
          홈 >
        </span>
        <span class="font-light">{{ subTitleName }}</span>
      </div>

      <!-- 메뉴 리스트 -->
      <div class="flex space-x-2">
        <a
          v-for="(item, index) in menu || []"
          :key="item.path || item.name"
          @click="selNumChange(index, item.path)"
          class="cursor-pointer transition no-underline px-3 py-2 rounded whitespace-nowrap"
          :class="{
            'text-white bg-[#0522FF]': index === selNum,
            'text-white hover:bg-[#0522FF]': index !== selNum
          }"
        >
          {{ item.name }}
        </a>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  imagefile: String,
  subTitleName: String,
  selNum: Number,
  menu: Array
})

const selNum = ref(props.selNum || 0)
watch(() => props.selNum, val => { selNum.value = val })

function selNumChange(index, path) {
  selNum.value = index
  if (path) router.push(path)
}

function homeRouter() {
  router.push('/main')
}
</script>

<style scoped>
/* 모바일에서 메뉴가 많아질 경우 자연스럽게 스크롤되도록 */
::-webkit-scrollbar {
  height: 6px;
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.4);
  border-radius: 5px;
}
</style>


