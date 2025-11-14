<template>
  <H1>ADFADFSA</H1>
  <div class="relative w-full h-64 md:h-80 lg:h-96">
    <!-- 배경 이미지 -->
    <div 
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url(${imagefile})` }"
    ></div>

    <!-- 왼쪽 상단 메뉴 + 선택된 메뉴 이름 -->
    <div class="absolute top-4 left-4 z-10 flex flex-col space-y-2">
      <!-- 메뉴 버튼 -->
      <button
        v-for="(item, index) in menu || []"
        :key="item.path || item.name"
        @click="selNumChange(index)"
        :class="{
          'text-teal-500 font-bold': index === selNum,
          'text-white': index !== selNum
        }"
      >
        {{ item.name }}
      </button>

     

    </div>

  </div>
            <!-- 선택된 메뉴 이름 -->
      <div v-if="menu?.[selNum]" 
           class="mt-2 text-white text-xl font-bold bg-black/30 p-1 rounded">
        {{ menu[selNum].name }}
      </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  imagefile: String,
  selNum: Number,
  menu: Array
})

// 내부 selNum 관리
const selNum = ref(props.selNum || 0)
watch(() => props.selNum, val => { selNum.value = val })

function selNumChange(index) {
  selNum.value = index
}
</script>

<style scoped>
button {
  background: rgba(0, 0, 0, 0.3);
  padding: 4px 8px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.2s;
}
button:hover {
  background: rgba(0, 0, 0, 0.5);
}
</style>
