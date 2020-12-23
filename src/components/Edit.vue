<template>
    <div id="Edit-main" class="frow">
        <div class="Edit-left fcolumn">
            <div style="height:180px;" class="fcolumn fyc">
                <img :src="Author.avatar_src" style="width:80%;" class="mt20">
                <el-button size="mini" class="mt10" @click="editAvatar">编辑头像</el-button>
                <el-button size="mini" class="mt10" @click="toPersonalPage">返回个人主页</el-button>
            </div>
        </div>

        <div class="Edit-right fcolumn">
            <!--姓名编辑-->
            <div class="frow mt20 ml20">
                <b class="rem10 ml50 sc">姓名</b>
                <font class="ml80 sc" v-show="!editNameText">{{Author.name}}</font>
                <div class="fcolumn ml80"  v-show="editNameText">
                    <el-input type="textarea" autosize v-model="temp.name"></el-input>
                    <div class="frow fxb">
                        <el-button type="primary" size="mini" class="mt10" @click="saveName">保存</el-button>
                        <el-button size="mini" class="mt10" @click="unsaveName">取消</el-button>
                    </div>
                </div>
                <el-button class="ml50 el-icon-edit" type="text" @click="editName" v-show="!editNameText"></el-button>
            </div>
            <el-divider></el-divider>


            <!--机构编辑-->
            <div class="frow mt20 ml20">
                <b class="rem10 ml50 sc">科研机构</b>
                <font class="ml80 sc" v-show="!editOrganizationText">{{Author.organization}}</font>
                <div class="fcolumn ml80"  v-show="editOrganizationText">
                    <el-input type="textarea" autosize v-model="temp.organization"></el-input>
                    <div class="frow fxb">
                        <el-button type="primary" size="mini" class="mt10" @click="saveOrganization">保存</el-button>
                        <el-button size="mini" class="mt10" @click="unsaveOrganization">取消</el-button>
                    </div>
                </div>
                <el-button class="ml50 el-icon-edit" type="text" @click="editOrganization" v-show="!editOrganizationText"></el-button>
            </div>
            <el-divider></el-divider>


            <!--密码编辑-->
            <div class="frow mt20 ml20">
                <b class="rem10 ml50 sc">密码</b>
                <font class="ml80 sc" v-show="!editPasswordText">{{Author.password}}</font>
                <div class="fcolumn ml80"  v-show="editPasswordText">
                    <el-input type="textarea" autosize v-model="temp.password"></el-input>
                    <div class="frow fxb">
                        <el-button type="primary" size="mini" class="mt10" @click="savePassword">保存</el-button>
                        <el-button size="mini" class="mt10" @click="unsavePassword">取消</el-button>
                    </div>
                </div>
                <el-button class="ml50 el-icon-edit" type="text" @click="editPassword" v-show="!editPasswordText"></el-button>
            </div>
            <el-divider></el-divider>


            <!--邮箱编辑-->
            <div class="frow mt20 ml20">
                <b class="rem10 ml50 sc">邮箱</b>
                <font class="ml80 sc" v-show="!editEmailText">{{Author.email}}</font>
                <div class="fcolumn ml80"  v-show="editEmailText">
                    <el-input type="textarea" autosize v-model="temp.email"></el-input>
                    <div class="frow fxb">
                        <el-button type="primary" size="mini" class="mt10" @click="saveEmail">保存</el-button>
                        <el-button size="mini" class="mt10" @click="unsaveEmail">取消</el-button>
                    </div>
                </div>
                <el-button class="ml50 el-icon-edit" type="text" @click="editEmail" v-show="!editEmailText"></el-button>
            </div>
            <el-divider></el-divider>


        </div>
    </div>
</template>

