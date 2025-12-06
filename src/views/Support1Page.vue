<template>
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <p>11</p>
  <SubHeaderComponent :imagefile="item.titleImg" :selNum="item.selNum" :menu="item.menu" />

  <div class="h-[500px] grid bg-green-500 grid-cols-6 sm:grid-cols-8 lg:grid-cols-12 items-center relative z-20">
    <div class="col-start-3 col-span-8">
      <table class="table table-bordered w-full">
        <thead>
          <tr>
            <th class="w-[10%]">번호</th>
            <th class="w-[60%]">제목</th>
            <th class="w-[10%]">글쓴이</th>
            <th class="w-[10%]">날짜</th>
            <th class="w-[10%]">조회</th>
          </tr>
        </thead>

        <tbody>
          <tr :key="i" v-for="(board, i) in boardPagingList">
            <td>{{ board.news_board_id }}</td>

            <!-- 제목 -->
            <td class="title-cell">
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
  color: orange;
  font-size: 1.3em;
  font-weight: bold;
  background: #efefef;
  padding: 4px 6px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.title-link:hover {
  color: #0F0;
  /* 라임색 */
  background: #333;
}

.truncateCell {
  max-width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>