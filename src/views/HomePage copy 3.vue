<template>

  <v-carousel>
  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    cover
  ></v-carousel-item>
</v-carousel>
<p>Out Awards</p>

<div class="child01">  
    <a href="/test">
       <div class="img">
        <v-img
          :width="80"
          aspect-ratio="1/1"
          cover 
          src="@/assets/baner01.png"
        ></v-img>
      </div>

     </a>
   </div> 
<v-container class="bg-white">
    <v-row
      no-gutters
    >
     <v-img :src="images[imageIndex]" @click="changeImage" />

     
    </v-row>
    <v-btn
     @click="changeImage">
     
    </v-btn>
    <button v-on:click="goToPage('/test')">
         <img src="@/assets/baner01.png"/>
    </button> 
</v-container> 
<v-container class="bg-white">
    <v-row
      no-gutters
    >
     <v-col>
      <v-hover v-slot="{ isHovering, props }">
      <v-img
          :width="80"
          aspect-ratio="1/1"
          cover 
          src="@/assets/baner01.png"
          :class="{ 'on-hover': isHovering }"
          :elevation="isHovering ? 12 : 2"
          v-bind="props"
        ></v-img>
     </v-hover>
    </v-col>
    <v-col>
      <v-hover v-slot="{ isHovering, props }">
      <v-img
          :width="80"
          aspect-ratio="1/1"
          cover
          src="@/assets/baner02.png"
          :class="{ 'on-hover': isHovering }"
          :elevation="isHovering ? 12 : 2"
          v-bind="props"
          @click="showImage"  
        ></v-img>
      </v-hover>
    </v-col>
    <v-col>
      <v-img
          :width="80"
          aspect-ratio="1/1"
          cover
          src="@/assets/baner03.png"
        ></v-img>
    </v-col>
    <v-col>
      <v-img
          :width="80"
          aspect-ratio="1/1"
          cover
          src="@/assets/baner04.png"
        ></v-img>
    </v-col>
    <v-col>
      <v-img
          :width="80"
          aspect-ratio="1/1"
          cover
          src="@/assets/baner05.png"
        ></v-img>
    </v-col>
    <v-col>
      <v-img
          :width="80"
          aspect-ratio="1/1"
          cover
          src="@/assets/baner06.png"
        ></v-img>
    </v-col>
    <v-col>
      <v-img
          :width="80"
          aspect-ratio="1/1"
          cover
          src="@/assets/baner07.png"
        ></v-img>
    </v-col>
  </v-row>


  <v-row class="flex-child text-subtitle-2">
      <v-col
        class="d-flex"
        cols="12"
        md="4"
      >
        <v-sheet
          class="d-flex"
          color="grey-lighten-3"
          height="424"
        >
          <sheet-footer>
            #1: (3r x 2c)
          </sheet-footer>
        </v-sheet>
      </v-col>

      <v-col
        class="d-flex"
        cols="12"
        md="4"
      >
        <v-row class="ma-n3">
          <v-col cols="6">
            <v-sheet
              class="d-flex"
              color="green-lighten-3"
              height="150"
            >
              <sheet-footer>
                #2: (1r x 1c)
              </sheet-footer>
            </v-sheet>
          </v-col>

          <v-col cols="6">
            <v-sheet
              class="d-flex"
              color="yellow-lighten-3"
              height="150"
            >
              <sheet-footer>
                #3: (1r x 1c)
              </sheet-footer>
            </v-sheet>
          </v-col>

          <v-col cols="12">
            <v-sheet
              class="d-flex"
              color="red-lighten-3"
              height="250"
            >
              <sheet-footer>
                #5: (2r x 2c)
              </sheet-footer>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>

      <v-col
        cols="6"
        md="2"
      >
        <v-sheet
          class="d-flex"
          color="teal-lighten-3"
          height="300"
        >
          <sheet-footer>
            #4: (2r x 1c)
          </sheet-footer>
        </v-sheet>
      </v-col>

      <v-col
        class="d-flex"
        cols="6"
        md="2"
      >
        <v-sheet
          class="d-flex mt-auto"
          color="purple-lighten-3"
          height="300"
        >
          <sheet-footer>
            #6: (2r x 1c)
          </sheet-footer>
        </v-sheet>
      </v-col>
    </v-row>
</v-container>
<v-sheet
    border="lg opacity-12"
    class="text-body-2 mx-auto"
    max-width="550"
  >
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="3">
          <v-img height="88" src="https://cdn.vuetifyjs.com/docs/images/graphics/img-placeholder.png" cover></v-img>
        </v-col>

        <v-col cols="12" md="9">
          <p class="mb-4">
            This is part of our <a href="#">Most Comprehenseive Guide to Referral Programs</a> > <a href="#">Do I Need A Referral Program?</a> section. You may enjoy other related articles:
          </p>

          <ul class="ps-4 mb-6">
            <li>
              <a href="#">5 Ways to See if Referral Programs Can Work for You</a>
            </li>
            <li>
              <a href="#">The 6 Key Benefits of Referral Marketing</a>
            </li>
            <li>
              <a href="#">Leading Indicators of Referral Program Success</a>
            </li>
            <li>
              <a href="#">Debunking the Top 5 Worst Referral Program Myths</a>
            </li>
          </ul>

          <v-btn
            class="text-none"
            color="info"
            rounded="0"
            variant="flat"
            block
          >
            <span class="hidden-sm-and-down">
              Explore our 38+ Referral Program Resources
            </span>

            <span class="hidden-md-and-up">
              Explore Referral Resources
            </span> 
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
  <p>{{kim_str}}</p>
  <button @click="count++">1 추가</button>
