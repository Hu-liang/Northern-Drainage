
<template>
  <div style="height:100%" class="info-container">
    <img class="wave" src="../assets/wave.png" width="100%" />
    <flexbox class="list" wrap="wrap" :align="'center'"> 
      <flexbox-item :span="4"  @click.native="go('publish')">
        <Icon :iconClass="'beiqinling'"></Icon>
        <div class="flex-demo">备勤令</div>
      </flexbox-item>
      <flexbox-item :span="4">
        <Icon :iconClass="'zhongyaotongzhi'" @click.native="go('publishNotice')"></Icon>
        <div class="flex-demo">重要通知</div>
      </flexbox-item>
      <flexbox-item :span="4">
        <Icon :iconClass="'fangxundongtai'" @click.native="go('preventionPublish')">></Icon>
        <div class="flex-demo">防汛动态</div>
      </flexbox-item>
      <flexbox-item :span="4">
        <Icon :iconClass="'shangbao'" @click.native="go('pondingPublish')">></Icon>
        <div class="flex-demo">积滞水上报</div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import {
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
  Panel
} from "vux";
import { mapState, mapActions } from "vuex";
import Icon from "../components/Icon";

export default {
  components: {
    Icon,
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
    Panel
  },
  data() {
    return {
      type: "1",
      list: [
        {
          src: "http://somedomain.somdomain/x.jpg",
          fallbackSrc: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
          title: "关于开展2018年年度防汛大检查 , 关于开展2018年年度防汛大检查 ",
          desc:
            "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
          url: "/component/cell"
        },
        {
          src: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
          title: "关于开展2017年年度防汛大检查 , 关于开展2017年年度防汛大检查 ",
          desc:
            "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
          url: {
            path: "/component/radio",
            replace: false
          },
          meta: {
            source: "来源信息",
            date: "时间",
            other: "其他信息"
          }
        }
      ],
      footer: {
        title: " this.",
        url: "http://vux.li"
      }
    };
  },
  methods: {
    onImgError(item, $event) {
      console.log(item, $event);
    },
    go(path){
      this.$router.push(path)
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
.info-container {
  .list {
    margin-top: -2.4rem;
    text-align: center;
    .vux-flexbox-item {
      font-size: 14px;
      margin-left: 0 !important;
      padding:10px;
      .svg-icon {
        height: 37px;
        width: 37px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
