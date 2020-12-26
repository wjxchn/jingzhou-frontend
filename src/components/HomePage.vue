<template>
  <div>
    <el-row class="addspace">
      <el-form :inline="true" :model="text" status-icon ref="text"
               class="demo-ruleForm">

        <el-col class="col">
          <el-select class="select" v-model="value" placeholder="标题">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.label">
            </el-option>
          </el-select>
          <el-input class="content" type="text" maxlength="25" v-model="text"></el-input>
          <el-button class="searchbutton" type="primary" @click="search()">检索</el-button>
        </el-col>

      </el-form>
    </el-row>

    <div v-if="!hot">
    <el-row class="lablea">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1" class="lablea-1" @click="show(1)">
          <div class="labela-2">学术论文</div>
        </el-menu-item>
        <el-menu-item index="2" class="lablea-1" @click="show(2)">
          <div class="labela-2">专利</div>
        </el-menu-item>
        <el-menu-item index="3" class="lablea-1" @click="show(3)">
          <div class="labela-2">科研成果</div>
        </el-menu-item>
        <el-menu-item index="4" class="lablea-1" @click="show(4)">
          <div class="labela-2">科研人员</div>
        </el-menu-item>
        <el-menu-item index="5" class="lablea-1" @click="show(5)">
          <div class="labela-2">科研机构</div>
        </el-menu-item>
        <el-menu-item index="6" class="lablea-1" @click="showhot()">
          <div class="labela-2">返回热点</div>
        </el-menu-item>
      </el-menu>
    </el-row>

    <div v-if="showwhat===1" class="lableb">
      <div v-if="itemnumber1>0">
        <el-row class="lableitem">
          <el-col class="paper1">题名</el-col>
          <el-col class="paper2">作者</el-col>
          <el-col class="paper3">来源</el-col>
          <el-col class="paper4">发表时间</el-col>
          <el-col class="paper5">被引</el-col>
        </el-row>
        <div v-for="i in itemnumber1">
          <el-row v-if="i%2===1" class="itemsingle">
            <el-col class="paper1"><router-link :to="{path: '/paper',query:{paperid:papers[i-1].id}}" target="_blank">{{papers[i-1].title}}</router-link></el-col>
            <el-col class="paper2">{{papers[i-1].authors}}</el-col>
            <el-col class="paper3">{{papers[i-1].publisher}}</el-col>
            <el-col class="paper4">{{papers[i-1].year}}</el-col>
            <el-col class="paper5">{{papers[i-1].n_citation}}</el-col>
          </el-row>
          <el-row v-else-if="i%2===0" class="itemdouble">
            <el-col class="paper1"><router-link :to="{path: '/paper',query:{paperid:papers[i-1].id}}" target="_blank">{{papers[i-1].title}}</router-link></el-col>
            <el-col class="paper2">{{papers[i-1].authors}}</el-col>
            <el-col class="paper3">{{papers[i-1].publisher}}</el-col>
            <el-col class="paper4">{{papers[i-1].year}}</el-col>
            <el-col class="paper5">{{papers[i-1].n_citation}}</el-col>
          </el-row>
        </div>
        <el-row class="page">
          <div class="pagea">
            <el-link :disabled="page1<1" @click="search1(1)">上一页</el-link>
            <el-link :disabled="itemnumber1<20" @click="search1(2)">下一页</el-link>
          </div>
        </el-row>
      </div>
      <div v-if="itemnumber1===0">
        <el-row class="lableitem0"><div class="lableitema">该分类无搜索结果</div></el-row>
      </div>
    </div>

    <div v-if="showwhat===2" class="lableb">
      <div v-if="itemnumber2>0">
        <el-row class="lableitem">
          <el-col class="patent1">专利名称</el-col>
          <el-col class="patent2">发明人</el-col>
          <el-col class="patent3">专利类型</el-col>
          <el-col class="patent4">申请人</el-col>
          <el-col class="patent5">申请日</el-col>
          <el-col class="paper6">公开日</el-col>
        </el-row>
        <div v-for="i in itemnumber2">
          <el-row v-if="i%2===1" class="itemsingle">
            <el-col class="patent1"><router-link :to="{path: '/patent', query: {patentid: patents[i-1].patentid}}" target="_blank">{{patents[i-1].patentname}}</router-link></el-col>
            <el-col class="patent2">{{patents[i-1].inventor}}</el-col>
            <el-col class="patent3">{{patents[i-1].type}}</el-col>
            <el-col class="patent4">{{patents[i-1].applicant}}</el-col>
            <el-col class="patent5">{{patents[i-1].appdate}}</el-col>
            <el-col class="paper6">{{patents[i-1].pubdate}}</el-col>
          </el-row>
          <el-row v-else-if="i%2===0" class="itemdouble">
            <el-col class="patent1"><router-link :to="{path: '/patent', query: {patentid: patents[i-1].patentid}}" target="_blank">{{patents[i-1].patentname}}</router-link></el-col>
            <el-col class="patent2">{{patents[i-1].inventor}}</el-col>
            <el-col class="patent3">{{patents[i-1].type}}</el-col>
            <el-col class="patent4">{{patents[i-1].applicant}}</el-col>
            <el-col class="patent5">{{patents[i-1].appdate}}</el-col>
            <el-col class="patent6">{{patents[i-1].pubdate}}</el-col>
          </el-row>
        </div>
        <el-row class="page">
          <div class="pagea">
            <el-link :disabled="page2<1" @click="search2(1)">上一页</el-link>
            <el-link :disabled="itemnumber2<20" @click="search2(2)">下一页</el-link>
          </div>
        </el-row>
      </div>
      <div v-if="itemnumber2===0">
        <el-row class="lableitem0"><div class="lableitema">该分类无搜索结果</div></el-row>
      </div>
    </div>

    <div v-if="showwhat===3" class="lableb">
      <div v-if="itemnumber3>0">
        <el-row class="lableitem">
          <el-col class="project1">成果名称</el-col>
          <el-col class="project2">成果完成人</el-col>
          <el-col class="project3">第一完成单位</el-col>
          <el-col class="project4">完成时间</el-col>
        </el-row>
        <div v-for="i in itemnumber3">
          <el-row v-if="i%2===1" class="itemsingle">
            <el-col class="project1"><router-link :to="{path: '/achievement', query: {achievementid: projects[i-1].projectid}}" target="_blank">{{projects[i-1].title}}</router-link></el-col>
            <el-col class="project2">{{projects[i-1].researcher}}</el-col>
            <el-col class="project3">{{projects[i-1].institution}}</el-col>
            <el-col class="project4">{{projects[i-1].time}}</el-col>
          </el-row>
          <el-row v-else-if="i%2===0" class="itemdouble">
            <el-col class="project1"><router-link :to="{path: '/achievement', query: {achieventid: projects[i-1].projectid}}" target="_blank">{{projects[i-1].title}}</router-link></el-col>
            <el-col class="project2">{{projects[i-1].researcher}}</el-col>
            <el-col class="project3">{{projects[i-1].institution}}</el-col>
            <el-col class="project4">{{projects[i-1].time}}</el-col>
          </el-row>
        </div>
        <el-row class="page">
          <div class="pagea">
            <el-link :disabled="page3<1" @click="search3(1)">上一页</el-link>
            <el-link :disabled="itemnumber3<20" @click="search3(2)">下一页</el-link>
          </div>
        </el-row>
      </div>
      <div v-if="itemnumber3===0">
        <el-row class="lableitem0"><div class="lableitema">该分类无搜索结果</div></el-row>
      </div>
    </div>

    <div v-if="showwhat===5" class="lableb">
      <div v-if="itemnumber5>0">
        <el-row class="lableitem">
          <el-col class="orgnization1">机构名称</el-col>
        </el-row>
        <div v-for="i in itemnumber5">
          <el-row v-if="i%2===1" class="itemsingle">
            <el-col class="orgnization1">{{organizations[i-1].institutionname}}</el-col>
          </el-row>
          <el-row v-else-if="i%2===0" class="itemdouble">
            <el-col class="orgnization1">{{organizations[i-1].institutionname}}</el-col>
          </el-row>
        </div>
        <el-row class="page">
          <div class="pagea">
            <el-link :disabled="page5<1" @click="search5(1)">上一页</el-link>
            <el-link :disabled="itemnumber5<20" @click="search5(2)">下一页</el-link>
          </div>
        </el-row>
      </div>
      <div v-if="itemnumber5===0">
        <el-row class="lableitem0"><div class="lableitema">该分类无搜索结果</div></el-row>
      </div>
    </div>

    <div v-if="showwhat===4" class="lableb">
      <div v-if="itemnumber4>0">
        <el-row class="lableitem">
          <el-col class="scientist1">姓名</el-col>
          <el-col class="scientist2">单位</el-col>
          <el-col class="scientist3">研究领域</el-col>
        </el-row>
        <div v-for="i in itemnumber4">
          <el-row v-if="i%2===1" class="itemsingle">
            <el-col class="scientist1"><router-link :to="{path: '/personalpage', query: {username: scientists[i-1].username}}" target="_blank">{{scientists[i-1].username}}</router-link></el-col>
            <el-col class="scientist2">{{scientists[i-1].organization}}</el-col>
            <el-col class="scientist3">{{scientists[i-1].researchfield}}</el-col>
          </el-row>
          <el-row v-else-if="i%2===0" class="itemdouble">
            <el-col class="scientist1"><router-link :to="{path: '/personalpage', query: {username: scientists[i-1].username}}" target="_blank">{{scientists[i-1].username}}</router-link></el-col>
            <el-col class="scientist2">{{scientists[i-1].organization}}</el-col>
            <el-col class="scientist3">{{scientists[i-1].researchfield}}</el-col>
          </el-row>
        </div>
        <el-row class="page">
          <div class="pagea">
            <el-link :disabled="page4<1" @click="search4(1)">上一页</el-link>
            <el-link :disabled="itemnumber4<20" @click="search4(2)">下一页</el-link>
          </div>
        </el-row>
      </div>
      <div v-if="itemnumber4===0">
        <el-row class="lableitem0"><div class="lableitema">该分类无搜索结果</div></el-row>
      </div>
    </div>
    </div>

    <div v-if="hot">
      <el-row class="lablea">
        <el-menu
          :default-active="true"
          class="lablec"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="2" class="lablec-1" @click="show(6)">
            <div class="labelc-3">热点论文</div>
          </el-menu-item>
          <el-menu-item index="3" class="lablec-2" @click="show(7)">
            <div class="labelc-3">高被引论文</div>
          </el-menu-item>
        </el-menu>
      </el-row>

      <div v-if="showwhat===6" class="lableb">
        <el-row class="lableitem">
          <el-col class="paper1">题名</el-col>
          <el-col class="paper2">作者</el-col>
          <el-col class="paper3">来源</el-col>
          <el-col class="paper4">发表时间</el-col>
          <el-col class="paper5">点击次数</el-col>
        </el-row>
        <div v-for="i in itemnumber6">
          <el-row v-if="i%2===1" class="itemsingle">
            <el-col class="paper1"><router-link :to="{path: '/paper',query:{paperid:papers1[i-1].id}}" target="_blank">{{papers1[i-1].title}}</router-link></el-col>
            <el-col class="paper2">{{papers1[i-1].authors}}</el-col>
            <el-col class="paper3">{{papers1[i-1].publisher}}</el-col>
            <el-col class="paper4">{{papers1[i-1].year}}</el-col>
            <el-col class="paper5">{{papers1[i-1].amount}}</el-col>
          </el-row>
          <el-row v-else-if="i%2===0" class="itemdouble">
            <el-col class="paper1"><router-link :to="{path: '/paper',query:{paperid:papers1[i-1].id}}" target="_blank">{{papers1[i-1].title}}</router-link></el-col>
            <el-col class="paper2">{{papers1[i-1].authors}}</el-col>
            <el-col class="paper3">{{papers1[i-1].publisher}}</el-col>
            <el-col class="paper4">{{papers1[i-1].year}}</el-col>
            <el-col class="paper5">{{papers1[i-1].amount}}</el-col>
          </el-row>
        </div>
        <el-row class="page">
          <div class="pagea">
            <el-link :disabled="page6<1" @click="search6(1)">上一页</el-link>
            <el-link :disabled="itemnumber6<20" @click="search6(2)">下一页</el-link>
          </div>
        </el-row>
      </div>

      <div v-if="showwhat===7" class="lableb">
        <el-row class="lableitem">
          <el-col class="paper1">题名</el-col>
          <el-col class="paper2">作者</el-col>
          <el-col class="paper3">来源</el-col>
          <el-col class="paper4">发表时间</el-col>
          <el-col class="paper5">被引</el-col>
        </el-row>
        <div v-for="i in itemnumber7">
          <el-row v-if="i%2===1" class="itemsingle">
            <el-col class="paper1"><router-link :to="{path: '/paper',query:{paperid:papers2[i-1].id}}" target="_blank">{{papers2[i-1].title}}</router-link></el-col>
            <el-col class="paper2">{{papers2[i-1].authors}}</el-col>
            <el-col class="paper3">{{papers2[i-1].publisher}}</el-col>
            <el-col class="paper4">{{papers2[i-1].year}}</el-col>
            <el-col class="paper5">{{papers2[i-1].n_citation}}</el-col>
          </el-row>
          <el-row v-else-if="i%2===0" class="itemdouble">
            <el-col class="paper1"><router-link :to="{path: '/paper',query:{paperid:papers2[i-1].id}}" target="_blank">{{papers2[i-1].title}}</router-link></el-col>
            <el-col class="paper2">{{papers2[i-1].authors}}</el-col>
            <el-col class="paper3">{{papers2[i-1].publisher}}</el-col>
            <el-col class="paper4">{{papers2[i-1].year}}</el-col>
            <el-col class="paper5">{{papers2[i-1].n_citation}}</el-col>
          </el-row>
        </div>
        <el-row class="page">
          <div class="pagea">
            <el-link :disabled="page7<1" @click="search7(1)">上一页</el-link>
            <el-link :disabled="itemnumber7<20" @click="search7(2)">下一页</el-link>
          </div>
        </el-row>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "HomePage.vue",
    data() {
      return {
        text:"",
        activeIndex: '1',
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
        }, {
          value: '选项4',
          label: '科研机构'
        }],

        showwhat: 7,

        itemnumber1: 0,
        itemnumber2: 0,
        itemnumber3: 0,
        itemnumber4: 0,
        itemnumber5: 0,
        itemnumber6: 0,
        itemnumber7: 0,

        page1: 0,
        page2: 0,
        page3: 0,
        page4: 0,
        page5: 0,
        page6: 0,
        page7: 0,

        shownext1: true,
        shownext2: true,
        shownext3: true,
        shownext4: true,
        shownext5: true,

        papers: [

        ],

        papers1: [

        ],

        papers2: [

        ],

        patents: [
        ],

        projects: [
        ],

        scientists: [
        ],

        organizations: [
        ],

        hot:true
      };
    },
    methods: {
      show(num) {
        this.showwhat = num
      },

      search() {
        this.hot=false
        this.page1=0
        this.page2=0
        this.page3=0
        this.page4=0
        this.page5=0
        if(this.value==="标题"){
          this.showwhat=1
          this.itemnumber2=0
          this.itemnumber3=0
          this.itemnumber4=0
          this.itemnumber5=0
          this.$axios.get('/api/data/paper/fuzzytitle',
            {
              params: {
                pagenum: this.page1,
                title: this.text
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
          this.$axios.get('/api/api/fuzzysearchpatent',
            {
              params: {
                pagenum: this.page2,
                keywords: this.text
              }
            }
          ).then((res) => {
            this.patents=[]
            this.itemnumber2 = res.data.data.patents.length
            for(var i = 0; i < res.data.data.patents.length;i++){
              var patent={}
              patent.patentid=res.data.data.patents[i].patentid
              patent.patentname=res.data.data.patents[i].patentname
              patent.inventor=res.data.data.patents[i].inventor
              patent.type=res.data.data.patents[i].type
              patent.applicant=res.data.data.patents[i].applicant
              patent.appdate=res.data.data.patents[i].appdate
              patent.pubdate=res.data.data.patents[i].pubdate
              this.patents[i]=patent
            }
          }).catch((failResponse) => {
            this.itemnumber2=0
          });
          this.$axios.get('/api/api/fuzzysearchproject',
            {
              params: {
                pagenum: this.page3,
                keywords: this.text
              }
            }
          ).then((res) => {
            this.projects=[]
            this.itemnumber3 = res.data.data.projects.length
            for(var i = 0; i < res.data.data.projects.length;i++){
              var project={}
              project.projectid=res.data.data.projects[i].projectid
              project.title=res.data.data.projects[i].projectname
              project.researcher=res.data.data.projects[i].researcher
              project.institution=res.data.data.projects[i].institution
              project.time=res.data.data.projects[i].intime
              this.projects[i]=project
            }
          }).catch((failResponse) => {
            this.itemnumber3=0
          });
          this.activeIndex = '1'
        }
        else if(this.value==="关键词"){
          this.showwhat=1
          this.itemnumber4=0
          this.itemnumber5=0
          this.$axios.get('/api/data/paper/fuzzykeyword',
            {
              params: {
                pagenum: this.page1,
                keyword: this.text
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
          this.$axios.get('/api/api/fuzzysearchpatent',
            {
              params: {
                pagenum: this.page2,
                keywords: this.text
              }
            }
          ).then((res) => {
            this.patents=[]
            this.itemnumber2 = res.data.data.patents.length
            for(var i = 0; i < res.data.data.patents.length;i++){
              var patent={}
              patent.patentid=res.data.data.patents[i].patentid
              patent.patentname=res.data.data.patents[i].patentname
              patent.inventor=res.data.data.patents[i].inventor
              patent.type=res.data.data.patents[i].type
              patent.applicant=res.data.data.patents[i].applicant
              patent.appdate=res.data.data.patents[i].appdate
              patent.pubdate=res.data.data.patents[i].pubdate
              this.patents[i]=patent
            }
          }).catch((failResponse) => {
            this.itemnumber2=0
          });
          this.$axios.get('/api/api/fuzzysearchproject',
            {
              params: {
                pagenum: this.page3,
                keywords: this.text
              }
            }
          ).then((res) => {
            this.projects=[]
            this.itemnumber3 = res.data.data.projects.length
            for(var i = 0; i < res.data.data.projects.length;i++){
              var project={}
              project.projectid=res.data.data.projects[i].projectid
              project.title=res.data.data.projects[i].projectname
              project.researcher=res.data.data.projects[i].researcher
              project.institution=res.data.data.projects[i].institution
              project.time=res.data.data.projects[i].intime
              this.projects[i]=project
            }
          }).catch((failResponse) => {
            this.itemnumber3=0
          });
          this.activeIndex = '1'
        }
        else if(this.value==="科研人员"){
          this.showwhat=4
          this.itemnumber2=0
          this.itemnumber3=0
          this.itemnumber5=0
          this.$axios.get('/api/data/author/byfuzzyname',
            {
              params: {
                pagenum: this.page4,
                name: this.text
              }
            }
          ).then((res) => {
            this.scientists=[]
            this.itemnumber4 = res.data.data.authorList.length
            for(var i = 0; i < res.data.data.authorList.length;i++){
              var author={}
              author.username=res.data.data.authorList[i].name
              if(res.data.data.authorList[i].orgs===null){
                author.organization="无"
              }
              else if(res.data.data.authorList[i].orgs.length>0)
              {
                var orgs = res.data.data.authorList[i].orgs[0]
                for(var j = 1;j<res.data.data.authorList[i].orgs.length;j++){
                  orgs = orgs +", "+ res.data.data.authorList[i].orgs[j]
                }
                author.organization=orgs
              }
              else{
                author.organization="无"
              }
              if(res.data.data.authorList[i].position===null){
                author.researchfield="无"
              }
              else{
                author.researchfield = res.data.data.authorList[i].position
              }
              if(res.data.data.authorList[i].id===null){
                author.authuserid=1
              }
              else{
                author.authuserid=res.data.data.authorList[i].id
              }
              this.scientists[i]=author
            }
          }).catch((failResponse) => {
            this.itemnumber4=0
          });
          this.$axios.get('/api/data/paper/authorfuzzyname',
            {
              params: {
                pagenum: this.page1,
                author: this.text
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
          this.activeIndex = '4'
        }
        else if(this.value==="科研机构"){
          this.showwhat=5
          this.itemnumber1=0
          this.itemnumber2=0
          this.itemnumber3=0
          this.itemnumber4=0
        }
      },

      search1(num) {
        this.showwhat = 1
        if(num===1){
          this.page1=this.page1-1
        }
        else if(num===2){
          this.page1=this.page1+1
        }
        if(this.value==="标题"){
          this.$axios.get('/api/data/paper/fuzzytitle',
            {
              params: {
                pagenum: this.page1,
                title: this.text
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
        else if(this.value==="科研人员"){
          this.$axios.get('/api/data/paper/authorfuzzyname',
            {
              params: {
                pagenum: this.page1,
                author: this.text
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
        else if(this.value==="关键词"){
          this.$axios.get('/api/data/paper/fuzzykeyword',
            {
              params: {
                pagenum: this.page1,
                keyword: this.text
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

      search2(num) {
        this.showwhat = 2
        if(num===1){
          this.page2=this.page2-1
        }
        else if(num===2){
          this.page2=this.page2+1
        }
        this.$axios.get('/api/api/fuzzysearchpatent',
          {
            params: {
              pagenum: this.page2,
              keywords: this.text
            }
          }
        ).then((res) => {
          this.patents=[]
          this.itemnumber2 = res.data.data.patents.length
          for(var i = 0; i < res.data.data.patents.length;i++){
            var patent={}
            patent.patentid=res.data.data.patents[i].patentid
            patent.patentname=res.data.data.patents[i].patentname
            patent.inventor=res.data.data.patents[i].inventor
            patent.type=res.data.data.patents[i].type
            patent.applicant=res.data.data.patents[i].applicant
            patent.appdate=res.data.data.patents[i].appdate
            patent.pubdate=res.data.data.patents[i].pubdate
            this.patents[i]=patent
          }
        }).catch((failResponse) => {
          this.itemnumber2=0
        });

      },

      search3(num) {
        this.showwhat = 3
        if(num===1){
          this.page3=this.page3-1
        }
        else if(num===2){
          this.page3=this.page3+1
        }
        this.$axios.get('/api/api/fuzzysearchproject',
          {
            params: {
              pagenum: this.page3,
              keywords: this.text
            }
          }
        ).then((res) => {
          this.projects=[]
          this.itemnumber3 = res.data.data.projects.length
          for(var i = 0; i < res.data.data.projects.length;i++){
            var project={}
            project.projectid=res.data.data.projects[i].projectid
            project.title=res.data.data.projects[i].projectname
            project.researcher=res.data.data.projects[i].researcher
            project.institution=res.data.data.projects[i].institution
            project.time=res.data.data.projects[i].intime
            this.projects[i]=project
          }
        }).catch((failResponse) => {
          this.itemnumber3=0
        });
      },

      search4(num) {
        this.showwhat = 4
        if(num===1){
          this.page4=this.page4-1
        }
        else if(num===2){
          this.page4=this.page4+1
        }
        this.$axios.get('/api/data/author/byfuzzyname',
          {
            params: {
              pagenum: this.page4,
              name: this.text
            }
          }
        ).then((res) => {
          this.scientists=[]
          this.itemnumber4 = res.data.data.authorList.length
          for(var i = 0; i < res.data.data.authorList.length;i++){
            var author={}
            author.username=res.data.data.authorList[i].name
            if(res.data.data.authorList[i].orgs===null){
              author.organization="无"
            }
            else if(res.data.data.authorList[i].orgs.length>0)
            {
              var orgs = res.data.data.authorList[i].orgs[0]
              for(var j = 1;j<res.data.data.authorList[i].orgs.length;j++){
                orgs = orgs +", "+ res.data.data.authorList[i].orgs[j]
              }
              author.organization=orgs
            }
            else{
              author.organization="无"
            }
            if(res.data.data.authorList[i].position===null){
              author.researchfield="无"
            }
            else{
              author.researchfield = res.data.data.authorList[i].position
            }
            if(res.data.data.authorList[i].id===null){
              author.authuserid=1
            }
            else{
              author.authuserid=res.data.data.authorList[i].id
            }
            this.scientists[i]=author
          }
        }).catch((failResponse) => {
          this.itemnumber4=0
        });
      },

      search5(num) {
        this.showwhat = 5
        if(num===1){
          this.page5=this.page5-1
        }
        else if(num===2){
          this.page5=this.page5+1
        }
      },

      showhot(){
        this.hot=true
        this.showwhat=7
      },

      search6(num){
        if(num===1){
          this.page6=this.page6-1
        }
        else if(num===2){
          this.page6=this.page6+1
        }
        this.$axios.get('/api/trend/paper/amount/rank',
          {
            params: {
              pagenum: this.page6
            }
          }
        ).then((res) => {
          this.papers=[]
          this.itemnumber6 = res.data.data.paperlist.length
          console.log(res.data.data.paperlist.length)
          console.log(res.data.data.paperlist)
          console.log(res.data.data.amountlist)
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
            this.papers1[i]=paper
          }
        }).catch((failResponse) => {
          this.itemnumber6=0
        });
      },

      search7(num){
        if(num===1){
          this.page7=this.page7-1
        }
        else if(num===2){
          this.page7=this.page7+1
        }
        this.$axios.get('/api/trend/paper/citation/rank',
          {
            params: {
              pagenum: this.page7
            }
          }
        ).then((res) => {
          this.papers=[]
          this.itemnumber7 = res.data.data.paperlist.length
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
            this.papers2[i]=paper
          }
        }).catch((failResponse) => {
          this.itemnumber7=0
        });
      }

    },
    mounted() {
      this.search6(0)
      this.search7(0)
    },
  }
</script>

<style scoped>
  .addspace {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
  }

  .demo-ruleForm {
    width: 840px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
  }

  .searchbutton {
    height: 38px;
    margin-top: 5px;
    width: 110px;
  }

  .col {
    width: 840px;
  }

  .select {
    margin-top: 5px;
    width: 110px;
  }

  .content {
    margin-top: 5px;
    width: 600px;
  }

  .lablea {
    height: 80px;
    width: 100%;
    margin-top: 20px;
    background: #545c64;
  }

  .lablea-1 {
    height: 80px;
    width: 200px;
    text-align: center;
  }

  .labela-2 {
    width: 170px;
    height: 68px;
    margin-top: 12px;
    font-size: 13pt;
    text-align: center;
  }

  .el-menu-demo {
    height: 80px;
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  .lablec {
    height: 80px;
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  .lablec-1 {
    height: 80px;
    width: 240px;
    margin-left: 360px;
  }

  .lablec-2 {
    height: 80px;
    width: 240px;
  }

  .labelc-3 {
    width: 200px;
    height: 68px;
    margin-top: 12px;
    font-size: 13pt;
    text-align: center;
  }

  .lableb {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  .lableitem {
    display: flex;
    align-items: center;
    width: 1200px;
    height: 50px;
    background: gainsboro;
    font-size: 16px;
  }

  .lableitem0 {
    text-align: center;
    width: 1200px;
    height: 70px;
    background: beige;
    font-size: 18px;
  }

  .lableitema {
    width: 1200px;
    height: 45px;
    margin-top: 25px;
  }

  .itemsingle {
    display: flex;
    align-items: center;
    width: 1200px;
    min-height: 40px;
    background: ghostwhite;
  }

  .itemdouble {
    display: flex;
    align-items: center;
    width: 1200px;
    background: white;
    min-height: 40px;
  }

  .page {
    width: 1200px;
    height: 45px;
    background: gainsboro;
  }

  .pagea {
    width: 160px;
    margin-left: 540px;
    height: 35px;
    margin-top: 10px;
  }

  .paper1 {
    width: 460px;
    margin-top: 15px;
    margin-bottom: 10px;
    margin-left: 15px;
    margin-right: 10px;
    word-break: break-all
  }

  .paper2 {
    width: 160px;
    margin-top: 15px;
    margin-bottom: 10px;
    margin-left: 15px;
    margin-right: 10px;
    word-break: break-all
  }

  .paper3 {
    width: 140px;
    margin-top: 15px;
    margin-bottom: 10px;
    margin-left: 15px;
    margin-right: 10px;
    word-break: break-all
  }

  .paper4 {
    width: 110px;
    margin-top: 15px;
    margin-bottom: 10px;
    margin-left: 15px;
    margin-right: 10px;
    word-break: break-all
  }

  .paper5 {
    width: 90px;
    margin-top: 15px;
    margin-bottom: 10px;
    margin-left: 15px;
    margin-right: 10px;
    word-break: break-all
  }

  .paper6 {
    width: 90px;
    margin-top: 15px;
    margin-bottom: 10px;
    margin-left: 15px;
    margin-right: 10px;
    word-break: break-all
  }

  .patent1 {
    width: 460px;
    margin-top: 15px;
    margin-bottom: 10px;
    margin-left: 15px;
    margin-right: 10px;
    word-break: break-all
  }

  .patent2 {
    width: 160px;
    margin-top: 15px;
    margin-bottom: 10px;
    margin-left: 15px;
    margin-right: 10px;
    word-break: break-all
  }

  .patent3 {
    width: 140px;
    margin-top: 15px;
    margin-bottom: 10px;
    margin-left: 15px;
    margin-right: 10px;
    word-break: break-all
  }

  .patent4 {
    width: 110px;
    margin-top: 15px;
    margin-bottom: 10px;
    margin-left: 15px;
    margin-right: 10px;
    word-break: break-all
  }

  .patent5 {
    width: 90px;
    margin-top: 15px;
    margin-bottom: 10px;: 15 px;
    margin-right: 10px;
    word-break: break-all
  }

  .patent6 {
    width: 90px;
    margin-top: 15px;
    margin-bottom: 10px;
    margin-left: 15px;
    margin-right: 10px;
    word-break: break-all
  }

  .project1 {
    width: 500px;
    margin-top: 15px;
    margin-bottom: 10px;
    margin-left: 15px;
    margin-right: 10px;
    word-break: break-all
  }

  .project2 {
    width: 230px;
    margin-top: 15px;
    margin-bottom: 10px;
    margin-left: 15px;
    margin-right: 10px;
    word-break: break-all
  }

  .project3 {
    width: 160px;
    margin-top: 15px;
    margin-bottom: 10px;
    margin-left: 15px;
    margin-right: 10px;
    word-break: break-all
  }

  .project4 {
    width: 160px;
    margin-top: 15px;
    margin-bottom: 10px;
    margin-left: 15px;
    margin-right: 10px;
    word-break: break-all
  }

  .orgnization1 {
    margin-top: 15px;
    margin-bottom: 10px;
    margin-left: 15px;
    margin-right: 10px;
    word-break: break-all
  }

  .scientist1 {
    width: 350px;
    margin-top: 15px;
    margin-bottom: 10px;
    margin-left: 15px;
    margin-right: 10px;
    word-break: break-all
  }

  .scientist2 {
    width: 350px;
    margin-top: 15px;
    margin-bottom: 10px;
    margin-left: 15px;
    margin-right: 10px;
    word-break: break-all
  }

  .scientist3 {
    width: 350px;
    margin-top: 15px;
    margin-bottom: 10px;
    margin-left: 15px;
    margin-right: 10px;
    word-break: break-all
  }

</style>
