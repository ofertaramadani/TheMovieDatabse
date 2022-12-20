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
        <div class="genres">
        <p>Genres : </p>
        <p v-for="genre in movieGenres" :key="genre.id">{{ genre.name }}</p>
      </div>
      </div>
     
    </div>
    <div class="content">
      Plot : {{movieContent}}
    </div>
  </div>
</div>
<div class="card-list">
<CardItem v-for="movies in similarMovies.results" :key="movies.id" @click.native="reloadPage()"
    :cardID="movies.id"
    :cardTitle="movies.title"
    :cardImage="'https://image.tmdb.org/t/p/original'+movies.poster_path"
    >
  </CardItem>
</div>
</div>
</template>

<script>
import CardItem from '../components/CardItem.vue';
export default {
  name: 'SingleNews',
  components : {
    CardItem

  },
  data() {
    return {
      moviePoster:" ",
      movieTitle: " ",
      movieContent:" ",
      movieData : " ",
      movieRate : " ",
      movieLan : " ",
      movieGenres: [],
      similarMovies:[]
    }
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
    fetchSingleMovie(movieID) {
      fetch('https://api.themoviedb.org/3/movie/'+movieID+'?api_key=54106cb9e32f32a2f6c166158a3062d4&language=en-US')
      .then(response => response.json())
      .then(data => {
        this.moviePoster = data.poster_path;
        this.movieTitle = data.title;
        this.movieContent= data.overview;
        this.movieData = data.release_date;
        this.movieRate = data.vote_average;
        this.movieLan=data.original_language;
        this.movieGenres=data.genres;
      })
    },
    fetchSimilarMovies(movieID){
      fetch('https://api.themoviedb.org/3/movie/'+movieID+'/similar?api_key=54106cb9e32f32a2f6c166158a3062d4&language=en-US&page=1')
      .then(response => response.json())
      .then(data => {
       this.similarMovies=data;
      })
    }
  },
  mounted() {
    this.fetchSingleMovie(this.$route.params.id);
    this.fetchSimilarMovies(this.$route.params.id);
  }
}
</script>

<style scoped>
.card-list {
  margin-top:10%;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap:1%;
}
.genres {
  display: flex;
  gap: 1%;
  flex-wrap: wrap;
}
.space {
  margin-bottom:6%;
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
  
  .card-list {
    grid-template-columns: 1fr;
  }
}

@media (min-width:768px) and (max-width:1024px){
  .card {
    width: 90%;
    flex-direction:column;
  }
  .card-image {
    padding-right:7px;
  }
}

</style>