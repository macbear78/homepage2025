<template>
  <p>Our Users</p>
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



</v-container>

</template>


<script setup>



</script>

<style scoped>
  .v-img {
    transition: opacity .4s ease-in-out;
  }

  .v-img:not(.on-hover) {
    opacity: 0.6;
  }

</style>