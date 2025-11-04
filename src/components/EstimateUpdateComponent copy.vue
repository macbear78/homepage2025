<template>
  <main class="mt-3">
    <div class="container">
      <h2 class="text-center">견적 및 질의응답 수정</h2>

      <!-- 기존 입력 필드 생략 -->
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">첨부 이미지</label>
        <div class="col-md-9">
          <div v-if="imageList.length > 0" class="d-flex flex-wrap">
            <div v-for="(img, index) in imageList" :key="index" class="m-2 text-center">
              <img
                :src="img"
                alt="첨부 이미지"
                style="width: 150px; height: 150px; object-fit: cover; border-radius: 8px;"
              />
              <div>
                <button class="btn btn-sm btn-outline-danger mt-1" @click="removeImage(index)">
                  삭제
                </button>
              </div>
            </div>
          </div>
          <div v-else class="text-muted">첨부된 이미지가 없습니다.</div>
        </div>
      </div>

      <!-- 수정 저장 버튼 -->
      <div class="mb-3 row">
        <div class="col-6 d-grid p-1">
          <button type="button" class="btn btn-lg btn-dark" @click="goToDetail(board_id)">취소하기</button>
        </div>
        <div class="col-6 d-grid p-1">
          <button type="button" class="btn btn-lg btn-danger" @click="EstimateUpdate">저장하기</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
const apiEndpoint_estimate =
  'https://828299ds42.execute-api.ap-northeast-2.amazonaws.com/MyWebApp-APIstage/estimate'

export default {
  data() {
    return {
      board_id: null,
      estimateUpdate: {
        title: '',
        content: '',
        writer: '',
        wr_date: '',
      },
      imageList: [], // 👈 이미지 목록
    }
  },
  created() {
    this.board_id = this.$route.query.board_id
    this.getEstimateDetail()
  },
  methods: {
    async getEstimateDetail() {
      try {
        const res = await axios.get(apiEndpoint_estimate, {
          params: { board_id: this.board_id },
        })
        const data = Array.isArray(res.data) ? res.data[0] : res.data
        this.estimateUpdate = data
        // image_urls 필드 파싱
        if (data.image_urls && Array.isArray(data.image_urls)) {
          this.imageList = data.image_urls.filter((i) => i && !i.NULL).map((i) => i.S || i)
        } else {
          this.imageList = []
        }
        console.log('불러온 데이터:', data)
      } catch (err) {
        console.error('불러오기 실패:', err)
      }
    },
    removeImage(index) {
      this.imageList.splice(index, 1)
    },
    async EstimateUpdate() {
      const confirm = await this.$swal.fire({
        title: '정말 수정 하시겠습니까?',
        showCancelButton: true,
        confirmButtonText: '수정',
        cancelButtonText: '취소',
      })
      if (!confirm.isConfirmed) return

      const payload = {
        ...this.estimateUpdate,
        board_id: parseInt(this.board_id),
        image_urls: this.imageList, // 👈 이미지 URL 반영
      }

      try {
        await axios.post(apiEndpoint_estimate, payload)
        await this.$swal.fire('수정되었습니다!', '', 'success')
        this.goToDetail(this.board_id)
      } catch (err) {
        console.error(err)
        this.$swal.fire('수정에 실패했습니다.', '', 'error')
      }
    },
    goToDetail(board_id) {
      this.$router.push({
        path: '/OnlineQuote/EstimateDetail',
        query: { board_id },
      })
    },
  },
}
</script>
