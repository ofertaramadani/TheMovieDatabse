<template>
  <div id="app">
    <div class="container">
      <div class="filters">
      <label for="year">Year </label>
      <input class="input" text="input" id="year" v-model="input" placeholder="Select year...">
      <label for="rate">Rate </label>
      <input class="input" text="input" id="rate" v-model="rate" placeholder="Select rate...">
      <label for="genre">Genre </label>
      <div class="select is-primary" id="genre">
      <Select v-model="genre" id="genre"  @change="onChange($event)">
        <option>Select genre</option>
      <option v-for="genre in genreList.genres" :key="genre.id" :value="genre.id">{{genre.name}}</option>
      </Select>
      </div>
      <button class="button" @click="fetchMovies(),fetchGenres()">Search</button>
    </div>
      <div class="card-list">
        <CardItem v-for="news in movieList.results" :key="news.id"
          :cardID="news.id"
          :cardTitle="news.title"
          :cardImage="'https://image.tmdb.org/t/p/original'+news.poster_path"
          :cardContent="news.overview" 
          :cardDate="news.release_date"
          :cardRate="news.vote_average"
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
      genreList:[]
    }
  },
  methods : {
    onChange(event) {
              var optionValue = event.target.value;
              this.genre=optionValue;
          },
    fetchMovies() {
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
  mounted(){
    this.fetchGenres();
    this.onChange();
  }
}
</script>

<style scoped>
  
  .filters {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  label{
    margin-right:10px;
    color: white;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  .input {
    border:2px solid #17a2b8;
    width:200px;
    margin-right:20px;
  }
  .card-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .button {
    margin-left: 20px;
    background-color: #2C2F33;
    color: white;
    border:1px solid #17a2b8;
  }
  img {
    object-fit:  cover !important;
  }
  .button:hover{
    background-color: #17a2b8;
    color: white;
  }

  @media (max-width:767px) {
    .filters {
      flex-direction: column;
    }
    .card-list {
      grid-template-columns: 1fr;
    }
    label{
    margin-right:0px;
  }
  .input {
    margin-right: 0px;
  }
  .button {
    margin-left:0px;
    margin-top:10px;
  }

  }
  @media (min-width:768px) and (max-width:1024px){
      .card-list {
        grid-template-columns: 1fr 1fr 1fr;
      }
     
      .input {
    width:120px;
    margin-right:10px
  }
    }
</style>
