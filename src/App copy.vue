<template>
  
  <v-app>

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
      <v-toolbar-items class="hidden-xs-only" >
        <v-menu   
          open-on-hover 
          top
          offset-y 
        >
          <template v-slot:activator="{ props }">
            <v-btn
              class="text-none" 
              color="primary"
              v-bind="props"
            >
            Discover Everdome 
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
        <v-btn
          class="text-none"   
        >

          bb
        </v-btn>
        <v-btn
          class="text-none"  
        >
          cc
        </v-btn>

      </v-toolbar-items>
    </v-toolbar>
    
    <v-content>
      <v-container>
      <div class="text-center">
        <v-menu
          open-on-hover
          top
          offset-y 
        >
          <template v-slot:activator="{ props }">
            <v-btn
              class="text-none" 
              color="primary"
              v-bind="props"
            >
              Activator slot
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              :value="index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-container>
    <router-view/>
    </v-content>
    
  </v-app>

</template>
  
  <script>

  export default {
    name: 'App',
    data(){
      return {
        appTitle: 'Awesome App',
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
