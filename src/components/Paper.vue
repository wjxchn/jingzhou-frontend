<template>
  <div class="bg">
    <div class="info clearFix">
      <div class="tnp">
        <div>刊于：{{ this.venue }}{{ this.volume }}{{ this.startpage }}{{ this.endpage }}</div>
        <div>年份：{{ this.time }}</div>
      </div>
      <div class="op">
        <!-- <i class="el-icon-star-off" style="margin-right: 10px" @click="favor"></i> -->
        <!-- <i class="el-icon-download" style="margin-right: 10px" @click="download"></i> -->
        <a :href="this.url" :underline="false" target="_blank">
          <el-tooltip effect="dark" content="原文链接" placement="bottom">
            <i class="el-icon-share" style="margin-right: 10px"></i>
            <!-- <el-button>下边</el-button> -->
          </el-tooltip>
        </a>
        <!-- <div>收藏 下载 转发</div> -->
      </div>
    </div>
    <div class="title">{{ this.title }}</div>
    <div class="author">
      <div class="one" v-for="(a, i) in author" :key="i">
        {{ a }};&nbsp;&nbsp;
      </div>
    </div>
    <!-- <div class="org"><div class="one" v-for="(o, i) in org" :key="i">{{o}}&nbsp;&nbsp;</div></div> -->
    <div class="s-item">
      <span style="font-weight: 600">语言：</span>
      {{ this.lang }}
    </div>
    <div class="s-item">
      <span style="font-weight: 600">被引数：</span>
      {{ this.citation }}
    </div>
    <div class="s-item">
      <span style="font-weight: 600">摘要：</span>
      {{ this.abs }}
    </div>
    <div class="s-item">
      <span style="font-weight: 600">关键词：</span>
      <div class="one" v-for="(k, i) in kw" :key="i">{{ k }};&nbsp;</div>
    </div>
    <!-- <div class="s-item">
        <span style="font-weight: 600">基金支持：</span>
        河北省重点研发计划项目（19273201D）； 河北省现代农业产业技术体系淡水养殖创新团队建设项目（HBCT2018180206）；
    </div> -->
    <div class="ref">
      <!-- <div style="font-size: 17px">参考文献</div>
      <div class="hr"></div>
      <div style="font-size: 13px" v-for="(r, i) in ref" :key="i">{{r}}</div> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "paper",
  data() {
    return {
      title: "",
      venue: "",
      time: "",
      author: [],
      // org: ['xx大学', 'xx公司'],
      abs: "",
      kw: [],
      url: "",
      lang: "",
      citation: "",
      volume: "",
      startpage: "",
      endpage: "",
      // ref: ['[1]利用蟹壳制备乳酸钙和甲壳素的技术研究[J].韩晓梅,王晨笑,杨鑫,王博,桑亚新,孙纪录. 食品研究与开发. 2018(11)', '[2]低聚壳聚糖制备及其在功能食品中应用[J]. 乔德亮. 食品工业科技. 2007(04)'],
    };
  },
  methods: {
    getdata(paperid) {
      console.log("1");
      this.$axios
        .get("/api/data/paper/idorpaperid", {
          params: {
            id: paperid,
          },
        })
        .then((res) => {
          console.log(res);
          this.title = res.data.data.paper.title;
          if( res.data.data.paper.venue !== null) {
            this.venue = res.data.data.paper.venue.raw;
          } else {
            this.venue = '无数据';
          }
          if( res.data.data.paper.year !== null) {
            this.time = res.data.data.paper.year;
          } else {
            this.time = '无数据';
          }
          const len = res.data.data.paper.authors.length;
          var tmp;
          for (var i = 0; i < len; i++) {
            this.author[i] = res.data.data.paper.authors[i].name;
          }
          // this.author = res.data.data.paper.authors;
          // this.org = res.org;
          if( res.data.data.paper.abstract !== null) {
            this.abs = res.data.data.paper.abstract;
          } else {
            this.abs = '无数据';
          }
          if( res.data.data.paper.keywords !== null) {
            this.kw = res.data.data.paper.keywords;
          } else {
            this.kw = ['无数据'];
          }
          if( res.data.data.paper.url !== null) {
            this.url = res.data.data.paper.url;
          } else {
            this.url = '/';
          }
          if( res.data.data.paper.lang !== null) {
            this.lang = res.data.data.paper.lang;
          } else {
            this.lang = '未说明';
          }
          if( res.data.data.paper.citation !== null) {
            this.citation = res.data.data.paper.n_citation;
          } else {
            this.citation = '无数据';
          }
          if( res.data.data.paper.volume !== '' && res.data.data.paper.volume !== null) {
            this.volume = '  V' + res.data.data.paper.volume;
          } else {
            this.volume = '';
          }
          if( res.data.data.paper.startpage !== null) {
            this.startpage = '  P' + res.data.data.paper.page_start;
          } else {
            this.startpage = '';
          }
          if( res.data.data.paper.endpage !== null) {
            this.endpage = '-P' + res.data.data.paper.page_end;
          } else {
            this.endpage = '';
          }
          // this.ref = res.ref;
        });
    },
  },
  mounted() {
    const paperid = this.$route.query.paperid;
    // const paperid = "53e99893b7602d97020ca4c1";
    // const paperid = '1';

      axios({
          method:"post",
          url:'/api/paper/addclick/',
          data:{'paperid':this.$route.query.paperid}
          }).then(response=>{}).catch(error=>{
                                console.log(error);
                                });

    if(paperid === '1') {
      alert('找不到论文信息');
    }
    else {
      this.getdata(paperid);
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
.author {
  /* background-color: red; */
  text-align: center;
  font-size: 13px;
  margin: 12px 0;
  /* display: inline-block; */
  /* width: 200%; */
}
.org {
  /* background-color: yellow; */
  text-align: center;
  font-size: 13px;
  margin: 12px 0;
}
.s-item {
  font-size: 13px;
  margin: 12px 0;
}
/* .abstract {
    background-color: red;
    font-size: 13px;
    margin: 12px 0;
}
.kw {
    background-color: yellow;
    font-size: 13px;
    margin: 12px 0;
}
.fdt {
    background-color: red;
    font-size: 13px;
    margin: 12px 0;
} */
.ref {
  /* background-color: yellow; */
  margin: 50px 0 20px;
}
.hr {
  background-color: rgb(212, 212, 212);
  margin: 10px 0;
  height: 1px;
  text-align: center;
}
.one {
  /* background-color: green; */
  display: inline-block;
}
</style>
