<template>
  <div>
    <h2>s3 이미지 CORS 테스트</h2>
    <button @click="fetchImage">이미지 가져오기</button>
    <img :src="imageUrl" alt="S3 Test Image" />
    <p v-if="error" style="color:red">Error: {{ error }}</p>

    <div class="mb-2">
      <label class="block mb-1">이미지 업로드 (최대 5개)</label>
      <input type="file" accept="image/*" multiple @change="onFilesSelected" />
    </div>

    <div class="grid grid-cols-3 gap-2 mb-4">
      <div v-for="(p, idx) in previews" :key="idx" class="border p-1">
        <img :src="p" class="w-full h-24 object-cover" />
      </div>
    </div>
    
    <button @click="getUrl">upload url 가져오기</button>
    <div v-if="uploadurlmessage" class="mt-3">{{ uploadurlmessage.value }}</div>


    <button @click="imageUpload" :disabled="uploading" class="px-4 py-2 bg-blue-600 text-white rounded">
      {{ uploading ? '업로드 중...' : '게시' }}
    </button>

    <div v-if="message" class="mt-3">{{ message }}</div>

    <div class="mb-3 row">
      <label class="col-md-3 col-form-label">url</label>
       <div class="col-md-9">
          <input type="text" class="form-control" v-model="uploadurlinput">
        </div> 
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
//import axios from 'axios';

const imageUrl = ref(null);
const error = ref(null);
const selectedFiles = ref([])
const previews = ref([])
const uploading = ref(false)
const message = ref('')
const uploadurlmessage = ref('')
const uploadurlinput = ref('')
//s3에 업로드된 이미지 URL
const s3Url = "https://my-estimate-images-bucket.s3.ap-northeast-2.amazonaws.com/estimate_images/PL.png";
const API_BASE = 'https://828299ds42.execute-api.ap-northeast-2.amazonaws.com/MyWebApp-APIstage';


const fetchImage = async () => {
  try {
      const res = await fetch(s3Url, {method: "GET"});
      if(!res.ok)
        throw new Error("Network STAUS: ${res.status}");
      const blob = await res.blob();    
      imageUrl.value = URL.createObjectURL(blob);
  } catch(err){
    error.value = err.message;
    console.error("Fetch Error: ", err);
  }
};

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
async function getUrl(){
    uploadurlmessage.value = await getPresign('test.png','image/png')
    console.log(uploadurlmessage.value)
    console.log(uploadurlmessage.value.upload_url)
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

// async function imageUpload() {
//   uploading.value = true 
//   message.value = ''
//   try {
//     const uploadedUrls = []
//     for (const file of selectedFiles.value) {
//       const presign = await getPresign(file.name, file.type)
//       console.log(presign)
//       console.log(presign.upload_url)
//       await uploadToS3(presign.upload_url, file, file.type)
//       uploadedUrls.push(presign.file_url)
//       uploadedUrls.push(presign.file_url)
//     }
//   } catch (err) {
//     message.value = '오류: ' + err.message
//   } finally {
//     uploading.value = false
//   }
// }

// ✅ 업로드 실행
async function imageUpload() {
  uploading.value = true
  message.value = ''
  try {
    if (!selectedFiles.value.length) throw new Error('업로드할 파일이 없습니다.')
    if (!uploadurlinput.value) throw new Error('Presigned URL이 없습니다.')
    
    const file = selectedFiles.value[0]
    await uploadToS3(uploadurlinput.value, file, file.type)
    message.value = '✅ 업로드 완료!'
  } catch (err) {
    message.value = '오류: ' + err.message
  } finally {
    uploading.value = false
  }
}
</script>
