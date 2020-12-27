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
    <el-row type="flex" justify="center" :gutter="40">
    <el-col :span="3" >
     <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
    </el-col>
    <el-col :span="12">
    <el-input
        placeholder="请输入内容"
        v-model="input"
        clearable>
    </el-input>
    </el-col>
    <el-col :span="1">
    <el-button type="primary" icon="el-icon-search" @click="gotoSearch()">搜索</el-button>
    </el-col>
    </el-row>
    </div>
  <div style="height:100px">
  </div>
  <el-row :gutter="20">
  <el-col :span="8" :offset="3">
    <el-card class="box-card">
      <div slot="header" class="clearfix" style="text-align:center">
        <span style="font-size:20px"><i class="el-icon-sunny"></i> 本周学术热点</span>
      </div>
      <div v-for="(o,s) in papers_hot" :index="s" v-if="s<10" class="text item" style="font-size:18px">
        <el-link v-bind:href="'/paper?paperid=' + o.id">
        {{(s+1)+'.'+o.title}}
      </el-link>
      </div>
    </el-card>
  </el-col>
  <el-col :span="8" :offset="2">
    <el-card class="box-card">
      <div slot="header" class="clearfix" style="text-align:center">
        <span style="font-size:20px"><i class="el-icon-thumb"></i> 高被引论文</span>
      </div>
      <div v-for="(o,s) in papers" :index="s" v-if="s<10" class="text item" style="font-size:18px">
      <el-link v-bind:href="'/paper?paperid=' + o.id">
        {{(s+1)+'.'+o.title}}
      </el-link>
      </div>
    </el-card>
  </el-col>
  </el-row>
  <div style="height:50px">
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
                    label: '关键词'
                    }, {
                    value: '选项3',
                    label: '科研人员'
                    }],
                page7: 0,
                itemnumber: 7,
                papers: [],
                papers_hot:[],
                value: '标题',
            }
            },
        beforeCreate() {
        document.querySelector('body').setAttribute('style','background-color:rgb(255,255,255)')
        },
        methods:{
          gotoSearch(){
            this.$router.push({path:'/Search',query:{pagenum:0,text:this.input,value:this.value}})
          }
        },
      created:function(){
       this.$axios.get('/api/trend/paper/citation/rank',
          {
            params: {
              pagenum: 0
            }
          }
        ).then((res) => {
          this.papers= [];
          for(var i = 0; i < res.data.data.paperlist.length;i++){
            var paper={}
            paper.title=res.data.data.paperlist[i].title

            if(res.data.data.paperlist[i].authors.length>0)
            {
              var authors = res.data.data.paperlist[i].authors[0].name
              for(var j = 1;j<res.data.data.paperlist[i].authors.length;j++){
                authors = authors +", "+ res.data.data.paperlist[i].authors[j].name
              }
              paper.authors=authors
            }
            else{
              paper.authors="暂无相关信息"
            }
            if(res.data.data.paperlist[i].publisher===null){
              paper.publisher="暂无相关信息"
            }
            else{
              paper.publisher = res.data.data.paperlist[i].publisher
            }
            paper.year=res.data.data.paperlist[i].year
            paper.n_citation=res.data.data.paperlist[i].n_citation
            if(res.data.data.paperlist[i].id!==null){
              paper.id=res.data.data.paperlist[i].id
            }
            else{
              paper.id=res.data.data.paperlist[i].paperid
            }
            this.papers[i]=paper
          }
        }).catch((failResponse) => {
          console.log(failResponse)
        });

        this.$axios.get('/api/trend/paper/amount/rank',
          {
            params: {
              pagenum: 0
            }
          }
        ).then((res) => {
          this.papers_hot= [];
          console.log(res.data.data.paperlist)
          for(var i = 0; i < res.data.data.paperlist.length;i++){
            var paper={}
            paper.title=res.data.data.paperlist[i].title
            paper.amount = res.data.data.amountlist[i]
            if(res.data.data.paperlist[i].authors.length>0)
            {
              var authors = res.data.data.paperlist[i].authors[0].name
              for(var j = 1;j<res.data.data.paperlist[i].authors.length;j++){
                authors = authors +", "+ res.data.data.paperlist[i].authors[j].name
              }
              paper.authors=authors
            }
            else{
              paper.authors="暂无相关信息"
            }
            if(res.data.data.paperlist[i].publisher===null){
              paper.publisher="暂无相关信息"
            }
            else{
              paper.publisher = res.data.data.paperlist[i].publisher
            }
            paper.year=res.data.data.paperlist[i].year
            paper.n_citation=res.data.data.paperlist[i].n_citation
            if(res.data.data.paperlist[i].id!==null){
              paper.id=res.data.data.paperlist[i].id
            }
            else{
              paper.id=res.data.data.paperlist[i].paperid
            }
            this.papers_hot[i]=paper
          }
        }).catch((failResponse) => {
          console.log(failResponse)
        });
      }
    }

</script>

<style scoped>
</style>
