<template>
  <div class="bg">
    <div class="info clearFix">
      <div class="tnp">
        <div>公开信息</div>
      </div>
      <div class="op">
        <!-- <i class="el-icon-star-off" style="margin-right: 10px"></i> -->
        <!-- <i class="el-icon-download" style="margin-right: 10px"></i> -->
        <!-- <i class="el-icon-share" style="margin-right: 10px"></i> -->
        <!-- <div>收藏 下载 转发</div> -->
      </div>
    </div>
    <div class="title">{{ this.title }}</div>
    <div class="s-item">
      <span style="font-weight: 600">专利类型：</span>
      {{ this.type }}
    </div>
    <div class="d-items clearFix">
      <div class="col">
        <span style="font-weight: 600">申请（专利）号：</span>
        {{ this.appcode }}
      </div>
      <div class="col">
        <span style="font-weight: 600">授权公布号：</span>
        {{ this.authcode }}
      </div>
    </div>
    <div class="d-items clearFix">
      <div class="col">
        <span style="font-weight: 600">申请日：</span>
        {{ this.apptime }}
      </div>
      <div class="col">
        <span style="font-weight: 600">授权公告日：</span>
        {{ this.authtime }}
      </div>
    </div>
    <div class="d-items clearFix">
      <div class="col">
        <span style="font-weight: 600">申请人：</span>
        {{ this.apper }}
      </div>
      <div class="col">
        <span style="font-weight: 600">发明人：</span>
        {{ this.inventor }}
      </div>
    </div>
    <div class="s-item">
      <span style="font-weight: 600">申请人地址：</span>
      {{ this.appaddr }}
    </div>
    <div class="d-items clearFix">
      <div class="col">
        <span style="font-weight: 600">分类号：</span>
        {{ this.class }}
      </div>
      <div class="col">
        <span style="font-weight: 600">主分类号：</span>
        {{ this.mclass }}
      </div>
    </div>
    <div class="s-item">
      <span style="font-weight: 600">国省代码：</span>
      {{ this.provcode }}
    </div>
    <!-- <div class="s-item">
      <span style="font-weight: 600">页数：</span>
      {{ this.pages }}8
    </div> -->
    <div class="d-items clearFix">
      <div class="col">
        <span style="font-weight: 600">代理机构：</span>
        {{ this.agentorg }}
      </div>
      <div class="col">
        <span style="font-weight: 600">代理人：</span>
        {{ this.agent }}
      </div>
    </div>
    <div class="s-item">
      <span style="font-weight: 600">主权项：</span>
      {{
        this.claim
      }}
    </div>
    <div class="s-item">
      <span style="font-weight: 600">摘要：</span>
      {{
        this.abs
      }}
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
      abs: "",
      };
  },
  methods: {
    getdata(patentid) {
      this.$axios
        .get("/api/api/getpatent/" + patentid, {
          params: {
            // id: patentid,
          },
        })
        .then((res) => {
          console.log(res);
          this.title = res.data.data.patent.patentname;
          this.type = res.data.data.patent.type;
          this.appcode = res.data.data.patent.patentnumber;
          this.apptime = res.data.data.patent.appdate;
          this.authcode = res.data.data.patent.pubnumber;
          this.authtime = res.data.data.patent.pubdate;
          this.apper = res.data.data.patent.applicant;
          this.inventor = res.data.data.patent.inventor;
          this.appaddr = res.data.data.patent.address;
          this.class = res.data.data.patent.classification;
          if(res.data.data.patent.mainclassification !== null) {
            this.mclass = res.data.data.patent.mainclassification;
          }
          else {
            this.mclass = '无数据';
          }
          if(res.data.data.patent.provincecode !== null) {
            this.provcode = res.data.data.patent.provincecode;
          }
          else {
            this.provcode = '无数据';
          }
        //   this.pages = res.data.data.patent.pages;
        if(res.data.data.patent.agentpeople !== null) {
            this.agent = res.data.data.patent.agentpeople;
          }
          else {
            this.agent = '无数据';
          }
          if(res.data.data.patent.agentinstitution !== null) {
            this.agentorg = res.data.data.patent.agentinstitution;
          }
          else {
            this.agentorg = '无数据';
          }
          if(res.data.data.patent.force !== null) {
            this.claim = res.data.data.patent.force;
          }
          else {
            this.claim = '无数据';
          }
          this.abs = res.data.data.patent.abstractcontent;
        });
    },
  },
  mounted() {
    const patentid = this.$route.query.patentid;
    // const patentid = '2';
    this.getdata(patentid);
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
