<template>
<div>
<div style="height:5px">
</div>
<div style="text-align:center">
<el-image :src="src" style="max-width:200px;height:auto;" lazy></el-image>
</div>
<br>
<el-row :gutter="40" type="flex" justify="center"> 
        <el-col :span="3">
          <el-select class="select" v-model="value" placeholder="标题">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.label">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="12">
          <el-input class="content" type="text" maxlength="25" v-model="text"></el-input>
          </el-col>
          <el-col :span="1">
          <el-button class="searchbutton" type="primary" @click="search()" icon="el-icon-search">搜索</el-button>
        </el-col>
</el-row>
<br>
<div v-if="!hot">
    <el-row class="lablea">
      <el-menu
        default-active="1"
        class="el-menu-demo"
        mode="horizontal"
        >
        <el-menu-item index="1" class="lablea-1" @click="show(1)">
          <div class="labela-2" style="font-size:15px">学术论文</div>
        </el-menu-item>
        <el-menu-item index="2" class="lablea-1" style="margin-left:100px" @click="show(2)">
          <div class="labela-2" style="font-size:15px">专利</div>
        </el-menu-item>
        <el-menu-item index="3" class="lablea-1" style="margin-left:100px" @click="show(3)">
          <div class="labela-2" style="font-size:15px">科研成果</div>
        </el-menu-item>
        <el-menu-item index="4" class="lablea-1" style="margin-left:100px" @click="show(4)">
          <div class="labela-2" style="font-size:15px">科研人员</div>
        </el-menu-item>
        <el-menu-item index="5" class="lablea-1" style="margin-left:100px" @click="show(5)">
          <div class="labela-2" style="font-size:15px">科研机构</div>
        </el-menu-item>
        <el-menu-item index="6" class="lablea-1" style="margin-left:100px" @click="showhot()">
          <div class="labela-2" style="font-size:15px">返回热点</div>
        </el-menu-item>
      </el-menu>
    </el-row>
<br>
<template>
  <el-table
    :data="papers"
    stripe
    style="width: 100%"
    >
    <el-table-column
      prop="title"
      label="专利名称"
      width="300"
      align="center">
      <template slot-scope="scope">
         <div @click="gopaperlink(scope.row)">{{scope.row.title}}</div>
      </template>
    </el-table-column>
    <el-table-column
      prop="authors"
      label="作者"
      width="180"
      align="center">
    </el-table-column>
    <el-table-column
      prop="publisher"
      label="来源"
      width="180"
      align="center">
    </el-table-column>
    <el-table-column
      prop="year"
      label="发表时间"
      width="300"
      align="center">
    </el-table-column>
    <el-table-column
      prop="n_citation"
      label="被引"
      align="center">
    </el-table-column>
  </el-table>
</template>
<br>
<div style="text-align:center">当前页数： {{Number(this.page1) + Number("1")}}</div>
<br>
<div style="text-align:center">
<el-button-group>
  <el-button :disabled="page1<1" type="primary" icon="el-icon-arrow-left" @click="lastpage()">上一页</el-button>
  <el-button :disabled="itemnumber1<20" type="primary" @click="nextpage()">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
</el-button-group> 
</div>
</div>


</div>    
</template>

<script>
import picture from "../assets/search.png"
export default {
    data(){
        return {
            src: picture,
            value:"标题",
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
            page1: 0,
            text: "",
            papers:[],
            itemnumber1:0,
            index:0,
        }
    },
    mounted(){
        this.search1()
        this.text = this.$route.query.text
        this.value = this.$route.query.value
    },
    methods:{
        show(num){
            if (num == 1) {
                this.$router.push({path:'/Search',query:{pagenum:this,page1,text:this.text,value:this.value}})
                this.$router.go(0);
            }
            else if(num ==2) 
            {
                this.$router.push({path:'/SearchPatent',query:{pagenum:0,text:this.text,value:this.value}})
                this.$router.go(0);
            }
            else if(num == 3)
            {
                this.$router.push({path:'/SearchAchievement',query:{pagenum:0,text:this.text,value:this.value}})
            this.$router.go(0);
            }
            else if (num == 5) {
                this.$router.push({path:'/SearchOrganizetion',query:{pagenum:0,text:this.text,value:this.value}})
            this.$router.go(0);
            }
            else if (num == 4) {
                this.$router.push({path:'/SearchScientists',query:{pagenum:0,text:this.text,value:this.value}})
                this.$router.go(0);
            }

        },
        gopaperlink(row){
            console.log(row.id);
            this.$router.push({path:'/paper',query:{paperid:row.id}})
        },
        search(){
            this.$router.push({path:'/Search',query:{pagenum:0,text:this.text,value:this.value}})
            this.$router.go(0);
        },
        nextpage(){

            this.$router.push({path:'/Search',query:{pagenum:(Number(this.page1)+Number("1")),text:this.text,value:this.value}})
            this.$router.go(0);
        },
        lastpage(){
            this.$router.push({path:'/Search',query:{pagenum:this.page1-1,text:this.text,value:this.value}})
            this.$router.go(0);
        },
        search1() {
        this.showwhat = 1
        var value = this.$route.query.value
        this.page1 = this.$route.query.pagenum
        if(value==="标题"){
          this.$axios.get('/api/data/paper/fuzzytitle',
            {
              params: {
                pagenum: this.$route.query.pagenum,
                title: this.$route.query.text
              }
            }
          ).then((res) => {
            console.log(res)
            this.papers=[]
            this.itemnumber1 = res.data.data.paperlist.length
            console.log(res.data.data.paperlist.length)
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
            this.itemnumber1=0
          });
        }
        else if(value==="科研人员"){
          this.$axios.get('/api/data/paper/authorfuzzyname',
            {
              query: {
                pagenum: this.$route.query.pagenum,
                author: this.$route.query.text,
              }
            }
          ).then((res) => {
            this.papers=[]
            this.itemnumber1 = res.data.data.paperlist.length
            console.log(res.data.data.paperlist.length)
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
            this.itemnumber1=0
          });
        }
        else if(value==="关键词"){
          this.$axios.get('/api/data/paper/fuzzykeyword',
            {
              query: {
                pagenum: this.$route.query.pagenum,
                keyword: this.$route.query.text
              }
            }
          ).then((res) => {
            this.papers=[]
            this.itemnumber1 = res.data.data.paperlist.length
            console.log(res.data.data.paperlist.length)
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
                paper.authors=""
              }
              if(res.data.data.paperlist[i].publisher===null){
                paper.publisher="无"
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
            this.itemnumber1=0
          });
        }
      },
    }

}
</script>

<style>
</style>