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
<v-container class="bg-white">
    <v-row
      no-gutters
    >
     <v-img :src="images[imageIndex]" @click="changeImage" />

     
    </v-row>
    <v-btn
     @click="changeImage">

    </v-btn>
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
</style>
