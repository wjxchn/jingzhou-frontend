<template>
    <div id="Message" class="frow mt10">
        
        <div class="Message-left fcolumn">
            <div style="height:40px" class="frow fxc fyc mb50">
                <font color="white">消息中心</font>
            </div>

            <div v-for="item in leftbar" :key="item.id" :class="[selected_leftbar == item.id || over_leftbar == item.id?'selected_leftbar':'unselected_leftbar']" 
            @mouseover="mouseOver_leftbar(item.id)" @mouseleave="mouseLeave_leftbar" @click="mouseClick_leftbar(item.id)">
                <div style="height:100%" class="ml10 frow fxs fyc">
                    {{item.content}}
                </div>
            </div>
            
        </div>
        <!---------------------------------------------- 我的消息部分------------------------------------------------>
        <div class="Mymessage frow mt50" v-show="selected_leftbar=='1'">
            <div class="chatlist fcolumn"><!--成员列表-->

                <div v-for="item in chat" :key="item.id" :class="[selected_chatlist == item.id || over_chatlist == item.id?'selected_chatlist':'unselected_chatlist']" 
                    @mouseover="mouseOver_chatlist(item.id)" @mouseleave="mouseLeave_chatlist" @click="mouseClick_chatlist(item)">
                    <div style="height:100%" class="fcolumn">
                        <b class="ml10  rem08">{{item.name}}</b>
                        <font class="ml20 mt05 rem08">{{item.date}}</font>
                    </div>
                </div>
            </div>

            <div class="chat"><!--聊天框列表-->
                <div class="top frow fyc">
                    <el-avatar size="small"  :src="tempchat.avatar_src"></el-avatar>
                    <span style="margin-left: 20px;">{{tempchat.name}}</span>
                </div>
                <div class="center">
                    <ul style="padding:10px">

                        <li v-for="item in tempchat.content" :key="item" class="frow fyc mt10">
                            <el-avatar  size="small" :src="tempchat.avatar_src"></el-avatar>
                            <p class="msgcard ml10 rem08">{{item}}</p>
                        </li>
                    </ul>
                </div>
                <div class="footer">
                    <textarea  rows="4"  style="width:100%;border:2px;" placeholder="请在此输入要发送的内容..."></textarea>
                    <button class="sendbtn mr10">发送</button>
                </div>
            </div>
        </div>
        
        <!---------------------------------------------- 系统通知部分部分------------------------------------------------>
        <div class="News fcolumn" v-show="selected_leftbar=='2'">
            <div v-for="item in news" :key="item.id" class="msg fcolumn mt10">
                <b class="ml10  rem08">{{item.title}}</b>
                <font class="ml20 mt05 rem08">{{item.content}}</font>
                <el-divider></el-divider>
            </div>
        </div>
        <!------------------------------------------------我的关注部分---------------------------------------------------->
        <div class="News fcolumn" v-show="selected_leftbar=='3'">
            <div v-for="item in receivefollow" :key="item.id" class="msg fcolumn mt10">
                <b class="ml10  rem08">收到关注通知</b>
                <font class="ml20 mt05 rem08">{{item.content}}</font>
                <el-divider></el-divider>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: "Message",
        data(){
            return{
                
                
                selected_leftbar:'1',
                over_leftbar:'1',
                selected_chatlist:'1',
                over_chatlist:'1',
                leftbar:[
                    {id:'1',content:"我的消息"},
                    {id:'2',content:"系统通知"},
                    {id:'3',content:"收到关注"},
                ],
                chat:[
                    {id:'1', name:'张三',date:"2019-5-5",avatar_src:require('../assets/avatar.png'),content:["Hello, this is Zhangsan.","nice to meet you.",".",".",".",".",".","."]},
                    {id:'2', name:'李四',date:"2019-5-5",avatar_src:require('../assets/avatar.png'),content:["Hello, this is Lisi.","nice to meet you."]},
                    {id:'3',name:'王五',date:"2019-5-5",avatar_src:require('../assets/avatar.png'),content:["Hello, this is Wangwu.","nice to meet you."]},
                ],
                receivefollow:[],
                tempchat:{id:'1', name:'张三',date:"2019-5-5",content:["Hello, this is Zhangsan.","nice to meet you."]},
                news:[
                    {id:'1',title:"这是标题这是标题",content:"小车正穿行在落基山脉蜿蜒曲折的盘山公路上。克里斯朵夫·李维静静地望着窗外，发现每当车子即将行驶到无路的关头，路边都会出现一块交通指示牌‘前方转弯’或‘注意！急转弯’。而拐过每一道弯之后，前方照例又是一片柳暗花明，豁然开朗。山路弯弯，峰回路转，‘前方转弯’几个大字一次次地冲击着他的眼球，也渐渐叩醒了他的心扉：原来，不是路已到了尽头，而是该转弯了。路在脚下，更在心中，心随路转，心路常宽。学会转弯也是人生的智慧，因为挫折往往是转折，危机同时是转机。"}
                    ,{id:'2',title:"这是标题",content:"这是内容"}
                    ,{id:'3',title:"这是标题",content:"这是内容"}
                    ,{id:'4',title:"这是标题",content:"这是内容"}
                    ,{id:'5',title:"这是标题",content:"这是内容"}
                    ,{id:'6',title:"这是标题",content:"这是内容"}
                    ,{id:'7',title:"这是标题",content:"这是内容"}
                    ,{id:'8',title:"这是标题",content:"这是内容"}
                    ,{id:'9',title:"这是标题",content:"这是内容"}
                    ,{id:'10',title:"这是标题",content:"这是内容"}

                ]
            } 
        },
        methods:{
            mouseOver_leftbar(id){
                this.over_leftbar = id;
            },
            mouseLeave_leftbar(){
                this.over_leftbar = '0';
            },
            mouseClick_leftbar(id){
                console.log(id);
                this.selected_leftbar = id;
            },
            mouseOver_chatlist(id){
                this.over_chatlist = id;
            },
            mouseLeave_chatlist(){
                this.over_chatlist = '0';
            },
            mouseClick_chatlist(item){
                this.tempchat = item;
                var id = item.id;
                console.log(id);
                this.selected_chatlist = id;
                
            }
        
            
        },
        mounted(){
            this.tempchat = this.chat[0];
        },
        created:function(){
             this.$axios.post('/api/community/getfollowmessage',
          {
            params: {
              receivername:localStorage.getItem('username'),
            }
          }
        ).then((res) => {
          this.data.receivefollow = res.data.messages;
        }).catch((failResponse) => {
          console.log(failResponse)
        });
        }
    }
