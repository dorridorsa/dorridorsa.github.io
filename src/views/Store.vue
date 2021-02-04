<template>
  <div class="store">
    <img src="../assets/dorsa-logo.png" class="logo" alt="Dorsa logo">

    <h1>Make Up</h1>
    
    <p @click="$store.commit('button')">{{$store.state.message }}</p> 
    
    <p :key="makeup.id" v-for="makeup in makeups"> {{makeup.brand}}</p>
    
  </div>
</template>


<script>

export default {
  created() {
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json')
    .then((respons) => respons.json())
    .then((result) => {
      this.makeups = result
    })
  },
  data() {
    return {
      makeups: null
    }
  }
}
</script>

<style scoped>


h1 {
  padding: 25px;
  margin: 25px;

}




</style>