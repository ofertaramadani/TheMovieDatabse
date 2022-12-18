<template>
  <div id="app">
    <div class="container">
      <div class="filters">
      <label for="year">Year:</label>
      <input class="input" text="input" id="year" v-model="input" placeholder="Select year">
      <label for="rate">Rate:</label>
      <input class="input" text="input" id="rate" v-model="rate" placeholder="Select rate">
      <label for="genre">Genre:</label>
      <div class="select is-primary" id="genre">
            <select @change="onChange($event)">
              <option>Select genre</option>
              <option>Action</option>
              <option>Adventure</option>
              <option>Animation</option>
              <option>Comedy</option>
              <option>Crime</option>
              <option>Documentary</option>
              <option>Drama</option>
              <option>Family</option>
              <option>Fantasy</option>
              <option>History</option>
              <option>Horror</option>
              <option>Mystery</option>
              <option>Romance</option>
              <option>Science Fiction</option>
            </select>
          </div>
      <button class="button" @click="fetchNews(),fetchGenres()">Search</button>
    </div>
      <div class="card-list">
        <CardItem v-for="news in movieList.results" :key="news.id"
          :cardID="news.id"
          :cardTitle="news.title"
          :cardImage="'https://image.tmdb.org/t/p/original'+news.poster_path"
          :cardContent="news.overview" 
          :cardDate="news.release_date"
          :cardRate="news.vote_average"
          :cardGenre="genreName"
        >
        </CardItem>
      </div>
    </div>
  </div>
</template>

<script>
import CardItem from '../components/CardItem.vue';

export default {
  name: 'HomePage',
  components: {
    CardItem
  },
  data() {
    return {
      movieList: {},
      input:"",
      rate:"",
      genre:" ",
      genreName:" ",
      genreList:" "
    }
  },
  methods : {
    onChange(event) {
              if(event.target.value == "Comedy"){
                this.genre=35;
                this.genreName="Comedy";
              } else if(event.target.value == "Action"){
                this.genre=28;
              } else if(event.target.value == "Adventure"){
                this.genre=12;
              } else if(event.target.value == "Animation"){
                this.genre=16;
              } else if(event.target.value == "Crime"){
                this.genre=80;
              } else if(event.target.value == "Documentary"){
                this.genre=99;
              } else if(event.target.value == "Drama"){
                this.genre=18;
              } else if(event.target.value == "Family"){
                this.genre=10751;
              } else if(event.target.value == "Fantasy"){
                this.genre=14;
              } else if(event.target.value == "History"){
                this.genre=36;
              } else if(event.target.value == "Horror"){
                this.genre=27;
              } else if(event.target.value == "Mystery"){
                this.genre=9648;
              } else if(event.target.value == "Romance"){
                this.genre=10749;
              } else if(event.target.value == "Science Fiction"){
                this.genre=878;
              } 
          },
    fetchNews() {
      fetch('https://api.themoviedb.org/3/discover/movie?api_key=54106cb9e32f32a2f6c166158a3062d4&with_genres='+this.genre+'&vote_average.gte='+this.rate+'&vote_average.lte='+this.rate+'&primary_release_year='+this.input)
      .then(response => response.json())
      .then(data => {
        this.movieList = data;
      })
    },
    fetchGenres(){
      fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=54106cb9e32f32a2f6c166158a3062d4&language=en-US')
      .then(response => response.json())
      .then(data => {
        this.genreList = data;
      })
    }
  },
  mounted() {
    this.fetchNews();
  }
}
</script>

<style>
  
  .filters {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  label{
    margin-right:10px;
    color: white;
  }
  .input {
    width:200px;
    margin-right:20px;
  }
  .card-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 30px;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .button {
    margin-left: 20px;
  }
  img {
    object-fit:  cover !important;
  }
</style>
