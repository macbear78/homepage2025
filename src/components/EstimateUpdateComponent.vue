<template>
    <main class="mt-3">
      <div class="container">
        <h2 class="text-center">견적 및 질의응답</h2>  
        <div class="mb-3 row">
          <label class="col-md-3 col-form-label">제목</label>
          <div class="col-md-9">
            <input type="text" class="form-control" v-model="estimateUpdate.title">
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-md-3 col-form-label">내용</label>
          <div class="col-md-9">
            <div class="input-group mb-3">
              <v-textarea
                 class="form-control"  
                 label="Content"
                 v-model="estimateUpdate.content">
                </v-textarea>
            </div>
          </div>
        </div> 
        <div class="mb-3 row">
          <label class="col-md-3 col-form-label">작성자</label>
          <div class="col-md-9">
            <div class="input-group mb-3">
              <input type="text" class="form-control" v-model="estimateUpdate.writer">
            </div>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-md-3 col-form-label">작성날짜</label>
          <div class="col-md-9">
            <div class="input-group mb-3">
              <input type="text" class="form-control" v-model="estimateUpdate.wr_date">
            </div>
          </div>
        </div> 
  
        <div class="mb-3 row">
          <div class="col-6 d-grid p-1">
            <button type="button" class="btn btn-lg btn-dark" @click="goToDetail(this.board_id)">취소하기</button>
          </div>
          <div class="col-6 d-grid p-1">
            <button type="button" class="btn btn-lg btn-danger" @click="EstimateUpdate">저장하기</button>
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
        estimateUpdate:{
        title : "",
        content : "",
        writer : "",
        wr_date : "",
        },
        get_estimate_board: {
        }
      };
    },
    computed: {
  
    },
    created() {
       this.board_id = this.$route.query.board_id;
       this.getEstimateDetail();
    },
    mounted() {
  
    },
    methods: {
       async getEstimateDetail() {
        //let estimateDetail = await this.$api("api/estimateDetail",{param:[this.board_id]});
        
        axios({ 
            url: `${apiEndpoint_estimate}?board_id=${this.board_id}`,
            method: "GET",
            data: {
              boardnum: 10,

            },
          }).then(res => {
            //alert(res.data.message);
            console.log(res.data);
            let estimateDetail = res.data;
            if(estimateDetail.length > 0) {
              this.get_estimate_board = estimateDetail[0];
              this.estimateUpdate.title = this.get_estimate_board.title;
              this.estimateUpdate.content = this.get_estimate_board.content;
              this.estimateUpdate.writer = this.get_estimate_board.writer;
              this.estimateUpdate.wr_date = this.get_estimate_board.wr_date;
              this.estimateUpdate.view_cnt = this.get_estimate_board.view_cnt;
            }
        else {
            console.log('aa');
            
        }
          }).catch(err => {
            alert(err);
          });
        console.log("retrieveData");
        
        

        //console.log(this.estimateDetail.title);
      },
      goToDetail(board_id) {
       this.$router.push({path:'/EstimateDetailPage', query:{board_id:board_id}}); 
      },
      EstimateUpdate() {
        this.$swal.fire({
          title: '정말 수정 하시겠습니까?',
          showCancelButton: true,
          confirmButtonText: `생성`,
          cancelButtonText: `취소`
        }).then(async (result) => {
          if (result.isConfirmed) {
            //this.$api("/api/estimateUpdate",{param:[this.estimateUpdate],where:[this.board_id]});    
            const board_id = parseInt(this.board_id);
            const title = this.estimateUpdate.title;
            const content = this.estimateUpdate.content;
            const writer = this.estimateUpdate.writer;
            const wr_date = this.estimateUpdate.wr_date;
            const view_cnt = parseInt(this.estimateUpdate.view_cnt);
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
            
            this.$swal.fire('수정되었습니다!', '', 'success');
            //this.$router.push({path:'/EstimateListPage'});
          } 
        });
      },
      
       
  
    }
  }
  </script>
  
  <style scoped>
      .tbAdd td textarea{width:100%; min-height:300px; padding:10px; box-sizing:border-box;}
  </style>