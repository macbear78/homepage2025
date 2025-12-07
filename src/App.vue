<template>
  <v-app>
    <div v-if="pc_mode">
  <header-componet :bgStyle="headerBgType" />
  </div>
  <div v-else>
    <header-componet2/>
  </div>
  <router-view/>
  <footer-componet/>
  </v-app>   
</template> 

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import HeaderComponet from './components/HeaderComponet.vue' 
import HeaderComponet2 from './components/HeaderComponet2.vue'
import FooterComponet from './components/FooterComponet.vue'

import router from './router';
const route = useRoute()

const headerBgType = computed(() => route.meta.bgStyle || 'default')

// PC / Mobile 모드 판별
const pc_mode = ref(window.innerWidth >= 1024)

const checkScreen = () => {
  pc_mode.value = window.innerWidth >= 1024
}

onMounted(() => {
  router.push({ path: '/main' })
  window.addEventListener('resize', checkScreen)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreen)
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
  





  