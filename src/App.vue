<template>
  <v-app>
  <header-componet :bgStyle="headerBgType" />
  <router-view/>
  <footer-componet/>
  </v-app>   
</template> 

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import HeaderComponet from './components/HeaderComponet.vue' 
import FooterComponet from './components/FooterComponet.vue'

import router from './router';
const route = useRoute()

const headerBgType = computed(() => route.meta.bgStyle || 'default')


onMounted(() => {
  router.push({path:'/AboutCompany'});
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
  





  