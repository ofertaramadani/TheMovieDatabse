<template>
  <div id="app">
    <div class="container">
     <div class="nav-bar__links">
      <div class="nav-bar__logo"><router-link to="/">
    <img src="./assets/imdb2.svg" width="75" height="25" >
    </router-link></div>
    <router-link to="/" class="nav-bar__link">Popular</router-link>
    <router-link to="/search" class="nav-bar__link">Search</router-link>
     </div>
 
    <router-view/>
  
        </div>
      </div>
</template>

<style>

.nav-bar__links {
  display: flex;
  align-items: center;
  gap: 3%;
  
}
.nav-bar__link {
  border-radius: 3px;
  border:1px solid #17a2b8;
  padding: 7px 16px;
  color: #17a2b8;
  font-size: 16px;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.nav-bar__link:hover{
  background-color: #17a2b8;
  color: white;
}

html {
  scroll-behavior: smooth;
  background-color: #2C2F33;
}
.navbar-item {
 color: white;
}

#app {
  padding: 30px;
  padding-top:40px;
  height: 100%;
  background-color: #2C2F33;
}

</style>
