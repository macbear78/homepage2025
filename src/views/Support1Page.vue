<template>
  <div>
    <p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p>
    <SubHeaderComponent :imagefile="item.titleImg" :selNum="item.selNum" :menu="item.menu" />

    <div class="h-[500px] grid bg-white grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 items-center relative z-20">
      <div class="col-start-3 col-span-8">

        <button type="button" class="btn btn-dark" @click="goToWrite">온라인문의</button>

        <p class="text-start">전체 {{ boardCount }} </p>

        <table class="table w-full">
          <thead class="!bg-gray-200">
            <tr>
              <th class="w-[10%] !bg-gray-200">번호</th>
              <th class="w-[60%] !bg-gray-200">제목</th>
              <th class="w-[10%] !bg-gray-200">작성자</th>
              <th class="w-[10%] !bg-gray-200">등록일</th>
              <th class="w-[10%] !bg-gray-200">조회수</th>
            </tr>
          </thead>


          <tbody>
            <tr :key="i" v-for="(board, i) in boardPagingList">
              <td>{{ board.news_board_id }}</td>

              <!-- 제목 -->
              <td class="title-cell text-left">
                <span @click="fnView(board.news_board_id)" class="title-link">
                  {{ board.title }}
                </span>
              </td>
              <td>{{ board.writer }}</td>
              <td>{{ board.wr_date }}</td>
              <td>{{ board.view_cnt }}</td>
            </tr>
          </tbody>
        </table>

        <nav aria-label="페이지 네비게이션">
          <ul class="pagination justify-content-center">
            <!-- 이전 블록 버튼 -->
            <li class="page-item" :class="{ disabled: startPage === 1 }">
              <a class="page-link text-black" href="#" @click.prevent="goToPage(startPage - 1)">Prev 10</a>
            </li>

            <!-- 페이지 번호 -->
            <li v-for="i in pagesInBlock" :key="i" class="page-item" :class="{ active: i === currentPage }">
              <a class="page-link" href="#" @click.prevent="goToPage(i)">{{ i }}</a>
            </li>

            <!-- 다음 블록 버튼 -->
            <li class="page-item" :class="{ disabled: endPage === totalPages }">
              <a class="page-link" href="#" @click.prevent="goToPage(endPage + 1)">Next 10</a>
            </li>
          </ul>
        </nav>

        <!-- 검색 UI -->
        
         <div class="flex items-center justify-center gap-2 my-4">
  <input
    v-model="searchText"
    type="text"
    placeholder="검색어"
    class="border border-gray-300 rounded px-2 py-1 text-sm w-[300px]"
  />

  <button
    type="button"
    class="bg-gray-700 text-white px-3 py-1 rounded text-sm"
    @click="searchBoard"
  >
    검색
  </button>
</div>

        
      </div>
    </div>

  </div>
</template>


<script setup>
import { ref } from 'vue'
import SubHeaderComponent from '@/components/SubHeaderComponent.vue';

const item = {
  titleImg: 'https://my-moncatfactory-bucket.s3.ap-northeast-2.amazonaws.com/sub_header/header_image004.png',
  selNum: 0,
  menu: [
    { name: '온라인문의', path: '/Support1' },
    { name: '견적요청', path: '/Support2' },
  ]
}

const boardCount = 3;

const boardPagingList = ref([
  {
    news_board_id: 1,
    title: "첫 번째 게시글입니다",
    writer: "관리자",
    wr_date: "2025-01-01",
    view_cnt: 12
  },
  {
    news_board_id: 2,
    title: "두 번째 뉴스 공지 안내",
    writer: "홍길동",
    wr_date: "2025-01-02",
    view_cnt: 34
  },
  {
    news_board_id: 3,
    title: "세 번째 테스트 글입니다",
    writer: "테스터",
    wr_date: "2025-01-03",
    view_cnt: 20
  }
]);




</script>


<style>
section {
  display: block;
  position: relative;
  width: 100%;
  padding: 0;
  margin: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.title-cell {
  max-width: 400px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.title-link {
  padding: 4px 6px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: inline-block;
  /* transform 적용을 위해 필요 */
}

.title-link:hover {
  transform: scale(1.1);
  /* 10% 확대 */
}


.truncateCell {
  max-width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>