<template>
  <div id="app">
      <header><Head></Head></header>
      <main><router-view></router-view></main>
      <footer><Footer></Footer></footer>
  </div>
</template>

<script>
import Footer from './view/Footer'
import Head from './view/Head'
export default {
  name: 'App',
  components: {
        Footer,
        Head
  },

}

</script>
<style>

*{
  margin:0;
  padding:0;
  border:0;
}
#app {
  display: flex;
  margin: 0;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

header{
  box-shadow: 5px 5px 5px #888888;
  position:sticky;
  top:0;
}
main{
  min-height:1000px;
  background-color: antiquewhite;
}
footer{
  box-shadow: 5px 5px 5px 5px #888888;
  position:sticky;
  bottom:0;
}



</style>
