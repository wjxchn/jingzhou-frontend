<template>
  <div id="footer">
    
    <div class="footer-left">
      <img src="../assets/logo_black.png" style="height:100%;float:right;margin-right:20px">
    </div>
    

    <div class="footer-main">
      <a href="#" class="footer-link">版权信息</a>
      <a href="#" class="footer-link">联系我们</a>
      <a href="#" class="footer-link">组员信息</a>
    </div>


    <div class="footer-right">
     
    </div>
   
  </div>
</template>

<script>
export default {
    name: 'Footer.vue',
}
</script>

<style scoped>
#footer{
  display: flex;
  height:52px;
  margin: 0 auto;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: white;

}
.footer-left{
  height: 100%;
  width: 20%;
}
.footer-main{
  display: flex;
  height: 100%;
  width: 20%;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items:flex-start;
}
.footer-right{
  height: 100%;
  width: 40%;

}

.footer-link{
  font-size:15px;
  flex-grow: 1;
}


</style>