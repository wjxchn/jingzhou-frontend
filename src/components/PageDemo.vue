<template>
    <div id="main">
        <div class="main-left">
        </div>
        <div class="main-right">
            <div class="main-right-top"></div>
            <div class="main-right-mid"></div>
            <div class="main-right-bottom"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PageDemo"
    }
</script>

<style scoped>
#main{
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-top: 20px;
    margin-bottom: 20px;
    height:1000px;
}
.main-left{

    margin-left: 10%;
    width:60%;
    box-shadow: 5px 5px 5px #888888;
    background-color: white;
}
.main-right{
    display: flex;
    flex-direction: column;
    margin-left: 5%;
    width:20%;
    
}
.main-right-top{
    height:200px;
    box-shadow: 5px 5px 5px #888888;
    background-color: white;
}
.main-right-mid{
    margin-top:20px;
    height:80px;
    box-shadow: 5px 5px 5px #888888;
    background-color: white;
}
.main-right-bottom{
    margin-top:20px;
    height:680px;
    box-shadow: 5px 5px 5px #888888;
    background-color: white;
}
</style>
