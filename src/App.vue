<template>
  <div id="app">
    <div class="nav">
    <div class="container">
    <router-link to="/"><h4>Most Popular</h4></router-link>
    <router-link to="/search"><h4>Search</h4></router-link>
    <router-view/>
    </div>
    </div>
  </div>
</template>

<style>

html {
  scroll-behavior: smooth;
  background-color: #2C2F33;
}
h4 {
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color:white;
  font-weight: bold;
  display: block;
}
#app {
  padding: 30px;
  padding-top:40px;
  height: 100%;
  background-color: #2C2F33;
}

</style>
