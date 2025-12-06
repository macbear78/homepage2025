<template>
  <article class="news-card" @click="onClick">
    <div class="thumb" :style="{ backgroundImage: `url(${imageUrl})` }" />

    <div class="body">
      <p class="tag text-sm" :class="tagClass">{{ tag }}</p>
      <p class="title text-2xl">{{ title }}</p>
      <time class="date text-gray-500">{{ formattedDate }}</time>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

// Props
const props = defineProps({
  imageUrl: { type: String, default: '' },
  tag: { type: String, default: 'news' },
  tagColor: { type: String, default: 'green' },
  date: { type: [String, Date], default: null },
  title: { type: String, required: true },
  excerpt: { type: String, default: '' },
  rounded: { type: Boolean, default: true },
})

const emit = defineEmits(['click'])

function onClick() {
  emit('click')
}

const formattedDate = computed(() => {
  if (!props.date) return ''
  const d = props.date instanceof Date ? props.date : new Date(props.date)
  return d.toLocaleDateString()
})

const tagClass = computed(() => `tag--${props.tagColor}`)
</script>

<style scoped>
.news-card {
  width: 480px;
  overflow: hidden;
  background: #fff;
  cursor: pointer;
  transition: transform 180ms ease, box-shadow 180ms ease;
  display: flex;
  flex-direction: column;
}
.news-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 30px rgba(22, 38, 57, 0.12);
}

.thumb {
  height: 300px;
  background-size: cover;
  background-position: center center;
}

.body {
  padding: 16px;
  gap: 8px;
  text-align: left; /* 🔥 글자 왼쪽 정렬 */
}

.tag {
  color: red;        /* 🔥 태그 글자색 빨간색 */
}


</style>


 
