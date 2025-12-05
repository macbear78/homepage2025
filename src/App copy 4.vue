<template>
  <v-app>
       
      <h1>DynamoDB 웹 앱</h1>
       <div>
        <h2>데이터 저장</h2>
        <!-- 데이터를 저장하기 위한 입력 필드 -->
        <input type="text" id="id" placeholder="ID"> <!-- 이름 입력 필드-->
        <input type="text" id="name" placeholder="이름"> <!-- 이름 입력 필드-->
        <input type="text" id="message" placeholder="메시지"> <!-- 이름 입력 필드-->
        <v-btn v-on:click="saveData">저장</v-btn>
       </div>
    <div>
        <h2>데이터 조회</h2>
        <!-- 데이터를 저장하기 위한 입력 필드 -->
        <input type="text" id="retrieveId" placeholder="ID"> <!-- 조회할 ID 입력 필드-->
              <v-btn v-on:click="retrieveData">데이터조회</v-btn>
        <p id="result"></p><!-- 데이터 조회 결과를 표시할 단락 -->

        <div v-for="item in posts" :key="item.id" class="border p-3 mb-3 rounded shadow">
        <h2 class="font-bold text-lg">{{ item.title }}</h2>
        <p>{{ item.content }}</p>
         <small class="text-gray-500">{{ item.created_at }}</small>
        <button @click="deletePost(item.id)" class="text-red-500 text-sm mt-2 block">삭제</button>
    </div>

    </div>

  <template v-if="displaySize > 300">
     
    <v-container class="bg-white">
      <v-row
      no-gutters
    >
      <v-col cols="2">
        <v-img
          :width="150"
          aspect-ratio="1/1"
          cover
          src="@/assets/everdome_logo.png"
        ></v-img>
      </v-col>
      <v-col
        cols="8"
        sm="0"
        offset="2"
      >
      <v-menu
          open-on-hover
          top
          offset-y 
        > 
          <template v-slot:activator="{ props }">
            <v-btn
              class="text-none" 
              color="white"
              v-bind="props"
            >
            Discover Everdome v
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in DiscoverSubMenu"
              :key="index"
              :value="index"
              :to="item.path"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu 
          open-on-hover
          top
          offset-y 
        > 
          <template v-slot:activator="{ props }">
            <v-btn
              class="text-none" 
              color="white"
              v-bind="props"
            >
            News v
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in DiscoverSubMenu"
              :key="index"
              :value="index"
              :to="item.path"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn class="text-none">FAQ</v-btn>
        <v-btn class="text-none" :to="estimate_page_path">Contact</v-btn>
        <!-- <v-btn class="text-none" v-on:click="onClickRouter" >Contact</v-btn> -->
        <v-btn class="text-none">Launcher</v-btn>
        <v-btn class="text-none" 
          color="yellow"
        >Create Space</v-btn>
      </v-col> 
    </v-row>


    </v-container>  
  </template>
  <template v-else>
    <v-toolbar app>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar">
        </v-toolbar-side-icon>
      </span>
      <v-toolbar-title>
          {{ appTitle }}
      </v-toolbar-title> 
      <v-spacer></v-spacer>
      <v-img
          :width="150"
          aspect-ratio="1/1"
          cover
          src="@/assets/everdome_logo.png"
        ></v-img>
      <v-toolbar-items class="hidden-xs-only" >
        
        <v-btn class="text-none" 
          color="orange"
        >Create Space</v-btn>
        <v-btn
          color="#000000"
          size="x-large" 
            @click="snackbar = !snackbar"
        >
          <svg-icon v-if="!snackbar" type="mdi" :path="mdiTextPath"></svg-icon>
          <svg-icon v-else type="mdi" :path="mdiCloseThickPath"></svg-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </template>
 
  <v-content>
    <h2>데이터 조회</h2>
        <!-- 데이터를 저장하기 위한 입력 필드 -->
        <input type="text" id="estimateRetrieveId" placeholder="ID"> <!-- 조회할 ID 입력 필드-->
        <v-btn v-on:click="estimateRetrieveData">데이터조회2</v-btn>
        <p id="estimateResult"></p><!-- 데이터 조회 결과를 표시할 단락 -->
    <div>
        <h2>견적문의쓰기</h2>
        <input type="text" id="board_id" placeholder="번호"> 
        <input type="text" id="title" placeholder="제목"> 
        <input type="text" id="content" placeholder="내용"> 
        <input type="text" id="writer" placeholder="글쓴이">
        <input type="text" id="wr_date" placeholder="날짜">
        <input type="text" id="view_cnt" placeholder="조회"> 
        <br>  
        <v-btn v-on:click="saveEstimate">문의저장</v-btn>
        <v-btn v-on:click="saveMultipleDataBatch">테스트용 다량문의저장</v-btn>
       </div>
    <div>
      <v-btn @click="getBoardPagingList" class="btn btn-primary">
         온라인견적리스트 다시읽기
      </v-btn>
      <v-btn v-on:click="fetchItems">21-30데이터읽기</v-btn>
      <v-btn v-on:click="fetchBoardCount">게시글갯수가져오기</v-btn>
       <h2>온라인견적</h2>
       Estimate page
    </div>
  <main class="mt-3">
    <div class="container">
      <div class="float-end mb-1">
        <button type="button" class="btn btn-dark" @click="goToWrite">글쓰기</button>
      </div>
      <p>총 {{ totalEstimateBoards }} 개, {{ totalPages }} 페이지중 {{ currentPage }}페이지</p>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>내용</th>
            <th>글쓴이</th>
            <th>날짜</th>
            <th>조회</th>
          </tr>  
        </thead>
        <tbody>
          <tr :key="i" v-for="(board, i) in boardPagingList">
            <td>{{board.board_id}}</td>
             <td><a @click="fnView(board.board_id);" 
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
      <p>총 게시글 수: {{ boardCount }}</p>
      <p>총 {{ row_num }} 개의 게시물</p>
      <nav aria-label="페이지 네비게이션">
        <ul class="pagination justify-content-center">
          <!-- 이전 버튼 -->
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a class="page-link" href="#" @click.prevent="goToPage(currentPage - 1)">Previous</a>
          </li>

          <!-- 페이지 번호 -->
          <li
            v-for="i in totalPages"
            :key="i"
            class="page-item"
            :class="{ active: i === currentPage }"
          >
            <a class="page-link" href="#" @click.prevent="goToPage(i)">{{ i }}</a>
          </li>

          <!-- 다음 버튼 -->
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <a class="page-link" href="#" @click.prevent="goToPage(currentPage + 1)">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </main>

    <template v-if="!snackbar">
      <v-btn v-on:click="testApiKim">
        11
      </v-btn>
      <router-view/>
    </template>
    <template v-else>



      <v-list >
        <v-list-item
            v-for="item in items"
            :key="item.title"
            dense
            :to="item.path"
            @click="snackbar = !snackbar"
        >
        <v-list-item-content>
            <v-list-title>{{ item.text }}</v-list-title>
        </v-list-item-content>

        </v-list-item>
     </v-list>
 

    </template>    
  
  </v-content>
    
  <footer-componet/>
  </v-app> 
