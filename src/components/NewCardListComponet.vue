<template>
  <section class="news-list">
    <h2>뉴스 카드 리스트</h2>

    <!-- 카드 리스트 -->
    <div class="cards">
      <NewsCardComponent
        v-for="item in newsList"
        :key="item.news_board_id"
        :imageUrl="item.image_urls || '/assets/default.png'"
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
const newsList = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);
const boardCount = ref(0);
const pageBlockSize = 10;
const last_board_id = ref(0); 
const boardids = ref([]);


onMounted(async () => {
      console.log(totalPages.value);
    //getMax_Board_id();
    await getBoard_ids();
    await fetchBoardCount();
})
 
// 현재 블록의 시작 페이지
const startPage = computed(() => {
  return Math.floor((currentPage.value - 1) / pageBlockSize) * pageBlockSize + 1;
});

// 현재 블록의 끝 페이지
const endPage = computed(() => {
  return Math.min(startPage.value + pageBlockSize - 1, totalPages.value);
});

// 현재 블록에 표시할 페이지 배열
const pagesInBlock = computed(() => {
  const pages = [];
  for (let i = startPage.value; i <= endPage.value; i++) {
    pages.push(i);
  }
  return pages;
});
  
// 페이지 로드 시 실행
const fetchBoardCount = async () => {
  try {
    const requestCode = "getBoardCount"
    const response = await axios.get(`https://828299ds42.execute-api.ap-northeast-2.amazonaws.com/MyWebApp-APIstage/news?requestCode=${requestCode}`);
    boardCount.value = response.data.count;
    totalPages.value = Math.ceil(boardCount.value / 10);
    console.log('게시글 수:', boardCount.value);
    console.log(currentPage.value);
    goToPage(currentPage.value);
  } catch (error) {
    console.error('게시글 수 가져오기 실패:', error);
  }
}

const getMax_Board_id = async () => {
  try {
    const requestCode = "max_read"
    const response = await axios.get(`https://828299ds42.execute-api.ap-northeast-2.amazonaws.com/MyWebApp-APIstage/news?requestCode=${requestCode}`);
    console.log('max_board_id:',response.data);
    boardids.value = response.data;
  } catch (error) {
    console.error('가져오기 실패:', error);
  }
}

const getBoard_ids = async () => {
  try {
    const requestCode = "readAllBoardIds"
    const response = await axios.get(`https://828299ds42.execute-api.ap-northeast-2.amazonaws.com/MyWebApp-APIstage/news?requestCode=${requestCode}`);
    console.log(response.data);
    boardids.value = response.data; 
    console.log(boardids.value.news_board_ids[0]);
  } catch (error) {
    console.error('가져오기 실패:', error);
  }
}

async function goToPage(page) { 
  if (page < 1 || page > totalPages.value) return;
  currentPage.value = page;
  console.log(`📄 페이지 이동: ${page}`);
  // 실제 데이터 다시 읽기
  await loadData(page);
}
async function loadData(page) {
    // 예: axios 호출
    console.log(`페이지 ${page} 데이터 로드`);
    // axios.get(`https://api.../items?page=${page}`)
    try {
      const requestCode = "multi_read"; 
      const order = "desc";
      const limit = 10;  //마지막건 다음 last_board_id
      let startId = boardids.value.news_board_ids[(page - 1) * limit];
      console.log(boardids.value[0]);
      const response = await axios.get(
        `https://828299ds42.execute-api.ap-northeast-2.amazonaws.com/MyWebApp-APIstage/news`,
        {
          params: { requestCode, startId, limit, order }
        }
      ); 

      newsList.value = response.data.map(item => ({
      ...item,
      imageUrl: item.imageUrl || '',
      tag: 'news',
      tagColor: 'green',
      }))
      console.log(newsList.value);
      console.log(newsList.value);           
    } catch (err) { 
      console.error('데이터 가져오기 실패:', err) 
    }
}
          
function fnView(board_id) { 
    router.push({path:'/Admin/NewsboardDetail', query:{board_id:board_id}}); 
       
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
