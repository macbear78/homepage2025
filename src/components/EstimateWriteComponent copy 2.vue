<template>
  <div class="p-4 max-w-xl mx-auto">
    <h2 class="text-xl font-bold mb-4">새 게시글 작성</h2>

    <input v-model="title" placeholder="제목" class="w-full mb-2 p-2 border" />
    <textarea v-model="content" placeholder="본문" class="w-full mb-2 p-2 border"></textarea>

    <div class="mb-2">
      <label class="block mb-1">이미지 업로드 (최대 5개)</label>
      <input type="file" accept="image/*" multiple @change="onFilesSelected" />
    </div>

    <div class="grid grid-cols-3 gap-2 mb-4">
      <div v-for="(p, idx) in previews" :key="idx" class="border p-1">
        <img :src="p" class="w-full h-24 object-cover" />
      </div>
    </div>

    <button @click="submit" :disabled="uploading" class="px-4 py-2 bg-blue-600 text-white rounded">
      {{ uploading ? '업로드 중...' : '게시' }}
    </button>

    <div v-if="message" class="mt-3">{{ message }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const API_BASE = 'https://828299ds42.execute-api.ap-northeast-2.amazonaws.com/MyWebApp-APIstage'

const title = ref('')
const content = ref('')
const selectedFiles = ref([])
const previews = ref([])
const uploading = ref(false)
const message = ref('')

function onFilesSelected(e) {
  const files = Array.from(e.target.files).slice(0, 5)
  selectedFiles.value = files
  previews.value = []
  for (const f of files) {
    const reader = new FileReader()
    reader.onload = (ev) => previews.value.push(ev.target.result)
    reader.readAsDataURL(f)
  }
}

async function getPresign(filename, contentType) {
  const res = await fetch(`${API_BASE}/presign`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ filename, contentType })
  })
  if (!res.ok) throw new Error('presign failed')
  return res.json()
}

async function uploadToS3(uploadUrl, file, contentType) {
  // use PUT to presigned URL
  const res = await fetch(uploadUrl, {
    method: 'PUT',
    headers: { 'Content-Type': contentType },
    body: file
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error('S3 upload failed KIM: ' + text)
  }
}

async function submit() {
  if (!title.value && !content.value) {
    message.value = '제목 또는 본문을 입력하세요'
    return
  }
  uploading.value = true 
  message.value = ''
  try {
    const uploadedUrls = []
    for (const file of selectedFiles.value) {
      const presign = await getPresign(file.name, file.type)
      console.log(presign)
      console.log(presign.upload_url)
      await uploadToS3(presign.upload_url, file, file.type)
      uploadedUrls.push(presign.file_url)
      uploadedUrls.push(presign.file_url)
    }

    // 게시글 저장
    // const payload = {
    //   board_group: 'general',
    //   title: title.value,
    //   content: content.value,
    //   image_urls: uploadedUrls,
    //   author: 'kim' // 인증 연동 시 교체
    // }
    // const res = await fetch(`${API_BASE}/posts`, {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify(payload)
    // })
    // if (!res.ok) throw new Error('post save failed')
    // const data = await res.json()
    // message.value = '게시글 생성 완료: ' + data.post_id
    // // 초기화
    // title.value = ''
    // content.value = ''
    // selectedFiles.value = []
    // previews.value = []
  } catch (err) {
    message.value = '오류: ' + err.message
  } finally {
    uploading.value = false
  }
}
</script>

<style scoped>
/* 간단 스타일 */
</style>
