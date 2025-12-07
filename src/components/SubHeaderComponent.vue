<template>
  <div
    class="relative grid bg-gray-500 grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 h-[500px] gap-4 z-20"
  >

    <!-- 🔹 배경 이미지는 absolute 레이어 -->
    <div 
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url(${imagefile})` }"
    ></div>

    <!-- 🔹 내용은 relative 로 배경 위에 표시 -->
    <div class="relative flex flex-col z-30 mt-[100px] col-span-12 px-6">
      <p class="text-white text-5xl">
        {{ menu[selNum].name }}
      </p>

      
    </div>
   
    <div 
      name="bb"
      class="absolute bottom-0 left-0 bg-[#1C013B] z-30 px-5 py-2 w-auto inline-block flex justify-center items-center space-x-5"
      >
      
      <!-- <a class="text-white">홈</a>
      <p class="text-white">>회사정보</p>
      <a class="text-white">회사소개</a>
      <a class="text-white">조직도</a>
      <a class="text-white">오시는길</a> -->
      <div>
      <a 
         @click="homeRouter()"
         class="cursor-pointer no-underline ml-3 text-white">홈 > </a> &gt; 
         <span class="text-white">{{ subTitleName }}</span>
         </div>

          <a
          v-for="(item, index) in menu || []"
          :key="item.path || item.name"
          @click="selNumChange(index, item.path)"
          class="cursor-pointer transition no-underline p-2"
          :class="{
            'text-white bg-[#0522FF]': index === selNum,
            'text-white hover:bg-[#0522FF]': index !== selNum
          }"
        >
          {{ item.name }}
        </a>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
const show = ref(false)


const router = useRouter()

const props = defineProps({
  imagefile: String,
  subTitleName: String,
  selNum: Number,
  menu: Array
})

// 내부 selNum
const selNum = ref(props.selNum || 0)
watch(() => props.selNum, val => { selNum.value = val })

// 메뉴 클릭 시 페이지 이동 포함
function selNumChange(index, path) {
  selNum.value = index

  if (path) {
    router.push(path)
  } 
}

function homeRouter(){
  router.push('/main')
}
</script>
