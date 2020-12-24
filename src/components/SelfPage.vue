<template>
    <div id="PersonalPage-main" class="frow">

        <div class="PersonalPage-main-left fcolumn">
            <div class="frow">
                <b class="rem15 mt10 ml15 sg2">作者文献</b>
                <b class="rem10 mt20 ml15 sg2">总发文量: {{Author.papers}}</b>
                <b class="rem10 mt20 ml15 sg1">总被引次数: {{Author.downloads}}</b>
     
            </div>
            <el-divider></el-divider>
            <font class="rem10 mt5 ml20">最高被引</font>
                <a class="ml20 mt15">
                    [{{Paper.num}}]
                    <el-button style="color:grey" type="text">{{Paper.name}}</el-button>
                    [{{Paper.ident}}]
                    {{Paper.authors}}
                    .{{Paper.press}}.
                    {{Paper.year}}
                    ({{Paper.month}})
                </a>
                <a class="ml20 mt5">
                    [{{Paper.num}}]
                    <el-button style="color:grey" type="text">{{Paper.name}}</el-button>
                    [{{Paper.ident}}]
                    {{Paper.authors}}
                    .{{Paper.press}}.
                    {{Paper.year}}
                    ({{Paper.month}})
                </a>
                <a class="ml20 mt5">
                    [{{Paper.num}}]
                    <el-button style="color:grey" type="text">{{Paper.name}}</el-button>
                    [{{Paper.ident}}]
                    {{Paper.authors}}
                    .{{Paper.press}}.
                    {{Paper.year}}
                    ({{Paper.month}})
                </a>
            <el-divider></el-divider>
            <font class="rem1 mt10 ml20">发表文献</font>
            <a class="ml20 mt15">
                    [{{Paper.num}}]
                    <el-button style="color:grey" type="text">{{Paper.name}}</el-button>
                    [{{Paper.ident}}]
                    {{Paper.authors}}
                    .{{Paper.press}}.
                    {{Paper.year}}
                    ({{Paper.month}})
                </a>
                <a class="ml20 mt5">
                    [{{Paper.num}}]
                    <el-button style="color:grey" type="text">{{Paper.name}}</el-button>
                    [{{Paper.ident}}]
                    {{Paper.authors}}
                    .{{Paper.press}}.
                    {{Paper.year}}
                    ({{Paper.month}})
                </a>
                <a class="ml20 mt5">
                    [{{Paper.num}}]
                    <el-button style="color:grey" type="text">{{Paper.name}}</el-button>
                    [{{Paper.ident}}]
                    {{Paper.authors}}
                    .{{Paper.press}}.
                    {{Paper.year}}
                    ({{Paper.month}})
                </a>
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
        name: "SelfPage",
        data(){
            return{
                Author:{
                    id:1,
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
                Paper:{
                    num:1,
                    name:"论文名",
                    ident:"J",
                    authors:"王晶,贾经冬",
                    press:"这是出版社",
                    year:2004,
                    month:3
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
                if(!this.isPersonalPage){
                    if(this.followed){ 
                        axios({
                            method: 'post',
                            url: '/api/cancelfollow/',
                            data: {'followerid':localStorage.getItem('userid'), 'researcherid':this.id  /*this.$route.query.userid*/ } 
                            })
                            .then(response => {
                                if(response.data.code===200){
                                    alert('取消关注成功')
                                    this.followtext="关注";
                                    this.followicon="el-icon-plus";
                                    this.Author.follows = this.Author.follows + (this.followed ? -1 : 1);
                                    this.followed = !this.followed;
                                }
                                else if(response.data.code===400){
                                    alert('取消关注失败')
                                }
                                else{
                                    alert('错误')
                                    this.$router.go(0)
                                }
                            })
                            .catch(error => {
                                console.log(error)
                                alert('取消关注出现错误')
                                this.$router.go(0)
                        })
                    }
                    else{
                        axios({
                            method: 'post',
                            url: '/api/follow/',
                            data: {'followerid':localStorage.getItem('userid'), 'researcherid':this.id /*this.$route.query.userid*/}
                            })
                            .then(response => {
                                if(response.data.code===200){
                                    alert('关注成功')
                                    this.followtext="已关注";
                                    this.followicon="el-icon-minus";
                                    this.Author.follows = this.Author.follows + (this.followed ? -1 : 1);
                                    this.followed = !this.followed;
                                }
                                else if(response.data.code===400){
                                    alert('关注失败')
                                    this.$router.go(0)
                                }
                                else{
                                    alert('错误')
                                    this.$router.go(0)
                                }
                            })
                            .catch(error => {
                                console.log(error)
                                alert('关注出现错误')
                                this.$router.go(0)
                        })
                    }
                }

                
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
        },

        created: function(){
            this.isPersonalPage = true
            if(!this.isPersonalPage){
                this.$axios({
                    method: 'post',
                    url: '/api/community/isfollow/',
                    data: {'followerid':localStorage.getItem('userid'), 'reseacherid': this.$route.query.userid}
                })
                .then(response => {
                    this.followed = response.code ;
                })
                .catch(error => {
                    console.log(error)
                    alert('是否关注出现错误')
                    this.$router.go(0)
                });
            }
            this.$axios.get('/api/user/showuserinfo',
            {
                params: {
                username: localStorage.getItem("username"),
                }
            }
            ).then((res) => {
            console.log(res.data.data.user.userid)
            this.Author.name=res.data.data.user.username;
            this.Author.password=res.data.data.user.password;
            this.Author.email=res.data.data.user.email;
            this.Author.userid = res.data.data.user.userid;
            }).catch((failResponse) => {
            });
            this.$axios.get('/api/community/follow/num',
            {
                params: {
                userid: localStorage.getItem("userid"),
                }
            }
            ).then((res) => {
            console.log(res.data.data.cnt)
            this.Author.follows=res.data.data.cnt;
            }).catch((failResponse) => {
            });
            this.$axios.get('/api/community/follower/num',
            {
                params: {
                userid: localStorage.getItem("userid"),
                }
            }
            ).then((res) => {
            console.log(res.data.data.cnt)
            this.Author.fans=res.data.data.cnt;
            }).catch((failResponse) => {
            });
        }, 
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