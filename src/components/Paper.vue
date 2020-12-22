<template>
  <div class="bg">
    <div class="info clearFix">
      <div class="tnp">
        <div>刊于：{{this.venue}}</div>
        <div>收录时间：{{this.time}}</div>
      </div>
      <div class="op">
        <!-- <i class="el-icon-star-off" style="margin-right: 10px" @click="favor"></i> -->
        <i class="el-icon-download" style="margin-right: 10px" @click="download"></i>
        <i class="el-icon-share" style="margin-right: 10px" @click="share"></i>
        <!-- <div>收藏 下载 转发</div> -->
      </div>
    </div>
    <div class="title">{{this.title}}这是一个标题示例</div>
    <div class="author"><div class="one" v-for="(a, i) in author" :key="i">{{a}}&nbsp;&nbsp;</div></div>
    <!-- <div class="org"><div class="one" v-for="(o, i) in org" :key="i">{{o}}&nbsp;&nbsp;</div></div> -->
    <div class="s-item">
      <span style="font-weight: 600">摘要：</span>
      {{this.abs}}
    </div>
    <div class="s-item">
      <span style="font-weight: 600">关键词：</span>
      <div class="one" v-for="(k, i) in kw" :key="i">{{k}}；</div>
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
export default {
  name: "paper",
  data() {
    return {
      title: "",
      venue: "北大核心",
      time: "2016-8-9",
      author: ['张三','李四','王五'],
      // org: ['xx大学', 'xx公司'],
      abs: "为开发一种从小龙虾壳生产几丁质的工艺，研究了电解水对小龙虾壳的脱矿物质和脱蛋白质作用，并分析了制备的几丁质的理化性质和结构。结果表明，用2%NaCl制备的酸性电解水和碱性电解水分别单独处理虾壳粉6h，矿物质和蛋白质脱除率分别为99.59%和91.31%。对虾壳粉进行酸性电解水和碱性电解水的联合连续处理（9h），所得几丁质的灰分和蛋白质含量分别为0.86%和1.31%。酸性电解水还具有良好的脱色作用。与传统无机酸碱法相比，电解水处理工艺制备的几丁质具有较低的特性黏度（368mL/g）、分子质量（85ku）和脱乙酰度（12.88%）。热重分析和差热分析、扫描电镜观察、傅里叶变换红外光谱和X射线衍射图谱的结果表明，电解水处理工艺和传统无机酸碱法制备的几丁质均呈网状多孔结构，均为α-几丁质，降解温度分别为382℃和389℃，结晶度指数分别为82.48%和78.82%。电解水处理工艺有潜力成为一种生产几丁质的新方法。",
      kw: ['电解水', '小龙虾壳', '脱矿物质', '脱蛋白质', '几丁质'],
      // ref: ['[1]利用蟹壳制备乳酸钙和甲壳素的技术研究[J].韩晓梅,王晨笑,杨鑫,王博,桑亚新,孙纪录. 食品研究与开发. 2018(11)', '[2]低聚壳聚糖制备及其在功能食品中应用[J]. 乔德亮. 食品工业科技. 2007(04)'],
    };
  },
  methods: {
    getdata(paperid) {
      this.$axios
        .get("/data/paper/id",{
          params: {
            id: paperid,
          }
        })
        .then((res) => {
          this.title = res.title;
          this.venue = res.venue;
          this.time = res.year;
          this.author = res.authors;
          // this.org = res.org;
          this.abs = res.abstracts;
          this.kw = res.keywords;
          // this.ref = res.ref;
        });
    },
    download(){},
    share(){},
  },
  mounted() {
    var paperid = $router.query.paperid;
    getdata(paperid);
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
  font-size: 30px;
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
