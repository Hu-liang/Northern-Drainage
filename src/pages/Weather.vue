<template>
  <div style="height:100%" class="home-container">
    <img src="../assets/预警预报.png" height="100%" width="100%"/>
    <img src="../assets/短时天气.png" height="100%" width="100%"/>
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
    label: "天气预报",
    iconClass: "tianqiyubao"
  },
  {
    label: "实时雨量",
    iconClass: "shishiyuliang"
  },
  {
    label: "泵站状态",
    iconClass: "bengzhanzhuangtai"
  },
  {
    label: "雷达回波",
    iconClass: "leidahuibo"
  },
  {
    label: "防汛动态",
    iconClass: "fangxundongtai"
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
      grids,
      getBarWidth: function(index) {
        if (index == 0) {
          return "90px";
        }
        return (index + 1) * 22 + "px";
      }
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    fetch() {
      axios.get("/preparation/order/getAll").then(res => {
        this.data = res.data;
      });
    },
    formatDate(date) {
      return moment(date).format("YYYY-MM-DD");
    },
    ellipsisText(text, length) {
      return text.length >= length ? text.substring(0, length) + "..." : text;
    },
    viewDetail(id) {
      console.log(id);
      this.$router.push({
        name: "NoticeDetail",
        params: {
          id
        }
      });
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
      margin-top: 26px;
    }
    & .weui-grid::before {
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
