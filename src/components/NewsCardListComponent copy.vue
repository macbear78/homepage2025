<template>
  <div class="flex justify-center gap-4">
    <a class="text-lg text-black font-bold underline decoration-red-500 decoration-2 underline-offset-4">
    전체
  </a>
    <a class="text-lg text-black no-underline">네픽소식</a>
    <a class="text-lg text-black no-underline">지원사업소식</a>
  </div>


  <div class="ml-5">
  <div
    class="grid w-full gap-1 
           [grid-template-columns:repeat(auto-fit,minmax(480px,1fr))]"
  >
    <div
      v-for="item in newsList"
      :key="item.news_board_id"
      class="w-full"
    >
      <NewsCardComponent
        :imageUrl="item.image_urls || '/assets/default.png'"
        :tag="item.tag || 'news'"
        :tagColor="item.tagColor || 'green'"
        :date="item.date || item.wr_date"
        :title="item.title"
        :excerpt="item.excerpt || item.content"
        @click="openArticle(item)"
      />
    </div>
  </div>

</div>


    <!-- 페이지네이션 -->
    <div class="flex justify-center items-center gap-2 mt-8">
      <!-- 이전 블록 -->
      <button
        class="px-3 py-1.5 rounded-md border border-gray-300 bg-white text-sm hover:bg-gray-100 transition disabled:opacity-50"
        :disabled="currentPageBlock === 1"
        @click="goToPrevBlock"
      >
        «
      </button>

      <!-- 페이지 번호 -->
      <button
        v-for="page in pageNumbers"
        :key="page"
        :class="[
          'px-3 py-1.5 rounded-md border text-sm transition',
          currentPage === page
            ? 'bg-blue-500 text-white border-blue-500'
            : 'border-gray-300 bg-white hover:bg-gray-100'
        ]"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>

      <!-- 다음 블록 -->
      <button
        class="px-3 py-1.5 rounded-md border border-gray-300 bg-white text-sm hover:bg-gray-100 transition disabled:opacity-50"
        :disabled="currentPageBlock === totalBlocks"
        @click="goToNextBlock"
      >
        »
      </button>
    </div>

</template>


<script setup>
import { ref, computed, onMounted } from 'vue'
import { useNewsStore } from '@/stores/newsStore'
import router from '@/router'
import axios from 'axios'
import NewsCardComponent from '@/components/NewsCardComponent.vue'

const store = useNewsStore()
const newsList = ref([])
const currentPage = ref(1)
const totalPages = ref(1)
const boardCount = ref(0)
const pageBlockSize = 10
const last_board_id = ref(0)
const boardids = ref([])

onMounted(async () => {
  await getBoard_ids()
  await fetchBoardCount()
})

const startPage = computed(() => {
  return Math.floor((currentPage.value - 1) / pageBlockSize) * pageBlockSize + 1
})
const endPage = computed(() => {
  return Math.min(startPage.value + pageBlockSize - 1, totalPages.value)
})
const pageNumbers = computed(() => {
  const pages = []
  for (let i = startPage.value; i <= endPage.value; i++) pages.push(i)
  return pages
})

const fetchBoardCount = async () => {
  try {
    const requestCode = 'getBoardCount'
    const res = await axios.get(
      `https://828299ds42.execute-api.ap-northeast-2.amazonaws.com/MyWebApp-APIstage/news?requestCode=${requestCode}`
    )
    boardCount.value = res.data.count
    totalPages.value = Math.ceil(boardCount.value / 10)
    goToPage(currentPage.value)
  } catch (e) {
    console.error('게시글 수 가져오기 실패:', e)
  }
}

const getBoard_ids = async () => {
  try {
    const requestCode = 'readAllBoardIds'
    const res = await axios.get(
      `https://828299ds42.execute-api.ap-northeast-2.amazonaws.com/MyWebApp-APIstage/news?requestCode=${requestCode}`
    )
    boardids.value = res.data
  } catch (e) {
    console.error('가져오기 실패:', e)
  }
}

async function goToPage(page) {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
  await loadData(page)
}

async function loadData(page) {
  try {
    const requestCode = 'multi_read'
    const order = 'desc'
    const limit = 10
    const startId = boardids.value.news_board_ids[(page - 1) * limit]
    const res = await axios.get(
      `https://828299ds42.execute-api.ap-northeast-2.amazonaws.com/MyWebApp-APIstage/news`,
      {
        params: { requestCode, startId, limit, order }
      }
    )
    newsList.value = res.data.map(item => ({
      ...item,
      tag: 'news',
      tagColor: 'green'
    }))
  } catch (e) {
    console.error('데이터 가져오기 실패:', e)
  }
}

function openArticle(item) {
  store.setArticle(item)
  router.push('/News/NewsCardDetail')
}
</script>
