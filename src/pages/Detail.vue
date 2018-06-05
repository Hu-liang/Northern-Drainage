
<template>
  <div style="height:100%">
    <!-- <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> </h1>
    </div> -->
    <!-- <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
    </group> -->

    <tab>
      <tab-item >重要通知</tab-item>
      <tab-item >响应状态</tab-item>
    </tab>

    <NoticeItem></NoticeItem>
    <NoticeItem></NoticeItem>
    <NoticeItem></NoticeItem>
    <NoticeItem></NoticeItem>
    <NoticeItem></NoticeItem>
    
  </div>
</template>

<script>
import { Group, Cell, Tabbar, 
         TabbarItem, Grid, GridItem,Tab, 
         TabItem,Flexbox, FlexboxItem,
         Panel 
        } from "vux";
import { mapState, mapActions } from "vuex";
import NoticeItem from '../components/NoticeItem'

export default {
  components: {
    Group,
    Cell,
    Tabbar,
    TabbarItem,
    Grid,
    GridItem,
    Tab, 
    TabItem,
    Flexbox,
    FlexboxItem,
    Cell,
    Panel,
    NoticeItem
  },
  data() {
    return {
      type: '1',
      list: [{
        src: 'http://somedomain.somdomain/x.jpg',
        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '关于开展2018年年度防汛大检查 , 关于开展2018年年度防汛大检查 ',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '关于开展2017年年度防汛大检查 , 关于开展2017年年度防汛大检查 ',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '来源信息',
          date: '时间',
          other: '其他信息'
        }
      }],
      footer: {
        title:' this.',
        url: 'http://vux.li'
      }
    };
  },
  methods: {
    onImgError (item, $event) {
      console.log(item, $event)
    }
  },
  computed: {
    ...mapState({
      route: state => state.route,
      path: state => state.route.path,
      deviceready: state => state.app.deviceready,
      demoTop: state => state.vux.demoScrollTop,
      isLoading: state => state.vux.isLoading,
      direction: state => state.vux.direction
    }),
    isTabbarDemo() {
      return /tabbar/.test(this.route.path);
    },
    componentName() {
      if (this.route.path) {
        const parts = this.route.path.split("/");
        if (/component/.test(this.route.path) && parts[2]) return parts[2];
      }
    }
  }
};
</script>

<style lang="less">

</style>
