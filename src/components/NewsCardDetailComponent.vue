<template>
  <section v-if="article">
    <h2>{{ article.title }}</h2>
    <p>{{ article.date }}</p>
    <img :src="article.image_urls?.[0] || '/assets/default.png'" alt="뉴스 이미지" />
    <div v-html="article.content"></div>
  </section>

  <p v-else>뉴스 데이터를 불러오는 중입니다...</p>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useNewsStore } from '@/stores/newsStore'

const store = useNewsStore()
const article = ref(store.currentArticle)

// 새로고침 시 로컬스토리지에서 복원
onMounted(() => {
  if (!article.value) {
    store.loadFromStorage()
    article.value = store.currentArticle
  }
})
</script>