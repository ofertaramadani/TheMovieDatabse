<template>
  <div class="card">
  <router-link :to="'/single-movie/'+ cardID" >
  <div class="card-image">
    <figure class="image is-2by4">
      <img :src="cardImage" :alt="cardTitle">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content media-title">
        <p class="title is-6">{{cardTitle}}</p>
      </div>
    </div>
  </div>
</router-link>
</div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    cardID: Number,
    cardTitle: String,
    cardContent: String,
    cardImage: String,
    cardDate: String,
    cardRate:Number,
    cardGenre:String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.media-title {
  background-color: transparent;
}
.card-content {
  padding: 10px;
}
.card {
  border-radius: 10px;
}
.media-content {
  text-align: center;
}
.card:hover{
  background-color: #2C2F33;
}
.card:hover p {
  color: white;
}


</style>
