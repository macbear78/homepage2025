<template>
    <main class="mt-3">
      <div class="container">
        <h2 class="text-center">견적 및 질의응답</h2>  
        <div class="mb-3 row">
          <label class="col-md-3 col-form-label">제목</label>
          <div class="col-md-9">
            <input type="text" class="form-control" v-model="getEstimateUpdate.title">
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-md-3 col-form-label">내용</label>
          <div class="col-md-9">
            <div class="input-group mb-3">
              <v-textarea
                 class="form-control"  
                 label="Content"
                 v-model="getEstimateUpdate.content">
                </v-textarea>
            </div>
          </div>
        </div> 
        <div class="mb-3 row">
          <label class="col-md-3 col-form-label">작성자</label>
          <div class="col-md-9">
            <div class="input-group mb-3">
              <input type="text" class="form-control" v-model="getEstimateUpdate.writer">
            </div>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-md-3 col-form-label">작성날짜</label>
          <div class="col-md-9">
            <div class="input-group mb-3">
              <input type="text" class="form-control" v-model="getEstimateUpdate.wr_date">
            </div>
          </div>
        </div> 
  
        <div class="mb-3 row">
          <div class="col-6 d-grid p-1">
            <button type="button" class="btn btn-lg btn-dark" @click="goToDetail(getEstimateUpdate.board_id)">취소하기</button>
          </div>
          <div class="col-6 d-grid p-1">
            <button type="button" class="btn btn-lg btn-danger" @click="EstimateUpdate">저장하기</button>
          </div>
        </div>

        <div class="text-muted small text-end">
          <p>board_id: {{ getEstimateUpdate.board_id }}</p>
        </div>
      </div>
    </main>
</template>
  
<script setup>
  
  
  
  
</script>
  
  
<script>
import axios from 'axios';
import router from "@/router";
const  apiEndpoint_estimate = 'https://828299ds42.execute-api.ap-northeast-2.amazonaws.com/MyWebApp-APIstage/estimate';
  export default {
    data() {
      return {
          getEstimateUpdate: {}
          };
    },
    computed: {
  
    },
    created() {
       this.getEstimateUpdate = this.$route.query;
    },
    mounted() {
  
    },
    methods: {
      async EstimateUpdate() {
          const result = await this.$swal.fire({
            title: '정말 수정 하시겠습니까?',
            showCancelButton: true,
            confirmButtonText: `수정`,
            cancelButtonText: `취소`
          });

          if (!result.isConfirmed) return;

          try{
            const payload = {
              board_group: "estimate_request",
              ...this.getEstimateUpdate
            };
            
            const response = await axios.put(apiEndpoint_estimate, payload);
            console.log("response:", response.data);

            await this.$swal.fire('수정되었습니다!', '', 'success');
            this.$router.push({path:'/OnlineQuote/EstimateList'});
          } catch (error) {
            console.error(error);
            await this.$swal.fire('저장에 실패했습니다.', '', 'error');
          }
      },
      goToDetail(board_id) {
        router.push({path:'/OnlineQuote/EstimateDetail', query:{board_id:board_id}}); 
      }
     
    }
  }
  
  </script>
  
  <style scoped>
      .tbAdd td textarea{width:100%; min-height:300px; padding:10px; box-sizing:border-box;}
  </style>