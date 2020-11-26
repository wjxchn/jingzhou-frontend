<template>
    <div id="PersonalPage-main" class="frow">

        <div class="PersonalPage-main-left fcolumn">
            <div class="frow">
                <b class="rem15 ml15 sg1">作者文献</b>
                <b class="rem10 mt10 ml10 sg1">总发文量: {{Author.papers}}</b>
                <b class="rem10 mt10 ml10 sg1">下载次数: {{Author.downloads}}</b>
                <b class="rem10 mt10 ml10 sg1">引用次数: {{Author.references}}</b>
            </div>
            <el-button @click="changePersonalPageState">测试用 切换访问状态</el-button>
            <font class="rem1 mt10 ml20">最高被引</font>
            <el-divider></el-divider>
            <el-divider></el-divider>
            <el-divider></el-divider>
            <el-divider></el-divider>
            <font class="rem1 mt10 ml20">最高下载</font>
            <el-divider></el-divider>
            <el-divider></el-divider>
            <el-divider></el-divider>
            <el-divider></el-divider>
            <font class="rem1 mt10 ml20">发在期刊上的文献</font>
            <el-divider></el-divider>
            <el-divider></el-divider>
            <el-divider></el-divider>
            <el-divider></el-divider>
            <font class="rem1 mt10 ml20">曾参考的文献</font>
            <el-divider></el-divider>
            <el-divider></el-divider>
            <el-divider></el-divider>
            <el-divider></el-divider>
        </div>



        <div class="PersonalPage-main-right fcolumn">
            
            <div class="PersonalPage-main-right-top fcolumn fyc">

                <img :src="Author.avatar_src" style="width:50%" class="mt20">
                <el-divider></el-divider>

                <b class="rem15">{{Author.name}}</b>
                
                <font class="rem1 mt15"><a href="#">{{Author.organization}}</a></font>
                <font class="rem08 mt15">{{Author.fields}}</font>

            </div>
            
            <div class="PersonalPage-main-right-mid fcolumn fyc">
                
                <div class="frow fye">
                    <a href="#" class="mt10 rem08">关注: {{Author.follows}}</a>
                    <el-divider direction="vertical"></el-divider>
                    <a href="#" class="mt10 rem08">粉丝: {{Author.fans}}</a>
                    <el-divider direction="vertical"></el-divider>
                    <a href="#" class="mt10 rem08">获赞: {{Author.thumbs}}<br></a>
                </div>
                <div class="frow">
                <!--浏览他人主页-->
                    <el-button @click="changeFollowState" class="mt15" type="primary" :icon="followicon" size="mini" v-show="!isPersonalPage">
                        {{followtext}}
                    </el-button>
                    <el-button class="mt15" icon="el-icon-message" size="mini" v-show="!isPersonalPage" @click="toMessage">私信</el-button>
                    <!--查看自己主页-->
                    <el-button class="mt15" icon="el-icon-edit-outline" size="mini" @click="toEdit" v-show="isPersonalPage">编辑个人资料</el-button>
                </div>
            </div>



            <div class="PersonalPage-main-right-bottom fcolumn fys">
                <b class="rem1 mt10 ml10">个人简介：</b>
                <p class="rem08 mt10 ml10 mr10 mb10" style="line-height:2;">{{Author.introduction}}</p>
            </div>


        </div>
    
    </div>
</template>

<script>
    export default {
        name: "PersonalPage",
        data(){
            return{
                
                Author:{
                    avatar_src:require('../assets/avatar.png'),
                    name:"张三",
                    organization:"北京航空航天大学",
                    papers:15,
                    downloads:114,
                    references:514,
                    fields:"计算机技术",
                    fans:1024,
                    follows:15,
                    thumbs:1987,
                    introduction:"小车正穿行在落基山脉蜿蜒曲折的盘山公路上。克里斯朵夫·李维静静地望着窗外，发现每当车子即将行驶到无路的关头，路边都会出现一块交通指示牌‘前方转弯’或‘注意！急转弯’。而拐过每一道弯之后，前方照例又是一片柳暗花明，豁然开朗。山路弯弯，峰回路转，‘前方转弯’几个大字一次次地冲击着他的眼球，也渐渐叩醒了他的心扉：原来，不是路已到了尽头，而是该转弯了。路在脚下，更在心中，心随路转，心路常宽。学会转弯也是人生的智慧，因为挫折往往是转折，危机同时是转机。"
                },
                /*是否是已经关注的状态 */
                followed:false,
                followtext:"关注",
                followicon:"el-icon-plus",
                /*是用户自己的个人主页 */
                isPersonalPage:true,
            } 
        },
        
        methods:{
            changeFollowState(){
                if(this.followed){
                    this.followtext="关注";
                    this.followicon="el-icon-plus";
                }
                else{
                    this.followtext="已关注";
                    this.followicon="el-icon-minus";

                }
                this.Author.follows = this.Author.follows + (this.followed ? -1 : 1);
                this.followed = !this.followed;
            },
            changePersonalPageState(){
                this.isPersonalPage = !this.isPersonalPage;
            },
            toEdit(){
                location.href = "/Edit";
            },
            toMessage(){
                location.href = "/Message";
            }
        }
    }
    
    
</script>

<style scoped>
#PersonalPage-main{
    margin-top: 20px;
    margin-bottom: 20px;
    height:1000px;
}
.PersonalPage-main-left{

    margin-left: 10%;
    width:60%;
    box-shadow: 5px 5px 5px #888888;
    background-color: white;
}
.PersonalPage-main-right{
    margin-left: 5%;
    width:20%;
    
}
.PersonalPage-main-right-top{
    height:300px;
    box-shadow: 5px 5px 5px #888888;
    background-color: white;
}
.PersonalPage-main-right-mid{
    margin-top:20px;
    height:80px;
    box-shadow: 5px 5px 5px #888888;
    background-color: white;
}
.PersonalPage-main-right-bottom{
    margin-top:20px;
    height:580px;
    box-shadow: 5px 5px 5px #888888;
    background-color: white;
}
</style>
