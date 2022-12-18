<template>
  <div class="card">
  <router-link :to="'/single-movie/'+ cardID" >
  <div class="card-image">
    <figure class="image">
      <img :src="cardImage" :alt="cardTitle">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p maxlength="50" class="title is-4">{{cardTitle}}</p>
      </div>
    </div>
    <div class="content">
      <div>Release date : {{cardDate}}</div>
    </div>
    <div class="content">
      <div>Rate : {{cardRate}}</div>
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
.card {
  border-radius: 10px;
}
.card:hover .image {
  border: 1px solid white;
}


</style>
