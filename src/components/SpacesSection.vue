<template>
    <p>Explore Spaces</p>
    <p>Spaces</p>
    <p>Explore community created Spaces and Everdome spaces across our unique, Martian themed, digital world.</p>
    <v-container class="pa-4 text-center">
    <v-row
      align="center"
      class="fill-height"
      justify="center"
    >
        <v-col
          cols="12"
          md="3"
        >
         <space_1_-card-componet/>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
         <space_2_-card-componet/>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
         <space_3_-card-componet/>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
         <space_4_-card-componet/>
         </v-col>
  
    </v-row>
    <v-row
      align="center"
      class="fill-height"
      justify="center"
    >
    <v-col
          cols="12"
          md="3"
        >
         <space_5_-card-componet/>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
         <space_6_-card-componet/>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
         <space_7_-card-componet/>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
         <space_8_-card-componet/>
         </v-col>
    </v-row>
  </v-container>

</template>


<script setup>
import Space_1_CardComponet from '@/components/SpaceCard_1_Componet.vue'
import Space_2_CardComponet from '@/components/SpaceCard_2_Componet.vue'
import Space_3_CardComponet from '@/components/SpaceCard_3_Componet.vue'
import Space_4_CardComponet from '@/components/SpaceCard_4_Componet.vue'
import Space_5_CardComponet from '@/components/SpaceCard_5_Componet.vue'
import Space_6_CardComponet from '@/components/SpaceCard_6_Componet.vue'
import Space_7_CardComponet from '@/components/SpaceCard_7_Componet.vue'
import Space_8_CardComponet from '@/components/SpaceCardComponet.vue'

</script>

<style scoped>


</style>