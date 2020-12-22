<template>
  <div class="bg">
    <div class="info clearFix">
      <div class="tnp"></div>
      <div class="op">
        <!-- <i class="el-icon-star-off" style="margin-right: 10px"></i> -->
        <i class="el-icon-download" style="margin-right: 10px"></i>
        <i class="el-icon-share" style="margin-right: 10px"></i>
        <!-- <div>收藏 下载 转发</div> -->
      </div>
    </div>
    <div class="title">{{ this.title }}这是一个标题示例</div>
    <div class="s-item">
      <span style="font-weight: 600">成果完成人：</span>
      {{ this.author }}张三 李四 王五
    </div>
    <div class="s-item">
      <span style="font-weight: 600">第一完成单位：</span>
      {{ this.authororg }}某研究所
    </div>
    <div class="s-item">
      <span style="font-weight: 600">关键词：</span>
      {{ this.kw }}疫苗佐剂; 壳聚糖; 抗原载体; 纳微结构材料; 蛋白质固定
    </div>
    <div class="d-items clearFix">
      <div class="col">
        <span style="font-weight: 600">中图分类号：</span>
        {{ this.clclass }}CN201911214435.5
      </div>
      <div class="col">
        <span style="font-weight: 600">学科分类号：</span>
        {{ this.sciclass }}CN1110195978
      </div>
    </div>
    <div class="s-item">
      <span style="font-weight: 600">成果简介：</span>
      {{
        this.intro
      }}项目负责人采用3,4-二羟基苯基丙酸对壳聚糖进行改性,从而赋予壳聚糖儿茶酚基团,获得中性pH下水溶的改性壳聚糖。紫外光谱、红外谱图以及氢核磁结果都表明儿茶酚改性壳聚糖成功合成。将儿茶酚改性壳聚糖水溶液与等体积的PBS溶液进行混合10分钟,之后加入氯化钙溶液并持续搅拌10分钟,之后离心水洗得到磷酸钙纳米片,该纳米片的厚度200-300nm,长宽约在5-20
      μm之间。通过共沉淀的方法,将抗原OVA包埋于磷酸钙纳米片中,OVA的加入使得磷酸钙纳米片表面更为粗糙,尺寸更小。XRD结果表明该磷酸钙成分是CaHPO4·2H2O。
      该磷酸钙对树突状细胞DC2.4无细胞毒性,能提高DC对抗原的胞吞量。我们还发现磷酸钙纳米片被DC吞噬后,能溶酶体逃逸至胞质中,进而能够通过MHC
      I途径将抗原交叉呈递给CD8+
      T细胞。我们考察了几种胞吞抑制剂对磷酸钙纳米片胞吞抑制效果,结果表明DC是通过大胞饮的方式胞吞该磷酸钙纳米片。我们还评价了该磷酸钙纳米片体外活化促进BMDC成熟的效果,结果表明DC表面的MHC
      II和OVA特异性的 SIINFEKL-MHC
      I的复合物表达上调,同时CD80和CD86的表达也上调,说明磷酸钙纳米片提高了DC的成熟度及其抗原提呈能力。此外,DC表面的趋化因子受体CCR7表达也发生了上调,说明磷酸钙纳米片也提高了DC的迁移能力。此外,我们还分析了DC分泌细胞因子水平,结果显示磷酸钙纳米片促进DC分泌更高程度的IL-6,
      IFN-γ和TNF-α。其中IL-6和TNF-α强效促炎细胞因子,它们的分泌表明了先天免疫反应的激活,这是抵御疾病的第一道防线。IFN-γ能够加强细胞免疫反应,加强细胞毒性T细胞的功能。我们还用小动物活体成像进一步验证了磷酸钙纳米片淋巴结迁移情况,结果表明游离抗原能迁移到淋巴结,但是24小时后淋巴结处的游离抗原就被降解了,而磷酸钙纳米片能持久的在淋巴结处缓释抗原,持续刺激DC成熟活化。我们还采用B3Z杂交瘤细胞来评价磷酸钙纳米片交叉提呈抗原的能力。结果表明,相比于游离抗原,磷酸钙纳米片能提高DC交叉提呈抗原的能力,且交叉提呈抗原的能力随着磷酸钙纳米片的剂量增大而增加。
      项目负责人已较良好的完成了该项目的研究内容和考核指标,共发表SCI收录期刊论文5篇（标注基金号）,公开中国发明专利5项,已协助培养硕士研究生3名。
    </div>
    <div class="s-item">
      <span style="font-weight: 600">成果类别：</span>
      {{ this.type }}应用技术
    </div>
    <div class="s-item">
      <span style="font-weight: 600">成果水平：</span>
      {{ this.level }}国际先进
    </div>
    <div class="s-item">
      <span style="font-weight: 600">研究起止时间：</span>
      {{ this.timespan }}2016-04~2019-03
    </div>
    <div class="s-item">
      <span style="font-weight: 600">评价形式：</span>
      {{ this.estim }}评价机构
    </div>
    <div class="s-item">
      <span style="font-weight: 600">成果入库时间：</span>
      {{ this.time }}2019
    </div>
  </div>
</template>

<script>
export default {
  name: "achivement",
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
    getdata(achivementid) {
      this.$axios
      .get("http://localhost:8081//api/getproject/{id}",{
          params: {
            id: achivementid,
          }
        })
      .then((res) => {
        this.title = res.projectname;
        this.author = res.researcher;
        this.authororg = res.institution;
        this.kw = res.keywords;
        this.clclass = res.booktype;
        this.sciclass = res.subjecttype;
        this.intro = res.briefintro;
        this.type = res.type;
        this.level = res.level;
        this.timespan = res.startandfinishtime;
        this.estim = res.eveluatetype;
        this.time = res.intime;
      });
    },
    download() {},
    share() {},
  },
  mounted() {
    var achivementid = $router.query.achivementid;
    getdata(achivementtid);
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
