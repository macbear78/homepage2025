<template>
  <section class="py-16 text-center">
    <h2 class="text-4xl font-bold mb-12">몬캣팩토리 뉴스</h2>

    <!-- 뉴스 카드 3개 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
      <div
        v-for="(news, index) in newsList"
        :key="index"
        class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all"
      >
        <img :src="news.image" alt="" class="w-full h-52 object-cover" />
        <div class="p-6 text-left">
          <div class="flex justify-between items-center mb-2">
            <span class="bg-emerald-500 text-white text-sm px-3 py-1 rounded-full">
              news
            </span>
            <span class="text-gray-500 text-sm">{{ news.date }}</span>
          </div>
          <p class="font-semibold text-lg leading-snug line-clamp-2">
            {{ news.title }}
          </p>
        </div>
      </div>
    </div>

    <!-- 버튼 영역 -->
    <div class="mt-12 flex flex-col items-center space-y-4">
      <button
        class="px-10 py-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
      >
        View More
      </button>

    </div> 
  </section>
</template>

<script setup>
const newsList = [
  {
    image: "/news1.jpg",
    date: "23.11.21",
    title: "전남대불산업단지, 에너지 자립형 산업단지 수립 위한 스마트에너지플랫폼...",
  },
  {
    image: "/news2.jpg",
    date: "23.10.23",
    title: "유호스트, 2023 베트남 인공지능의 날(AI4N) 전시회 참석",
  },
  {
    image: "/news3.jpg",
    date: "23.10.23",
    title: "중부발전, 천안산단 스마트에너지플랫폼 구축 우협 선정",
  },
];
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
