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
          <el-select class="select" v-model="value" placeholder="标题" disabled>
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
<div>
    <el-row class="lablea">
      <el-menu
        default-active="3"
        class="el-menu-demo"
        mode="horizontal"
        >
        <el-menu-item index="1" class="lablea-1" @click="show(1)" style="margin-left:100px">
          <div class="labela-2" style="font-size:15px">学术论文</div>
        </el-menu-item>
        <el-menu-item index="2" class="lablea-1" style="margin-left:200px" @click="show(2)">
          <div class="labela-2" style="font-size:15px">专利</div>
        </el-menu-item>
        <el-menu-item index="3" class="lablea-1" style="margin-left:200px" @click="show(3)">
          <div class="labela-2" style="font-size:15px">科研成果</div>
        </el-menu-item>
        <el-menu-item index="4" class="lablea-1" style="margin-left:200px" @click="show(4)">
          <div class="labela-2" style="font-size:15px">科研人员</div>
        </el-menu-item>
      </el-menu>
    </el-row>
<br>
<template>
  <el-table
    :data="projects"
    stripe
    style="width: 100%"
    >
    <el-table-column
      prop="title"
      label="成果名称"
      width="300"
      align="center">
      <template slot-scope="scope">
         <div @click="gopaperlink(scope.row)">{{scope.row.title}}</div>
      </template>
    </el-table-column>
    <el-table-column
      prop="researcher"
      label="成果完成人"
      width="180"
      align="center">
    </el-table-column>
    <el-table-column
      prop="institution"
      label="第一完成单位"
      width="300"
      align="center">
    </el-table-column>
    <el-table-column
      prop="time"
      label="完成时间"
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
            projects:[],
            itemnumber1:0,
            index:0,
        }
    },
    mounted(){
        this.search1()
        this.text = this.$route.query.text
    },
    methods:{
        show(num){
            if (num == 1) {
                this.$router.push({path:'/Search',query:{pagenum:0,text:this.text,value:this.value}})
                this.$router.go(0);
            }
            else if(num ==2) 
            {
                this.$router.push({path:'/SearchPatent',query:{pagenum:0,text:this.text}})
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
            this.$router.push({path:'/achievement',query:{achievementid:row.projectid}})
        },
        search(){
            this.$router.push({path:'/SearchAchievement',query:{pagenum:0,text:this.text}})
            this.$router.go(0);
        },
        nextpage(){

            this.$router.push({path:'/SearchAchievement',query:{pagenum:(Number(this.page1)+Number("1")),text:this.text}})
            this.$router.go(0);
        },
        lastpage(){
            this.$router.push({path:'/SearchAchievement',query:{pagenum:this.page1-1,text:this.text}})
            this.$router.go(0);
        },
        search1() {
        var value = this.$route.query.value
        this.page1 = this.$route.query.pagenum
          this.$axios.get('/api/api/fuzzysearchproject',
            {
              params: {
                pagenum: this.$route.query.pagenum,
                keywords: this.$route.query.text
              }
            }
          ).then((res) => {
            console.log(res.data.data.projects)
          this.projects=[]
          this.itemnumber1 = res.data.data.projects.length
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
            this.itemnumber1=0
          });
        }
      },
    }
</script>

<style>
</style>