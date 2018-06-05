
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
      axios.get("/weatherfile/getByFileType?fileType=WEATHER_CGTQ").then(res => {
        this.data = res.data;
      });
    },
  },
};
</script>

<style lang="less">

</style>
