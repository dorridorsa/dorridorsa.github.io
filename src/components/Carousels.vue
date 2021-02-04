<template>
  <div class="hello">
    <h1>{{ info }}</h1>
    
     <b-carousel
      id="carousel-a"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      
      <b-carousel-slide
        text="Ögonskugga"
        img-src="https://images.unsplash.com/photo-1583241801142-113b9f5bbde5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      ></b-carousel-slide>

     
      <b-carousel-slide 
      text="Foundation"
      img-src="https://images.unsplash.com/photo-1566733015703-b89a6389ff18?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"></b-carousel-slide>

     
      <b-carousel-slide 
      text="Läppstift"
      img-src="https://images.unsplash.com/photo-1571646034647-52e6ea84b28c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1552&q=80"></b-carousel-slide>

      
    </b-carousel>


  </div>
</template>

<script>
export default {
  name: 'Carousels',
  props: {
    info: String
  }
}
</script>


<style scoped lang="scss">

h1{
  padding: 15px;
  color:rgb(255, 179, 179);
}

p{
  padding: 3px;

}


a {
  color:#e187e4;
}

</style>
