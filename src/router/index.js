import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
<<<<<<< HEAD
import HomePage from "../components/HomePage";
import InfoManage from "../components/InfoManage";
import Login from "../components/Login";
import Message from "../components/Message";
import PaperShow from "../components/PaperShow";
import PersonalPage from "../components/PersonalPage";
import Register from "../components/Register";
import RePassword from "../components/RePassword";
import SciAchieveShow from "../components/SciAchieveShow";
import SearchResult from "../components/SearchResult";
=======
import Test from '@/components/Test'
>>>>>>> 62776edcfbab4d41e6806de1cbd9e360006a029b

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
<<<<<<< HEAD
      path: '/home',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/infomanage',
      name: 'InfoManage',
      component: InfoManage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/paper/:paperId',
      name: 'PaperShow',
      component: PaperShow
    },
    {
      path: '/patent/:patentId',
      name: 'PatentShow',
      component: PaperShow
    },
    {
      path: '/personalpage',
      name: 'PersonalPage',
      component: PersonalPage
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/repassword',
      name: 'RePassword',
      component: RePassword
    },
    {
      path: '/sciachieve/:sciachieveid',
      name: 'SciAchieveShow',
      component: SciAchieveShow
    },
    {
      path: '/searchresult',
      name: 'SearchResult',
      component: SearchResult
    },
=======
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }    
>>>>>>> 62776edcfbab4d41e6806de1cbd9e360006a029b
  ]
})
