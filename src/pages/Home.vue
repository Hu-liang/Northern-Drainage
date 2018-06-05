<template>
  <div style="height:100%" class="home-container">
    <!-- <div class="wave"></div> -->
    <img class="wave" src="../assets/wave.png" width="100%" />

    <grid class="grid" :cols="3">
      <grid-item @click.native="redirect(el)" v-for="(el,index) in grids" :label="el.label" :key="index" show-lr-borders="false">
        <!-- <img slot="icon" src="../assets/grid_icon.png"> -->
        <Icon slot="icon" :iconClass="el.iconClass"></Icon>
      </grid-item>
    </grid>

    <!-- <div class="total">
      <span>短时天气</span>
      <span @click="go('weather')"> 
        有新的预警预报
        </span>
    </div> -->

    <tab :line-width="3" :custom-bar-width="getBarWidth" class="tab">
      <tab-item  @on-item-click="changeTab" selected>防汛备勤令</tab-item>
      <tab-item  @on-item-click="changeTab" >通知</tab-item>
    </tab>
    
    <div class="list-container" v-show="this.tab == 0">
      <Flexbox @click.native="viewDetail('NoticeDetail',item.preparationOrderId)" v-for="(item,index) in data" :key="index" class="news-container"  orient="vertical">
        <Flexbox class="desc">
          <FlexboxItem :span="9" class="title">{{ellipsisText(item.preparationTitle,34)}}</FlexboxItem>
          <FlexboxItem :span="3" class="lightgray">{{formatDate(item.crateDate)}}</FlexboxItem>
        </Flexbox>
        <FlexboxItem class="content lightgray">{{ellipsisText(item.preparationContent,77)}}</FlexboxItem>
      </Flexbox>
    </div>

    <div class="list-container" v-show="this.tab == 1">
      <Flexbox @click.native="viewDetail('PublishNoticeDetail',item.preparationNoticeId)" v-for="(item,index) in data2" :key="index" class="news-container"  orient="vertical">
        <Flexbox class="desc">
          <FlexboxItem :span="9" class="title">{{ellipsisText(item.preparationTitle,34)}}</FlexboxItem>
          <FlexboxItem :span="3" class="lightgray">{{formatDate(item.crateDate)}}</FlexboxItem>
        </Flexbox>
        <FlexboxItem class="content lightgray">{{ellipsisText(item.preparationContent,77)}}</FlexboxItem>
      </Flexbox>
    </div>

    <tabbar class="tabbar" v-show="!isTabbarDemo" slot="bottom">
      <tabbar-item :link="{path:'/'}" :selected="route.path === '/'">
        <Icon slot="icon" :iconClass="'lanse'"></Icon>
        <span slot="label">汛情在线</span>
      </tabbar-item>
      <tabbar-item :link="{path:'/info'}" :selected="route.path ==='info'">
        <!-- <Icon slot="icon" :iconClass="'fangxunyuan-lanse'"></Icon> -->
        <Icon slot="icon" :iconClass="'fangxunyuan-huise'"></Icon>
        <span slot="label">
          <span v-if="componentName" >{{componentName}}</span>
          <span v-else>信息发布</span>
        </span>
      </tabbar-item>
      <tabbar-item :link="{path:'/PreventionPlan'}" :selected="route.path ==='PreventionPlan'">
        <!-- <Icon slot="icon" :iconClass="'xinxifabu-lanse'"></Icon> -->
        <Icon slot="icon" :iconClass="'xinxifabu-huise'"></Icon>
        <span slot="label">
          <span v-if="componentName" >{{componentName}}</span>
          <span v-else>防汛预案</span>
        </span>
      </tabbar-item>
    </tabbar>
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
  Marquee,
  MarqueeItem
} from "vux";
import { mapState, mapActions } from "vuex";
import axios from "axios";
import moment from "moment";
import Icon from "../components/Icon";

