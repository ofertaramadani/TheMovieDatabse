<template>
    <div id="app">
      <div class="container">
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
        firstpage: {},
        secondpage: {},
        movieList: {}
      }
    },
    methods : {
      fetchMovies() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=54106cb9e32f32a2f6c166158a3062d4&language=en-US&page=1')
        .then(response => response.json())
        .then(data => {
          this.firstpage = data;
        })
      },
      fetchMovies1() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=54106cb9e32f32a2f6c166158a3062d4&language=en-US&page=2')
        .then(response => response.json())
        .then(data => {
          this.secondpage= data;
        })
      },
      concatmovies() {
        this.movieList = {...this.fetchMovies,...this.fetchMovies1};
        console.log(this.movieList);
      }
       
    },
    mounted() {
      this.fetchMovies();
      this.fetchMovies1();
      this.concatmovies();
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
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
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
  </style>
  