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
          <button type="button" class="btn btn-lg btn-danger" @click="EstimateInsert">저장하기</button>
        </div>
      </div>
    </div>
    <div>
      <p>board_id {{ estimate_board.board_id }}</p>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
const  apiEndpoint_estimate = 'https://828299ds42.execute-api.ap-northeast-2.amazonaws.com/MyWebApp-APIstage/estimate';
export default {
  data() {
    return {
      estimate_board: {
        board_id : null,
        title : "",
        content : "",
        writer : "",
        wr_date : "",
        view_cnt : 0
      }
    };
  },
  computed: {

  },
  created() {
    this.estimate_board.board_id = this.$route.query.board_id;
  },
  mounted() {

  },
  methods: {
    async EstimateInsert() {
      
      const result = await this.$swal.fire({
        title: '정말 등록 하시겠습니까?',
        showCancelButton: true,
        confirmButtonText: `생성`,
        cancelButtonText: `취소`
      });

      if (!result.isConfirmed) return;

      try{
        const payload = {
          requestCode: "one_write",
          board_group: "estimate_request",
          ...this.estimate_board
        };
        
        const response = await axios.post(apiEndpoint_estimate, payload);
        console.log("response:", response.data);

        await this.$swal.fire('저장되었습니다!', '', 'success');
        this.$router.push({path:'/OnlineQuote/EstimateList'});
      } catch (error) {
        console.error(error);
        await this.$swal.fire('저장에 실패했습니다.', '', 'error');
      }
    },
    goToList() {
       this.$router.push({path:'/OnlineQuote/EstimateList'}); 
      },     
  }
}
</script>

<style scoped>
	.tbAdd td textarea{width:100%; min-height:300px; padding:10px; box-sizing:border-box;}
</style>