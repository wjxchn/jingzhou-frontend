<template>
<div>
  <el-image :src="require('../assets/logo_black.png')" style="height:60px;width:60px" lazy></el-image>
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" style="float:right"  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
      <el-menu-item index="1">
        <a href="/" class="header-link" >首页</a>
      </el-menu-item>     
      <el-menu-item v-show="islogin" index="3" >
        <a href="/Message"  class="header-link">消息</a>
      </el-menu-item>
      <el-menu-item  v-show="islogin" index="2">
        <a href="/SelfPage" class="header-link">我</a>
      </el-menu-item>
      <el-menu-item  v-show="!islogin" index="4"><a href="/Login" class="header-link">登录</a></el-menu-item>
      <el-menu-item>
      <el-button v-show="islogin" @click="logout">退出</el-button>
      </el-menu-item>
    </el-menu>  
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

</style>
