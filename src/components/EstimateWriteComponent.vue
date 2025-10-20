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
          <div class="input-group mb-3">
            <v-textarea
               class="form-control"  
               label="Content"
               v-model="estimate_board.content">
              </v-textarea>
          </div>
        </div>
      </div> 
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">작성자</label>
        <div class="col-md-9">
          <div class="input-group mb-3">
            <input type="text" class="form-control" v-model="estimate_board.writer">
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">작성날짜</label>
        <div class="col-md-9">
          <div class="input-group mb-3">
            <input type="text" class="form-control" v-model="estimate_board.wr_date">
          </div>
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
  </main>
</template>

<script setup>




</script>


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
    
  },
  mounted() {

  },
  methods: {
    EstimateInsert() {

      this.$swal.fire({
        title: '정말 등록 하시겠습니까?',
        showCancelButton: true,
        confirmButtonText: `생성`,
        cancelButtonText: `취소`
      }).then(async (result) => {
        if (result.isConfirmed) {
          
          //this.$api("/api/estimateInsert",{param:[this.estimate_board]});
          //this.$swal.fire('저장되었습니다!', '', 'success');
          

          
            //const board_id = this.estimate_board.board_id;
            const board_id = 4;
            const title = this.estimate_board.title;
            const content = this.estimate_board.content;
            const writer = this.estimate_board.writer;
            const wr_date = this.estimate_board.wr_date;
            const view_cnt = this.estimate_board.view_cnt;
            axios({
                  url: apiEndpoint_estimate,
                  method: "POST",
                  data: JSON.stringify( {board_id, title, content, writer, wr_date, view_cnt}) //데이터를 json 형식으로 변환
                }).then(res => {
                  console.log(res.data);
                  alert(res);  //결과(보통 성공 메시지)를 알림으로 표시
                }).catch(err => {
                  alert(err);
                });
            console.log("saveData");  
            this.$swal.fire('저장되었습니다!', '', 'success');
        } 
      });
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