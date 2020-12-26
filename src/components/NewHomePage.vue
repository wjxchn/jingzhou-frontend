<template>
<el-container>
  <el-main>
  <div style="height:100px">
  </div>
    <div>
    <div style="text-align:center">
    <el-image :src="src" style="max-width:10%;height:auto" lazy></el-image>
    </div>
    <br>
    <el-row type="flex" justify="center">
    <el-col :span="2" >
     <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
    </el-col>
    <el-col :span="8">
    <el-input
        placeholder="请输入内容"
        v-model="input"
        clearable>
    </el-input>
    </el-col>
    <el-col :span="1">
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </el-col>
    </el-row>
    </div>
  <div>
  <div style="height:100px">
  </div>
    <el-card class="box-card" style="width:30%">
      <div slot="header" class="clearfix" style="text-align:center">
        <span>一周学术热点</span>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
  </div>
  </el-main>
</el-container>
</template>

<script>
    import picture from './../assets/logo.png'
    export default {
        name: "NewHomePage",
        data() {
            return {
                src:picture,
                input: '',
                options: [{
                    value: '选项1',
                    label: '标题'
                    }, {
                    value: '选项2',
                    label: '作者'
                    }, {
                    value: '选项3',
                    label: '主题'
                    }]
            }
            },
        beforeCreate() {
        document.querySelector('body').setAttribute('style','background-color:rgb(255,255,255)')
        }
    }

</script>

<style scoped>
</style>
