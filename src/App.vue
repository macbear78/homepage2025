<template>
  <v-app>
  <header-componet/>
  <router-view/>
<div>
    <Title1Component />
    <Title2Component />
    <TitleSub1Component/>
    <TitleSub2Component/>
    <TitleSub3Component/>
    <TitleSub4Component/> 
  </div>
  <footer-componet/>
  </v-app>   
</template> 

<script setup>
import HeaderComponet from './components/HeaderComponet.vue' 
import FooterComponet from './components/FooterComponet.vue'
import Title1Component from './components/Title1Component.vue';
import Title2Component from './components/Title2Component.vue';
import TitleSub1Component from './components/TitleSub1Component.vue';
import TitleSub2Component from './components/TitleSub2Component.vue';
import TitleSub3Component from './components/TitleSub3Component.vue';
import TitleSub4Component from './components/TitleSub4Component.vue';

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
  





  