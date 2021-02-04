<template>
  <div class="home">
    <img src="../assets/dorsa-logo.png" class="logo" alt="Dorsa logo">
    <HelloWorld msg="Välkommen till Make Up - butiken"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>


