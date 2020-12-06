<template>
  <div>
    <el-form :inline="true" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
             class="demo-ruleForm">

      <el-col class="col" v-if="shows.show1">
        <el-select class="bind0" v-model="binds.bind1" placeholder="AND">
          <el-option
            v-for="item in bindoptions"
            :key="item.value"
            :label="item.label"
            :value="item.label">
          </el-option>
        </el-select>
        <el-select class="select" v-model="values.value1" placeholder="主题">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.label">
          </el-option>
        </el-select>
        <el-input class="content" type="text" maxlength="25" v-model="ruleForm.text1"></el-input>
        <i v-if="iconshows.iconshow1" class="el-icon-circle-plus-outline" @click="plus(1) "></i>
      </el-col>

      <el-col class="col" v-if="shows.show2">
        <el-select class="bind" v-model="binds.bind2" placeholder="AND">
          <el-option
            v-for="item in bindoptions"
            :key="item.value"
            :label="item.label"
            :value="item.label">
          </el-option>
        </el-select>
        <el-select class="select" v-model="values.value2" placeholder="主题">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.label">
          </el-option>
        </el-select>
        <el-input class="content" type="text" maxlength="25" v-model="ruleForm.text2"></el-input>
        <i class="el-icon-remove-outline" @click="minus(2)"></i>
        <i v-if="iconshows.iconshow2" class="el-icon-circle-plus-outline" @click="plus(2)"></i>
      </el-col>

      <el-col class="col" v-if="shows.show3">
        <el-select class="bind" v-model="binds.bind3" placeholder="AND">
          <el-option
            v-for="item in bindoptions"
            :key="item.value"
            :label="item.label"
            :value="item.label">
          </el-option>
        </el-select>
        <el-select class="select" v-model="values.value3" placeholder="主题">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.label">
          </el-option>
        </el-select>
        <el-input class="content" type="text" maxlength="25" v-model="ruleForm.text3"></el-input>
        <i class="el-icon-remove-outline" @click="minus(3)"></i>
        <i v-if="iconshows.iconshow3" class="el-icon-circle-plus-outline" @click="plus(3)"></i>
      </el-col>

      <el-col class="col" v-if="shows.show4">
        <el-select class="bind" v-model="binds.bind4" placeholder="AND">
          <el-option
            v-for="item in bindoptions"
            :key="item.value"
            :label="item.label"
            :value="item.label">
          </el-option>
        </el-select>
        <el-select class="select" v-model="values.value4" placeholder="主题">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.label">
          </el-option>
        </el-select>
        <el-input class="content" type="text" maxlength="25" v-model="ruleForm.text4"></el-input>
        <i class="el-icon-remove-outline" @click="minus(4)"></i>
        <i v-if="iconshows.iconshow4" class="el-icon-circle-plus-outline" @click="plus(4)"></i>
      </el-col>

      <el-col class="col" v-if="shows.show5">
        <el-select class="bind" v-model="binds.bind5" placeholder="AND">
          <el-option
            v-for="item in bindoptions"
            :key="item.value"
            :label="item.label"
            :value="item.label">
          </el-option>
        </el-select>
        <el-select class="select" v-model="values.value5" placeholder="主题">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.label">
          </el-option>
        </el-select>
        <el-input class="content" type="text" maxlength="25" v-model="ruleForm.text5"></el-input>
        <i class="el-icon-remove-outline" @click="minus(5)"></i>
      </el-col>

      <el-col class="col1"> 
        <el-button class="searchbutton" type="primary" @click="submitForm('ruleForm')">检索</el-button> 
      </el-col>
         
    </el-form>

  </div>
</template>

<script>
  export default {
    name: "HomePage.vue",
    data() {
      return {
        ruleForm: {
          text1: "",
          text2: "",
          text3: "",
          text4: "",
          text5: ""
        },
        rules: {},
        values: {
          value1: "主题",
          value2: "主题",
          value3: "主题",
          value4: "主题",
          value5: "主题",
        },
        binds: {
          bind1: "AND",
          bind2: "AND",
          bind3: "AND",
          bind4: "AND",
          bind5: "AND",
        },
        shows:{
          show1:true,
          show2:false,
          show3:false,
          show4:false,
          show5:false
        },
        iconshows:{
          iconshow1:true,
          iconshow2:false,
          iconshow3:false,
          iconshow4:false,
        },
        iconnumber:1,
        options: [{
          value: '选项1',
          label: '主题'
        }, {
          value: '选项2',
          label: '关键词'
        }, {
          value: '选项3',
          label: '作者'
        }, {
          value: '选项4',
          label: '作者单位'
        }, {
          value: '选项5',
          label: 'DOI'
        }, {
          value: '选项6',
          label: '摘要'
        }],
        bindoptions: [{
          value: '选项1',
          label: 'AND'
        }, {
          value: '选项2',
          label: 'OR'
        }, {
          value: '选项3',
          label: 'NOT'
        }],
      };
    },
    methods: {
      plus(num){
        this.iconnumber=this.iconnumber+1
        if(num===1){
          this.shows.show2=true
          this.iconshows.iconshow2=true
          this.iconshows.iconshow1=false
        }
        if(num===2){
          this.shows.show3=true
          this.iconshows.iconshow3=true
          this.iconshows.iconshow2=false
        }
        if(num===3){
          this.shows.show4=true
          this.iconshows.iconshow4=true
          this.iconshows.iconshow3=false
        }
        if(num===4){
          this.shows.show5=true
          this.iconshows.iconshow4=false
        }
      },

      minus(num){
        if(num<3)
        {
          this.binds.bind2=this.binds.bind3
          this.values.value2=this.values.value3
          this.ruleForm.text2=this.ruleForm.text3
        }
        if(num<4){
          this.binds.bind3=this.binds.bind4
          this.values.value3=this.values.value4
          this.ruleForm.text3=this.ruleForm.text4
        }
        if(num<5){
          this.binds.bind4=this.binds.bind5
          this.values.value4=this.values.value5
          this.ruleForm.text4=this.ruleForm.text5
        }
        if(num<6){
          this.binds.bind5="AND"
          this.values.value5="主题"
          this.ruleForm.text5=""
        }
        if(this.iconnumber===5){
          this.iconshows.iconshow4=true
          this.shows.show5=false
        }
        else if(this.iconnumber===4){
          this.iconshows.iconshow3=true
          this.shows.show4=false
        }
        else if(this.iconnumber===3){
          this.iconshows.iconshow2=true
          this.shows.show3=false
        }
        else if(this.iconnumber===2){
          this.iconshows.iconshow1=true
          this.shows.show2=false
        }
        this.iconnumber=this.iconnumber-1
      },

      submitform(formName) {

      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
  }
</script>

<style scoped>
  .demo-ruleForm {
    margin-top: 20px;
    margin-left: 28%;
    margin-right: 28%;
  }

  .searchbutton {
    width: 100px;
    margin-top: 5px;
  }

  .col {
    width: 850px;
  }

  .col1 {
    margin-left: 410px;
  }

  .bind0{
    width: 80px;
    margin-top: 5px;
    visibility: hidden;
  }

  .bind {
    margin-top: 5px;
    width: 80px;
  }

  .select {
    margin-top: 5px;
    width: 110px;
  }

  .content {
    margin-top: 5px;
    width: 600px;
  }

  .el-icon-remove-outline{
    margin-left: 3px;
  }

  .el-icon-circle-plus-outline{
    margin-left: 3px;
  }


</style>