</template>
  

<script setup>
import axios from 'axios';
import FooterComponet from './components/FooterComponet.vue'  
import { computed, ref, onMounted  } from 'vue'  
import { useDisplay } from 'vuetify'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiText, mdiCloseThick } from '@mdi/js'
import router from "@/router";
  // DynamoDB와의 상호작용을 위한 Amazon API GATEWAY
  const  apiEndpoint_items = 'https://828299ds42.execute-api.ap-northeast-2.amazonaws.com/MyWebApp-APIstage/items';
  const  apiEndpoint_estimate = 'https://828299ds42.execute-api.ap-northeast-2.amazonaws.com/MyWebApp-APIstage/estimate';
  const boardPagingList = ref([]);
  const row_num = ref(0);
  row_num.value = 0;
  let currentPage = ref([]);
  currentPage.value = 1;
  let totalPages = ref([]); 
  totalPages.value = 5; // 전체 페이지 수 (나중에 DB 결과에 따라 변경)
  let totalEstimateBoards = ref([]);
  totalEstimateBoards.value = 0; // 전체 견적 게시물 수 (나중에 DB 결과에 따라 변경)
    // 게시글 수를 담을 ref
  const boardCount = ref(0)

  async function loadPosts() {
    //const res = await axios.get('https://api.example.com/posts')
    //posts.value = res.data
    totalEstimateBoards.value=3;
  }

  onMounted(async() => {
    loadPosts(); // ✅ 페이지 로드시 자동 실행
    fetchBoardCount();
    //await fetchPosts();
  })

  function goToPage(page) { 
      if (page < 1 || page > this.totalPages) return;
      this.currentPage = page;
      console.log(`📄 페이지 이동: ${page}`);

      // 실제 데이터 다시 읽기
      loadData(page);
    }
  async function loadData(page) {
      // 예: axios 호출
      console.log(`페이지 ${page} 데이터 로드`);
      // axios.get(`https://api.../items?page=${page}`)
      try {
        const requestCode = "read"
        const limit = 10
        let startId = ((page-1) * limit)+1
        
        const response = await axios.get(
          `https://828299ds42.execute-api.ap-northeast-2.amazonaws.com/MyWebApp-APIstage/estimate?requestCode=${requestCode}&startId=${startId}&limit=${limit}`
        )
        boardPagingList.value = response.data
      } catch (err) { 
        console.error('데이터 가져오기 실패:', err)
      }
  }

  const saveData = async()=> {

    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    if (!id || !name || !message) {
      alert("모든 필드를 입력해주세요.");
      return;
    }
    axios({
              url: apiEndpoint_items,
              method: "POST",
              data: JSON.stringify( {id, name, message}) //데이터를 json 형식으로 변환
            }).then(res => {

              console.log(res.data);
              alert(res);  //결과(보통 성공 메시지)를 알림으로 표시
            }).catch(err => {
              alert(err);
            });
        console.log("saveData"); 
       
  }

  async function saveMultipleDataBatch() {
    const batchSize = 10; // 한 번에 10개씩
    const total = 1000; 

    for (let i = 0; i < total; i += batchSize) {
      const batch = [];
      for (let j = 0; j < batchSize && i + j < total; j++) {
        const idx = i + j + 1;
        const board_group = 'estimate_request';
        const board_id = idx;
        const title = `title-${idx}`;
        const content = `content-${idx}`; 
        const writer = `writer-${idx}`;
        const wr_date = `writer-${idx}`;
        const view_cnt = 10;
        batch.push(axios.post(apiEndpoint_estimate, { board_group, board_id, title, content, writer, wr_date, view_cnt}));
        
      }

      await Promise.all(batch);
      console.log(`✅ ${i + batch.length}/${total} 완료`);
      await new Promise(r => setTimeout(r, 1000)); // 1초 대기 (API 과부하 방지)
    }

    alert("1000개 배치 저장 완료!");
  }



  const retrieveData = async()=> {
  const id = document.getElementById('retrieveId').value;
            axios({
                      url: `${apiEndpoint_items}?id=${id}`,
                      method: "GET",
                      data: {
                        boardnum: 10,

                      },
            }).then(res => {

                      console.log(res.data);
                      const resdata = res.data;
                      document.getElementById('result').textContent = JSON.stringify(resdata); //결과 표시
                      
            }).catch(err => {
                      alert(err);
            });
            console.log("retrieveData");
            
          }

  const saveEstimate = async()=> {
            const value = document.getElementById('board_id').value;
            const board_id = parseInt(value);  // 문자열 → 정수
            const title = document.getElementById('title').value;
            const content = document.getElementById('content').value;
            const writer = document.getElementById('writer').value;
            const wr_date = document.getElementById('wr_date').value;
            const value2 = document.getElementById('view_cnt').value;
            const view_cnt = parseInt(value2);  // 문자열 → 정수
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
              
  }
          
  const estimateRetrieveData = async()=> {
            const id = document.getElementById('estimateRetrieveId').value;
            axios({ 
                  url: `${apiEndpoint_estimate}?board_id=${id}`,
                  method: "GET",
                  data: {
                    boardnum: 10,

                  },
                }).then(res => {
                  //alert(res.data.message);
                  console.log(res.data);
                  const resdata = res.data;
                  document.getElementById('estimateResult').textContent = JSON.stringify(resdata); //결과 표시
                }).catch(err => {
                  alert(err);
                });
            console.log("retrieveData");
           
  }

          // var boardPagingList = 
          // [
          //   {board_id:1, title:'kim', content:'kim', writer:'kim', wr_date:'2023-12-01', view_cnt:1}, 
          //   {board_id:2, title:'kim', content:'kim', writer:'kim', wr_date:'2023-12-01', view_cnt:1}
            
          // ] ;

 
  const getBoardPagingList = async()=> {
              
          axios({
                url: `${apiEndpoint_estimate}`,
                method: "GET",
              }).then(res => {
                //alert(res.data.message);
                console.log(res.data);
                //const resdata = res.data;
                boardPagingList.value = res.data; // 테이블이 자동 갱신됨
                row_num.value = boardPagingList.value.length;
                //document.getElementById('estimateResult').textContent = JSON.stringify(boardPagingList); //결과 표시
              }).catch(err => { 
                alert(err);
              });
          console.log("getBoardPagingList 완료");                         
  }



