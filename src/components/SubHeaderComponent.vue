<template>
  <div
    class="relative grid bg-gray-500 grid-rows-5 grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 items-center h-50 gap-4 z-20"
  >
    <div 
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url(${imagefile})` }"
    >
      <p>{{menu[selNum].name}}</p>
    </div>

    <div class="absolute top-[250px] left-4 z-10">
      <div
        class="grid h-10 grid-cols-12 text-white text-sm"
      >
        <div class="bg-blue-500 col-span-4 flex items-center justify-center space-x-10">
          <a class="ml-5">홈</a> &gt; {{menu[selNum].name}}

          <a
          v-for="(item, index) in menu || []"
          :key="item.path || item.name"
          @click="selNumChange(index, item.path)"
          class="cursor-pointer pb-1 transition no-underlin"
          :class="{
            'text-teal-400 font-bold border-b-2 bg-yellow-500': index === selNum,
            'text-white hover:bg-blue-600': index !== selNum
          }"
        >
          {{ item.name }}
        </a>
        </div>

      </div>
 
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
