<template>
    <div class="">
    <el-row :gutter="20" >
            <el-col :span="4">
              <div>
                  <img src="../assets/logo.png" style="width:50px;margin-left:50%">
              </div>
            </el-col>
            <el-col :span="1">
              <div>
                <el-button type="text"><a href="#" style="font-size:10px">关于我们</a></el-button>
              </div>
            </el-col>
            <el-col :span="1">
              <div>
                <el-button type="text"><a href="#" style="font-size:10px">版权公告</a></el-button>
              </div>
            </el-col>
            <el-col :span="1">
              <div>
                <el-button type="text"><a href="#" style="font-size:10px">用户建议</a></el-button>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="el-icon-phone" style="margin-left:100%">
                
              </div>
            </el-col>
            
            <el-col :span="2">
              <div class="el-icon-s-comment" style="margin-left:100%">
                
            </div>
            </el-col>

        </el-row>
  </div>
</template>

<script>
export default {
    name: 'Footer.vue'
}
</script>

<style>

.footer-style{
    width: 100%;
    height: 100px;
    background-color: rgb(245, 245, 245);
}
.footer-text{
    font-size: 10px;
    color: black;
}
.footer-link{
    margin-right: 20px;
}

</style>