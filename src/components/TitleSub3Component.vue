<template>
  <div
    class="grid bg-white grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 items-start 
           gap-6 relative z-20 p-4 lg:h-[400px]"
  >
    <!-- 왼쪽 뉴스 소개 -->
    <div class="col-span-1 sm:col-span-1 lg:col-span-3">
      <p class="text-2xl sm:text-3xl font-bold mb-2 text-start">최신뉴스</p>

      <v-img
        :src="'https://nepic-s3-data-homepage-bucket.s3.ap-northeast-2.amazonaws.com/images/m-news.png'"
        class="mb-3 w-full rounded-lg"
        cover
      ></v-img>

      <p class="text-lg sm:text-xl text-gray-600 leading-6 text-start">
        네픽의 최신 기술 정보와 스마트공방의 <br class="hidden sm:block" />
        정부지원사업 정보를 확인해 보세요.
      </p>
    </div>

    <!-- 오른쪽 테이블 -->
    <div class="col-span-1 sm:col-span-1 lg:col-span-9 overflow-x-auto">
      <table class="news-table w-full">
        <tbody>
          <tr>
            <td>
              <img src="https://picsum.photos/seed/news1/80/50" class="thumb-img" />
            </td>
            <td class="title text-base sm:text-lg lg:text-xl">네픽 홈페이지 오픈</td>
            <td class="date">2025-11-25</td>
          </tr>
          <tr>
            <td>
              <img src="https://picsum.photos/seed/news2/80/50" class="thumb-img" />
            </td>
            <td class="title text-base sm:text-lg lg:text-xl">
              네픽 고압산소치료기 보드 연구
            </td>
            <td class="date">2025-11-27</td>
          </tr>
          <tr>
            <td>
              <img src="https://picsum.photos/seed/news3/80/50" class="thumb-img" />
            </td>
            <td class="title text-base sm:text-lg lg:text-xl">
              네픽 환자얼굴표정으로 사고 예방 AI 시스템 연구
            </td>
            <td class="date">2025-12-02</td>
          </tr>
        </tbody>
      </table>

      <!-- View more -->
      <div class="view-more-wrapper mt-4 pr-2">
        <router-link to="/news" class="view-more">
          View more →
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.news-table {
  border-collapse: collapse;
}

.news-table tr {
  border-bottom: 1px solid #e5e5e5;
}

.news-table tr:hover {
  background: #f9f9f9;
}

.news-table td {
  padding: 12px 8px;
  vertical-align: middle;
}

/* 이미지 */
.thumb-img {
  width: 70px;
  height: 45px;
  object-fit: cover;
  border-radius: 6px;
}

/* 제목 */
.title {
  font-weight: 600;
  color: #333;
}

/* 날짜 */
.date {
  color: #777;
  font-size: 14px;
  text-align: right;
  white-space: nowrap;
}

/* View more */
.view-more-wrapper {
  text-align: right;
}

.view-more {
  color: #007bff;
  cursor: pointer;
  font-weight: 500;
  transition: color 0.2s;
}

.view-more:hover {
  color: #0056b3;
}
</style>


