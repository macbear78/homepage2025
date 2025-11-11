<template>
  <section class="news-list">
    <h2>뉴스 카드 리스트</h2>

    <!-- 카드 리스트 -->
    <div class="cards">
      <NewsCardComponent
        v-for="item in paginatedNews"
        :key="item.news_board_id"
        :imageUrl="item.imageUrl || '/assets/default.png'"
        :tag="item.tag || 'news'"
        :tagColor="item.tagColor || 'green'"
        :date="item.date || item.wr_date"
        :title="item.title"
        :excerpt="item.excerpt || item.content"
        @click="openArticle(item)"
        />
    </div>

    <!-- 페이지네이션 -->
    <div class="pagination">
      <button
        class="page-btn"
        :disabled="currentPageBlock === 1"
        @click="goToPrevBlock"
      >
        «
      </button>

      <button
        v-for="page in pageNumbers"
        :key="page"
        :class="['page-btn', { active: currentPage === page }]"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>

      <button
        class="page-btn"
        :disabled="currentPageBlock === totalBlocks"
        @click="goToNextBlock"
      >
        »
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import router from '@/router'
import axios from 'axios'
import NewsCardComponent from '@/components/NewsCardComponent.vue'

// --------------------
// 상태 변수
// --------------------
const newsList = ref([])
const currentPage = ref(1)
const itemsPerPage = 9       // 3x3 그리드
const pagesPerBlock = 5

// --------------------
// Lambda에서 데이터 가져오기
// --------------------
const getNewsList = async () => {
  try {
    const response = await axios.get(
      'https://828299ds42.execute-api.ap-northeast-2.amazonaws.com/MyWebApp-APIstage/news',
      { params: { requestCode: 'multi_read', startId: 0, limit: 100, order: 'desc' } } // 전체 가져온 후 페이지네이션 처리
    )
    newsList.value = response.data.map(item => ({
      ...item,
      imageUrl: item.imageUrl || '',
      tag: 'news',
      tagColor: 'green',
    }))
  } catch (err) {
    console.error('뉴스 목록 불러오기 실패:', err)
  }
}

onMounted(async () => {
  await getNewsList()
})
 
// --------------------
// 페이지네이션 계산
// --------------------
const totalPages = computed(() => Math.ceil(newsList.value.length / itemsPerPage))
const totalBlocks = computed(() => Math.ceil(totalPages.value / pagesPerBlock))
const currentPageBlock = computed(() => Math.ceil(currentPage.value / pagesPerBlock))
const startPage = computed(() => (currentPageBlock.value - 1) * pagesPerBlock + 1)
const endPage = computed(() => Math.min(startPage.value + pagesPerBlock - 1, totalPages.value))
const pageNumbers = computed(() => Array.from({ length: endPage.value - startPage.value + 1 }, (_, i) => startPage.value + i))
const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return newsList.value.slice(start, start + itemsPerPage)
})

// --------------------
// 페이지 이동
// --------------------
const goToPage = (page) => {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const goToPrevBlock = () => {
  const prevBlockFirstPage = (currentPageBlock.value - 2) * pagesPerBlock + 1
  if (prevBlockFirstPage > 0) currentPage.value = prevBlockFirstPage
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const goToNextBlock = () => {
  const nextBlockFirstPage = currentPageBlock.value * pagesPerBlock + 1
  if (nextBlockFirstPage <= totalPages.value) currentPage.value = nextBlockFirstPage
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// --------------------
// 상세 페이지 이동
// --------------------
const openArticle = (item) => {
  router.push({ path: '/news-detail', query: { id: item.news_board_id } })
}
</script>

<style scoped>
.news-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 992px) {
  .cards { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 576px) {
  .cards { grid-template-columns: 1fr; }
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-top: 24px;
}

.page-btn {
  padding: 6px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s;
}

.page-btn:hover { background-color: #f2f2f2; }

.page-btn.active {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}
</style>
