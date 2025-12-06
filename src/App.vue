<template>
  <v-app>
  <header-componet/>

  <router-view/>
  <footer-componet/>
  </v-app>   
</template> 

<script setup>
import { onMounted } from 'vue'
import HeaderComponet from './components/HeaderComponet.vue'
 
import FooterComponet from './components/FooterComponet.vue'

import router from './router';

onMounted(() => {
  //router.push({path:'/main'});
  router.push({path:'/News/NewsCardList'});
})

</script>

<style scoped>
.container {
  max-width: 1200px;
}

/* 메뉴 hover 시 부드럽게 */
.group:hover span {
  color: #2dd4bf;
  transition: color 0.3s;
}
</style>
  





  