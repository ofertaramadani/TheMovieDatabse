<template>
    <div id="app">
      <div class="container">
        <div class="card-list">
          <CardItem v-for="movie in movieList[0].results" :key="movie.id"
            :cardID="movie.id"
            :cardTitle="movie.title"
            :cardImage="'https://image.tmdb.org/t/p/original'+movie.poster_path"
          >
          </CardItem>
          <CardItem v-for="movie in movieList[1].results" :key="movie.id"
            :cardID="movie.id"
            :cardTitle="movie.title"
            :cardImage="'https://image.tmdb.org/t/p/original'+movie.poster_path"
          >
          </CardItem>
          <CardItem v-for="movie in movieList[2].results" :key="movie.id"
            :cardID="movie.id"
            :cardTitle="movie.title"
            :cardImage="'https://image.tmdb.org/t/p/original'+movie.poster_path"
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
        movieList: []
      }
    },
    methods : {
      fetch(){
        Promise.all([1, 2, 3].map(id => 
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=54106cb9e32f32a2f6c166158a3062d4&language=en-US&page=${id}`).then(resp => resp.json())
      )).then(data => {
         this.movieList = data;
      });
      }},
    mounted() {
      this.fetch();
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
    }
    .input {
      width:200px;
      margin-right:20px;
    }
    .card-list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr ;
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
    @media (min-width:768px) and (max-width:1024px){
      .card-list {
        grid-template-columns: 1fr 1fr 1fr;
      }
      .filters {
        flex-direction: column;
      }
    }
  </style>
  