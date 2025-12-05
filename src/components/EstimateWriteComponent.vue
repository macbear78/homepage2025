<template>
  <main class="mt-3">
    <div class="container">
      <h2 class="text-center">견적 및 질의응답</h2>  

      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">제목</label>
        <div class="col-md-9">
          <input type="text" class="form-control" v-model="estimate_board.title">
        </div>
      </div>

      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">내용</label> 
        <div class="col-md-9">
          <v-textarea
            class="form-control"
            label="Content"
            v-model="estimate_board.content">
          </v-textarea>
          <div contenteditable="true" style="width:20rem;height:10rem;"> </div>
        </div>
        
      </div> 

      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">작성자</label>
        <div class="col-md-9">
          <input type="text" class="form-control" v-model="estimate_board.writer">
        </div>
      </div>

      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">작성날짜</label>
        <div class="col-md-9">
          <input type="text" class="form-control" v-model="estimate_board.wr_date">
        </div>
      </div> 

      <div class="mb-3 row">
        <div class="col-6 d-grid p-1">
          <button type="button" class="btn btn-lg btn-dark" @click="goToList">취소하기</button>
        </div>
        <div class="col-6 d-grid p-1">
          <button
            type="button"
            class="btn btn-lg btn-danger"
            @click="EstimateInsert"
            :disabled="uploading"
          >
            {{ uploading ? '업로드 중...' : '저장하기' }}
          </button>
        </div>
      </div>
    </div>
    <div>
      <p>board_id {{ estimate_board.board_id }}</p>
    </div>
  </main>


  <div class="p-4 max-w-xl mx-auto">
    <h2 class="text-xl font-bold mb-4">새 게시글 작성</h2>

    <div class="mb-2">
      <label class="block mb-1">이미지 업로드 (최대 5개)</label>
      <input type="file" accept="image/*" multiple @change="onFilesSelected" />
    </div>

    <div class="grid grid-cols-3 gap-2 mb-4">
      <div v-for="(p, idx) in previews" :key="idx" class="border p-1">
        <img :src="p" class="w-full h-24 object-cover" />
      </div>
    </div>
    <div v-if="message" class="mt-3">{{ message }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import Swal from 'sweetalert2'

const apiEndpoint_estimate = 'https://828299ds42.execute-api.ap-northeast-2.amazonaws.com/MyWebApp-APIstage/estimate'

// ✅ 라우터 인스턴스
const route = useRoute()
const router = useRouter()

// ✅ 게시글 데이터
const estimate_board = ref({
  board_id: null,
  title: '',
  content: '',
  writer: '',
  wr_date: '',
  view_cnt: 0,
  image_urls: [] // ✅ 이미지 파일명(혹은 URL) 저장용
})




const API_BASE = 'https://828299ds42.execute-api.ap-northeast-2.amazonaws.com/MyWebApp-APIstage'

const selectedFiles = ref([])
const previews = ref([])
const uploading = ref(false)
const message = ref('')


// ✅ 마운트 시 board_id 설정
onMounted(() => {
  estimate_board.value.board_id = route.query.board_id
})

// ✅ 등록 함수
async function EstimateInsert() {
  const result = await Swal.fire({
    title: '정말 등록 하시겠습니까?',
    showCancelButton: true,
    confirmButtonText: '생성',
    cancelButtonText: '취소'
  })

  if (!result.isConfirmed) return

  try { 

    uploading.value = true

    // 1️⃣ 이미지 업로드
    const uploadedUrls  = await uploadImages()

    // 2️⃣ 업로드된 이미지 파일명 및 URL 저장
    if (uploadedUrls.length) {
      estimate_board.value.image_urls = uploadedUrls // ✅ 추가
      estimate_board.value.content +=
      '\n\n이미지:\n' + uploadedUrls.map(u => `![이미지](${u})`).join('\n')
    }


    const payload = {
      requestCode: 'one_write',
      board_group: 'estimate_request',
      ...estimate_board.value
    }
    
    const response = await axios.post(apiEndpoint_estimate, payload)
    console.log('response:', response.data)

    await Swal.fire('저장되었습니다!', '', 'success')
    router.push({ path: '/OnlineQuote/EstimateList' })
  } catch (error) {
    console.error(error)
    await Swal.fire('저장에 실패했습니다.', '', 'error')
  }
}

// ✅ 목록으로 이동
function goToList() {
  router.push({ path: '/OnlineQuote/EstimateList' })
}

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


// ✅ 파일 업로드 처리
async function uploadImages() {
  if (!selectedFiles.value.length) return []

  uploading.value = true
  message.value = ''

  try {
    const uploadPromises = selectedFiles.value.map(async (file) => {
      const presign = await getPresign(file.name, file.type)
      await uploadToS3(presign.upload_url, file, file.type)
      return presign.file_url
    })

    const uploadedUrls = await Promise.all(uploadPromises)
    message.value = `✅ ${uploadedUrls.length}개 업로드 완료!`
    return uploadedUrls
  } catch (err) {
    message.value = '오류: ' + err.message
    throw err
  } finally {
    uploading.value = false
  }
}
</script>

<style scoped>
.tbAdd td textarea {
  width: 100%;
  min-height: 300px;
  padding: 10px;
  box-sizing: border-box;
}
</style>
