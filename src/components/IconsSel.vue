
<template>
    <svg-icon v-if="props.propA == 0" type="mdi" :path="path1" width="100px" height="100px" color="red"></svg-icon>
    <svg-icon v-else-if="props.propA == 1" type="mdi" :path="path2" width="100px" height="100px" color="red"></svg-icon>
    <svg-icon v-else-if="props.propA == 2" type="mdi" :path="path3" width="100px" height="100px" color="red"></svg-icon>
    <svg-icon v-else type="mdi" :path="path4" width="100px" height="100px" color="red"></svg-icon>
  </template>
 


<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  propA: {
    type: Number,
    default: 0
  }
});


</script>


  <script>
  import SvgIcon from '@jamescoyle/vue-icon';
  import { mdiAccountSupervisor,mdiEyeOutline,mdiStarOutline,mdiPackageVariantClosed } from '@mdi/js';
  
  export default {
    name: "my-component",
    components: {
      SvgIcon
    },
    data() {
      return {
         path1: mdiEyeOutline,
         path2: mdiAccountSupervisor,
         path3: mdiStarOutline,
         path4: mdiPackageVariantClosed,
      }
    }
  }
  </script>