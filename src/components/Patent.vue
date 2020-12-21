<template>
  <div class="bg">
    <div class="info clearFix">
      <div class="tnp">
        <div>公开信息</div>
      </div>
      <div class="op">
        <!-- <i class="el-icon-star-off" style="margin-right: 10px"></i> -->
        <i class="el-icon-download" style="margin-right: 10px"></i>
        <i class="el-icon-share" style="margin-right: 10px"></i>
        <!-- <div>收藏 下载 转发</div> -->
      </div>
    </div>
    <div class="title">{{ this.title }}这是一个标题示例</div>
    <div class="s-item">
      <span style="font-weight: 600">专利类型：</span>
      {{ this.type }}发明授权
    </div>
    <div class="d-items clearFix">
      <div class="col">
        <span style="font-weight: 600">申请（专利）号：</span>
        {{ this.appcode }}CN201911214435.5
      </div>
      <div class="col">
        <span style="font-weight: 600">授权公布号：</span>
        {{ this.authcode }}CN1110195978
      </div>
    </div>
    <div class="d-items clearFix">
      <div class="col">
        <span style="font-weight: 600">申请日：</span>
        {{ this.apptime }}2019.12.02
      </div>
      <div class="col">
        <span style="font-weight: 600">授权公告日：</span>
        {{ this.authtime }}2020.11.13
      </div>
    </div>
    <div class="d-items clearFix">
      <div class="col">
        <span style="font-weight: 600">申请人：</span>
        {{ this.apper }}福建农林大学
      </div>
      <div class="col">
        <span style="font-weight: 600">发明人：</span>
        {{ this.inventor }}张三 李四 王五
      </div>
    </div>
    <div class="s-item">
      <span style="font-weight: 600">申请人地址：</span>
      {{ this.appaddr }}某省某地
    </div>
    <div class="d-items clearFix">
      <div class="col">
        <span style="font-weight: 600">分类号：</span>
        {{ this.class }}iafbrbfhsbgsebfjnsmnvbkhg
      </div>
      <div class="col">
        <span style="font-weight: 600">主分类号：</span>
        {{ this.mclass }}sbdfbdfbasdhkfgbfhgksdbgk
      </div>
    </div>
    <div class="s-item">
      <span style="font-weight: 600">国省代码：</span>
      {{ this.provcode }}35
    </div>
    <!-- <div class="s-item">
      <span style="font-weight: 600">页数：</span>
      {{ this.pages }}8
    </div> -->
    <div class="d-items clearFix">
      <div class="col">
        <span style="font-weight: 600">代理机构：</span>
        {{ this.agentorg }}某某某事务所
      </div>
      <div class="col">
        <span style="font-weight: 600">代理人：</span>
        {{ this.agent }}张十
      </div>
    </div>
    <div class="s-item">
      <span style="font-weight: 600">主权项：</span>
      {{
        this.claim
      }}1.一种植物蛋白基胶黏剂的制备方法,其特征在于,包括：氧化脱脂植物蛋白粕的季铵化改性：取氧化脱脂植物蛋白粕、2,3-环氧丙基三甲基氯化铵和水于容器中密封,进行季铵化改性反应；改性完成后进行纯化处理,再经干燥后得到季铵化改性的氧化脱脂植物蛋白粕；所述氧化脱脂植物蛋白粕由以下步骤制备得到：将脱脂植物蛋白粕、NaIO4和NaCl混合于水中,然后密封并遮光进行氧化反应；氧化完成后,过滤,洗涤至滤液pH值范围达到6.5～7.0,收集固体进行干燥,即得到氧化脱脂植物蛋白粕；氧化脱脂植物蛋白粕的季铵化改性中,氧化脱脂植物蛋白粕在水中的质量含量为5～10％,2,3-环氧丙基三甲基氯化铵质量是氧化脱脂植物蛋白粕质量的1/4～1/3；改性温度、改性时间和磁力搅拌速度范围分别为60～80℃、30～40h和200～400rpm；聚儿茶酚的制备：取儿茶酚、催化剂和缓冲液于容器中,密封后进行聚合反应；聚合完成后,离心去除固体催化剂；收集上层清液进行纯化处理,再经干燥后得到聚儿茶酚；聚儿茶酚的制备中,儿茶酚的摩尔数与缓冲液体积比范围为0.1～1mmol/100ml,磷酸二氢钠-磷酸氢二钠缓冲液浓度和pH范围分别为0.05～0.1mol/L和7.5～8.0,催化剂的摩尔数是所加入儿茶酚摩尔数的5～7倍,其中,所述催化剂为Ag2O或CuO；聚合温度、聚合时间和磁力搅拌速度范围分别为22～28℃、24～48h和80～120rpm；预聚合反应：由季铵化改性的氧化脱脂植物蛋白粕、聚儿茶酚、果胶和水进行预聚合反应得到植物蛋白基胶黏剂；预聚合反应中,季铵化改性的氧化脱脂植物蛋白粕、聚儿茶酚、果胶和水的质量比范围为(35～40)：(2～5)：(0.5～1)：(55～60)；预聚合反应的反应温度、反应时间及搅拌速度分别为50～75℃、3～6h和200～250rpm。
    </div>
    <div class="s-item">
      <span style="font-weight: 600">摘要：</span>
      {{
        this.abs
      }}本发明涉及胶黏剂技术领域,公开了一种植物蛋白基胶黏剂及其制备方法和应用。该制备方法包括：氧化脱脂植物蛋白粕的季铵化改性：取氧化脱脂植物蛋白粕、2,3-环氧丙基三甲基氯化铵和水于容器中密封,进行季铵化改性反应；聚儿茶酚的制备：取儿茶酚、催化剂和缓冲液于容器中,密封后进行聚合反应；预聚合反应：由季铵化改性的氧化脱脂植物蛋白粕、聚儿茶酚、果胶和水进行预聚合反应得到植物蛋白基胶黏剂。该植物蛋白基胶黏剂中的醛基、季铵离子和苯基可与单板纤维表面木质素苯基空余反应位点、碳水化合物羧基及木质素疏水基团分别产生酚醛缩合反应、静电和疏水作用,达到最终增强胶合板胶合强度的目的。
    </div>
  </div>
