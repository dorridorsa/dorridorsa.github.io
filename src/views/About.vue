<template>
 
  <div class="about">
    <img src="../assets/dorsa-logo.png" class="logo" alt="Dorsa logo">
    <h1>Välkommen till About sidan</h1>

    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="../assets/scott-graham-5fNmWej4tAA-unsplash.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Företag</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
        <div class="card-footer">
        <a href="#" class="btn btn-secondary">Klicka här</a>
      </div>
      </div>
      
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="../assets/laura-chouette-yd3mg93Smn8-unsplash.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Butik</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <div class="card-footer">
        <p href ="#" type="button" class="btn btn-secondary" @click="$store.commit('button')">{{$store.state.message }}</p> 
      </div>
      </div>
      
    </div>
  </div>


  <div class="col">
    <div class="card h-100">
      <img src="../assets/adam-solomon-WHUDOzd5IYU-unsplash.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Kontakt</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <div class="card-footer">
        <a href="#" class="btn btn-secondary">Klicka här</a>
      </div>
      </div>
      
    </div>
  </div>
</div>

  </div>
</template>


<style scoped>

h1 {
  padding: 30px;
  margin: 30px;

}

.card-footer {
    padding: 0.75rem 1.25rem;
    background-color:  rgba(43, 40, 78, 0.125);
    border-top: 1px solid rgba(43, 40, 78, 0.125);
}

h5, .h5 {
    font-size: 2rem;
}

</style>