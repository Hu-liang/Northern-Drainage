<template>
  <div class="file-tab" style="height:100%" >
    <tab :line-width="3" :custom-bar-width="'90px'" class="tab">
      <tab-item  @on-item-click="changeTab" selected>预警预报</tab-item>
      <tab-item  @on-item-click="changeTab" >短时天气</tab-item>
    </tab>

    <div>
      <ul class="file-container" v-show="this.tab == 0">
        <li v-for="item in weather_warnings" :key="item.fileId">
          <span class="circle">·</span>
          <a class="filename" @click="open(item.fileUri)" target="_blank">{{item.fileName}}</a>
        </li>
      </ul>
      <ul class="file-container" v-show="this.tab == 1">
        <li v-for="item in weather_shorts" :key="item.fileId">
          <span class="circle">·</span>
          <a class="filename" @click="open(item.fileUri)" target="_blank">{{item.fileName}}</a>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
import { Tab, TabItem, Flexbox, FlexboxItem } from "vux";
import { mapState, mapActions } from "vuex";
import axios from "axios";
import moment from "moment";
import Icon from "../components/Icon";
import _ from "lodash";

export default {
  components: {
    Tab,
    TabItem,
    Flexbox,
    FlexboxItem
  },
  data() {
    return {
      msg: "Hello World!",
      weather_warnings: [],
      weather_shorts: [],
      tab:0
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    fetch() {
      axios.get("/weatherfile/getAll").then(res => {
        const data = res.data;
        this.weather_warnings = _.filter(
          data,
          el => el.fileType === "WEATHER_YJYB"
        );
        this.weather_shorts = _.filter(
          data,
          el => el.fileType === "WEATHER_DSTQ"
        );
      });
    },
    changeTab(value) {
      this.tab = value;
    },
    open(url){
      window.location.href = url
    }
  }
};
</script>

<style lang="less" scoped>
.file-tab {
  & .file-container {
    font-size: 14px;
    & > li {
      border-bottom: 1px solid #d8d8d8;
      height: 40px;
      line-height: 40px;
      & .circle{
        margin:0 4px 0 10px;
        font-size: 20px;
        color : #d8d8d8;
      }
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
      color: #589ee7 !important;
    }
    .vux-tab-bar-inner {
      background-color: #589ee7;
    }
    .vux-tab-ink-bar {
      background: #589ee7;
    }
  }
}
</style>
