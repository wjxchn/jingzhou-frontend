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
/*------------------------------------------文字部分------------------------------------------*/
p{
  text-indent: 1.5rem;
}
.rem02{
  font-size:0.2rem;
}
.rem05{
  font-size:0.5rem;
}
.rem1{
  font-size:1rem;
}
.rem15{
  font-size:1.5rem;
}
.rem2{
  font-size:2rem;
}
.rem25{
  font-size:2.5rem;
}
.rem3{
  font-size:3rem;
}

/*------------------------------------------布局部分------------------------------------------*/
/*引入flex布局 f表示flex，x表示主轴，y表示次轴*/
.f{

  display: flex;
}

.frow{
  /*子元素主轴水平*/
  display: flex;
  flex-direction: row;
}
.fcolumn{
  /*子元素主轴垂直*/
  display: flex;
  flex-direction: column;
}
.fxs{
  /*子元素从主轴起点开始排列*/
  justify-content: flex-start;
}
.fxe{
  /*子元素从主轴终点开始排列*/
  justify-content: flex-end;
}
.fxc{
  /*子元素从主轴居中排列*/
  justify-content: center;
}
.fxb{
  /*子元素从主轴两端对齐*/
  justify-content:space-between;
}
.fxa{
  /*子元素从主轴空两倍距*/
  justify-content:space-around;
}
.fys{
  /*子元素从次轴起点开始排列*/
  align-items: flex-start;
}
.fye{
  /*子元素从次轴终点开始排列*/
  align-items: flex-end;
}
.fyc{
  /*子元素从次轴居中排列*/
  align-items: center;
}
/*覆盖父元素为自己设置的align-item属性 */
.ss{
  align-self: flex-start;
}
.se{
  align-self: flex-end;
}
.sc{
  align-self: center;
}
.sg1{
  flex-grow: 1;
}


.mt10{
  margin-top:10px;
}
.mt15{
  margin-top:15px;
}
.mt20{
  margin-top:20px;
}
.ml10{
  margin-left:10px;
}
.ml15{
  margin-left:15px;
}
.ml20{
  margin-left: 20px;
}
.mr10{
  margin-right:10px;
}
.mr15{
  margin-right:15px;
}
.mr20{
  margin-right:20px;
}
.mb10{
  margin-bottom:10px;
}
.mb15{
  margin-bottom:15px;
}
.mb20{
  margin-bottom:20px;
}
</style>
