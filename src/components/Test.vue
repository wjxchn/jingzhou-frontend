<template>
  <div>
      <input v-model="testfirst">
      <input v-model="testsecond">
      <button @click="testclick">测试</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            testfirst: '',
            testsecond: ''
        }
    },
    methods:{
        testclick(){
            axios({
                method: 'post',
                url: 'http://localhost:9000/test',
                data: {'testfirst': this.testfirst, 'testsecond': this.testsecond}
            }).then(response=>{
                console.log(response);
            }).catch(error=>{
                console.log(error);
            });
        }
    }
}
</script>

<style>

</style>