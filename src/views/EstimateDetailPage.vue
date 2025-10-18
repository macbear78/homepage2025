<template>
    <main class="mt-3">
      <div class="container">
        <h2 class="text-center">견적 및 질의응답</h2>  
       
          <div class="mb-3 row">
            <label class="col-md-3 col-form-label">제목</label>   
            <p>{{this.estimateDetail?.title}}</p>
          </div>
          <div class="mb-3 row">
            <label class="col-md-3 col-form-label">내용</label>
            <div class="col-md-9">
              <p>{{estimateDetail?.content}}</p>
            </div>
          </div> 
          <div class="mb-3 row">
            <label class="col-md-3 col-form-label">작성자</label>
            <div class="col-md-9">
              <p>{{estimateDetail?.writer}}</p>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-md-3 col-form-label">작성날짜</label>
            <div class="col-md-9">
              <p>{{estimateDetail?.wr_date}}</p>
            </div>
          </div>
          <div class="mb-3 row">
          <div class="col-6 d-grid p-1">
            <button type="button" class="btn btn-lg btn-dark" @click="goToList">목록</button>
          </div>
          <div class="col-6 d-grid p-1">
            <button type="button" class="btn btn-lg btn-danger" @click="goToUpdate(this.board_id)">수정</button>
          </div>
        </div>

     
      </div>
    </main>
  </template>
  
  <script setup>
  
  
  
  
  </script>
  
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        board_id: 0,
        estimateDetail: []
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
        //if(estimateDetail.length > 0) {
        //  this.estimateDetail = estimateDetail[0];
        //}
        const  apiEndpoint_estimate = 'https://828299ds42.execute-api.ap-northeast-2.amazonaws.com/MyWebApp-APIstage/estimate';
        
           
            //const board_id = 1;  // 문자열 → 정수 
            await axios({
                  url: `${apiEndpoint_estimate}?board_id=${this.board_id}`, 
                  method: "GET",
                  data: {
                    boardnum: 10,

                  },
                }).then(res => {
                  //alert(res.data);
                  console.log(res.data[0]);
                  const resdata = res.data[0];
                  console.log(resdata);
                  this.estimateDetail = resdata;
                  //document.getElementById('result').textContent = JSON.stringify(resdata); //결과 표시
                  //document.getElementById('result').textContent = "kimtaehoon"; //결과 표시
                }).catch(err => {
                  alert(err);
                });
            console.log("retrieveData");
           
          
        console.log(this.estimateDetail);
      },
      goToList() {
       this.$router.push({path:'/EstimateListPage'}); 
      },
      goToUpdate(board_id) {
       this.$router.push({path:'/EstimateUpdatePage', query:{board_id:board_id}}); 
      },
       
  
    }
  }
  </script>
  
  <style scoped>

  </style>