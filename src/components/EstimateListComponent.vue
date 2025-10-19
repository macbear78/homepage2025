<template>
    <div>
        <button type="button" class="btn btn-primary">Primary</button>
       <h2>온라인견적</h2>
    </div>

  <main class="mt-3">
    <div class="container">
      <div class="float-end mb-1">
        <button type="button" class="btn btn-dark" @click="goToWrite">글쓰기</button>
      </div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>번호1</th>
            <th>제목</th>
            <th>글쓴이</th>
            <th>내용</th>
            <th>날짜</th>
            <th>조회</th>
          </tr>  
        </thead>
        <tbody>
          <tr :key="i" v-for="(board, i) in boardPagingList">
            <td>{{board.board_num}}</td>
             <td><a @click="fnView(board.board_num);" 
              style="
              color: orange;
              font-size: 2.0em;
              font-weight: bold;
              background: #efefef;
              cursor:pointer;
               "
              onmouseover="this.style.color='#0F0'"
              onmouseout="this.style.color='#00F'"
              >{{board.title}}</a></td>
            <td>{{board.content}}</td>
            <td>{{board.writer}}</td>
            <td>{{board.wr_date}}</td> 
            <td>{{board.view_cnt}}</td>
          </tr> 
        </tbody>
      </table>
      <nav aria-label="...">
      <ul class="pagination">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1">Previous</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item active">
          <a class="page-link" href="#">2 <span class="sr-only"></span></a>
        </li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>

    <p>{{this.row_num}}</p>

    </div>
  </main>

</template>

<script setup>

</script>


<script>

export default {
  data() {
    return {
      boardList: [],
      boardPagingList: [],
      row_num : 0,
      list_num : 10, //paging:한 페이지당 데이터 개수
      start_rou_num : 10,
    };
  },
  mounted() {
    //this.fnGetList()
  },
  created() {
    // this.getBoardList().then(
    //   console.log
    // );
    this.getBoardPagingList();
  },
  methods: {
    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    async getBoardList() {
      this.boardList = await this.$api("/api/testApiKim",{});
      console.log(this.boardList);
      this.row_num = this.boardList.length; 
      //console.log(this.row_num);
      return(this.boardList.length);
    },
    async getBoardPagingList() {
      this.boardPagingList = await this.$api("/api/getBoardPagingList",{param:[this.start_rou_num]});
      console.log(this.boardPagingList);
      this.row_num = this.boardPagingList.length; 
      //console.log(this.row_num);
      return(this.boardPagingList.length);
    },
    goToWrite() {
     this.$router.push({path:'/EstimateWritePage'});  
    },

    fnView(board_id) {
      this.$router.push({path:'/EstimateDetailPage', query:{board_id:board_id}}); 
    },

    
    // const promise = Promise(resolve, reject) => {
    //   /*
    //   비공기 작업 성공시 resolve()를 호출하고,
    //   비동기 작업 실패시 reject()를 호출하도록 구현한다.
    //   */
    // },
    
    // promise.then(
    //   //resolve가 호출되면 then이 실행

    // )
    // .catch(
    //    //reject가 호출되면 catch가 실행
    // )
    // .finally(
    //   //콜백 작업을 마치면 무조건 실행되는 finally (생략가능)
    // )
    
   /*
    $sql="select * from board order by regdate DESC limit $start, $list_num;";
   */


  }
} 

</script>

