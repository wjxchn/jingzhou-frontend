import Vue from 'vue'
import Router from 'vue-router'
import PageDemo from '../components/PageDemo';
import HelloWorld from '@/components/HelloWorld';
import HomePage from "../components/HomePage";
import Login from "../components/Login";
import Message from "../components/Message";
// import PaperShow from "../components/PaperShow";
import PersonalPage from "../components/PersonalPage";
import SelfPage from "../components/SelfPage";
import Register from "../components/Register";
import RePassword from "../components/RePassword";
// import SciAchieveShow from "../components/SciAchieveShow";
import SearchResult from "../components/SearchResult";
import Edit from "../components/Edit";
import Test from '@/components/Test';
import Paper from '../components/Paper';
import Patent from '../components/Patent';
import achievement from '../components/achievement';
import Authentication from '../components/Authentication';
import NewHomePage from '../components/NewHomePage'
import Search from '../components/Search'
import UserPhoto from '../components/UserPhoto'
import SearchPatent from '../components/SearchPatent'
import SearchAchievement from '../components/SearchAchievement'
import SearchScientists from '../components/SearchScientists'


export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/SearchScientists',
      name:'SearchScientists',
      component:SearchScientists
    },
    {
      path:'/SearchAchievement',
      name:'SearchAchievement',
      component:SearchAchievement
    },
    {
      path:'/SearchPatent',
      name:'SearchPatent',
      component:SearchPatent
    },
    {
      path:'/Search',
      name:'Search',
      component: Search
    },
    {
      path: '/NewHomePage',
      name:'NewHomePage',
      component: NewHomePage
    },
    {
      path: '/',
      name: 'NewHomePage',
      component: NewHomePage
    },
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
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    // {
    //   path: '/paper/:paperId',
    //   name: 'PaperShow',
    //   component: PaperShow
    // },
    // {
    //   path: '/patent/:patentId',
    //   name: 'PatentShow',
    //   component: PaperShow
    // },
    {
      path: '/personalpage',
      name: 'PersonalPage',
      component: PersonalPage
    },
    {
      path: '/selfpage',
      name: 'SelfPage',
      component: SelfPage
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
    // {
    //   path: '/sciachieve/:sciachieveid',
    //   name: 'SciAchieveShow',
    //   component: SciAchieveShow
    // },
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
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/paper',
      name: 'Paper',
      component: Paper
    },
    {
      path: '/patent',
      name: 'Patent',
      component: Patent
    },
    {
      path: '/achievement',
      name: 'achievement',
      component: achievement
    },
    {
      path: '/authentication',
      name: 'Authentication',
      component: Authentication
    },
    {
      path: '/userphoto',
      name: 'UserPhoto',
      component: UserPhoto
    }    
  ]
})
Vue.use(Router)
