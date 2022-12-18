<template>
  <div class="fullcard">
  <div class="space"></div>
  <div class="card">
  <div class="card-image">
      <img :src="'https://image.tmdb.org/t/p/original'+ moviePoster" alt="Placeholder image">
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">{{movieTitle}}</p>
        <p class="subtitle is-6">Release date : {{movieData}}</p>
        <p class="subtitle is-6">Language : {{movieLan}}</p>
        <p class="subtitle is-6">IMBD rate : {{movieRate}}</p>
      </div>
    </div>
    <div class="content">
      Plot : {{movieContent}}
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'SingleNews',
  data() {
    return {
      moviePoster:" ",
      movieTitle: " ",
      movieContent:" ",
      movieData : " ",
      movieRate : " ",
      movieLan : " "
    }
  },
  methods: {
    fetchSingleMovie(movieID) {
      fetch('https://api.themoviedb.org/3/movie/'+movieID+'?api_key=54106cb9e32f32a2f6c166158a3062d4&language=en-US')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.moviePoster = data.poster_path;
        this.movieTitle = data.title;
        this.movieContent= data.overview;
        this.movieData = data.release_date;
        this.movieRate = data.vote_average;
        this.movieLan=data.original_language;

      })
    }
  },
  mounted() {
    this.fetchSingleMovie(this.$route.params.id);
  }
}
</script>

<style scoped>
.space {
  margin-bottom:6%;
}
.fullcard {
  height: 100vh;
  background-color: #2C2F33;
}
.card {
  display: flex;
  width: 70%;
  margin:auto;
  align-items: center;
}

.card-image {
  padding-left:7px;
  padding-top:7px;
}
@media (max-width:767px){
  .card {
    width: 100%;
    flex-direction:column;
  }
  .card-image {
    padding-right:7px;
  }
  
}

</style>