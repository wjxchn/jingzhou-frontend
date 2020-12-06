<template>
  <div id="header" class="frow">

    <div class="header-left">

    </div>

    <div class="header-main">
      <img src="../assets/logo_black.png" style="height:100%;">
    </div>


    <div class="header-right frow fye">
      <a href="/PersonalPage" class="header-link">主页</a>
      <a href="/Message" class="header-link">消息</a>
      <a href="/Login" class="header-link">登录</a>
    </div>

  </div>
</template>

<script>
export default {
    name: 'Head.vue',
}
</script>

<style scoped>
#header{
  height:52px;
  background-color: white;
}
.header-left{
  height: 100%;
  width: 2%;
}
.header-main{
  height: 100%;
  width: 60%;
}
.header-right{
  height: 100%;
  width: 20%;

}
.header-link{
  font-size:1.2rem;
  flex-grow: 1;
}


</style>
