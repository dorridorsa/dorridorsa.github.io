<template>
  <div class="hej">
    <h1>{{ msg }}</h1>
    <p>
      Välj utav produktens varumärke och besök hemsidan genom att klicka på
      <a href="http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline" target="_blank" rel="noopener">Maybelline</a>.
    </p>
    <h3>Blush</h3>
    <ul>
      <li><a class="btn btn-light" href="http://makeup-api.herokuapp.com/api/v1/products?product_category=powder&product_type=blush" >Powder</a></li>

      <li><a class="btn btn-light" href="http://makeup-api.herokuapp.com/api/v1/products?product_category=cream&product_type=blush">Cream</a></li>

      <li><a class="btn btn-light" href="http://makeup-api.herokuapp.com/api/v1/products?product_tags=Vegan&product_type=blush">Vegan</a></li>

      <li><a class="btn btn-light" href="http://makeup-api.herokuapp.com/api/v1/products?product_tags=Gluten+Free&product_type=blush">Gluten free</a></li>

      <li><a class="btn btn-light" href="http://makeup-api.herokuapp.com/api/v1/products?product_tags=Natural&product_type=blush">Natural</a></li>
    </ul>
    
    <h3>Social Media</h3>
    <ul>
      
      <li><a class="btn btn-secondary" href="https://www.instagram.com/" target="_blank" rel="noopener">Instagram</a></li>
      <li><a class="btn btn-secondary" href="https://www.linkedin.com/" target="_blank" rel="noopener">Linkedin</a></li>
      <li><a class="btn btn-secondary" href="https://sv-se.facebook.com/" target="_blank" rel="noopener">Facebook</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>


<style scoped lang="scss">

h1{
  padding: 15px;
}

p{
  padding: 3px;

}

h3 {
  margin: 50px 10px 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 13px;
}
a {
  color:#e187e4;
}
</style>
