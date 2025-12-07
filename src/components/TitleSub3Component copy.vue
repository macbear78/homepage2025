<template>
  <div
    class="grid bg-white grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 items-start h-[400px] gap-4 relative z-20 p-4"
  >
    <!-- 왼쪽 뉴스 소개 -->
    <div class="col-span-3">
      <p class="text-3xl font-bold mb-2 text-start">최신뉴스</p>

      <v-img
        :src="'https://nepic-s3-data-homepage-bucket.s3.ap-northeast-2.amazonaws.com/images/m-news.png'"
        class="mb-3 w-full" 
      ></v-img>

      <p class="text-2xl text-gray-600 leading-6 text-start">
        네픽의 최신 기술 정보와 스마트공방의 <br />
        정부지원사업 정보를 확인해 보세요.
        
      </p>
    </div>

    <!-- 오른쪽 테이블 -->
    <div class="col-span-9 overflow-x-auto">
      <table class="news-table">
        <tbody>
            <tr>
            <td><img src="https://picsum.photos/seed/news1/80/50" class="thumb-img" /></td>
            <td class="title text-xl">네픽 홈페이지 오픈</td>
            <td class="date">2025-11-25</td>
          </tr>
          <tr>
            <td><img src="https://picsum.photos/seed/news2/80/50" class="thumb-img" /></td>
            <td class="title text-xl">네픽 고압산소치료기 보드 연구</td>
            <td class="date">2025-11-27</td>
          </tr>
          <tr>
            <td><img src="https://picsum.photos/seed/news3/80/50" class="thumb-img" /></td>
            <td class="title text-xl">
              네픽 환자얼굴표정으로 사고 예방 AI 시스템 연구
            </td>
            <td class="date">2025-12-02</td>
          </tr>
        </tbody>
      </table>
      <div class="view-more-wrapper mt-5">
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
  width: 90%;
  margin: 30px auto 0;   /* ⬅ 위쪽 여백 30px 추가 */
  border-collapse: collapse;
  font-size: 15px;
}

.news-table tr {
  border-bottom: 1px solid #e5e5e5;
}

.news-table tr:hover {
  background: #f9f9f9;
}

.news-table td {
  padding: 14px 10px;
  vertical-align: middle;
}

/* 이미지 영역 */
.thumb {
  width: 80px;
  height: 50px;
  background: #ececec;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  font-size: 12px;
}

.thumb-img {
  width: 80px;
  height: 50px;
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
.view-more-wrapper {
  width: 90%;        /* 테이블과 동일한 폭 */
  margin: 0 auto;    /* 테이블과 동일한 가운데 정렬 */
  text-align: right; /* 오른쪽 정렬 */
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
