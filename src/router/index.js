import Vue from 'vue'
import Router from 'vue-router'
import PageDemo from '../components/PageDemo';
import HelloWorld from '@/components/HelloWorld';
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
import Edit from "../components/Edit";
import Test from '@/components/Test'


export default new Router({
  mode: 'history',
  routes: [
 //   {
 //     path: '/',
 //     component: {
 //       header: Headers
  //    }
  //  },
     {
       path: '/PageDemo',
       name: 'PageDemo',
       component: PageDemo
     },
    {
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
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
Vue.use(Router)