const grids = [
  {
    label: "预警预报",
    iconClass: "jingbao",
    path:'File'
  },
  {
    label: "天气预报",
    iconClass: "tianqiyubao",
    // url: "http://bjfx.gov.cn/bjfxwx/html/weather/weather_qxnew.html"
    // url: "https://www.ufangor.com:8443/weather/cgtq/dq17_201805081626北京天气预报(1).txt"
    url: "https://www.ufangor.com:8443/weather/cgtq/dq17_201805081626北京天气预报(1).txt"
    // path:'weatherForcast'
  },
  {
    label: "实时雨量",
    iconClass: "shishiyuliang",
    url: "http://124.127.244.201/wap/"
  },
  {
    label: "泵站状态",
    iconClass: "bengzhanzhuangtai",
    url: "http://124.127.244.201/wap/"
  },
  {
    label: "雷达回波",
    iconClass: "leidahuibo",
    // url: "http://bjfx.gov.cn/bjfxwx/html/weather/weather_ld.html"
    path:'Radar'
  },
  {
    label: "防汛动态",
    iconClass: "fangxundongtai",
    path:"PreventionList"
  }
];

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
    Icon,
    Marquee,
    MarqueeItem
  },
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: "Hello World!",
      data: [],
      grids:[],
      getBarWidth: function(index) {
        if (index == 0) {
          return "90px";
        }
        return (index + 1) * 22 + "px";
      },
      data2:[],
      tab:0,
      fileUri:null
    };
  },
  created() {
    this.fetch();
    this.fetch2();
    this.fetchFileList();
  },
  methods: {
    fetchFileList(){
      axios.get("/weatherfile/getByFileType?fileType=WEATHER_CGTQ").then(res => {
        // this.data3 = res.data;
        const first = _.chain(res.data).filter(item=>item.fileName.indexOf('txt')!=-1).head().value()
        var fileUri = first.fileUri
        var arr = grids ; 
        arr[1].url = fileUri
        this.grids = arr
      });
    },
    fetch() {
      axios.get("/preparation/order/getAll").then(res => {
        this.data = res.data;
      });
    },
    changeTab(value){
      this.tab = value
    },
    fetch2() {
      axios.get("/preparation/notice/getAll").then(res => {
        this.data2 = res.data;
      });
    },
    formatDate(date) {
      return moment(date).format("YYYY-MM-DD");
    },
    ellipsisText(text, length) {
      return text.length >= length ? text.substring(0, length) + "..." : text;
    },
    viewDetail(name,id) {
      console.log(id);
      this.$router.push({
        name: name,
        params: {
          id
        }
      });
    },
    go(path) {
      this.$router.push(path);
    },
    redirect(el) {
      if(el.path){
        this.$router.push({
          name:el.path
        })
        return false
      }
      if (!el.url) return false;
      window.location.href = el.url;
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
.home-container {
  & .total {
    text-indent: 12px;
    font-size: 14px;
    padding: 8px 0;
    &::before {
      content: "|";
      padding: 0 4px;
      color: crimson;
      font-weight: 600;
    }
    & .vux-marquee {
      width: 75%;
      display: inline-block;
    }
  }

  .grid {
    margin-top: -3rem;
    &::before {
      border-top: 0;
    }
    & .weui-grid__label {
      color: rgba(0, 0, 0, 0.7);
      // padding-top:8px;
      text-overflow: unset;
      // margin-top: 10px;
      margin-top: 26px;
    }
    & .weui-grid::before {
      border: 0;
    }
    & .weui-grid:nth-child(1):after {
      border: 0;
    }
    & .weui-grid:nth-child(2):after {
      border: 0;
    }
    & .weui-grid:nth-child(3):after {
      border: 0;
    }
  }
  .tab {
    .vux-tab {
      background: rgba(211, 211, 211, 0.1);
    }
    .vux-tab-item {
      color: black;
    }
    .vux-tab-item.vux-tab-selected {
      color: #589ee7;
    }
    .vux-tab-bar-inner {
      background-color: #589ee7;
    }
    .vux-tab-ink-bar {
      background: #589ee7;
    }
  }
  .tabbar {
    .weui-bar__item_on {
      .weui-tabbar__label {
        color: #589ee7;
      }
    }
  }
  .vux-demo {
    text-align: center;
  }
  .logo {
    width: 100px;
    height: 100px;
  }
  .news-container {
    padding: 10px 15px;
    background: white;
    border-bottom: 1px solid #d9d9d9;

    .title {
      color: #000;
      width: 216px;
      overflow: hidden;
      // white-space: nowrap;
      // text-overflow: ellipsis;
      // font-size: 0.45rem;
      font-size: 14px;
    }
    & > .content {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      font-size: 0.36rem;
    }
    & .lightgray {
      color: rgba(0, 0, 0, 0.5);
    }
    & > .desc {
      font-size: 0.4rem;
      display: flex;
      justify-content: space-between;
    }
    .weui-grids .weui-grid__label {
      font-size: 0.35rem;
    }
  }
  .list-container {
    margin-bottom: 1.4rem;
  }
}
</style>
