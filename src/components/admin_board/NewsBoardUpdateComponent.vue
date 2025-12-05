<template>
  <main class="mt-3">
    <div class="container">
      <h2 class="text-center mb-4">견적 및 질의응답 수정</h2>

      <!-- 제목 -->
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">제목</label>
        <div class="col-md-9">
          <input type="text" class="form-control" v-model="getUpdate.title" />
        </div>
      </div>

      <!-- 내용 -->
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">내용</label>
        <div class="col-md-9">
          <v-textarea class="form-control" v-model="getUpdate.content" />
        </div>
      </div>

      <!-- 이미지 업로드 -->
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">이미지 업로드</label>
        <div class="col-md-9">
          <input type="file" multiple accept="image/*" @change="handleFileUpload" />
          <div class="d-flex flex-wrap mt-3">
            <div
              v-for="(url, index) in getUpdate.image_urls"
              :key="index"
              class="me-2 mb-2 position-relative"
              style="width: 120px; height: 120px;"
            >
              <img
                :src="url"
                alt="uploaded"
                class="img-thumbnail"
                style="object-fit: cover; width: 100%; height: 100%;"
              />
              <button
                class="btn btn-sm btn-danger position-absolute top-0 end-0"
                @click="removeImage(index)"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 작성자 -->
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">작성자</label>
        <div class="col-md-9">
          <input type="text" class="form-control" v-model="getUpdate.writer" />
        </div>
      </div>

      <!-- 작성날짜 -->
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">작성날짜</label>
        <div class="col-md-9">
          <input type="text" class="form-control" v-model="getUpdate.wr_date" />
        </div>
      </div>

      <!-- 버튼 -->
      <div class="mb-3 row mt-4">
        <div class="col-6 d-grid p-1">
          <button type="button" class="btn btn-lg btn-dark" @click="goToDetail(getUpdate.board_id)">
            취소하기
          </button>
        </div>
        <div class="col-6 d-grid p-1">
          <button type="button" class="btn btn-lg btn-danger" @click="EstimateUpdate">
            저장하기
          </button>
        </div>
      </div>

      <div class="text-muted small text-end">
        <p>board_id: {{ getUpdate.board_id }}</p>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import router from '@/router';

const apiEndpoint =
  'https://828299ds42.execute-api.ap-northeast-2.amazonaws.com/MyWebApp-APIstage/news';
const apiEndpoint_presign =
  'https://828299ds42.execute-api.ap-northeast-2.amazonaws.com/MyWebApp-APIstage/news/presign';

export default {
  data() {
    return {
      getUpdate: {
        image_urls: []
      },
    };
  },
  created() {
    this.getUpdate = { ...this.$route.query };
    // 기존 이미지가 없으면 빈 배열로 초기화
    if (!this.getUpdate.image_urls) {
      this.getUpdate.image_urls = [];
    }
  },
  methods: {
    // ✅ S3 presigned URL 요청 + 업로드
    async handleFileUpload(event) {
      const files = event.target.files;
      if (!files || files.length === 0) return;

      for (const file of files) {
        try {
          // 1️⃣ presigned URL 요청
          const presignRes = await axios.post(apiEndpoint_presign, {
            file_name: file.name,
            file_type: file.type,
            folder: 'news_board_images'
          });

          const { upload_url, file_url } = presignRes.data;

          // 2️⃣ S3에 직접 업로드
          await axios.put(upload_url, file, {
            headers: { 'Content-Type': file.type }
          });

          // 3️⃣ 업로드 성공 시 URL 배열에 추가
          this.getUpdate.image_urls.push(file_url);
        } catch (err) {
          console.error('이미지 업로드 실패:', err);
          this.$swal.fire('이미지 업로드 실패', '', 'error');
        }
      }
    },

    // ✅ 이미지 삭제
    removeImage(index) {
      this.getUpdate.image_urls.splice(index, 1);
    },

    // ✅ 수정 저장
    async EstimateUpdate() {
      const result = await this.$swal.fire({
        title: '정말 수정 하시겠습니까?',
        showCancelButton: true,
        confirmButtonText: `수정`,
        cancelButtonText: `취소`
      });

      if (!result.isConfirmed) return;

      try {
        const payload = {
          board_group: 'news_board_request',
          mode: 'update',
          ...this.getUpdate
        };

        const response = await axios.put(apiEndpoint, payload);
        console.log('response:', response.data);

        await this.$swal.fire('수정되었습니다!', '', 'success');
        this.$router.push({ path: '/Admin/NewsBoardList' });
      } catch (error) {
        console.error(error);
        await this.$swal.fire('저장에 실패했습니다.', '', 'error');
      }
    },

    goToDetail(board_id) {
      router.push({ path: '/Admin/NewsBoardDetail', query: { board_id: board_id } });
    }
  }
};
</script>

<style scoped>
img {
  border-radius: 8px;
  transition: 0.2s;
}
img:hover {
  opacity: 0.8;
}
</style>
