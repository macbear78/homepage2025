<template>
  <section class="flex flex-col gap-6 p-4">
    <h2 class="text-2xl font-bold text-center">몬캣팩토리 뉴스</h2>

    <!-- 카드 리스트 -->
    <div class="flex justify-center">
      <div
        class="grid w-full max-w-6xl gap-6
               [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]
               place-items-center"
      >
        <div
          v-for="item in newsList"
          :key="item.news_board_id"
          class="w-full max-w-sm"
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

    <v-btn>
      <router-link to="/news/NewsCardList">더보기</router-link>
    </v-btn>

  </section>
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
    const limit = 3
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

