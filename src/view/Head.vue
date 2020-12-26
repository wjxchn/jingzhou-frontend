<template>
  <div id="header" class="frow">

    <div class="header-left">

    </div>

    <div class="header-main">
      <img src="../assets/logo_black.png" style="height:100%;">
    </div>


    <div class="header-right frow fye">
      <a href="/" class="header-link">首页</a>
      <a href="/SelfPage" v-show="islogin" class="header-link">我</a>
      <a href="/Message" v-show="islogin" class="header-link">消息</a>
      <a href="/Login" v-show="!islogin" class="header-link">登录</a>
      <el-button v-show="islogin" @click="logout">退出</el-button>
    </div>

  </div>
</template>

<script>
export default {
    name: 'Head.vue',
    data(){
      return{
        islogin: localStorage.getItem("username")
      }
    },
    methods:{
      logout(){
        localStorage.removeItem("username");
        this.$router.push('Login');
        this.$router.go(0);
      }
    }
}
</script>

<style scoped>
#header{
  height:52px;
  
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
