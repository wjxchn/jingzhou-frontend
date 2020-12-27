<template>
  <div class="bg">
    <div class="info clearFix">
      <div class="tnp"></div>
      <div class="op">
        <!-- <i class="el-icon-star-off" style="margin-right: 10px"></i> -->
        <!-- <i class="el-icon-download" style="margin-right: 10px"></i> -->
        <!-- <i class="el-icon-share" style="margin-right: 10px"></i> -->
        <!-- <div>收藏 下载 转发</div> -->
      </div>
    </div>
    <div class="title">{{ this.title }}</div>
    <div class="s-item">
      <span style="font-weight: 600">成果完成人：</span>
      {{ this.author }}
    </div>
    <div class="s-item">
      <span style="font-weight: 600">第一完成单位：</span>
      {{ this.authororg }}
    </div>
    <div class="s-item">
      <span style="font-weight: 600">关键词：</span>
      {{ this.kw }}
    </div>
    <div class="d-items clearFix">
      <div class="col">
        <span style="font-weight: 600">中图分类号：</span>
        {{ this.clclass }}
      </div>
      <div class="col">
        <span style="font-weight: 600">学科分类号：</span>
        {{ this.sciclass }}
      </div>
    </div>
    <div class="s-item">
      <span style="font-weight: 600">成果简介：</span>
      {{
        this.intro
      }}
    </div>
    <div class="s-item">
      <span style="font-weight: 600">成果类别：</span>
      {{ this.type }}
    </div>
    <div class="s-item">
      <span style="font-weight: 600">成果水平：</span>
      {{ this.level }}
    </div>
    <div class="s-item">
      <span style="font-weight: 600">研究起止时间：</span>
      {{ this.timespan }}
    </div>
    <div class="s-item">
      <span style="font-weight: 600">评价形式：</span>
      {{ this.estim }}
    </div>
    <div class="s-item">
      <span style="font-weight: 600">成果入库时间：</span>
      {{ this.time }}
    </div>
  </div>
</template>

<script>
export default {
  name: "achievement",
  data() {
    return {
      title: "",
      author: "",
      authororg: "",
      kw: "",
      clclass: "",
      sciclass: "",
      intro: "",
      type: "",
      level: "",
      timespan: "",
      estim: "",
      time: "",
      };
  },
  methods: {
    getdata(achievementid) {
      this.$axios
      .get("/api/api/getproject/" + achievementid,{
          params: {
            // id: achievementid,
          }
        })
      .then((res) => {
        console.log(res);
        this.title = res.data.data.project.projectname;
        this.author = res.data.data.project.researcher;
        this.authororg = res.data.data.project.institution;
        if(res.data.data.project.keywords !== null) {
          this.kw = res.data.data.project.keywords;
        }
        else {
          this.kw = '无数据';
        }
        if(res.data.data.project.booktype !== null) {
          this.clclass = res.data.data.project.booktype;
        }
        else {
          this.clclass = '无数据';
        }
        if(res.data.data.project.subjecttype !== null) {
          this.sciclass = res.data.data.project.subjecttype;
        }
        else {
          this.sciclass = '无数据';
        }
        if(res.data.data.project.startandfinishtime !== null) {
          this.timespan = res.data.data.project.startandfinishtime;
        }
        else {
          this.timespan = '无数据';
        }
        if(res.data.data.project.eveluatetype !== null) {
          this.estim = res.data.data.project.eveluatetype;
        }
        else {
          this.estim = '无数据';
        }
        // this.kw = res.data.data.project.keywords;
        // this.clclass = res.data.data.project.booktype;
        // this.sciclass = res.data.data.project.subjecttype;
        this.intro = res.data.data.project.briefintro;
        this.type = res.data.data.project.type;
        this.level = res.data.data.project.level;
        // this.timespan = res.data.data.project.startandfinishtime;
        // this.estim = res.data.data.project.eveluatetype;
        this.time = res.data.data.project.intime;
      });
    },
  },
  mounted() {
    if(localStorage.getItem('username') == null){
      this.$router.push('/login')
    }
    else{
      const achievementid = this.$route.query.achievementid;
      this.getdata(achievementid);
    }
    
  },
};
</script>

<style scoped>
.bg {
  background-color: white;
  margin: 30px 4%;
  padding: 30px 11%;
  box-shadow: 0 0 10px #888888;
}
/* .info {
    background-color: green;
} */
.tnp {
  /* background-color: yellow; */
  width: 50%;
  float: left;
  font-size: 10px;
  color: rgb(76, 134, 221);
}
.op {
  /* background-color: red; */
  width: 50%;
  font-size: 20px;
  color: rgb(76, 134, 221);
  float: right;
  text-align: right;
}
.clearFix:after,
.clearFix:before {
  /* 在前后添加内容"" */
  content: "";
  /* 使内连元素转换为块元素 */
  display: block;
  /* 清除两侧的浮动 */
  clear: both;
}
.title {
  /* background-color: wheat; */
  text-align: center;
  font-size: 25px;
  margin: 30px 0 12px 0;
}
.s-item {
  /* background-color: red; */
  font-size: 13px;
  margin: 12px 0;
}
.d-items {
  /* background-color: yellow; */
  font-size: 13px;
  margin: 12px 0;
}
.col {
  width: 50%;
  float: left;
}
</style>
