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


<our-awards-section/>

<our-users-section/>  

<spaces-section/>

</template>

<script setup>
import OurAwardsSection from '@/components/OurAwardsSection.vue'
import OurUsersSection from '@/components/OurUsersSection.vue'
import SpacesSection from '@/components/SpacesSection.vue'

</script>

<script>


  export default {
    components: {
      // A simple helper component

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
