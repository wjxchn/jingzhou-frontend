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
        <!------------------------------------------------我的关注部分---------------------------------------------------->
        <div class="News fcolumn" v-show="selected_leftbar=='1'">
            <div v-for="item in news" :key="item.messageid" class="msg fcolumn mt10">
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
                    {id:'1',content:"通知中心"},
                ],
                chat:[
                    {id:'1', name:'张三',date:"2019-5-5",avatar_src:require('../assets/avatar.png'),content:["Hello, this is Zhangsan.","nice to meet you.",".",".",".",".",".","."]},
                    {id:'2', name:'李四',date:"2019-5-5",avatar_src:require('../assets/avatar.png'),content:["Hello, this is Lisi.","nice to meet you."]},
                    {id:'3',name:'王五',date:"2019-5-5",avatar_src:require('../assets/avatar.png'),content:["Hello, this is Wangwu.","nice to meet you."]},
                ],
                tempchat:{id:'1', name:'张三',date:"2019-5-5",content:["Hello, this is Zhangsan.","nice to meet you."]},
                news:[]
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
        this.$axios.get('/api/community/receivemessage',
          {
            params: {
              receiver:localStorage.getItem('username'),
            }
          }
        ).then((res) => {
          console.log(res)
          this.news = res.data.data.message
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
