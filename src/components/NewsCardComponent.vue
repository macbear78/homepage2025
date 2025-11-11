<template>
  <article class="news-card" @click="onClick">
    <div class="thumb" :style="{ backgroundImage: `url(${imageUrl})` }" />

    <div class="body">
      <div class="meta-row">
        <span class="tag" :class="tagClass">{{ tag }}</span>
        <time class="date">{{ formattedDate }}</time>
      </div>

      <h3 class="title">{{ title }}</h3>

      <p v-if="excerpt" class="excerpt">{{ excerpt }}</p>

      <div class="actions">
        <slot name="actions">
          <!-- 기본 버튼(원하면 슬롯으로 교체) -->
          <button class="btn">보기</button>
        </slot>
      </div>
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
  width: 320px;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 6px 18px rgba(22, 38, 57, 0.08);
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
  height: 120px;
  background-size: cover;
  background-position: center center;
}

.body {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.meta-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.tag {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 12px;
  color: white;
  text-transform: lowercase;
}

.tag--green { background: #00b37e; }
.tag--blue { background: #1976d2; }
.tag--yellow { background: #f7b500; color: #0b0b0b; }

.date {
  font-size: 12px;
  color: #6b7280;
}

.title {
  font-size: 16px;
  line-height: 1.25;
  margin: 0;
  color: #0f172a;
  font-weight: 700;
}

.excerpt {
  margin: 0;
  color: #475569;
  font-size: 13px;
  line-height: 1.4;
}

.actions {
  margin-top: 6px;
  display: flex;
  justify-content: flex-start;
}

.btn {
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  background: #eef2ff;
  cursor: pointer;
}
</style>

<!--
Usage example:

<template>
  <NewsCard
    imageUrl="/path/to/thumb.jpg"
    tag="news"
    tagColor="green"
    :date="'2023-11-21'"
    title="전남대불산업단지, 에너지 자립형 산업단지 수립을 위한 스마트에너지플..."
    excerpt="짧은 요약 텍스트가 들어갑니다."
    @click="openArticle"
  >
    <template #actions>
      <button class="btn">자세히 보기</button>
    </template>
  </NewsCard>
</template>

<script setup>
import NewsCard from './NewsCard.vue'
function openArticle() { console.log('open') }
</script>
-->
