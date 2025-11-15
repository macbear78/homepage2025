<template>
  <H1>ADFADFSA</H1>

  <div class="relative w-full h-64 md:h-80 lg:h-96">
    <!-- 배경 이미지 -->
    <div 
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url(${imagefile})` }"
    ></div>

    <!-- 가로 Sub-Tab 메뉴 -->
    <div class="absolute top-4 left-4 z-10">
      <div
        class="flex space-x-4 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-xl"
      >
        <a
          v-for="(item, index) in menu || []"
          :key="item.path || item.name"
          @click="selNumChange(index, item.path)"
          class="cursor-pointer pb-1 transition"
          :class="{
            'text-teal-400 font-bold border-b-2 border-teal-400': index === selNum,
            'text-white hover:text-teal-200': index !== selNum
          }"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </div>

  <!-- 선택된 메뉴 이름 -->
  <div
    v-if="menu?.[selNum]"
    class="mt-2 text-white text-xl font-bold bg-black/30 p-1 rounded"
  >
    {{ menu[selNum].name }}
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  imagefile: String,
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
</script>

<style scoped>
</style>
