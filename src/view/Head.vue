<template>
  <div class="head">
    <el-row :gutter="20" >
            <el-col :span="16">
              <div>
                  <img src="../assets/logo_black.png" style="width:50px;margin-left:30%">
              </div>
            </el-col>
            <el-col :span="2">
              <div>
                <el-button type="text"><a href="/PersonalPage" style="font-size:15px">主页</a></el-button>
              </div>
            </el-col>
            <el-col :span="2">
              <div>
                <el-button type="text"><a href="/Message" style="font-size:15px">消息</a></el-button>
              </div>
            </el-col>
            <el-col :span="2">
              <div>
                <el-button type="text"><a href="/Login" style="font-size:15px">登录</a></el-button>
              </div>
            </el-col>

            

        </el-row>
  </div>  
</template>

<script>
export default {
    name: 'Head.vue',
    
}
</script>

<style>
.head{
  background-image: url("../assets/head.png");
  width:100%;
}
</style>