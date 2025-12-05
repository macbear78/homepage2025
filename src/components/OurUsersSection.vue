<template>
    <p>Our Users</p>
    <p>A Better Digital Future for All</p>
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
              border="opacity-50 sm"
              :class="{ 'on-hover': isHovering }"
              :elevation="isHovering ? 12 : 2"
              v-bind="props"
            >
  
            <!-- <v-icon color="red" icon="$vuetify"></v-icon> -->
                <icons-sel 
                  :propA="item.icon"/> 
                <v-card-title class="text-h6 text-black d-flex flex-column">
                  <p class="mt-4">
                    {{ item.title }}
                  </p>


                </v-card-title>
                <v-card-text>
                  <div>
                    <p class="ma-0 text-body-1 font-weight-bold">
                      {{ item.text }}
                    </p>

                  </div>
                </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-container>

</template>


<script setup>
import IconsSel from './IconsSel.vue';
const cardItems = [
        {
          title: 'Users',
          text: `Experience interactive media, develop new social connections and engage with brands in a whole new way`,
          subtext: 'Newly released songs.',
          icon: "0"
        },
        {
          title: 'Creators',
          text: 'Grow audiences for your ideas and concepts across a new medium for engagement',
          subtext: 'Lose yourself in rock tunes.',
          icon: "1"
        },
        {
          title: 'Brands',
          text: 'Bring your brand into the future with interactive experiences to attract next-gen audiences and engage followers in a more personal way',
          subtext: 'Chill beats to mellow you out.',
          icon: "2"
        },
        {
          title: 'Web3',
          text: 'Benefit from the power of ownership, community and earning embodied by Everdome’s web3 economy',
          subtext: 'Chill beats to mellow you out.',
          icon: "3"
        },
      ]


</script>

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