<script>
    export default {
        name: "Edit",
        data(){
            return{

                Author:{
                    avatar_src:require('../assets/avatar.png'),
                    name:"张三",
                    organization:"北京航空航天大学",
                    password:"1234567",
                    email:"2500608052@qq.com",
                    papers:15,
                    downloads:114,
                    references:514,
                    fields:"计算机技术",
                    fans:1024,
                    follows:15,
                    thumbs:1987,
                    introduction:"小车正穿行在落基山脉蜿蜒曲折的盘山公路上。克里斯朵夫·李维静静地望着窗外，发现每当车子即将行驶到无路的关头，路边都会出现一块交通指示牌‘前方转弯’或‘注意！急转弯’。而拐过每一道弯之后，前方照例又是一片柳暗花明，豁然开朗。山路弯弯，峰回路转，‘前方转弯’几个大字一次次地冲击着他的眼球，也渐渐叩醒了他的心扉：原来，不是路已到了尽头，而是该转弯了。路在脚下，更在心中，心随路转，心路常宽。学会转弯也是人生的智慧，因为挫折往往是转折，危机同时是转机。"
                },
                temp:{
                    name:"张三",
                    organization:"北京航空航天大学",
                    password:"1234567",
                    email:"2500608052@qq.com",
                    papers:15,
                    downloads:114,
                    references:514,
                    fields:"计算机技术",
                    fans:1024,
                    follows:15,
                    thumbs:1987,
                    introduction:"小车正穿行在落基山脉蜿蜒曲折的盘山公路上。克里斯朵夫·李维静静地望着窗外，发现每当车子即将行驶到无路的关头，路边都会出现一块交通指示牌‘前方转弯’或‘注意！急转弯’。而拐过每一道弯之后，前方照例又是一片柳暗花明，豁然开朗。山路弯弯，峰回路转，‘前方转弯’几个大字一次次地冲击着他的眼球，也渐渐叩醒了他的心扉：原来，不是路已到了尽头，而是该转弯了。路在脚下，更在心中，心随路转，心路常宽。学会转弯也是人生的智慧，因为挫折往往是转折，危机同时是转机。"
                },
                editPasswordText:false,
                editOrganizationText:false,
                editName:false,
                editEmailText:false,
                editFieldsText:false

            }
        },
        methods:{
            editavatar(){
                this.Author="";
            },
            editName(){
                this.temp.name = this.Author.name;
                this.editNameText = true;
            },
            saveName(){
                this.Author.name = this.temp.name;
                this.editNameText = false;
            },
            unsaveName(){
                this.editNameText = false;
            },
            editOrganization(){
                this.temp.organization = this.Author.organization;
                this.editOrganizationText = true;
            },
            saveOrganization(){
                this.Author.organization = this.temp.organization;
                this.editOrganizationText = false;
            },
            unsaveOrganization(){
                this.editOrganizationText = false;
            },
            editFields(){
                this.temp.fields = this.Author.fields;
                this.editFieldsText = true;
            },
            saveFields(){
                this.Author.fields = this.temp.fields;
                this.editFieldsText = false;
            },
            unsaveField(){
                this.editFieldsText = false;
            },
            editPassword(){
                this.temp.password = this.Author.password;
                this.editPasswordText = true;
            },
            savePassword(){
                this.Author.password = this.temp.password;
                this.editPasswordText = false;
            },
            unsavePassword(){
                this.editPasswordText = false;
            },
            editEmail(){
                this.temp.email = this.Author.email;
                this.editEmailText = true;
            },
            saveEmail(){
                this.Author.email = this.temp.email;
                this.editEmailText = false;
            },
            unsaveEmail(){
                this.editEmailText = false;
            },
            toPersonalPage(){
                location.href = "/PersonalPage";
            }
        }
    }
</script>

<style scoped>
#Edit-main{
    margin-top: 20px;
    margin-bottom: 20px;
    height:1000px;
}
.Edit-left{
    margin-left: 10%;
    width:15%;
    background-color: white;
}
.Edit-right{
    margin-right: 10%;
    width:65%;
    background-color: white;

}

</style>