<p>숫자 값은: {{ count }}</p>
<button @click="imageIndex=(imageIndex + 1) % 2">1 추가</button>
<p>숫자 값은: {{ imageIndex }}</p>

<p>Our Users</p>
<h1>A Better Digital Future For All</h1>
<p>Everdome builds the foundations for a better digital future accessible to everyone.</p>

<v-container class="pa-4 text-center">
    <v-row
      align="center"
      class="fill-height"
      justify="center"
    >
      <template v-for="(item, i) in cardItems" :key="i">
        <v-col
          cols="12"
          md="3"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              :class="{ 'on-hover': isHovering }"
              :elevation="isHovering ? 12 : 2"
              v-bind="props"
            >
              <v-img
                :src="item.img"
                height="225px"
                cover
              >
                <v-card-title class="text-h6 text-white d-flex flex-column">
                  <p class="mt-4">
                    {{ item.title }}
                  </p>

                  <div>
                    <p class="ma-0 text-body-1 font-weight-bold">
                      {{ item.text }}
                    </p>
                    <p class="text-caption font-weight-medium">
                      {{ item.subtext }}
                    </p>
                  </div>
                </v-card-title>
                <div class="align-self-center">
                  <v-btn
                    v-for="(icon, index) in cardIcons"
                    :key="index"
                    :class="{ 'show-btns': isHovering }"
                    :color="cardTransparent"
                    :icon="icon"
                    variant="text"
                  ></v-btn>
                </div>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-container>
  <v-card
    class="mx-auto text-white"
    color="#26c6da"
    max-width="400"
    prepend-icon="mdi-twitter"
    title="Twitter"
  >
    <template v-slot:prepend>
      <v-icon size="x-large"></v-icon>
    </template>

    <v-card-text class="text-h5 py-2">
      "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
    </v-card-text>

    <v-card-actions>
      <v-list-item class="w-100">
        <template v-slot:prepend>
          <v-avatar
            color="grey-darken-3"
            image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-avatar>
        </template>

        <v-list-item-title>Evan You</v-list-item-title>

        <v-list-item-subtitle>Vue Creator</v-list-item-subtitle>

        <template v-slot:append>
          <div class="justify-self-end">
            <v-icon class="me-1" icon="mdi-heart"></v-icon>
            <span class="subheading me-2">256</span>
            <span class="me-1">·</span>
            <v-icon class="me-1" icon="mdi-share-variant"></v-icon>
            <span class="subheading">45</span>
          </div> 
        </template>
      </v-list-item>
    </v-card-actions>
  </v-card>



</template>

<script setup>
import { ref } from 'vue' 
const kim_str = "kimtaehoon"
const images = [
                    "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
                    "https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
                ]
let imageIndex = ref(0)
const changeImage = () => {
  imageIndex.value = (imageIndex.value+1)%2
          
}
const count = ref(0) 
const cardIcons = ['mdi-rewind', 'mdi-play', 'mdi-fast-forward']
const cardItems = [
        {
          title: 'New Releases',
          text: `It's New Release Friday`,
          subtext: 'Newly released songs.',
          img: 'https://cdn.vuetifyjs.com/docs/images/cards/hands.jpg',
        },
        {
          title: 'Rock',
          text: 'Greatest Rock Hits',
          subtext: 'Lose yourself in rock tunes.',
          img: 'https://cdn.vuetifyjs.com/docs/images/cards/singer.jpg',
        },
        {
          title: 'Mellow Moods',
          text: 'Ambient Bass',
          subtext: 'Chill beats to mellow you out.',
          img: 'https://cdn.vuetifyjs.com/docs/images/cards/concert.jpg',
        },
        {
          title: 'Mellow Moods',
          text: 'Ambient Bass',
          subtext: 'Chill beats to mellow you out.',
          img: 'https://cdn.vuetifyjs.com/docs/images/cards/concert.jpg',
        },
      ]
const cardTransparent = 'rgba(255, 255, 255, 0)'

</script>

<script>
  import { h } from 'vue'

  export default {
    components: {
      // A simple helper component
      SheetFooter: {
        setup (_, { slots }) {
          return () => h('v-sheet', {
            class: 'ma-auto px-4',
            color: 'rgba(0, 0, 0, .36)',
            height: 50,
          }, slots.default())
        },
      },
    },
    methods: {
        showImage()
        {
           
        },
        goToPage(target) {
            if(this.$router.currentRoute.path != target) {
                this.$router.push(target);
            }
            
        },

      }
  }
</script>

<style>

</style>
 
<style scoped>
  .v-img {
    transition: opacity .4s ease-in-out;
  }

  .v-img:not(.on-hover) {
    opacity: 0.6;
  }

  .show-btns {
    color: rgba(255, 255, 255, 1) !important;
  }
  .v-card {
    transition: opacity .4s ease-in-out;
  }

  .v-card:not(.on-hover) {
    opacity: 0.6;
  }

</style>
