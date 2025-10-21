<template>
    <div class="container">
      <div class="float-end mb-1">
        <button type="button" class="btn btn-dark" @click="goToWrite">글쓰기</button>
      </div>
      <p>총 {{ boardCount }} 개, {{ totalPages }} 페이지중 {{ currentPage }}페이지</p>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>내용</th>
            <th>글쓴이</th>
            <th>날짜</th>
            <th>조회</th>
          </tr>  
        </thead>
        <tbody>
          <tr :key="i" v-for="(board, i) in boardPagingList">
            <td>{{board.board_id}}</td>
             <td><a @click="fnView(board.board_id);" 
              style="
              color: orange;
              font-size: 2.0em;
              font-weight: bold;
              background: #efefef;
              cursor:pointer;
               "
              onmouseover="this.style.color='#0F0'"
              onmouseout="this.style.color='#00F'"
              >{{board.title}}</a></td>
            <td>{{board.content}}</td>
            <td>{{board.writer}}</td>
            <td>{{board.wr_date}}</td> 
            <td>{{board.view_cnt}}</td>
          </tr> 
        </tbody>
      </table>
      <nav aria-label="페이지 네비게이션">
        <ul class="pagination justify-content-center">
          <!-- 이전 블록 버튼 -->
          <li class="page-item" :class="{ disabled: startPage === 1 }">
            <a class="page-link" href="#" @click.prevent="goToPage(startPage - 1)">Prev 10</a>
          </li>

          <!-- 페이지 번호 -->
          <li
            v-for="i in pagesInBlock"
            :key="i"
            class="page-item"
            :class="{ active: i === currentPage }"
          >
            <a class="page-link" href="#" @click.prevent="goToPage(i)">{{ i }}</a>
          </li>

          <!-- 다음 블록 버튼 -->
          <li class="page-item" :class="{ disabled: endPage === totalPages }">
            <a class="page-link" href="#" @click.prevent="goToPage(endPage + 1)">Next 10</a>
          </li>
        </ul>
      </nav>
  </div>

</template> 
  

<script setup>
import axios from 'axios'; 
import { ref, computed, onMounted  } from 'vue'  
import router from "@/router";
  // DynamoDB와의 상호작용을 위한 Amazon API GATEWAY
  //const  apiEndpoint_items = 'https://828299ds42.execute-api.ap-northeast-2.amazonaws.com/MyWebApp-APIstage/items';
  //const  apiEndpoint_estimate = 'https://828299ds42.execute-api.ap-northeast-2.amazonaws.com/MyWebApp-APIstage/estimate';
const boardPagingList = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);
const boardCount = ref(0)
const pageBlockSize = 10;



onMounted(async() => {
    console.log(totalPages.value);
    fetchBoardCount();
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
    const response = await axios.get(`https://828299ds42.execute-api.ap-northeast-2.amazonaws.com/MyWebApp-APIstage/estimate?requestCode=${requestCode}`);
    boardCount.value = response.data.count;
    totalPages.value = Math.ceil(boardCount.value / 10);
    console.log('게시글 수:', boardCount.value);
    goToPage(currentPage.value);
  } catch (error) {
    console.error('게시글 수 가져오기 실패:', error);
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
      const limit = 10
      let startId = boardCount.value - ((page - 1) * limit); 
      console.log(`${startId}`);
      const response = await axios.get(
      `https://828299ds42.execute-api.ap-northeast-2.amazonaws.com/MyWebApp-APIstage/estimate`,
      {
        params: { requestCode, startId, limit, order }
      }
    );
      boardPagingList.value = response.data
    } catch (err) { 
      console.error('데이터 가져오기 실패:', err) 
    }
}
          
function fnView(board_id) {
    router.push({path:'/OnlineQuote/EstimateDetail', query:{board_id:board_id}}); 
      
}

function goToWrite() {
    router.push({path:'/OnlineQuote/EstimateWrite', query:{board_id:boardCount.value + 1}});  
}
  
        
</script>
  
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

<style scoped>
.pagination .page-link {
  cursor: pointer;
}
</style>






 