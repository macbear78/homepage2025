<template>
  <div>
    <SubHeaderComponent
      :imagefile="item.titleImg"
      :selNum="item.selNum"
      :menu="item.menu"
    />

    <div class="min-h-[500px] bg-white grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 relative z-20 py-10">

      <!-- 메인 콘텐츠 영역 -->
      <div class="col-span-6 sm:col-span-6 lg:col-start-3 lg:col-span-8 px-4 sm:px-6 lg:px-0">

        <!-- 온라인문의 버튼 -->
        <div class="flex justify-between items-center mb-4">
          <button
            type="button"
            class="bg-black text-white px-4 py-2 rounded text-sm sm:text-base"
            @click="goToWrite"
          >
            온라인문의
          </button>

          <p class="text-right text-sm sm:text-base">전체 {{ boardCount }} </p>
        </div>

        <!-- 테이블 컨테이너 (모바일 스크롤) -->
        <div class="overflow-x-auto border rounded-md">
          <table class="table-auto w-full text-sm sm:text-base">
            <thead class="bg-gray-200 text-gray-700">
              <tr>
                <th class="p-2 w-[10%]">번호</th>
                <th class="p-2 w-[56%]">제목</th>
                <th class="p-2 w-[10%]">작성자</th>
                <th class="p-2 w-[14%]">등록일</th>
                <th class="p-2 w-[10%]">조회수</th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="(board, i) in boardPagingList"
                :key="i"
                class="border-b hover:bg-gray-50"
              >
                <td class="p-2">{{ board.news_board_id }}</td>

                <td class="p-2">
                  <span
                    @click="fnView(board.news_board_id)"
                    class="title-link cursor-pointer"
                  >
                    {{ board.title }}
                  </span>
                </td>

                <td class="p-2">{{ board.writer }}</td>
                <td class="p-2">{{ board.wr_date }}</td>
                <td class="p-2">{{ board.view_cnt }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 페이지네이션 -->
        <nav class="mt-6 flex justify-center">
          <ul class="pagination flex gap-1">
            <li
              class="page-item"
              :class="{ 'opacity-30 pointer-events-none': startPage === 1 }"
            >
              <a
                class="page-link px-3 py-1 border rounded text-sm"
                href="#"
                @click.prevent="goToPage(startPage - 1)"
              >
                Prev 10
              </a>
            </li>

            <li
              v-for="i in pagesInBlock"
              :key="i"
              class="page-item"
              :class="{
                'bg-black text-white rounded': i === currentPage
              }"
            >
              <a
                class="page-link px-3 py-1 border rounded text-sm"
                href="#"
                @click.prevent="goToPage(i)"
              >
                {{ i }}
              </a>
            </li>

            <li
              class="page-item"
              :class="{ 'opacity-30 pointer-events-none': endPage === totalPages }"
            >
              <a
                class="page-link px-3 py-1 border rounded text-sm"
                href="#"
                @click.prevent="goToPage(endPage + 1)"
              >
                Next 10
              </a>
            </li>
          </ul>
        </nav>

        <!-- 검색 UI -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-2 my-6">
          <input
            v-model="searchText"
            type="text"
            placeholder="검색어"
            class="border border-gray-300 rounded px-3 py-2 text-sm w-full sm:w-[300px]"
          />

          <button
            type="button"
            class="bg-gray-700 text-white px-4 py-2 rounded text-sm w-full sm:w-auto"
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
  transition: transform 0.2s ease-in-out;
  display: inline-block;
}

.title-link:hover {
  transform: scale(1.05);
}



.truncateCell {
  max-width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>