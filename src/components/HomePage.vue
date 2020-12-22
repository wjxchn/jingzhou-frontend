<template>
  <div>
    <el-row class="addspace">
      <el-form :inline="true" :model="ruleform" status-icon :rules="rules" ref="ruleform"
               class="demo-ruleForm">

        <el-col class="col" v-if="shows.show1">
          <el-select class="bind0" v-model="ruleform.binds.bind1" placeholder="AND">
            <el-option
              v-for="item in bindoptions"
              :key="item.value"
              :label="item.label"
              :value="item.label">
            </el-option>
          </el-select>
          <el-select class="select" v-model="ruleform.values.value1" placeholder="主题">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.label">
            </el-option>
          </el-select>
          <el-input class="content" type="text" maxlength="25" v-model="ruleform.texts.text1"></el-input>
          <el-button class="plus" v-if="iconshows.iconshow1" plain @click="plus(1)">添加</el-button>
        </el-col>

        <el-col class="col" v-if="shows.show2">
          <el-select class="bind" v-model="ruleform.binds.bind2" placeholder="AND">
            <el-option
              v-for="item in bindoptions"
              :key="item.value"
              :label="item.label"
              :value="item.label">
            </el-option>
          </el-select>
          <el-select class="select" v-model="ruleform.values.value2" placeholder="主题">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.label">
            </el-option>
          </el-select>
          <el-input class="content" type="text" maxlength="25" v-model="ruleform.texts.text2"></el-input>
          <el-button plain @click="minus(2)">删除</el-button>
          <el-button class="plus" v-if="iconshows.iconshow2" plain @click="plus(2)">添加</el-button>
        </el-col>

        <el-col class="col" v-if="shows.show3">
          <el-select class="bind" v-model="ruleform.binds.bind3" placeholder="AND">
            <el-option
              v-for="item in bindoptions"
              :key="item.value"
              :label="item.label"
              :value="item.label">
            </el-option>
          </el-select>
          <el-select class="select" v-model="ruleform.values.value3" placeholder="主题">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.label">
            </el-option>
          </el-select>
          <el-input class="content" type="text" maxlength="25" v-model="ruleform.texts.text3"></el-input>
          <el-button plain @click="minus(3)">删除</el-button>
          <el-button class="plus" v-if="iconshows.iconshow3" plain @click="plus(3)">添加</el-button>
        </el-col>

        <el-col class="col" v-if="shows.show4">
          <el-select class="bind" v-model="ruleform.binds.bind4" placeholder="AND">
            <el-option
              v-for="item in bindoptions"
              :key="item.value"
              :label="item.label"
              :value="item.label">
            </el-option>
          </el-select>
          <el-select class="select" v-model="ruleform.values.value4" placeholder="主题">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.label">
            </el-option>
          </el-select>
          <el-input class="content" type="text" maxlength="25" v-model="ruleform.texts.text4"></el-input>
          <el-button plain @click="minus(4)">删除</el-button>
          <el-button class="plus" v-if="iconshows.iconshow4" plain @click="plus(4)">添加</el-button>
        </el-col>

        <el-col class="col" v-if="shows.show5">
          <el-select class="bind" v-model="ruleform.binds.bind5" placeholder="AND">
            <el-option
              v-for="item in bindoptions"
              :key="item.value"
              :label="item.label"
              :value="item.label">
            </el-option>
          </el-select>
          <el-select class="select" v-model="ruleform.values.value5" placeholder="主题">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.label">
            </el-option>
          </el-select>
          <el-input class="content" type="text" maxlength="25" v-model="ruleform.texts.text"></el-input>
          <el-button plain @click="minus(5)">删除</el-button>
        </el-col>

        <el-col class="col1">
          <el-button class="searchbutton" type="primary" @click="search()">检索</el-button>
        </el-col>

      </el-form>
    </el-row>

    <el-row class="lablea">
      <el-menu
        :default-active="true"
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
      </el-menu>
    </el-row>

    <div v-if="showwhat===1" class="lableb">
      <el-row class="lableitem">
        <el-col class="paper1">题名</el-col>
        <el-col class="paper2">作者</el-col>
        <el-col class="paper3">来源</el-col>
        <el-col class="paper4">发表时间</el-col>
        <el-col class="paper5">被引</el-col>
      </el-row>
      <div v-for="i in itemnumber1">
        <el-row v-if="i%2===1" class="itemsingle">
          <el-col class="paper1"><router-link :to="{name: 'home',params:{paperId:papers[i-1].id}}">{{papers[i-1].title}}</router-link></el-col>
          <el-col class="paper2">{{papers[i-1].authors}}</el-col>
          <el-col class="paper3">{{papers[i-1].venue.raw}}</el-col>
          <el-col class="paper4">{{papers[i-1].year}}</el-col>
          <el-col class="paper5">{{papers[i-1].n_citation}}</el-col>
        </el-row>
        <el-row v-else-if="i%2===0" class="itemdouble">
          <el-col class="paper1"><router-link :to="{name: 'home',params:{paperId:papers[i-1].id}}">{{papers[i-1].title}}</router-link></el-col>
          <el-col class="paper2">{{papers[i-1].authors}}</el-col>
          <el-col class="paper3">{{papers[i-1].venue.raw}}</el-col>
          <el-col class="paper4">{{papers[i-1].year}}</el-col>
          <el-col class="paper5">{{papers[i-1].n_citation}}</el-col>
        </el-row>
      </div>
      <el-row class="page">
        <div class="pagea">
          <el-link :disabled="page1<2" @click="search1(1)">上一页</el-link>
          <el-link :disabled="!shownext1" @click="search1(2)">下一页</el-link>
        </div>
      </el-row>
    </div>

    <div v-if="showwhat===2" class="lableb">
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
          <el-col class="patent1"><router-link :to="{name: 'PatentShow', params: {patentId: patents[i-1].patentid}}">{{patents[i-1].patentname}}</router-link></el-col>
          <el-col class="patent2">{{patents[i-1].inventor}}</el-col>
          <el-col class="patent3">{{patents[i-1].type}}</el-col>
          <el-col class="patent4">{{patents[i-1].applicant}}</el-col>
          <el-col class="patent5">{{patents[i-1].appdate}}</el-col>
          <el-col class="paper6">{{patents[i-1].pubdate}}</el-col>
        </el-row>
        <el-row v-else-if="i%2===0" class="itemdouble">
          <el-col class="patent1"><router-link :to="{name: 'PatentShow', params: {patentId: patents[i-1].patentid}}">{{patents[i-1].patentname}}</router-link></el-col>
          <el-col class="patent2">{{patents[i-1].inventor}}</el-col>
          <el-col class="patent3">{{patents[i-1].type}}</el-col>
          <el-col class="patent4">{{patents[i-1].applicant}}</el-col>
          <el-col class="patent5">{{patents[i-1].appdate}}</el-col>
          <el-col class="patent6">{{patents[i-1].pubdate}}</el-col>
        </el-row>
      </div>
      <el-row class="page">
        <div class="pagea">
          <el-link :disabled="page2<2" @click="search2(1)">上一页</el-link>
          <el-link :disabled="!shownext2" @click="search2(2)">下一页</el-link>
        </div>
      </el-row>
    </div>

    <div v-if="showwhat===3" class="lableb">
      <el-row class="lableitem">
        <el-col class="project1">成果名称</el-col>
        <el-col class="project2">成果完成人</el-col>
        <el-col class="project3">第一完成单位</el-col>
        <el-col class="project4">完成时间</el-col>
      </el-row>
      <div v-for="i in itemnumber3">
        <el-row v-if="i%2===1" class="itemsingle">
          <el-col class="project1"><router-link :to="{name: 'Achievement', params: {projectId: projects[i-1].projectid}}">{{projects[i-1].title}}</router-link></el-col>
          <el-col class="project2">{{projects[i-1].researcher}}</el-col>
          <el-col class="project3">{{projects[i-1].institution}}</el-col>
          <el-col class="project4">{{projects[i-1].time}}</el-col>
        </el-row>
        <el-row v-else-if="i%2===0" class="itemdouble">
          <el-col class="project1"><router-link :to="{name: 'Achievement', params: {projectId: projects[i-1].projectid}}">{{projects[i-1].title}}</router-link></el-col>
          <el-col class="project2">{{projects[i-1].researcher}}</el-col>
          <el-col class="project3">{{projects[i-1].institution}}</el-col>
          <el-col class="project4">{{projects[i-1].time}}</el-col>
        </el-row>
      </div>
      <el-row class="page">
        <div class="pagea">
          <el-link :disabled="page3<2" @click="search3(1)">上一页</el-link>
          <el-link :disabled="!shownext3" @click="search3(2)">下一页</el-link>
        </div>
      </el-row>
    </div>

    <div v-if="showwhat===5" class="lableb">
      <el-row class="lableitem">
        <el-col class="orgnization1">机构名称</el-col>
      </el-row>
      <div v-for="i in itemnumber4">
        <el-row v-if="i%2===1" class="itemsingle">
          <el-col class="orgnization1">{{organizations[i-1].institutionname}}</el-col>
        </el-row>
        <el-row v-else-if="i%2===0" class="itemdouble">
          <el-col class="orgnization1">{{organizations[i-1].institutionname}}</el-col>
        </el-row>
      </div>
      <el-row class="page">
        <div class="pagea">
          <el-link :disabled="page5<2" @click="search5(1)">上一页</el-link>
          <el-link :disabled="!shownext5" @click="search5(2)">下一页</el-link>
        </div>
      </el-row>
    </div>

    <div v-if="showwhat===4" class="lableb">
      <el-row class="lableitem">
        <el-col class="scientist1">姓名</el-col>
        <el-col class="scientist2">单位</el-col>
        <el-col class="scientist3">研究领域</el-col>
      </el-row>
      <div v-for="i in itemnumber5">
        <el-row v-if="i%2===1" class="itemsingle">
          <el-col class="scientist1"><router-link :to="{name: 'PersonalPage', params: {authuserId: scientists[i-1].authuserid}}">{{scientists[i-1].username}}</router-link></el-col>
          <el-col class="scientist2">{{scientists[i-1].organization}}</el-col>
          <el-col class="scientist3">{{scientists[i-1].researchfield}}</el-col>
        </el-row>
        <el-row v-else-if="i%2===0" class="itemdouble">
          <el-col class="scientist1"><router-link :to="{name: 'PersonalPage', params: {authuserId: scientists[i-1].authuserid}}">{{scientists[i-1].username}}</router-link></el-col>
          <el-col class="scientist2">{{scientists[i-1].organization}}</el-col>
          <el-col class="scientist3">{{scientists[i-1].researchfield}}</el-col>
        </el-row>
      </div>
      <el-row class="page">
        <div class="pagea">
          <el-link :disabled="page4<2" @click="search4(1)">上一页</el-link>
          <el-link :disabled="!shownext4" @click="search4(2)">下一页</el-link>
        </div>
      </el-row>
    </div>

  </div>
