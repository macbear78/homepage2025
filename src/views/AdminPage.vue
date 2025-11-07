<template>
    <div>
        <h1>관리자페이지</h1>
    </div>
    <div>
        <MyButton label="버튼 클릭" @clicked="onClicked" />
        <p>버튼 상태: {{ active ? '활성화됨' : '비활성화됨' }}</p>
    </div>
    <router-view></router-view>
</template>

<script setup>
import { ref, computed, onMounted  } from 'vue' 
import router from "@/router";
import MyButton from "@/components/myComponents/MyButtonComponent.vue"

const active = ref(false)

const onClicked = (state) => {
  active.value = state

  if(active.value){
    console.log("활성화됨")
    router.push({path:'/Admin/NewsboardWrite'});
  }else{
    console.log("비활성화됨")
    router.push({path:'/Admin/AdminMain'});
  }
}

onMounted(async() => {
    router.push({path:'/Admin/AdminMain'});
})


</script>
  
<style scoped>



</style>