</template>

<script>
export default {
  name: "patent",
  data() {
    return {
      title: "",
      type: "",
      appcode: "",
      apptime: "",
      authcode: "",
      authtime: "",
      apper: "",
      inventor: "",
      appaddr: "",
      class: "",
      mclass: "",
      provcode: "",
    //   pages: "",
      agentorg: "",
      agent: "",
      claim: "",
      abs:
        "为开发一种从小龙虾壳生产几丁质的工艺，研究了电解水对小龙虾壳的脱矿物质和脱蛋白质作用，并分析了制备的几丁质的理化性质和结构。结果表明，用2%NaCl制备的酸性电解水和碱性电解水分别单独处理虾壳粉6h，矿物质和蛋白质脱除率分别为99.59%和91.31%。对虾壳粉进行酸性电解水和碱性电解水的联合连续处理（9h），所得几丁质的灰分和蛋白质含量分别为0.86%和1.31%。酸性电解水还具有良好的脱色作用。与传统无机酸碱法相比，电解水处理工艺制备的几丁质具有较低的特性黏度（368mL/g）、分子质量（85ku）和脱乙酰度（12.88%）。热重分析和差热分析、扫描电镜观察、傅里叶变换红外光谱和X射线衍射图谱的结果表明，电解水处理工艺和传统无机酸碱法制备的几丁质均呈网状多孔结构，均为α-几丁质，降解温度分别为382℃和389℃，结晶度指数分别为82.48%和78.82%。电解水处理工艺有潜力成为一种生产几丁质的新方法。",
    };
  },
  methods: {
    getdata(patentid) {
      this.$axios
        .get("http://localhost:8081//api/getpatent/{id}", {
          params: {
            id: patentid,
          },
        })
        .then((res) => {
          this.title = res.patentname;
          this.type = res.type;
          this.appcode = res.patentnumber;
          this.apptime = res.appdate;
          this.authcode = res.pubnumber;
          this.authtime = res.pubdate;
          this.apper = res.applicant;
          this.inventor = res.inventor;
          this.appaddr = res.address;
          this.class = res.classification;
          this.mclass = res.mainclassification;
          this.provcode = res.provincecode;
        //   this.pages = res.pages;
          this.agentorg = res.agentpeople;
          this.agent = res.agentinstitution;
          this.claim = res.force;
          this.abs = res.abstractcontent;
        });
    },
    download() {},
    share() {},
  },
  mounted() {
    var patentid = $router.query.patentid;
    getdata(patentid);
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