</template>

<script>
  export default {
    name: "HomePage.vue",
    data() {
      return {
        ruleform: {
          iconnumber: 1,
          texts: {
            text1: "",
            text2: "",
            text3: "",
            text4: "",
            text5: ""
          },
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
        },
        rules: {},
        shows: {
          show1: true,
          show2: false,
          show3: false,
          show4: false,
          show5: false
        },
        iconshows: {
          iconshow1: true,
          iconshow2: false,
          iconshow3: false,
          iconshow4: false,
        },

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

        showwhat: 1,

        itemnumber1: 1,
        itemnumber2: 1,
        itemnumber3: 1,
        itemnumber4: 1,
        itemnumber5: 1,

        page1: 1,
        page2: 1,
        page3: 1,
        page4: 1,
        page5: 1,

        shownext1: true,
        shownext2: true,
        shownext3: true,
        shownext4: true,
        shownext5: true,

        papers: [
          {
            id:1,
            title: "负担坑金龙单反",
            authors: "ddfsdfsjhvf",
            venue:{
              raw:"ddscd"
            },
            year: "2020-0202",
            n_citation: "dsddas",
          },
        ],

        patents: [
          {
            patentid:1,
            patentname: "dghgfh",
            inventor: "bcgfgb",
            type: "vxcvdfv",
            applicant: "cdcs",
            appdate: "dsf2323",
            pubdate: "5464"
          }
        ],

        projects: [
          {
            projectid:1,
            title: "cddfsds",
            researcher: "fdsfd",
            institution: "fdsf",
            time: "dcsdfs666"
          }
        ],

        scientists: [
          {
            authuseris:1,
            username: "ddcscd",
            organization: "csdcsc",
            researchfield: "dcsdc"
          }
        ],

        organizations: [
          {
            institutionname: "dsfsd"
          }
        ]

      };
    },
    methods: {
      plus(num) {
        this.ruleform.iconnumber = this.ruleform.iconnumber + 1
        if (num === 1) {
          this.shows.show2 = true
          this.iconshows.iconshow2 = true
          this.iconshows.iconshow1 = false
        }
        if (num === 2) {
          this.shows.show3 = true
          this.iconshows.iconshow3 = true
          this.iconshows.iconshow2 = false
        }
        if (num === 3) {
          this.shows.show4 = true
          this.iconshows.iconshow4 = true
          this.iconshows.iconshow3 = false
        }
        if (num === 4) {
          this.shows.show5 = true
          this.iconshows.iconshow4 = false
        }
      },
      minus(num) {
        if (num < 3) {
          this.ruleform.binds.bind2 = this.ruleform.binds.bind3
          this.ruleform.values.value2 = this.ruleform.values.value3
          this.ruleform.texts.text2 = this.ruleform.texts.text3
        }
        if (num < 4) {
          this.ruleform.binds.bind3 = this.ruleform.binds.bind4
          this.ruleform.values.value3 = this.ruleform.values.value4
          this.ruleform.texts.text3 = this.ruleform.texts.text4
        }
        if (num < 5) {
          this.ruleform.binds.bind4 = this.ruleform.binds.bind5
          this.ruleform.values.value4 = this.ruleform.values.value5
          this.ruleform.texts.text4 = this.ruleform.texts.text5
        }
        if (num < 6) {
          this.ruleform.binds.bind5 = "AND"
          this.ruleform.values.value5 = "主题"
          this.ruleform.texts.text5 = ""
        }
        if (this.ruleform.iconnumber === 5) {
          this.iconshows.iconshow4 = true
          this.shows.show5 = false
        } else if (this.ruleform.iconnumber === 4) {
          this.iconshows.iconshow3 = true
          this.shows.show4 = false
        } else if (this.ruleform.iconnumber === 3) {
          this.iconshows.iconshow2 = true
          this.shows.show3 = false
        } else if (this.ruleform.iconnumber === 2) {
          this.iconshows.iconshow1 = true
          this.shows.show2 = false
        }
        this.ruleform.iconnumber = this.ruleform.iconnumber - 1
      },

      show(num) {
        this.showwhat = num
      },

      search() {
        this.$axios.get('/data/paper/fuzzytitle',
          {
            params: {
              page: this.page1,
              key: this.ruleform.texts.text1
            }
          }
        ).then((res) => {
          this.itemnumber1 = res.data.data.length
          this.papers = res.data.data
        }).catch((failResponse) => {
          this.itemnumber1=0
          this.shownext1 = false
        });
        this.$axios.get('/api/fuzzysearchpatent',
          {
            params: {
              page: this.page2,
              key: this.ruleform.texts.text1
            }
          }
        ).then((res) => {
          this.itemnumber2 = res.data.data.length
          this.patents = res.data.data
        }).catch((failResponse) => {
          this.itemnumber2=0
          this.shownext2 = false
        });
        this.$axios.get('/api/fuzzysearchproject',
          {
            params:{
              page:this.page3,
              key:this.ruleform.texts.text1
            }
          }
        ).then((res) => {
          this.itemnumber3=res.data.data.length
          this.projects=res.data.data
        }).catch((failResponse) => {
          this.itemnumber3=0
          this.shownext3=false
        });
        this.$axios.get('/api/fuzzysearchpatent',
          {
            params:{
              page:this.page4,
              key:this.ruleform.texts.text1
            }
          }
        ).then((res) => {
          this.itemnumber4=res.data.data.length
          this.papers=res.data.data
        }).catch((failResponse) => {
          this.itemnumber4=0
          this.shownext4=false
        });
        this.$axios.get('/data/paper/fuzzytitle',
          {
            params:{
              page:this.page5,
              key:this.ruleform.texts.text1
            }
          }
        ).then((res) => {
          this.itemnumber5=res.data.data.length
          this.papers=res.data.data
        }).catch((failResponse) => {
          this.itemnumber5=0
          this.shownext5=false
        });
      },

      search1(num) {
        this.showwhat = 1
        if (num === 1) {
          this.shownext1 = true
          this.page1 = this.page1 - 1
        } else if (num === 2) {
          this.page1 = this.page1 + 1
        }
        this.$axios.get('/data/paper/fuzzytitle',
          {
            params: {
              page: this.page1,
              key: this.ruleform.texts.text1
            }
          }
        ).then((res) => {
          this.itemnumber1 = res.data.data.length
          this.papers = res.data.data
        }).catch((failResponse) => {
          this.page1 = this.page1 - 1
          this.shownext1 = false
        });

      },

      search2(num) {
        this.showwhat = 2
        if (num === 1) {
          this.shownext2 = true
          this.page2 = this.page2 - 1
        } else if (num === 2) {
          this.page2 = this.page2 + 1
        }
        this.$axios.get('/api/fuzzysearchpatent',
          {
            params: {
              page: this.page2,
              key: this.ruleform.texts.text1
            }
          }
        ).then((res) => {
          this.itemnumber2 = res.data.data.length
          this.patents = res.data.data
        }).catch((failResponse) => {
          this.page2 = this.page2 - 1
          this.shownext2 = false
        });
      },

      search3(num) {
        this.showwhat = 3
        if (num === 1) {
          this.shownext3 = true
          this.page3 = this.page3 - 1
        } else if (num === 2) {
          this.page3 = this.page3 + 1
        }
        this.$axios.get('/api/fuzzysearchproject',
          {
            params:{
              page:this.page3,
              key:this.ruleform.texts.text1
            }
          }
        ).then((res) => {
          this.itemnumber3=res.data.data.length
          this.projects=res.data.data
        }).catch((failResponse) => {
          this.page3=this.page3-1
          this.shownext3=false
        });
      },

      search4(num) {
        this.showwhat = 4
        if (num === 1) {
          this.shownext4 = true
          this.page4 = this.page4 - 1
        } else if (num === 2) {
          this.page4 = this.page4 + 1
        }
        this.$axios.get('/api/fuzzysearchpatent',
          {
            params:{
              page:this.page4,
              key:this.ruleform.texts.text1
            }
          }
        ).then((res) => {
          this.itemnumber4=res.data.data.length
          this.papers=res.data.data
        }).catch((failResponse) => {
          this.page4=this.page4-1
          this.shownext4=false
        });
      },

      search5(num) {
        this.showwhat = 5
        if (num === 1) {
          this.shownext5 = true
          this.page5 = this.page5 - 1
        } else if (num === 2) {
          this.page5 = this.page5 + 1
        }
        this.$axios.get('/data/paper/fuzzytitle',
          {
            params:{
              page:this.page5,
              key:this.ruleform.texts.text1
            }
          }
        ).then((res) => {
          this.itemnumber5=res.data.data.length
          this.papers=res.data.data
        }).catch((failResponse) => {
          this.page5=this.page5-1
          this.shownext5=false
        });
      },

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
    width: 960px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
  }

  .searchbutton {
    width: 100px;
    margin-top: 20px;
    margin-left: 430px;
  }

  .col {
    width: 960px;
  }

  .col1 {
    width: 960px;
  }

  .bind0 {
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

  .plus {
    margin-left: 0px;
  }

  .lablea {
    height: 80px;
    width: 100%;
    margin-top: 20px;
    background: #545c64;
  }

  .lablea-1 {
    height: 80px;
    width: 20%;
    text-align: center;
  }

  .labela-2 {
    width: 200px;
    height: 68px;
    margin-top: 12px;
    font-size: 13pt;
  }

  .el-menu-demo {
    height: 80px;
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
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
    height: 30px;
    background: grey;
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
