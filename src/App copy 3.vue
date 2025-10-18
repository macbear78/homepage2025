<template>
  <v-app>
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
  </template>
  <template v-else>
    <v-toolbar app>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar">
        </v-toolbar-side-icon>
      </span>
      <v-toolbar-title>
        <!-- <router-link to="/" tag="span" style="cursor: pointer"> -->
          {{ appTitle }}
        <!-- </router-link> -->
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
        <!-- <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}  
        </v-btn> -->
      </v-toolbar-items>
    </v-toolbar>


  </template>

  <div :class="displaySize">
    <p>대문자로 변환된 문장: "{{ displaySize }}"</p>
  </div> 
  <template v-if="displaySize > 300">
   <h1>Title</h1>
   <p>Paragraph 1</p>
   <p>Paragraph 2</p> 
  </template>
  <v-btn color="#000000"
    @click="snackbar = !snackbar"
   >  
    <svg-icon v-if="!snackbar" type="mdi" :path="mdiTextPath"></svg-icon>
    <svg-icon v-else type="mdi" :path="mdiCloseThickPath"></svg-icon>
  </v-btn>
  <v-sheet
      class="position-relative"
      min-height="100"
    />
    <v-sheet
      class="position-relative"
      min-height="100"
    >
      <div class="position-absolute d-flex align-center justify-center w-100 h-100">
        <v-btn
          color="#000000"
          size="x-large" 
            @click="snackbar = !snackbar"
        >
          <svg-icon type="mdi" :path="mdiTextPath"></svg-icon>
        </v-btn>
      </div>
      <v-snackbar
        v-model="snackbar"
        location="center"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!

        <template v-slot:actions>
          <v-btn @click="toggleOnClick">Close</v-btn>
        </template>
      </v-snackbar> 
    </v-sheet>

  <v-content>
    <template v-if="!snackbar">
      <router-view/>
    </template>
    <template v-else>

    </template>    
  
  </v-content>
    

  </v-app>
</template>
  

<script setup>
  import { computed, ref } from 'vue'  
  import { useDisplay } from 'vuetify'
  import SvgIcon from '@jamescoyle/vue-icon'
  import { mdiText, mdiCloseThick } from '@mdi/js'

  const mdiTextPath = ref(mdiText) 
  const mdiCloseThickPath = ref(mdiCloseThick)
  const snackbar = ref(false)
  function toggleOnClick () {
    snackbar.value = false
  }
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






 