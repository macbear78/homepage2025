<template>
  
  <v-app>
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
        <v-btn class="text-none">Web3</v-btn>
        <v-btn class="text-none">About Everdome</v-btn>
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
        <v-btn class="text-none">Contact</v-btn>
        <v-btn class="text-none">Launcher</v-btn>
        <v-btn class="text-none" 
          color="yellow"
        >Create Space</v-btn>
      </v-col>
    </v-row>


    </v-container>
      


    <v-content>
      <div id="displaySizeChk">
        <p>대문자로 변환된 문장: "{{ testkim }}"</p>
        <p>대문자로 변환된 문장: "{{ displaySize }}"</p>
      </div> 
      
    <router-view/>
    </v-content>
    
  </v-app>

</template>
  

<script>
  // import HelloWorld from './components/HelloWorld.vue'  <-- Vue 프로젝트 생성 시 존재하는 기본 코드 제거
  import { useDisplay } from 'vuetify';
  export default {
    name: 'App',
    data(){
      return {
        appTitle: 'Awesome App',
        testkim: useDisplay(),
        sidebar: false,
        menuItems: [
            { title: 'Discover Everdome', path: '/home', icon: 'home' },
            { title: 'Sign Up', path: '/signup', icon: 'face' },
            { title: 'Sign In', path: '/signin', icon: 'lock_open' }
        ],
        DiscoverSubMenu:[
            { title: 'Create in Metaverse', path: '/test'},
            { title: 'Explore Spaces', path: '/test'},
            { title: 'Digital World', path: '/test'}
        ], 
        items: [
          { title: 'Click Me' },
          { title: 'Click Me' },
          { title: 'Click Me' },
          { title: 'Click Me 2' },
        ],
      } 
    },
    created() {
  
    },
    computed: {
      displaySize: function() {
        switch (this.testkim.value) {
          case 'xs':
            return 'xss';
          case 'sm':
            return 'sm';
          case 'md':
            return 'md';
          case 'lg':
            return 'lg';
          case 'xl':
            return 'xl';
        }
        return undefined;
      }
    },
  }
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
 