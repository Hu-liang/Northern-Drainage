<template>
  <div class="file-tab" style="height:100%" >
    
    <div>
      <ul class="file-container">
        <li v-for="(item,index) in list" :key="index">
          <span class="circle">·</span>
          <a class="filename" @click="open(item.fileUri)" target="_blank">{{item.originalFileName}}</a>
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
  //防汛预案
  components: {
    Tab,
    TabItem,
    Flexbox,
    FlexboxItem
  },
  data() {
    return {
      list:[]
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    fetch() {
      axios.get("/attachments/getBySourceTableAndSourceId?sourceTable=T_BDC_Emergence_Plans&sourceId=1000").then(res => {
        this.list=res.data
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
