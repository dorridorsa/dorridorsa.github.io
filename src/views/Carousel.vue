<template>
  <div class="carousel">
      <img src="../assets/dorsa-logo.png" class="logo" alt="Dorsa logo">
    <Carousels info="Fynda din favorit produkt"/>
  </div>
</template>


<script>
// @ is an alias to /src
import Carousels from '@/components/Carousels.vue'

export default {
  name: 'Carousel',
  components: {
    Carousels
  }
}
</script>