</script>

<style scoped>
.unselected_leftbar{
    height: 40px;
    color:#ffffff;
}
.selected_leftbar{
    height: 40px;
    color: #ffd04b;
    background-color: #545c6c;
}
.unselected_chatlist{
    height:40px;
}
.selected_chatlist{
    height: 40px;
    
}
#Message{
    margin-bottom: 20px;
    height:500px;
    
}
.devider{
    height:2px;
    width:100%;
}
.Message-left{
    width:10%;
    margin-left:10%;
    background-color:#545c64;
    /*box-shadow: 5px 5px 5px #888888;*/
}
.Mymessage{
    margin-left: 3%;
    width:65%;
    height:400px;
    background-color: white;
    box-shadow: 5px 5px 5px #888888;
}
.News{
    
    width:65%;
    height:500px;
    background-color:rgba(255,255,255,0.2);
    box-shadow: 5px 5px 5px #888888;
    overflow-y: scroll;
}
.msg{
    margin-left: 2%;
    margin-right: 2%;
   
    /*border-radius: 10px;*/
}
li {
    list-style: none;
}
input {
    border-radius: 5px;
}

.chatlist{
    background-color:#eeeeee;
    width: 15%;
    height: 100%;
}
.chat {
    background-color: #ffffff;
    width: 75%;
    height: 100%;
}
.chat .top {
    height: 10%;
    padding-left: 30px;
}
.chat .center {
    background-color: #edf5f8;
    height: 65%;
    overflow-y: scroll;
}

.msgcard {
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    width: 300px;
}
.chat .footer {
    height: 25%;
    background-color: #FBFCFC;
    text-align: right;
}
.sendbtn {
    height: 20px;
    width: 50px;
    border-radius: 5px;
    background-color: #58D68D;
    color: white;
    font-weight: bold;
}

</style>
