<template>
    <div id="PersonalPage-main" class="frow">

        <div class="PersonalPage-main-left fcolumn">
            <div class="frow">
                <b class="rem15 mt10 ml15 sg2">作者论文</b>
                <b class="rem10 mt20 ml15 sg2">总发文量: {{Author.papers}}</b>
                <b class="rem10 mt20 ml15 sg1">总被引次数: {{Author.downloads}}</b>
     
            </div>
            <el-divider></el-divider>
            <font class="rem1 mt10 ml20">高被引论文</font>
                <a class="ml20 mt15" v-for="(item, i) in CitationPaper">
                    [{{item.num}}]
                    <el-button @click="toPaperPage(item.id)" style="color:grey" type="text">{{item.name}}</el-button>
                </a>
            <el-divider></el-divider>
            <font class="rem1 mt10 ml20">发表论文</font>
                <a class="ml20 mt15" v-for="(item, i) in Paper">
                    [{{item.num}}]
                    <el-button @click="toPaperPage(item.id)" style="color:grey" type="text">{{item.name}}</el-button>
                </a>
            <el-divider></el-divider>
        </div>



        <div class="PersonalPage-main-right fcolumn">
            
            <div class="PersonalPage-main-right-top fcolumn fyc">

                <img :src="Author.avatar_src" style="width:50%" class="mt20">
                <b class="rem15">{{Author.name}}</b>
                <el-divider></el-divider>

                <font class="rem1 mt15"><a href="#">{{Author.organization}}</a></font>

            </div>
            
            <div class="PersonalPage-main-right-mid fcolumn fyc" v-show="isauthuser">
                
                <div class="frow fye" v-show="isauthuser">
                    <a href="#" class="mt10 rem08">关注: {{Author.follows}}</a>
                    <el-divider direction="vertical"></el-divider>
                    <a href="#" class="mt10 rem08">粉丝: {{Author.fans}}</a>
                </div>
                <div class="frow">
                <!--浏览他人主页-->
                    <el-button @click="changeFollowState" class="mt15" type="primary" :icon="followicon" size="mini" v-show="isauthuser">
                        {{followtext}}
                    </el-button>
                    <!--查看自己主页-->
                    <el-button class="mt15" icon="el-icon-edit-outline" size="mini" @click="toEdit" v-show="isPersonalPage">编辑个人资料</el-button>
                </div>
            </div>



            <div class="PersonalPage-main-right-bottom fcolumn fys">
                <b class="rem1 mt10 ml10">研究领域：</b>
                <p class="rem08 mt10 ml10 mr10 mb10" style="line-height:2;">{{Author.fields}}</p>
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
                    id:1,
                    avatar_src:'http://106.14.12.11:8443/pic.jpg',
                    name:"",
                    organization:"",
                    papers:15,
                    downloads:114,
                    references:514,
                    fields:"",
                    fans:1024,
                    follows:15,
                },
                CitationPaper:[{
                    num:1,
                    name:"暂无论文",
                    id:"",
                }],
                Paper:[{
                    num:1,
                    name:"暂无论文",
                    id:"",
                }],
                /*是否是已经关注的状态 */
                followed:false,
                followtext:"关注",
                followicon:"el-icon-plus",
                /*是用户自己的个人主页 */
                isauthuser:false,
                isPersonalPage:false,
                researcherid: 0,
            } 
        },
        
        methods:{
            toPaperPage(id){
                this.$router.push({path: '/paper',query:{paperid:id}})
            },
            changeFollowState(){
                if(this.followed){
                    
                    this.$axios({
                        method: 'get',
                        url: '/api/community/cancelfollow/',
                        params: {followername:localStorage.getItem('username'), researchername: this.$route.query.username /*this.$route.query.userid*/ } 
                        })
                        .then(response => {
                            if(response.data.code===200){
                                alert('取消关注成功')
                                this.followtext="关注";
                                this.followicon="el-icon-plus";
                                this.Author.fans = this.Author.fans + (this.fans ? 1 : -1);
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
                    
                    this.$axios({
                        method: 'get',
                        url: '/api/community/follow/',
                        params: {followername: localStorage.getItem('username'), researchername: this.$route.query.username /*this.$route.query.userid*/}
                        })
                        .then(response => {
                            if(response.data.code===200){
                                console.log(response.data.code);
                                alert('关注成功')
                                this.followtext="取消关注";
                                this.followicon="el-icon-minus";
                                this.Author.fans = this.Author.fans + (this.fans ? -1 : 1);
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
            const name = this.$route.query.username;
            this.Author.name = this.$route.query.username;
            this.isPersonalaPage = false;
            console.log(name);
            this.Author.papers = 0
            this.Author.downloads = 0
            if(!this.isPersonalPage){
                console.log(localStorage.getItem('username'))
                console.log(this.researcherid)
                this.$axios({
                    method: 'get',
                    url: '/api/community/isfollow/',
                    params: {followername:localStorage.getItem('username'), researchername: name}
                })
                .then(response => {
                    console.log(response)
                    if(response.data.code === 404){
                        alert('发生错误')
                        // this.$router.push('/')
                    }
                    else if(response.data.code === 401){
                        this.isauthuser = false
                        this.followed = false
                        this.followtext = '关注'
                    }
                    else if(response.data.code === 402){
                        this.isauthuser = true
                        this.followed = false
                        this.followtext = '关注'
                    }
                    else if(response.data.code === 200){
                        this.isauthuser = true
                        this.followed = true
                        this.followtext = '取消关注'
                    }
                })
                .catch(error => {
                    console.log(error)
                    alert('出现错误')
                    // this.$router.push('/')
                });
            }
            this.$axios({
                method:'get',
                url:'/api/data/author/byname',
                params: {name: this.$route.query.username}
            })
            .then(res => {
                console.log(res)
                this.Author.realname = res.data.name
                if(res.data.orgs===null){
                this.Author.organization="无"
                }
                else if(res.data.orgs.length>0)
                {
                var orgs = res.data.orgs[0]
                for(var j = 1;j<res.data.orgs.length;j++){
                    orgs = orgs +", "+ res.data.orgs[j]
                }
                this.Author.organization=orgs
                }
                else{
                this.Author.organization="无"
                }
                if(res.data.position===null){
                this.Author.introduction="无"
                }
                else{
                this.Author.introduction = res.data.position
                }
            })
            .catch(error=>{
                console.log(error)
            });

            this.$axios({
                method:'get',
                url:'/api/data/paper/authorname/rank',
                params:{'authorname':this.$route.query.username}
             })
             .then(res => {
                console.log(res)
                for(var i = 0;i<res.data.data.paperlist.length;i++){
                    var paper = {}
                    paper.num = i+1
                    paper.name = res.data.data.paperlist[i].title
                    if(res.data.data.paperlist[i].id!==null){
                        paper.id=res.data.data.paperlist[i].id
                    }
                    else{
                        paper.id=res.data.data.paperlist[i].paperid
                    }
                    this.CitationPaper[i] = paper
                } 
            })
            .catch(err=>{
                console.log(err)
            });

            this.$axios({
                method:'get',
                url:'/api/data/paper/realname',
                params:{'realname':this.$route.query.username}
            })
            .then(res => {
                console.log(res)
                for(var i = 0;i<res.data.data.paperlist.length;i++){
                    var paper = {}
                    paper.num = i+1
                    paper.name = res.data.data.paperlist[i].title
                    if(res.data.data.paperlist[i].id!==null){
                        paper.id=res.data.data.paperlist[i].id
                    }
                    else{
                        paper.id=res.data.data.paperlist[i].paperid
                    }
                    this.Author.papers = this.Author.papers + 1
                    this.Author.downloads = this.Author.downloads + res.data.data.paperlist[i].n_citation
                    this.Paper[i] = paper
                } 
            })
            .catch(err=>{
                console.log(err)
            });

            this.$axios.get('/api/community/follow/num',
            {
                params: {
                userrealname: this.$route.query.username,
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
                userrealname: this.$route.query.username,
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