// 페이지 로드 시 실행
const fetchBoardCount = async () => {
  try {
    const requestCode = "getBoardCount"
    const response = await axios.get(`https://828299ds42.execute-api.ap-northeast-2.amazonaws.com/MyWebApp-APIstage/estimate?requestCode=${requestCode}`)
    boardCount.value = response.data.count
  } catch (error) {
    console.error('게시글 수 가져오기 실패:', error)
  }
}
  

  const fetchItems = async () => {
      try {
        const requestCode = "read"
        const startId = 21
        const limit = 10
        const response = await axios.get(
          `https://828299ds42.execute-api.ap-northeast-2.amazonaws.com/MyWebApp-APIstage/estimate?requestCode=${requestCode}&startId=${startId}&limit=${limit}`
        )
        boardPagingList.value = response.data
      } catch (err) { 
        console.error('데이터 가져오기 실패:', err)
      }
    }
    //21-30데이터읽기
  // const fetchPosts = async (key = null) => {
  //   const params = { limit: 3 };
  //   if (key) params.lastKey = key;
    
  //   const res = await axios.get(apiEndpoint_estimate, { params });
   
  //   boardPagingList.value = res.data.items;
  //   currentKey.value = res.data.lastKey;

  //   console.log(params); 
  // };

  // const loadNextPage = () => {
  //   //if (currentKey.value) fetchPosts(currentKey.value);
  //   fetchPosts();
  // };    
                  
  
  const testApiKim = async()=> {
            //await this.$api("/api/insertboard",{test:10});
            axios({
                  url: "http://localhost:3000/api/testApiKim",
                  method: "POST",
                  data: {
                    boardnum: 10,

                  },
                }).then(res => {
                  //alert(res.data.message);
                  console.log(res.data);
                  window.history.back(); 
                }).catch(err => {
                  alert(err);
                });
            console.log("test");
  }

  function fnView(board_id) {
      router.push({path:'/EstimateDetailPage', query:{board_id:board_id}}); 
      
  }

  function goToWrite() {
    router.push({path:'/EstimateWritePage'});  
  }
  
        const mdiTextPath = ref(mdiText) 
        const mdiCloseThickPath = ref(mdiCloseThick)
        const snackbar = ref(false)
        const { name } = useDisplay()
        const displaySize = computed(() => {
          // name is reactive and
          // must use .value
          switch (name.value) { 
            case 'xs': return 220
            case 'sm': return 400
            case 'md': return 500
            case 'lg': return 600
            case 'xl': return 800
            case 'xxl': return 1200
          }
          return undefined
        })
        const items = [
              { text: 'Real-Time', icon: 'mdi-clock'  ,path: '/test'},
              { text: 'Audience', icon: 'mdi-account',path: '/test' },
              { text: 'Conversions', icon: 'mdi-flag',path: '/test' },
        ]
        const DiscoverSubMenu = [
              { title: 'Create in Metaverse', path: '/CreateInMetaversePage'},
              { title: 'Explore Spaces', path: '/test'},
              { title: 'Digital World', path: '/test'}
        ] 
        const estimate_page_path = '/EstimateListPage'
  
        // const onClickRouter = (state) => {
        //     router.push({ name: "EstimatePage", state: { isDetailsOpen: state } });
        // };
</script>
  
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

<style scoped>
.pagination .page-link {
  cursor: pointer;
}
</style>






 