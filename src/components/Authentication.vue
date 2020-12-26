<template>
    <div id="Authen-main" class="frow">
        
        
        <div class="Authen-left fcolumn">
            <div class="left-text">
            <el-card class="left-card" shadow="always">
                <h3 align="center" >亲爱的用户！请输入身份证号码进行实名验证</h3>
                <h3 align="center" >届时可免费下载您的全部文献</h3>
            </el-card>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                
                <el-form-item label="真实姓名" prop="name">
                    <el-input v-model="ruleForm.name" placeholder="请输入您的真实姓名"></el-input>
                </el-form-item>
                <el-form-item label="身份证号" prop="id">
                    <el-input v-model="ruleForm.id" placeholder="请输入身份证号"></el-input>
                </el-form-item>
                 <el-form-item label="现工作单位" prop="work">
                    <el-input v-model="ruleForm.work" placeholder="请输入您目前所在单位名称"></el-input>
                </el-form-item>
                <el-form-item  label="研究领域" prop="field">
                    <el-input  v-model="ruleForm.field" placeholder="请输入您的研究领域"></el-input>
                </el-form-item>
                <el-form-item >
                    <el-button  class="mt20" style="margin-left:45%" @click = "authenticate">认证</el-button>
                </el-form-item>
            </el-form>
            </div>
        </div>
        <div class="Authen-right ">
            <div class="right-text">
            <h1 class="mt20" style=" text-align:center;">认证学者可为您</h1>
            <h2 class="mt10" style=" text-align:center;">提供以下服务</h2>
            <div class="mt20" style=" text-align:center;">
                <font size="4">1.实名注册获得学者唯一标识</font><br>
                <i>免费ID，区分同名学者</i></div>
            <div class="mt50" style=" text-align:center;">
                <font size="4">2.自动收集整理中外文各类型学术成果</font><br>
                <i>例如期刊、会议、专题、专著等</i></div>
            <div class="mt50" style=" text-align:center;">
                <font size="4">3.查询、遴选您所需的专家学者</font><br>
                <i>您可以按照学科、研究方向、基金、被引频次等多个学术指标查询、遴选您所需的专家学者</i></div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: "Edit",
        data(){
            return{
                ruleForm: {
                    field: '',
                    name: '',
                    work: '',
                    id:'',
                },
                rules: {
                     email: [{ pattern:/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,required: true, message: '邮箱格式不正确', trigger: 'blur' }],
                     name:[{ required: true, message: '请输入您的姓名', trigger: 'blur' }],
                     work:[{ required: true, message: '请输入您的工作单位', trigger: 'blur' }],
                     id:[{ pattern: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,required: true, message: '证件号码格式有误', trigger: 'blur' }]
                }
            } 
        },
        methods:{
            authenticate(){
                this.$axios({
                    method:"post",
                    url:'/api/govern/claimportal/',
                    params:{'username':localStorage.getItem('username'),'institutionname':this.ruleForm.work, 'realname':this.ruleForm.name, 'field':this.ruleForm.field}
                }).then(response=>{
                    console.log(response);
                    if(response.data.code === 200)
                    {
                        localStorage.setItem("isauth",1);
                    this.$message({
                        type: 'success',
                        message: '认证成功'
                    });
                    
                    this.$router.push('selfpage');
                    this.$router.go(0);
                    }
                    else if (response.data.code === 400)
                    {
                        console.log('用户名错误');
                        this.$router.push('selfpage');
                        return false;
                    }
                    else if (response.data.code === 500)
                    {
                        console.log('用户名已认证');
                        this.$router.push('selfpage');
                        return false;
                    }
                }).catch(error=>{
                    console.log(error);
                });
            }
        }
    }
</script>

<style scoped>
#Authen-main{
    margin-top: 20px;
    margin-bottom: 20px;
    height:700px;
}
.Authen-left{
    margin-left: 10%;
    width:65%;
    background-color: white;
}
.Authen-right{
    margin-right: 10%;
    width:30%;
    background-color: #dddddd;

}
.left-card{
    margin-top:5%;
}
.left-text{
    margin-left:15%;
    margin-right:15%;
}
.right-text{
    margin-left:5%;
    margin-right:5%;
}
</style>

