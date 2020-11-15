<template>
<div>
  <div>
    <Head/>
  </div>
  <div style="min-height:600px">
    <router-view></router-view>
  </div>
  <Footer class="footer"/>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.footer{
  position: fixed;
  bottom: 0;
  width: 100%;
}
a{
    text-decoration:none;
    color:black;
}
*{
  margin:0;
  padding:0;
  border:0;
}
</style>
