<template>
    <div id="app">
      <div class="container">
        <div class="card-list">
            <!--Faqja me 20 filma-->
          <CardItem v-for="movie in movieList[0].results" :key="movie.id"
            :cardID="movie.id"
            :cardTitle="movie.title"
            :cardImage="'https://image.tmdb.org/t/p/original'+movie.poster_path"
            :cardContent="movie.overview" 
            :cardDate="movie.release_date"
            :cardRate="movie.vote_average"
          >
          </CardItem>
          <!-- Faqja me 20 filma-->
           <CardItem v-for="news in movieList[1].results" :key="news.id"
            :cardID="news.id"
            :cardTitle="news.title"
            :cardImage="'https://image.tmdb.org/t/p/original'+news.poster_path"
            :cardContent="news.overview" 
            :cardDate="news.release_date"
            :cardRate="news.vote_average"
          >
          </CardItem>
        
           <CardItem v-for="news in movieList[2]" :key="news.id"
            :cardID="news.id"
            :cardTitle="news.title"
            :cardImage="'https://image.tmdb.org/t/p/original'+news.poster_path"
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
        thirdpage: {},
        movieList: {},
      }
    },
    methods : {
      fetchMovies_first20() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=54106cb9e32f32a2f6c166158a3062d4&language=en-US&page=1')
        .then(response => response.json())
        .then(data => {
          this.firstpage = data;
          console.log("h"+this.firstpage);
        })
      },
      fetchMovies_second20() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=54106cb9e32f32a2f6c166158a3062d4&language=en-US&page=2')
        .then(response => response.json())
        .then(data => {
          this.secondpage= data;
          console.log(this.firstpage);
          this.movieList=Object.assign({},[this.firstpage,this.secondpage]);
          console.log(this.movieList);

        })
      },
      fetchMovies_third10() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=54106cb9e32f32a2f6c166158a3062d4&language=en-US&page=3')
        .then(response => response.json())
        .then(data => {
            this.thirdpage = Object.keys(data.results).slice(0, 10).reduce((result, key) => {
                    result[key] = data.results[key];

                    return result;
                }, {});
          console.log(this.thirdpage);
          this.movieList=Object.assign({},[this.firstpage,this.secondpage,this.thirdpage]);
        })
      }  
    },
    mounted() {
      this.fetchMovies_first20();
      this.fetchMovies_second20();
      this.fetchMovies_third10();
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
  