<template>
  <div id="app">
    <div class="container">
    <router-link to="/"><h4>Home</h4></router-link>
    <router-view/>
    </div>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
h4 {
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color:white;
  font-weight: bold;
}
#app {
  padding: 30px;
  padding-top:40px;
  height: 100%;
  background-color: #2C2F33;
}

</style>
