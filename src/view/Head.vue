<template>
  <div id="header">
    
    <div class="header-left">
      
    </div>
    

    <div class="header-main">
      <img src="../assets/logo_black.png" style="height:100%;">
    </div>


    <div class="header-right">
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
  display: flex;
  height:52px;
  margin: 0 auto;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: white;
}
.header-left{
  height: 100%;
  width: 20%;
}
.header-main{
  height: 100%;
  width: 60%;
}
.header-right{
  display: flex;
  height: 100%;
  width: 20%;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-end;
}

.header-link{
  font-size:15px;
  justify-content: space-between;
  flex-grow: 1;
}


</style>