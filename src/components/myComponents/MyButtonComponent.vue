<template>
  <button 
    class="my-btn"
    :class="{ 'is-active': isActive }"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<script setup>
import { ref } from 'vue'

// Props 정의
const props = defineProps({
  label: {
    type: String,
    default: 'Click Me'
  }
})

// Emits 정의 (상위 컴포넌트로 이벤트 전송)
const emit = defineEmits(['clicked'])

// 내부 상태
const isActive = ref(false)

// 클릭 핸들러
const handleClick = () => {
  isActive.value = !isActive.value
  emit('clicked', isActive.value) // 클릭 시 상태 전달
}
</script>

<style scoped>
.my-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #409eff;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.my-btn:hover {
  background-color: #66b1ff;
}

.my-btn.is-active {
  background-color: #67c23a;
}
</style>
