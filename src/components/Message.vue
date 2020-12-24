<template>
    <div id="Message" class="frow mt10">
        
        <div class="Message-left fcolumn">
            <div style="height:40px" class="frow fxc fyc mb50">
                <font>消息中心</font>
            </div>
        </div>

        
        <!---------------------------------------------- 系统通知部分部分------------------------------------------------>
        <div class="News fcolumn" v-show="selected_leftbar=='1'">
            <div v-for="item in news" :key="item.senderusername" class="msg fcolumn mt10">
                <b class="ml10  rem08">{{item.senderusername}}</b>
                <font class="ml20 mt05 rem08">{{item.content}}</font>
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
                news:[
                ]
            } 
        },
        methods:{
        },
        mounted(){
            this.$axios.get('/api/community/receivemessage',
            {
                params: {
                receiver: localStorage.getItem("username"),
                }
            }
            ).then((res) => {
                console.log(res)
                this.news = res.data.data.message
            }).catch((failResponse) => {
            });
        }
    }
</script>

<style scoped>
.unselected_leftbar{
    height: 40px;
}
.selected_leftbar{
    height: 40px;
    background-color:aqua;
}
.unselected_chatlist{
    height:40px;
}
.selected_chatlist{
    height: 40px;
    background-color:aqua;
}
#Message{
    margin-bottom: 20px;
    height:800px;
}
.devider{
    height:2px;
    width:100%;
}
.Message-left{
    width:12%;
    margin-left:10%;
    background-color:rgba(255,255,255,0.5);
    box-shadow: 5px 5px 5px #888888;
}
.Mymessage{
    margin-left: 3%;
    width:65%;
    height:400px;
    background-color: white;
    box-shadow: 5px 5px 5px #888888;
}
.News{
    margin-left: 3%;
    width:65%;
    height:600px;
    background-color:rgba(255,255,255,0.2);
    overflow-y: scroll;
}
.msg{
    padding: 20px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 5px 5px 5px #888888;
}
li {
    list-style: none;
}
input {
    border-radius: 5px;
}

.chatlist{
    background-color:#E5E5E5;
    width: 25%;
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
