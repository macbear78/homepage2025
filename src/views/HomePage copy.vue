<template>
  <div class="wrap">
    <div class="text">
      안녕 반응형 참 쉽쥬?
    </div>
  </div>
</template>

<script>
import axios from 'axios';


//const HOST = "";

export default {
    name: 'homePage', 
    data() {
      return {
        message: '', 
        number: '',
        product: {
          product_name: "",
          product_price: 0,
          delivery_price: 0,
          add_delivery_price: 0,
          tags: "",
          outbound_days: 0,
          category_id: 1,
          seller_id: 1
        },
        categoryList: [],
        category1:[],
        category2:[],
        category3:[],
        cate1: "",
        cate2: "",
        cate3: ""
        };
  },
  methods: {
    // async productInsert() {
    //   let saveData = {};
    //   saveData.title = "axios POST request";
    //   saveData.index = 0;
    //   if(this.product.product_name == "") {
    //     return this.$swal("제품명은 필수 입력값입니다.");
    //   }

    //   if(this.product.product_price == "" || this.product.product_price == 0) {
    //     return this.$swal("제품 가격을 입력하세요.");
    //   }

    //   if(this.product.delivery_price == "" || this.product.delivery_price == 0) {
    //     return this.$swal("배송료를 입력하세요.");
    //   }

    //   if(this.product.outbound_days == "" || this.product.outbound_days == 0) {
    //     return this.$swal("출고일을 입력하세요.");
    //   }

    //   // this.product.category_id = this.categoryList.filter(c => {
    //   //   return (c.category1 == this.cate1 && c.category2 == this.cate2 && c.category3 == this.cate3);
    //   // })[0].id;

    //   // console.log(this.product.category_id);

    //   // this.$swal.fire({
    //   //   title: '정말 등록 하시겠습니까?',
    //   //   showCancelButton: true,
    //   //   confirmButtonText: `생성`,
    //   //   cancelButtonText: `취소`
    //   // }).then(async (result) => {
    //   //   if (result.isConfirmed) {



    //       //await this.$api("/api/productInsert",{param:[this.product]});
    //       //await postData();
    //           await this.$axios
    //             .post(HOST + "/api/postData", JSON.stringify(saveData))
    //             .then((res) => {
    //               console.log(res.staus);
    //               console.log(res.data);
    //             }) 



    //   //   .catch((error) => {
    //   //     console.log(error);
    //   //   })
    //   //   .finally(() => {
    //   //     console.log("항상 마지막에 실행");
    //   //   });
    //   //     this.$swal.fire('저장되었습니다!', '', 'success');
    //   //     //this.$router.push({path:'/sales'});
    //   //   } 
    //   // });
    // },

    // async clickTest(){
    //   let saveData = {};
    //   saveData.title = "axios POST request";
    //   saveData.index = 0;
    //   //this.$cookies.remove('user');
    //   alert("aa"); 
    //   await this.$api("/api/insertvisit",{param: [{email:saveData.title, nickname:saveData.index}]} 
    //   );   
    // },
    // sendkim(){
    //   // axios({
    //   //   url: "http:"
    //   // })
    // },
    async sendkim() {
      //alert("입력한 값은 " + this.message + " 입니다.");
      await axios({
        // url: "https://09d7ff62-f265-49eb-ae0b-92763cdc4c7a.mock.pstmn.io/api/insertboard",
        url: "http://localhost:3000/api/insertvisit",
        method: "GET",
        data: {
          number: "11",
        },
      }).
      then(res => { 
         console.log(res);
      })
    },




  },//methods

}
</script>

<style lang="scss" scoped>
@import '../styles/kimstyle.scss';
</style>