<template>
  <main class="mt-3">
    <div class="container">
      <h2 class="text-center mb-4">견적 및 질의응답</h2>  

      <!-- 데이터 로드 완료 시 표시 -->
      <div v-if="estimateDetail && estimateDetail.title">
        <div class="mb-3 row">
          <label class="col-md-3 col-form-label">제목</label>
          <div class="col-md-9">
            <p>{{ estimateDetail.title }}</p>
          </div>
        </div>

        <div class="mb-3 row">
          <label class="col-md-3 col-form-label">내용</label>
          <div class="col-md-9">
            <p>{{ estimateDetail.content }}</p>
          </div>
        </div>

        <div class="mb-3 row">
          <label class="col-md-3 col-form-label">작성자</label>
          <div class="col-md-9">
            <p>{{ estimateDetail.writer }}</p>
          </div>
        </div>

        <div class="mb-3 row">
          <label class="col-md-3 col-form-label">작성날짜</label>
          <div class="col-md-9">
            <p>{{ estimateDetail.wr_date }}</p>
          </div>
        </div>

        <div class="mb-3 row mt-4">
          <div class="col-4 d-grid p-1">
            <button type="button" class="btn btn-lg btn-dark" @click="goToList">
              목록
            </button>
          </div>
          <div class="col-4 d-grid p-1">
            <button
              type="button"
              class="btn btn-lg btn-warning"
              @click="goToUpdate()"
            >
              수정
            </button>
          </div>
          <div class="col-4 d-grid p-1">
            <button
              type="button"
              class="btn btn-lg btn-danger"
              @click="runDelete(estimateDetail.board_id)"
            >
              삭제
          </button>
          </div>
        </div>

        <div class="text-muted small text-end">
          <p>board_id: {{ get_board_id }}</p>
        </div>
      </div>

      <!-- 로딩 중 / 데이터 없음 -->
      <div v-else class="text-center text-secondary mt-5">
        데이터를 불러오는 중입니다...
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
const apiEndpoint_estimate =
  'https://828299ds42.execute-api.ap-northeast-2.amazonaws.com/MyWebApp-APIstage/estimate';

export default {
  data() {
    return {
      get_board_id: null,
      estimateDetail: {}
    };
  },
  created() {
    this.get_board_id = this.$route.query.board_id;
    if (this.get_board_id) {
      this.loadData(this.get_board_id);
      this.viewCntUp(this.get_board_id);
    } else {
      console.warn('board_id가 전달되지 않았습니다.');
    }
  },
  methods: {
    goToList() {
      this.$router.push({ path: '/OnlineQuote/EstimateList' });
    },
    goToUpdate() {
      this.$router.push({
        path: '/OnlineQuote/EstimateUpdate',
        query: this.estimateDetail
      });
    },
    async loadData(id) {
      try {
        const requestCode = 'read';
        const response = await axios.get(apiEndpoint_estimate, {
          params: { requestCode, board_id: id }
        });

        const result = Array.isArray(response.data)
          ? response.data[0]
          : response.data;
        this.estimateDetail = result || {};

        console.log('데이터 로드 성공:', this.estimateDetail);
      } catch (err) {
        console.error('데이터 가져오기 실패:', err);
        if (this.$swal) {
          this.$swal.fire('데이터를 불러오지 못했습니다.', '', 'error');
        } else {
          alert('데이터를 불러오지 못했습니다.');
        }
      }
    },
    async runDelete(board_id) {
        const result = await this.$swal.fire({
            title: '정말 삭제 하시겠습니까?',
            showCancelButton: true,
            confirmButtonText: `삭제`,
            cancelButtonText: `취소`
          });

          if (!result.isConfirmed) return;

          try {
            await axios.delete('https://828299ds42.execute-api.ap-northeast-2.amazonaws.com/MyWebApp-APIstage/estimate', {
              params: {
                board_group: 'estimate_request',
                board_id: board_id
              }
            });
            await this.$swal.fire('삭제되었습니다!', '', 'success');
            this.$router.push({path:'/OnlineQuote/EstimateList'});
          } catch (error) {
            console.error(error.response?.data || error);
            await this.$swal.fire('삭제에 실패했습니다.', '', 'error');
          }
      
    },
    async viewCntUp(board_id) {    
        try{
            const payload = {
              board_group: "estimate_request",
              board_id: board_id,
              mode: "view"
            };
            
            const response = await axios.put(apiEndpoint_estimate, payload);
            console.log("response:", response.data);
          } catch (error) {
            console.error(error);
          }
      
    }

  }
};
</script>

<style scoped>
p {
  margin: 0;
  padding: 6px 0;
  line-height: 1.5;
}
</style>
