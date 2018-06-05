import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Info from '@/pages/Info'
import Notice from '@/pages/Notice'
import NoticeDetail from '@/pages/NoticeDetail'
import RainFall from '@/pages/RainFall'
import Video from '@/pages/Video'
import Publish from '@/pages/Publish'
import PublishNotice from '@/pages/PublishNotice'
import PublishNoticeDetail from '@/pages/PublishNoticeDetail'
import Weather from '@/pages/Weather'
import FileTab from '@/pages/FileTab'
import Radar from '@/pages/Radar'
import WeatherForcast from '@/pages/WeatherForcast'
import PondingPublish from '@/pages/PondingPublish'
import PondingList from '@/pages/PondingList'
import PreventionList from '@/pages/PreventionList'
import PreventionPublish from '@/pages/PreventionPublish'
import PreventionPlan from '@/pages/PreventionPlan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '汛情在线',
      component: Home
    },
    {
      path: '/info',
      name: '信息发布',
      component: Info
    },
    {
      path: '/publish',
      name: '备勤令',
      component: Publish
    },
    {
      path: '/notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/noticeDetail/:id',
      name: 'NoticeDetail',
      component: NoticeDetail
    },
    {
      path: '/rainFall',
      name: 'RainFall',
      component: RainFall
    },
    {
      path: '/video',
      name: 'Video',
      component: Video
    },
    {
      path: '/weather',
      name: 'Weather',
      component: Weather
    },
    {
      path: '/publishNotice',
      name: 'PublishNotice',
      component: PublishNotice
    },
    {
      path: '/publishNoticeDetail/:id',
      name: 'PublishNoticeDetail',
      component: PublishNoticeDetail
    },
    {
      path: '/file',
      name: 'File',
      component: FileTab
    },
    {
      path: '/Radar',
      name: 'Radar',
      component: Radar
    },
    {
      path: '/weatherForcast',
      name: 'weatherForcast',
      component: WeatherForcast
    },
    {
      path: '/pondingPublish',
      name: 'PondingPublish',
      component: PondingPublish
    },
    {
      path: '/pondingList',
      name: 'PondingList',
      component: PondingList
    },
    {
      path: '/preventionList',
      name: 'PreventionList',
      component: PreventionList
    },
    {
      path: '/preventionPublish',
      name: 'PreventionPublish',
      component: PreventionPublish
    },
    {
      path: '/preventionPlan',
      name: 'PreventionPlan',
      component: PreventionPlan
    }
  ]
})
