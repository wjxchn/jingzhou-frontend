<template>
  <div id="footer" class="frow">

    <div class="footer-left">
      <img src="../assets/logo_black.png" style="height:100%;float:right;margin-right:20px">
    </div>


    <div class="footer-main frow ">
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
  height:52px;
  background-color: white;

}
.footer-left{
  height: 100%;
  width: 6%;
}
.footer-main{

  height: 100%;
  width:20%;
}
.footer-right{
  height: 100%;
  width: 0%;

}

.footer-link{
  font-size:1rem;
  flex-grow: 1;
}


</style>
